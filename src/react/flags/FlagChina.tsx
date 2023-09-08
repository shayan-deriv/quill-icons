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
export const FlagChinaIcon = (
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
    <path
      fill='#F1361D'
      fillRule='evenodd'
      d='M2 0h20a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2Zm6.893 2.861-.5-.455-.114.666-.455.5.666.114.5.455.114-.666.455-.5-.666-.114Zm1.634 1.453-.016.676.351.577-.675-.015-.578.351.016-.676-.352-.577.676.015.578-.351Zm-.38 2.637-.605-.3.074.672-.3.606.672-.075.606.3-.074-.672.3-.606-.672.075ZM9.13 9.103l-.008-.676-.565.372-.676.008.372.564.008.676.565-.37.676-.009-.372-.565ZM5.48 7.1 3.862 8.253l.597-1.895-1.597-1.183 1.987-.017.631-1.884.631 1.884 1.987.017-1.597 1.183.597 1.895L5.48 7.1Z'
      clipRule='evenodd'
    />
    <path
      fill='#FFDC42'
      d='m9.13 9.103-.008-.676-.565.372-.676.008.372.564.008.676.565-.37.676-.009-.372-.565ZM10.148 6.95l-.606-.3.074.673-.3.606.672-.075.606.3-.074-.672.3-.606-.672.075ZM10.511 4.99l.016-.676-.578.351-.676-.015.352.577-.016.676.578-.351.675.015-.351-.577ZM8.893 2.861l-.5-.455-.114.666-.455.5.666.114.5.455.114-.666.455-.5-.666-.114ZM3.862 8.253 5.48 7.1l1.618 1.153-.597-1.895 1.597-1.183-1.987-.017-.63-1.884-.632 1.884-1.987.017L4.46 6.358l-.597 1.895Z'
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
const ForwardRef = forwardRef(FlagChinaIcon);
export default ForwardRef;
