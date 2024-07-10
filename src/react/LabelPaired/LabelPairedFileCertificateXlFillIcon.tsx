import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileCertificateXlFillIcon = (
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
      <path d='M6 9c0-1.64 1.313-3 3-3h7.5v6c0 .844.656 1.5 1.5 1.5h6V27c0 1.688-1.36 3-3 3H10.36c.093-.234.14-.469.14-.75V25.5c.047 0 .094-.047.14-.047.329-.14.704-.375.985-.75.281-.328.469-.797.516-1.265.046-.141.046-.235.046-.329.094-.047.141-.093.282-.187a2.695 2.695 0 0 0 .844-3.094q-.141-.21-.141-.281c0-.094.047-.188.14-.328a2.71 2.71 0 0 0-.843-3.094c-.14-.094-.188-.14-.281-.187 0-.094 0-.188-.047-.329a2.59 2.59 0 0 0-2.25-2.25c-.141-.046-.235-.046-.328-.046-.047-.047-.094-.141-.188-.282-.75-.937-1.969-1.265-3.094-.797-.093.047-.234.094-.281.141zm18 3h-6V6zM5.11 13.594l.75.281c.046.047.187.047.28 0l.704-.281a1.23 1.23 0 0 1 1.36.328l.468.656c.047.094.14.14.234.14l.797.095c.516.093.89.468.985.984l.093.797c0 .093.047.187.14.234l.61.469c.422.328.563.844.375 1.312l-.281.75a.4.4 0 0 0 0 .328l.281.704c.188.468.047 1.03-.328 1.312l-.656.516a.26.26 0 0 0-.14.234l-.095.797c-.093.516-.468.89-.984.984L9 24.328v4.922c0 .281-.187.563-.422.703a.85.85 0 0 1-.75-.047L6 28.688l-1.875 1.218c-.187.14-.516.14-.75.047-.234-.14-.375-.422-.375-.703v-4.922l-.75-.094c-.516-.093-.89-.468-.937-.984l-.141-.797a.26.26 0 0 0-.14-.234l-.61-.516C0 21.422-.141 20.86.047 20.391l.328-.75v-.282l-.328-.703c-.188-.468-.047-1.031.375-1.312l.61-.516a.26.26 0 0 0 .14-.234l.094-.797c.093-.516.468-.89.984-.985l.797-.093a.26.26 0 0 0 .234-.14l.516-.61c.281-.422.844-.563 1.312-.375M9 19.5c0-1.031-.61-2.016-1.5-2.578-.937-.516-2.11-.516-3 0-.937.562-1.5 1.547-1.5 2.578 0 1.078.563 2.063 1.5 2.625.89.516 2.063.516 3 0C8.39 21.563 9 20.578 9 19.5' />
    </g>
    <defs>
      <clipPath id='505ee540aadd5653a188bda1f758bdb5__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileCertificateXlFillIcon);
export default ForwardRef;
