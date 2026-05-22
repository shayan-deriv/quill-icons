import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedObjectsAlignLeftSmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d='M0 4.406c0-.355.273-.656.656-.656.356 0 .657.3.657.656v12.688a.65.65 0 0 1-.657.656.63.63 0 0 1-.656-.656zM4.813 5.5h7.875c.71 0 1.312.602 1.312 1.313v1.75c0 .738-.602 1.312-1.312 1.312H4.812A1.296 1.296 0 0 1 3.5 8.563v-1.75c0-.711.574-1.313 1.313-1.313m0 6.125h4.375c.71 0 1.312.602 1.312 1.313v1.75c0 .738-.602 1.312-1.312 1.312H4.812A1.296 1.296 0 0 1 3.5 14.688v-1.75c0-.711.574-1.313 1.313-1.313' />
  </svg>
);
const ForwardRef = forwardRef(LabelPairedObjectsAlignLeftSmFillIcon);
export default ForwardRef;
