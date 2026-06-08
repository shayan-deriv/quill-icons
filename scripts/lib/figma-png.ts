import pLimit from 'p-limit';
import pRetry from 'p-retry';
import {
  getClient,
  getComponentIdsFromPages,
  getFile,
  getPagesWithComponents,
} from '@figma-export/core/dist/lib/figma.js';

const chunk = <T>(array: T[], perChunk: number): T[][] =>
  array.reduce<T[][]>((all, one, i) => {
    const ch = Math.floor(i / perChunk);
    all[ch] = [...(all[ch] ?? []), one];
    return all;
  }, []);

const fromEntries = (iterable: [string, Buffer][]): Record<string, Buffer> =>
  Object.fromEntries(iterable);

const fetchPngBuffer = async (url: string): Promise<Buffer> => {
  if (!/^https?:\/\//.test(url)) {
    throw new TypeError('Only absolute URLs are supported');
  }
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`while fetching png "${url}": ${response.status} ${response.statusText}`);
  }
  return Buffer.from(await response.arrayBuffer());
};

const filePngUrls = async (
  client: ReturnType<typeof getClient>,
  fileId: string,
  ids: string[],
  version: string | undefined,
  scale: number,
) => {
  const response = await client
    .getImages({ file_key: fileId }, { ids: ids.join(','), format: 'png', scale, version })
    .catch((error: Error) => {
      throw new Error(
        `while fetching fileImages: ${'cause' in error ? (error as Error & { cause?: string }).cause : error.message}`,
      );
    });

  if (client.hasError(response)) {
    throw new Error("'images' are missing.");
  }

  return response.images as Record<string, string | null>;
};

export const getPngBuffers = async (
  client: ReturnType<typeof getClient>,
  fileId: string,
  ids: string[],
  version: string | undefined,
  scale: number,
  concurrency = 30,
): Promise<Record<string, Buffer>> => {
  const idGroups = chunk(ids, 200);
  const limit = pLimit(concurrency);

  const urlGroups = await Promise.all(
    idGroups.map((groupIds) => limit(() => filePngUrls(client, fileId, groupIds, version, scale))),
  );
  const images = Object.assign({}, ...urlGroups);

  let index = 0;
  const pngPromises = Object.entries(images)
    .filter((entry): entry is [string, string] => typeof entry[1] === 'string')
    .map(([id, url]) =>
      limit(async () => {
        const png = await pRetry(() => fetchPngBuffer(url), { retries: 3 });
        index += 1;
        return [id, png] as [string, Buffer];
      }),
    );

  const pngs = await Promise.all(pngPromises);
  return fromEntries(pngs);
};

export type IllustrationPngPage = Awaited<ReturnType<typeof exportIllustrationPngs>>[number];

export const exportIllustrationPngs = async ({
  fileId,
  version,
  onlyFromPages = [],
  filterComponent = () => true,
  includeTypes = ['COMPONENT'],
  scale,
  concurrency = 30,
  log = (msg: string) => console.log(msg),
}: {
  fileId: string;
  version?: string;
  onlyFromPages?: string[];
  filterComponent?: (component: { name: string }) => boolean;
  includeTypes?: string[];
  scale: number;
  concurrency?: number;
  log?: (message: string) => void;
}) => {
  const token = process.env.FIGMA_TOKEN || '';
  const client = getClient(token, log);

  log('fetching document');
  const file = await getFile(client, { fileId, onlyFromPages, version });
  if (client.hasError(file)) {
    throw new Error(`while fetching file: ${client.extractErrorMessage(file)}`);
  }

  const pages = getPagesWithComponents(file, {
    filterComponent,
    includeTypes: includeTypes as ('COMPONENT' | 'INSTANCE')[],
  });

  log('preparing components');
  const componentIds = getComponentIdsFromPages(pages);
  if (componentIds.length === 0) {
    throw new Error('No components found');
  }

  const pngs = await getPngBuffers(client, fileId, componentIds, version, scale, concurrency);

  let index = 0;
  const pagesWithPng = pages.map((page) => ({
    ...page,
    components: page.components.map((component) => {
      index += 1;
      log(`fetching components ${index}/${componentIds.length}`);
      return {
        ...component,
        png: pngs[component.id] ?? Buffer.alloc(0),
      };
    }),
  }));

  log(`exported ${componentIds.length} illustration pngs from ${fileId}`);
  return pagesWithPng;
};
