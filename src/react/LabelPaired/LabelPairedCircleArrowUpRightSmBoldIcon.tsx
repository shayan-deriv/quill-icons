import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleArrowUpRightSmBoldIcon = (
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
    <g>
      <path d='M7 16.438a5.68 5.68 0 0 0 4.922-2.844 5.71 5.71 0 0 0 0-5.688C10.882 6.156 9.023 5.063 7 5.063c-2.05 0-3.91 1.093-4.95 2.843a5.71 5.71 0 0 0 0 5.688A5.7 5.7 0 0 0 7 16.438M7 3.75c2.488 0 4.785 1.34 6.043 3.5 1.258 2.188 1.258 4.84 0 7A6.95 6.95 0 0 1 7 17.75a6.96 6.96 0 0 1-6.07-3.5c-1.258-2.16-1.258-4.812 0-7A7.02 7.02 0 0 1 7 3.75M5.25 7.688h4.156c.356 0 .656.3.656.656v4.375c0 .383-.3.656-.656.656a.63.63 0 0 1-.656-.656v-2.79l-3.691 3.692c-.274.274-.684.274-.93 0a.6.6 0 0 1 0-.902L7.82 9.027H5.25a.65.65 0 0 1-.656-.656c0-.383.273-.656.656-.656z' />
    </g>
    <defs>
      <clipPath id='51db148e6f1b21f3a91077345d6c429e__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleArrowUpRightSmBoldIcon);
export default ForwardRef;
