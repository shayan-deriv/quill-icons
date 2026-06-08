import dotenv from 'dotenv';
import { exportIllustrationPngs } from './lib/figma-png';
import { createIllustrationPngOutputter } from './outputters/output-illustrations-png';
import {
  ILLUSTRATION_PNG_SCALE,
  IllustrationPngOutputConfig,
} from './png-configs/illustrations';

dotenv.config();

const fileId = '4N66of3WfbhmHWkBiGvlT9';

const run = async () => {
  const pages = await exportIllustrationPngs({
    fileId,
    scale: ILLUSTRATION_PNG_SCALE,
    log: (message) => console.log(message),
  });

  const outputter = createIllustrationPngOutputter({
    pngOutput: IllustrationPngOutputConfig.pngOutput,
    reactOutput: IllustrationPngOutputConfig.reactOutput,
    getDirname: IllustrationPngOutputConfig.getDirname,
  });

  await outputter(pages);
};

run().catch((error: unknown) => {
  console.error(error);
  process.exit(1);
});
