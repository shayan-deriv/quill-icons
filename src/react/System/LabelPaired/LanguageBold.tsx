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
export const LabelPairedLanguageBoldIcon = (
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
        d='M2 6h16c.563.02 1.031.219 1.406.594S19.98 7.437 20 8v8c-.02.563-.219 1.031-.594 1.406S18.563 17.98 18 18H2c-.563-.02-1.031-.219-1.406-.594S.02 16.563 0 16V8c.02-.563.219-1.031.594-1.406S1.438 6.02 2 6Zm16 1.5h-8v9h8c.313-.02.48-.188.5-.5V8c-.02-.313-.188-.48-.5-.5Zm-12.438 2c-.104-.23-.291-.354-.562-.375-.27.02-.458.146-.563.375l-2 4.5c-.124.354-.02.625.313.813.354.124.625.02.813-.313l.28-.625h2.313l.282.625c.187.333.458.438.812.313.333-.188.438-.459.313-.813l-2-4.5Zm.032 3.125H4.406L5 11.281l.594 1.344Zm8.656-3.5c.375.042.583.25.625.625v.125h1.875c.375.042.583.25.625.625-.042.375-.25.583-.625.625h-.063l-.062.156a6.144 6.144 0 0 1-1.219 2.031l.031.032c.021 0 .032.01.032.031l.594.344c.312.229.385.51.218.844-.229.312-.51.385-.843.218l-.594-.344a2.805 2.805 0 0 1-.406-.28c-.334.25-.688.458-1.063.624l-.125.031c-.354.126-.625.021-.813-.312-.124-.354-.02-.625.313-.813l.125-.062c.188-.083.375-.188.563-.313l-.376-.374c-.25-.292-.25-.584 0-.876.292-.25.584-.25.876 0l.468.47c.396-.417.709-.886.938-1.407H12c-.375-.042-.583-.25-.625-.625.042-.375.25-.583.625-.625h1.625V9.75c.042-.375.25-.583.625-.625Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLanguageBoldIcon);
export default ForwardRef;
