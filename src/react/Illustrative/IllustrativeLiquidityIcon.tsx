import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const IllustrativeLiquidityIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fillRule='evenodd'
      d='M15.529 2.862a.667.667 0 0 1 .983.04c.675.676 1.74 1.74 2.74 3.112a.667.667 0 1 1-1.077.785c-.75-1.03-1.543-1.877-2.175-2.52-.631.644-1.424 1.496-2.175 2.522a.667.667 0 0 1-1.076-.788c1.017-1.388 2.1-2.471 2.774-3.145zM8.815 6.195a.667.667 0 0 1 .984.04c.675.676 1.74 1.74 2.74 3.112a.667.667 0 1 1-1.078.786c-.75-1.03-1.542-1.877-2.174-2.52-.775.79-1.793 1.895-2.68 3.252-1.083 1.655-1.94 3.643-1.94 5.848 0 1.586.883 3.184 2.333 4.023a.667.667 0 0 1-.667 1.154c-1.87-1.08-3-3.122-3-5.177 0-2.554.993-4.796 2.157-6.578C6.652 8.36 8.013 6.998 8.808 6.203zm13.427 0c.26-.26.682-.26.943 0l.007.008c.795.795 2.157 2.156 3.318 3.932 1.164 1.782 2.157 4.024 2.157 6.578 0 2.055-1.13 4.096-3 5.177A.667.667 0 1 1 25 20.736c1.45-.839 2.333-2.437 2.333-4.023 0-2.205-.857-4.193-1.94-5.848-.886-1.357-1.905-2.461-2.68-3.252-.631.644-1.424 1.496-2.175 2.521a.667.667 0 1 1-1.076-.788c1.017-1.388 2.1-2.47 2.774-3.145zm-6.713 2.667c.26-.26.682-.26.942 0l.008.008c1.002 1.001 2.708 2.707 4.162 4.932 1.458 2.23 2.692 5.023 2.692 8.198 0 3.651-2.936 7.333-7.333 7.333S8.667 25.651 8.667 22c0-3.175 1.234-5.968 2.692-8.198 1.454-2.225 3.16-3.93 4.162-4.932zm-3.054 5.67C11.099 16.635 10 19.175 10 22c0 3.002 2.424 6 6 6s6-2.998 6-6c0-2.825-1.1-5.365-2.475-7.469-1.175-1.798-2.532-3.246-3.525-4.253-.993 1.007-2.35 2.455-3.525 4.253m2.858 2.801h-.666c-.735 0-1.334.599-1.334 1.334V20c0 .735.599 1.333 1.334 1.333h2.666v1.334H14A.667.667 0 0 0 14 24h1.333v.667a.667.667 0 0 0 1.334 0V24h.666c.735 0 1.334-.599 1.334-1.333v-1.334c0-.734-.599-1.333-1.334-1.333h-2.666v-1.333H18a.667.667 0 0 0 0-1.334h-1.333v-.666a.667.667 0 0 0-1.334 0z'
      clipRule='evenodd'
    />
  </svg>
);
const ForwardRef = forwardRef(IllustrativeLiquidityIcon);
export default ForwardRef;
