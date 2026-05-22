import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronsUpCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d='m6.258 4.742 4.5 4.5a.4.4 0 0 1 0 .54.397.397 0 0 1-.54 0L6 5.538 1.758 9.781a.397.397 0 0 1-.54 0 .397.397 0 0 1 0-.539l4.5-4.5a.4.4 0 0 1 .54 0m4.5 9a.4.4 0 0 1 0 .54.397.397 0 0 1-.54 0L6 10.038 1.758 14.28a.397.397 0 0 1-.54 0 .397.397 0 0 1 0-.539l4.5-4.5a.4.4 0 0 1 .54 0z' />
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsUpCaptionRegularIcon);
export default ForwardRef;
