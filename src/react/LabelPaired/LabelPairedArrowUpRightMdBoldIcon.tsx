import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpRightMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={24}
    viewBox='0 0 12 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d='M10.25 7a.76.76 0 0 1 .75.75v7.5a.74.74 0 0 1-.75.75.72.72 0 0 1-.75-.75V9.563L2.281 16.78c-.312.313-.781.313-1.062 0a.684.684 0 0 1 0-1.031L8.438 8.53H2.75A.74.74 0 0 1 2 7.78c0-.437.313-.75.75-.75h7.5z' />
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpRightMdBoldIcon);
export default ForwardRef;
