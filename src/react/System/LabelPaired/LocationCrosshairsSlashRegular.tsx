import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, SvgSize } from 'types';
const sizes: SvgSize = {
  sm: {
    width: 24,
    height: 24,
  },
  md: {
    width: 32,
    height: 32,
  },
  lg: {
    width: 48,
    height: 48,
  },
  xl: {
    width: 64,
    height: 64,
  },
  '2xl': {
    width: 96,
    height: 96,
  },
};
export const LabelPairedLocationCrosshairsSlashRegularIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 20 24'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M12.375 16.406h-.031l.844.657c-.792.52-1.688.822-2.688.906V19.5c-.02.313-.188.48-.5.5-.313-.02-.48-.188-.5-.5v-1.531c-1.48-.146-2.73-.719-3.75-1.719-1-1.02-1.573-2.27-1.719-3.75H2.5c-.313-.02-.48-.188-.5-.5.02-.313.188-.48.5-.5h1.531c.042-.5.136-.98.282-1.438l.843.657A5.262 5.262 0 0 0 5 12c.042 1.417.531 2.594 1.469 3.531C7.406 16.47 8.583 16.958 10 17c.854 0 1.646-.198 2.375-.594ZM9.5 6.031V4.5c.02-.313.188-.48.5-.5.313.02.48.188.5.5v1.531c1.48.146 2.73.719 3.75 1.719 1 1.02 1.573 2.27 1.719 3.75H17.5c.313.02.48.188.5.5-.02.313-.188.48-.5.5h-1.531c-.042.5-.136.98-.281 1.438l-.844-.657c.104-.416.156-.844.156-1.281-.042-1.417-.531-2.594-1.469-3.531C12.594 7.53 11.417 7.042 10 7c-.854 0-1.635.198-2.344.594l-.843-.657c.791-.52 1.687-.822 2.687-.906ZM10 15c-.813-.02-1.5-.292-2.063-.813-.562-.52-.875-1.187-.937-2l1.75 1.376c.02 0 .031.01.031.03l1.75 1.376c-.187.02-.364.031-.531.031Zm-.5-5.969c.167-.02.333-.031.5-.031.813.02 1.5.292 2.063.813.562.52.874 1.187.937 2l-1.75-1.376c-.02 0-.031-.01-.031-.03L9.5 9.03ZM.812 4.094l19 15.031c.23.208.26.438.094.688-.229.229-.468.26-.718.093l-19-15c-.23-.229-.26-.468-.094-.718.229-.209.469-.24.719-.094Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLocationCrosshairsSlashRegularIcon);
export default ForwardRef;
