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
export const FlagSlovakiaIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 16'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <path fill='#E53B35' d='M2 16h20a2 2 0 0 0 2-2v-3H0v3a2 2 0 0 0 2 2Z' />
    <path fill='#0C47B7' d='M24 5H0v6h24V5Z' />
    <path fill='#fff' d='M2 0h20a2 2 0 0 1 2 2v3H0V2a2 2 0 0 1 2-2Z' />
    <path
      fill='#fff'
      d='M10.399 2.133H5.6c-1.164 0-2.13.931-2.175 2.094l-.184 4.797c-.035.917.445 2.018 1.14 2.614l1.712 1.466c1.068.916 2.743.916 3.812 0l1.711-1.466c.699-.599 1.176-1.697 1.141-2.614l-.184-4.797a2.185 2.185 0 0 0-2.175-2.094Z'
    />
    <path
      fill='#E53B35'
      d='M10.399 2.133H5.6c-1.164 0-2.13.931-2.175 2.094l-.184 4.797c-.035.917.445 2.018 1.14 2.614l1.712 1.466c1.068.916 2.743.916 3.812 0l1.711-1.466c.699-.599 1.176-1.697 1.141-2.614l-.184-4.797a2.185 2.185 0 0 0-2.175-2.094Z'
    />
    <path
      fill='#fff'
      fillRule='evenodd'
      d='M7.467 8.795a.268.268 0 0 0-.265-.262H6.131a.263.263 0 0 1-.264-.269v-.528c0-.149.125-.27.264-.27h1.071a.263.263 0 0 0 .265-.269V6.67a.265.265 0 0 0-.27-.269H6.67a.265.265 0 0 1-.269-.27v-.527c0-.15.114-.27.27-.27h.527c.15 0 .27-.114.27-.269v-.528c0-.149.114-.27.269-.27h.528c.149 0 .27.115.27.27v.528c0 .149.113.27.268.27h.529c.148 0 .269.113.269.269v.528c0 .148-.114.269-.27.269h-.527a.265.265 0 0 0-.27.27v.527c0 .15.126.27.265.27h1.071c.146 0 .264.114.264.269v.528c0 .149-.125.27-.264.27H8.798a.261.261 0 0 0-.265.26v1.611a.262.262 0 0 1-.269.262h-.528a.264.264 0 0 1-.27-.262v-1.61Z'
      clipRule='evenodd'
    />
    <path
      fill='#fff'
      d='M10.399 2.133H5.6c-1.164 0-2.13.931-2.175 2.094l-.184 4.797c-.035.917.445 2.018 1.14 2.614l1.712 1.466c1.068.916 2.743.916 3.812 0l1.711-1.466c.699-.599 1.176-1.697 1.141-2.614l-.184-4.797a2.185 2.185 0 0 0-2.175-2.094Zm0 1.067c.59 0 1.086.477 1.109 1.068l.184 4.797c.023.59-.317 1.375-.769 1.763l-1.71 1.466c-.67.574-1.756.574-2.425 0l-1.711-1.466c-.448-.384-.792-1.171-.77-1.763l.185-4.797A1.118 1.118 0 0 1 5.602 3.2h4.796Z'
    />
    <path
      fill='#1251A1'
      d='M5.553 11.236c.386-.23.9-.404 1.485-.496a1.064 1.064 0 0 1 1.925 0c.585.092 1.098.266 1.484.496l-1.235 1.058c-.67.574-1.755.574-2.424 0l-1.235-1.058Z'
    />
    <path
      fill='#000'
      fillOpacity={0.08}
      fillRule='evenodd'
      d='M22 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1ZM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2Z'
      clipRule='evenodd'
    />
  </svg>
);
const ForwardRef = forwardRef(FlagSlovakiaIcon);
export default ForwardRef;
