import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleDollarMdRegularIcon = (
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
      <path d='M15 12c0-2.5-1.344-4.781-3.5-6.031-2.187-1.282-4.844-1.282-7 0A6.9 6.9 0 0 0 1 12c0 2.531 1.313 4.813 3.5 6.063 2.156 1.28 4.813 1.28 7 0A6.98 6.98 0 0 0 15 12M0 12a7.94 7.94 0 0 1 4-6.906c2.469-1.438 5.5-1.438 8 0C14.469 6.53 16 9.156 16 12c0 2.875-1.531 5.5-4 6.938-2.5 1.437-5.531 1.437-8 0A7.95 7.95 0 0 1 0 12m8.5-4.25v.719c.406.031.813.156 1.219.281.062 0 .094.031.156.031.25.063.406.344.344.625-.063.25-.344.406-.625.344-.063-.031-.156-.031-.219-.062-.219-.063-.469-.157-.719-.188-.594-.062-1.125 0-1.531.156-.406.188-.594.438-.625.625-.062.313.063.5.313.688.343.187.843.344 1.437.5v.031c.563.156 1.219.344 1.719.656.594.406.844 1.063.719 1.781-.126.657-.594 1.126-1.188 1.344a2.6 2.6 0 0 1-1.031.219v.75c0 .281-.219.5-.5.5-.25 0-.5-.219-.5-.5v-.781c-.25-.063-.657-.188-1-.281L5.812 15a.524.524 0 0 1-.312-.656.53.53 0 0 1 .625-.313c.219.063.406.156.625.219.344.094.719.188.875.219.625.094 1.156.031 1.5-.094.344-.156.531-.375.594-.625.031-.344-.063-.594-.344-.781-.375-.25-.812-.375-1.281-.5-.063 0-.125-.031-.188-.063-.562-.125-1.156-.312-1.625-.625-.25-.156-.5-.375-.656-.656-.156-.312-.187-.656-.125-1.031.125-.656.625-1.094 1.219-1.344.218-.094.5-.187.75-.219V7.75c0-.25.218-.5.5-.5.281 0 .5.25.5.5z' />
    </g>
    <defs>
      <clipPath id='d49edb9e792afedcf20c9b956ab48ba7__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleDollarMdRegularIcon);
export default ForwardRef;
