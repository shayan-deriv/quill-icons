import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronLeftXlFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={36}
    viewBox='0 0 15 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d='m.422 16.969 9-9a1.445 1.445 0 0 1 2.11 0 1.447 1.447 0 0 1 0 2.11L3.608 18l7.922 7.969c.61.562.61 1.547 0 2.11a1.45 1.45 0 0 1-2.11 0l-9-9a1.445 1.445 0 0 1 0-2.11' />
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronLeftXlFillIcon);
export default ForwardRef;
