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
export const LabelPairedLightUserTieCircleDollarBoldIcon = (
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
        d='M0 19.063c0-2.5 1.781-4.563 4.156-4.97a.46.46 0 0 1 .5.25c.469.907.907 1.845 1.375 2.75.157-.624.313-1.25.5-1.843a41.587 41.587 0 0 1-.593-.969c-.188-.344.03-.781.437-.781H7.594c.406 0 .625.438.437.781-.187.313-.375.625-.594.969.188.594.344 1.219.5 1.844.47-.907.907-1.844 1.375-2.75a.46.46 0 0 1 .5-.25c.126 0 .22.031.344.062-.125.438-.156.906-.156 1.344 0 .281 0 .531.031.781-.375.75-.75 1.5-1.125 2.219h1.969a5.07 5.07 0 0 0 1.438 1.5H.937A.92.92 0 0 1 0 19.062Zm1.531-.563h3.532c-.47-.906-.907-1.813-1.375-2.719-1.126.469-1.97 1.5-2.157 2.719ZM3 8c0-1.406.75-2.75 2-3.438 1.219-.718 2.75-.718 4 0 1.219.688 2 2.032 2 3.438 0 1.438-.781 2.75-2 3.469-1.25.719-2.781.719-4 0A3.977 3.977 0 0 1 3 8Zm1.813-1.25c-.438.781-.438 1.75 0 2.5A2.531 2.531 0 0 0 7 10.5a2.48 2.48 0 0 0 2.156-1.25c.438-.75.438-1.719 0-2.5A2.548 2.548 0 0 0 7 5.5c-.906 0-1.719.5-2.188 1.25ZM11 15.5c0-2.469 2-4.5 4.5-4.5 2.469 0 4.5 2.031 4.5 4.5 0 2.5-2.031 4.5-4.5 4.5-2.5 0-4.5-2-4.5-4.5Zm2.75-.844c.031.5.344.813.656.969.281.156.625.25.906.313 0 .03.032.03.063.03.313.095.563.157.719.25.125.095.156.126.156.188 0 .063-.031.125-.031.125l-.125.125a1.69 1.69 0 0 1-.594.094c-.281 0-.563-.094-.938-.219-.062 0-.124-.031-.187-.031-.25-.094-.531.063-.625.313-.063.28.063.562.344.625.031.03.094.03.156.062.219.063.469.156.75.188v.375c0 .28.219.5.5.5.25 0 .5-.22.5-.5v-.344c.188-.032.375-.094.563-.188.375-.218.687-.593.687-1.156-.031-.5-.344-.813-.656-1-.282-.188-.657-.281-.938-.375h-.031c-.313-.094-.563-.156-.75-.25-.125-.094-.125-.125-.125-.156V14.5a.856.856 0 0 1 .156-.125c.156-.063.375-.125.563-.125.281 0 .531.063.844.125.25.094.53-.094.593-.344.063-.281-.093-.562-.375-.625-.156-.031-.343-.062-.531-.094V13c0-.281-.25-.5-.5-.5-.281 0-.5.219-.5.5v.313a1.494 1.494 0 0 0-.563.187c-.374.188-.718.563-.687 1.156Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLightUserTieCircleDollarBoldIcon);
export default ForwardRef;
