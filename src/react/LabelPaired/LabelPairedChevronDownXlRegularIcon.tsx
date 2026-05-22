import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronDownXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={36}
    viewBox='0 0 24 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d='M12.516 24.563c-.282.28-.797.28-1.078 0l-9-9a.794.794 0 0 1 0-1.079c.28-.28.796-.28 1.078 0L12 22.97l8.438-8.485c.28-.28.796-.28 1.078 0 .28.282.28.797 0 1.079z' />
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronDownXlRegularIcon);
export default ForwardRef;
