import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCaretDownSmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={22}
    viewBox='0 0 9 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d='m3.871 14.004-3.5-3.5a.88.88 0 0 1-.191-.957A.9.9 0 0 1 1 9h7a.86.86 0 0 1 .793.547.88.88 0 0 1-.191.957l-3.5 3.5a.843.843 0 0 1-1.23 0' />
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCaretDownSmFillIcon);
export default ForwardRef;
