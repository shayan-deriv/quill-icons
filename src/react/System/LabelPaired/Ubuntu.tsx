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
export const LabelPairedUbuntuIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 16 24'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M8 4.25c1.438.02 2.74.375 3.906 1.063a7.737 7.737 0 0 1 2.781 2.78c.688 1.167 1.042 2.47 1.063 3.907-.02 1.438-.375 2.74-1.063 3.906a7.737 7.737 0 0 1-2.78 2.781C10.74 19.375 9.436 19.73 8 19.75c-1.438-.02-2.74-.375-3.906-1.063a7.737 7.737 0 0 1-2.782-2.78C.625 14.74.272 13.436.25 12c.02-1.438.375-2.74 1.063-3.906a7.737 7.737 0 0 1 2.78-2.781C5.26 4.625 6.564 4.27 8 4.25Zm1.656 2.906c-.146.25-.177.5-.094.75.063.25.209.459.438.625.25.125.51.156.781.094a1.1 1.1 0 0 0 .594-.469c.125-.25.156-.5.094-.75A.947.947 0 0 0 11 6.781c-.25-.125-.5-.156-.75-.093-.25.062-.448.218-.594.468ZM2.97 13a.974.974 0 0 0 .719-.281.974.974 0 0 0 .28-.719.974.974 0 0 0-.28-.719.974.974 0 0 0-.72-.281c-.27 0-.5.094-.687.281A.974.974 0 0 0 2 12c0 .292.094.531.281.719A.936.936 0 0 0 2.97 13Zm.906.094c.292 1.041.875 1.864 1.75 2.469l.75-1.25c-.813-.605-1.219-1.376-1.219-2.313 0-.938.407-1.708 1.219-2.313l-.75-1.25c-.875.605-1.458 1.428-1.75 2.47.333.312.5.676.5 1.093 0 .438-.167.802-.5 1.094ZM11 17.219a.947.947 0 0 0 .469-.625c.062-.25.031-.5-.094-.75a1.099 1.099 0 0 0-.594-.469 1.13 1.13 0 0 0-.781.094.97.97 0 0 0-.438.625c-.083.25-.052.5.094.75s.344.406.594.468c.25.063.5.032.75-.093Zm.031-2.188c.73-.729 1.146-1.646 1.25-2.75l-1.437-.031c-.146 1-.615 1.74-1.406 2.219-.813.458-1.688.5-2.626.125l-.718 1.25c.75.333 1.406.479 1.968.437.563-.041.917-.093 1.063-.156.083-.458.313-.792.688-1 .374-.208.78-.24 1.218-.094Zm-.187-3.281 1.437-.031c-.104-1.104-.531-2.021-1.281-2.75a1.394 1.394 0 0 1-1.188-.094c-.374-.208-.604-.542-.687-1h-.031c-.125-.063-.469-.115-1.031-.156-.563-.042-1.22.104-1.97.437l.72 1.281c.937-.395 1.812-.364 2.625.094.791.48 1.26 1.219 1.406 2.219Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedUbuntuIcon);
export default ForwardRef;
