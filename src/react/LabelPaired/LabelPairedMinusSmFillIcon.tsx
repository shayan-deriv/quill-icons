import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMinusSmFillIcon = (
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
    <path d='M12.188 10.75c0 .492-.41.875-.876.875H1.688a.864.864 0 0 1-.875-.875.88.88 0 0 1 .875-.875h9.625a.9.9 0 0 1 .874.875' />
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMinusSmFillIcon);
export default ForwardRef;
