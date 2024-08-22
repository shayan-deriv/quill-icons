import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleDollarXlRegularIcon = (
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
    <g>
      <path d='M22.5 18c0-3.75-2.016-7.172-5.25-9.047-3.281-1.922-7.266-1.922-10.5 0A10.36 10.36 0 0 0 1.5 18c0 3.797 1.969 7.219 5.25 9.094 3.234 1.922 7.219 1.922 10.5 0A10.48 10.48 0 0 0 22.5 18M0 18A11.91 11.91 0 0 1 6 7.64c3.703-2.156 8.25-2.156 12 0 3.703 2.157 6 6.094 6 10.36 0 4.313-2.297 8.25-6 10.406-3.75 2.157-8.297 2.157-12 0C2.25 26.25 0 22.313 0 18m12.75-6.375v1.078c.61.047 1.219.235 1.828.422.094 0 .14.047.235.047.374.094.609.515.515.937-.094.375-.515.61-.937.516-.094-.047-.235-.047-.328-.094-.329-.094-.704-.234-1.079-.281-.89-.094-1.687 0-2.296.234-.61.282-.891.657-.938.938-.094.469.094.75.469 1.031.515.281 1.265.516 2.156.75v.047c.844.234 1.828.516 2.578.984.89.61 1.266 1.594 1.078 2.672-.187.985-.89 1.688-1.781 2.016a4 4 0 0 1-1.547.328v1.125a.74.74 0 0 1-.75.75c-.375 0-.75-.328-.75-.75v-1.172c-.375-.094-.984-.281-1.5-.422L8.72 22.5a.785.785 0 0 1-.469-.984c.14-.375.563-.563.938-.47.328.095.609.235.937.329.516.14 1.078.281 1.313.328.937.14 1.734.047 2.25-.14.515-.235.796-.563.89-.938.047-.516-.094-.89-.515-1.172-.563-.375-1.22-.562-1.922-.75-.094 0-.188-.047-.282-.094-.843-.187-1.734-.468-2.437-.937-.375-.235-.75-.563-.985-.985-.234-.468-.28-.984-.187-1.546.188-.985.938-1.641 1.828-2.016a4.5 4.5 0 0 1 1.125-.328v-1.172c0-.375.328-.75.75-.75s.75.375.75.75z' />
    </g>
    <defs>
      <clipPath id='4e46170930575d959e6b2aa041e31970__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleDollarXlRegularIcon);
export default ForwardRef;
