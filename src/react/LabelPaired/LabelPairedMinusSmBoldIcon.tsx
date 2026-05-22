import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMinusSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={22}
    viewBox='0 0 13 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d='M12.188 10.75a.65.65 0 0 1-.657.656H1.47a.63.63 0 0 1-.657-.656c0-.355.274-.656.657-.656h10.06c.356 0 .656.3.656.656' />
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMinusSmBoldIcon);
export default ForwardRef;
