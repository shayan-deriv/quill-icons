import type { Config } from 'svgo';

/**
 * Shared SVGO stack for Figma → React pipelines: multipass minification,
 * deterministic short id prefixes (smaller than random 32-byte hex), and
 * path/numeric precision tuned for icons vs illustrations.
 */
export function createBaseSvgoConfig(options: {
  idPrefix: string;
  floatPrecision: number;
}): Config {
  return {
    multipass: true,
    plugins: [
      {
        name: 'preset-default',
        params: {
          overrides: {
            removeViewBox: false,
            convertPathData: { floatPrecision: options.floatPrecision },
            cleanupNumericValues: { floatPrecision: options.floatPrecision },
          },
        },
      },
      {
        name: 'prefixIds',
        params: { prefix: options.idPrefix, delim: '' },
      },
      'removeComments',
      'removeUselessStrokeAndFill',
      'removeUselessDefs',
    ],
  };
}
