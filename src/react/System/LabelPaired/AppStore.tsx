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
export const LabelPairedAppStoreIcon = (
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
        d='m8 7.781-.281-.5c-.23-.312-.521-.385-.875-.218-.313.229-.386.52-.219.875l.625 1.125-2.063 3.593H3.563c-.395.042-.614.26-.656.656.042.376.26.584.656.626h5.782c.146-.292.146-.573 0-.844s-.386-.417-.719-.438H6.656l2.719-4.719c.167-.354.094-.645-.219-.875-.354-.166-.646-.093-.875.22l-.281.5Zm-2.469 6.813c-.333-.396-.75-.521-1.25-.375l-.468.812c-.167.354-.084.636.25.844.354.167.645.094.875-.219l.593-1.062Zm5.282-1.938a4.255 4.255 0 0 1-.157-.281 223.178 223.178 0 0 0-1.719-2.969c-.208.167-.364.448-.468.844-.084.417 0 .854.25 1.313.25.437.552.968.906 1.593.417.709.896 1.542 1.438 2.5.229.313.52.386.874.219.313-.208.396-.5.25-.875l-.624-1.063h.906c.396-.041.614-.25.656-.624-.042-.396-.26-.615-.656-.657h-1.656ZM8 4.25c1.438.02 2.74.375 3.906 1.063a7.737 7.737 0 0 1 2.781 2.78c.688 1.167 1.042 2.47 1.063 3.907-.02 1.438-.375 2.74-1.063 3.906a7.737 7.737 0 0 1-2.78 2.781C10.74 19.375 9.436 19.73 8 19.75c-1.438-.02-2.74-.375-3.906-1.063a7.737 7.737 0 0 1-2.782-2.78C.625 14.74.272 13.436.25 12c.02-1.438.375-2.74 1.063-3.906a7.737 7.737 0 0 1 2.78-2.781C5.26 4.625 6.564 4.27 8 4.25ZM14.75 12c-.042-1.917-.698-3.51-1.969-4.781C11.49 5.948 9.896 5.292 8 5.25c-1.917.042-3.51.698-4.781 1.969C1.948 8.51 1.292 10.104 1.25 12c.042 1.917.698 3.51 1.969 4.781C4.51 18.052 6.104 18.708 8 18.75c1.917-.042 3.51-.698 4.781-1.969 1.271-1.291 1.927-2.885 1.969-4.781Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedAppStoreIcon);
export default ForwardRef;
