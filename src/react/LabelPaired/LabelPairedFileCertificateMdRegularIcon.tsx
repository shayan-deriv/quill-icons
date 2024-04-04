import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileCertificateMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M15 18v-8h-3.5A1.48 1.48 0 0 1 10 8.5V5H6c-.562 0-1 .469-1 1v2a2.3 2.3 0 0 0-.812.125c-.063.031-.157.094-.188.094v.031V6c0-1.094.875-2 2-2h4.875c.375 0 .781.188 1.063.469l3.593 3.593c.281.282.469.688.469 1.063V18c0 1.125-.906 2-2 2H6.906c.063-.156.094-.312.094-.5V19h7c.531 0 1-.437 1-1m-.031-9c-.031-.062-.063-.156-.125-.219l-3.625-3.625c-.063-.062-.156-.093-.219-.125V8.5c0 .281.219.5.5.5zM7.78 13v.031s0 .063.125.313a1.17 1.17 0 0 1-.375 1.344c-.218.156-.25.218-.25.218 0 .031-.031.094-.062.344a1.13 1.13 0 0 1-1 1c-.125 0-.188.031-.219.031V19.5a.58.58 0 0 1-.281.469.57.57 0 0 1-.5-.032L4 19.126l-1.25.813c-.125.093-.344.093-.5.03A.55.55 0 0 1 2 19.5v-3.219c-.062 0-.125-.031-.25-.031a1.19 1.19 0 0 1-1-1c-.031-.281-.031-.312-.062-.344 0 0-.032-.062-.25-.219a1.17 1.17 0 0 1-.375-1.343c.125-.25.125-.313.125-.344 0 0 0-.062-.125-.312a1.17 1.17 0 0 1 .375-1.344c.218-.156.25-.219.25-.219 0-.031.03-.094.062-.344.094-.531.469-.937 1-1 .281-.031.313-.062.344-.062 0 0 .062-.031.219-.25a1.17 1.17 0 0 1 1.343-.375c.25.125.313.125.344.125 0 0 .063 0 .313-.125a1.17 1.17 0 0 1 1.343.375c.188.219.219.25.25.25 0 0 .063.031.313.062a1.13 1.13 0 0 1 1 1c.031.25.062.313.062.344 0 0 .032.063.25.219.407.312.563.875.375 1.344-.093.25-.125.312-.125.312M3 18.594l.719-.5a.54.54 0 0 1 .531 0l.75.5V17c-.25.031-.469.031-.687-.062-.25-.125-.313-.125-.313-.125-.031 0-.094 0-.344.125-.219.093-.437.093-.656.062zM1.188 13c0 .281-.094.5-.188.719-.031.062 0 .125.063.187.187.156.375.281.5.5s.156.469.187.719c0 .063.063.125.125.125.25.031.5.063.719.188.219.124.375.312.5.5.062.062.125.093.187.062.219-.094.438-.187.719-.187.25 0 .469.093.688.187.062.031.125 0 .187-.062.156-.188.281-.376.5-.5.219-.126.469-.157.719-.188a.134.134 0 0 0 .125-.125c.031-.25.062-.5.187-.719s.313-.375.532-.5c.03-.062.062-.125.03-.187-.093-.219-.187-.438-.187-.719 0-.25.094-.469.188-.687.031-.063 0-.126-.032-.188-.218-.156-.406-.281-.53-.5-.126-.219-.157-.469-.188-.719a.135.135 0 0 0-.125-.125c-.25-.031-.5-.062-.719-.187s-.344-.313-.5-.531c-.062-.032-.125-.063-.187-.032-.22.094-.438.188-.688.188-.281 0-.5-.094-.719-.188-.062-.031-.125 0-.187.031-.156.22-.281.407-.5.532s-.469.156-.719.187a.135.135 0 0 0-.125.125c-.031.25-.062.5-.187.719s-.313.344-.5.5c-.063.063-.094.125-.063.188.094.218.188.437.188.687' />
    </g>
    <defs>
      <clipPath id='7baf797f865dc34d0adab3dbaf867f83__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileCertificateMdRegularIcon);
export default ForwardRef;
