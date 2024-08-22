import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLightUserTieCircleDollarXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={30}
    height={36}
    viewBox='0 0 30 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 28.594c0-3.75 2.672-6.844 6.234-7.453.329-.047.61.093.75.375.704 1.359 1.36 2.765 2.063 4.125.234-.938.469-1.875.75-2.766-.328-.516-.61-.984-.89-1.453-.282-.516.046-1.172.656-1.172h1.827c.61 0 .938.656.657 1.172-.281.469-.563.937-.89 1.453.28.89.515 1.828.75 2.766.702-1.36 1.359-2.766 2.062-4.125.14-.282.422-.422.75-.375.187 0 .328.047.515.093-.187.657-.234 1.36-.234 2.016 0 .422 0 .797.047 1.172-.563 1.125-1.125 2.25-1.688 3.328h2.954c.562.89 1.312 1.688 2.156 2.25H1.406C.61 30 0 29.39 0 28.594m2.297-.844h5.297c-.703-1.36-1.36-2.719-2.063-4.078-1.687.703-2.953 2.25-3.234 4.078M4.5 12c0-2.11 1.125-4.125 3-5.156 1.828-1.078 4.125-1.078 6 0 1.828 1.031 3 3.047 3 5.156 0 2.156-1.172 4.125-3 5.203-1.875 1.078-4.172 1.078-6 0A5.97 5.97 0 0 1 4.5 12m2.719-1.875c-.657 1.172-.657 2.625 0 3.75.703 1.172 1.922 1.875 3.281 1.875 1.313 0 2.578-.703 3.234-1.875.657-1.125.657-2.578 0-3.75C13.078 9 11.813 8.25 10.5 8.25c-1.36 0-2.578.75-3.281 1.875M16.5 23.25c0-3.703 3-6.75 6.75-6.75 3.703 0 6.75 3.047 6.75 6.75C30 27 26.953 30 23.25 30c-3.75 0-6.75-3-6.75-6.75m4.125-1.266c.047.75.516 1.22.984 1.453.422.235.938.375 1.36.47 0 .046.047.046.093.046.47.14.844.235 1.079.375.187.14.234.188.234.281s-.047.188-.047.188l-.187.187c-.235.094-.563.141-.891.141-.422 0-.844-.14-1.406-.328-.094 0-.188-.047-.282-.047-.375-.14-.796.094-.937.469-.094.422.094.843.516.937.047.047.14.047.234.094.328.094.703.234 1.125.281v.563c0 .422.328.75.75.75.375 0 .75-.328.75-.75v-.516q.422-.07.844-.281c.562-.328 1.031-.89 1.031-1.735-.047-.75-.516-1.218-.984-1.5-.422-.28-.985-.421-1.407-.562h-.047c-.468-.14-.843-.234-1.125-.375-.187-.14-.187-.187-.187-.234v-.141c.047-.047.094-.094.234-.187.235-.094.563-.188.844-.188.422 0 .797.094 1.266.188.375.14.797-.141.89-.516.094-.422-.14-.844-.562-.938a27 27 0 0 0-.797-.14V19.5c0-.422-.375-.75-.75-.75a.74.74 0 0 0-.75.75v.469a2.2 2.2 0 0 0-.844.281c-.562.281-1.078.844-1.031 1.734' />
    </g>
    <defs>
      <clipPath id='ab7e07d65bfedecca82f7d4f09e41200__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLightUserTieCircleDollarXlBoldIcon);
export default ForwardRef;
