import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronsDownXlRegularIcon = (
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
    <path d='M2.438 9.563a.794.794 0 0 1 0-1.079c.28-.28.796-.28 1.078 0L12 16.97l8.438-8.485c.28-.28.796-.28 1.078 0 .28.282.28.797 0 1.079l-9 9c-.282.28-.797.28-1.078 0zm0 9a.794.794 0 0 1 0-1.079c.28-.28.796-.28 1.078 0L12 25.97l8.438-8.485c.28-.28.796-.28 1.078 0 .28.282.28.797 0 1.078l-9 9c-.282.282-.797.282-1.078 0z' />
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsDownXlRegularIcon);
export default ForwardRef;
