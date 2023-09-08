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
export const LabelPairedCircleDollarBoldIcon = (
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
        d='M14.5 12c0-1.188-.292-2.27-.875-3.25-.563-.98-1.354-1.77-2.375-2.375A6.45 6.45 0 0 0 8 5.5a6.45 6.45 0 0 0-3.25.875c-1.02.604-1.813 1.396-2.375 2.375-.583.98-.875 2.063-.875 3.25 0 1.188.292 2.27.875 3.25.563.98 1.354 1.77 2.375 2.375A6.45 6.45 0 0 0 8 18.5a6.45 6.45 0 0 0 3.25-.875c1.02-.604 1.813-1.396 2.375-2.375.583-.98.875-2.063.875-3.25ZM0 12c.02-1.458.375-2.792 1.063-4C1.77 6.792 2.75 5.812 4 5.062 5.27 4.354 6.604 4 8 4s2.73.354 4 1.063c1.25.75 2.23 1.729 2.938 2.937.687 1.208 1.041 2.542 1.062 4-.02 1.458-.375 2.792-1.063 4-.708 1.208-1.687 2.188-2.937 2.938C10.73 19.645 9.396 20 8 20s-2.73-.354-4-1.063c-1.25-.75-2.23-1.729-2.938-2.937C.375 14.792.022 13.458 0 12Zm8.656-3.813v.438c.292.042.594.104.906.188.063.02.115.041.157.062.396.146.562.427.5.844-.167.375-.448.531-.844.469-.02-.021-.042-.032-.063-.032-.041 0-.072-.01-.093-.031a6.044 6.044 0 0 0-.656-.156 2.249 2.249 0 0 0-1.282.125c-.187.083-.312.198-.375.344-.083.145-.031.291.157.437.312.167.645.292 1 .375h.03c.042.02.084.031.126.031.02.021.052.031.094.031a5.576 5.576 0 0 1 1.562.626c.625.458.875 1.062.75 1.812-.167.708-.563 1.177-1.188 1.406-.25.104-.51.167-.78.188v.5c-.042.396-.272.614-.688.656-.396-.042-.615-.26-.657-.656v-.563c-.458-.104-.906-.229-1.343-.375-.375-.166-.521-.458-.438-.875.167-.375.448-.51.844-.406.042 0 .083.01.125.031.042 0 .083.01.125.031.354.126.708.23 1.063.313.541.063.958.031 1.25-.094a.663.663 0 0 0 .374-.375c.042-.187-.02-.344-.187-.469a2.895 2.895 0 0 0-1.094-.406l-.187-.062-.032-.031a5.045 5.045 0 0 1-1.5-.563c-.625-.417-.885-1-.78-1.75.187-.688.593-1.156 1.218-1.406.167-.063.354-.115.563-.156v-.5c.041-.417.26-.646.656-.688.416.042.646.27.687.688Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleDollarBoldIcon);
export default ForwardRef;
