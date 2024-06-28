import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGearMdBoldIcon = (
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
      <path d='M8 4c.531 0 1.031.063 1.531.156.25.063.688.188.938.625.062.125.094.25.125.375l.312 1.219c.031.156.344.344.531.281l1.188-.343c.125-.032.25-.063.375-.063.5 0 .844.313 1 .5a8 8 0 0 1 1.563 2.688c.093.25.187.687-.094 1.093a1.2 1.2 0 0 1-.25.313l-.875.875c-.156.125-.156.469 0 .594l.875.874c.094.094.187.188.25.313.25.406.156.844.094 1.094A8 8 0 0 1 14 17.28c-.156.188-.5.5-1 .5-.125 0-.25-.031-.375-.062l-1.187-.375c-.188-.032-.5.125-.532.312l-.312 1.219c-.031.125-.063.25-.125.375-.25.438-.688.563-.938.625-.5.094-1 .125-1.531.125a8.6 8.6 0 0 1-1.562-.125c-.25-.062-.688-.187-.938-.625-.062-.125-.094-.25-.125-.375l-.312-1.219c-.032-.187-.344-.343-.5-.312l-1.188.375c-.125.031-.281.031-.406.062-.5 0-.844-.312-1-.5a8 8 0 0 1-1.563-2.687c-.062-.25-.156-.688.094-1.125a2 2 0 0 1 .25-.313l.906-.844c.125-.124.125-.468 0-.593l-.906-.875c-.094-.094-.187-.188-.25-.313-.25-.406-.156-.844-.094-1.094.344-1 .875-1.906 1.563-2.687.156-.187.5-.5 1-.5.125 0 .281.031.406.063l1.188.343c.156.063.468-.125.5-.281l.312-1.219c.031-.125.063-.25.125-.375.25-.437.688-.562.938-.625A8.5 8.5 0 0 1 8 4M6.813 5.625 6.53 6.719c-.25 1-1.406 1.687-2.406 1.406l-1.094-.344a7.5 7.5 0 0 0-1.187 2.063l.843.781c.75.719.75 2.063 0 2.781l-.843.781c.281.75.687 1.438 1.187 2.063l1.094-.344c1-.281 2.156.406 2.406 1.406l.282 1.094c.75.157 1.593.157 2.375 0l.25-1.093c.25-1 1.406-1.688 2.406-1.407l1.094.344a7.5 7.5 0 0 0 1.187-2.062l-.812-.782c-.75-.719-.75-2.062 0-2.781l.812-.781a7.5 7.5 0 0 0-1.187-2.063l-1.094.344c-.969.281-2.156-.406-2.406-1.406l-.25-1.094a6.1 6.1 0 0 0-2.376 0M6.5 12c0 .563.281 1.031.75 1.313.438.28 1.031.28 1.5 0 .438-.282.75-.75.75-1.313 0-.531-.312-1-.75-1.281-.469-.281-1.062-.281-1.5 0-.469.281-.75.75-.75 1.281M8 15a3.03 3.03 0 0 1-2.625-1.5c-.531-.906-.531-2.062 0-3C5.938 9.594 6.906 9 8 9c1.063 0 2.031.594 2.594 1.5.531.938.531 2.094 0 3C10.03 14.438 9.063 15 8 15' />
    </g>
    <defs>
      <clipPath id='bbfd67d251278950df34878da0b876ee__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGearMdBoldIcon);
export default ForwardRef;
