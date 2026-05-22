import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronRightCaptionFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={8}
    height={18}
    viewBox='0 0 8 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d='M7.516 8.984a.723.723 0 0 1 0 1.055l-4.5 4.5a.723.723 0 0 1-1.055 0 .723.723 0 0 1 0-1.055L5.92 9.5 1.96 5.54a.723.723 0 0 1 0-1.056.723.723 0 0 1 1.055 0z' />
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronRightCaptionFillIcon);
export default ForwardRef;
