import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGearMdRegularIcon = (
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
      <path d='m6.969 5.188-.407 1.468q-.187.594-.718.844-.344.157-.657.375a1.44 1.44 0 0 1-1.062.219l-1.531-.375a.13.13 0 0 0-.125 0A6 6 0 0 0 2 8.406l-.125.219q-.188.345-.344.719 0 .062.063.125l1.062 1.125q.406.437.375 1.031-.03.188-.031.375 0 .187.031.406.031.563-.375 1l-1.062 1.125q-.063.032-.094.125.157.375.375.719l.125.219q.219.375.469.687.062.032.125 0l1.5-.375q.624-.094 1.062.219.345.218.688.375.5.25.718.844l.407 1.468a.5.5 0 0 0 .093.125 7 7 0 0 0 1.875 0 .5.5 0 0 0 .094-.125l.406-1.468q.188-.594.72-.844.343-.157.687-.375a1.39 1.39 0 0 1 1.031-.219l1.531.375q.063.032.125 0 .25-.312.469-.687l.125-.219q.188-.344.344-.719 0-.093-.063-.125l-1.062-1.125q-.407-.437-.344-1v-.781q-.063-.594.344-1.031l1.062-1.125q.063-.032.094-.125-.157-.375-.375-.719L14 8.406a6 6 0 0 0-.469-.687.13.13 0 0 0-.125 0l-1.5.375q-.624.094-1.062-.219a6 6 0 0 0-.688-.375 1.46 1.46 0 0 1-.719-.812l-.406-1.5a.5.5 0 0 0-.094-.125 7 7 0 0 0-1.874 0 .5.5 0 0 0-.094.125M8 4q.625 0 1.188.094.093 0 .156.062.468.219.625.75l.437 1.5q.032.094.188.188.405.188.812.468a.56.56 0 0 0 .25.063l1.5-.375a1.2 1.2 0 0 1 .969.156.5.5 0 0 1 .125.094q.345.406.625.875l.125.25q.25.469.438.969.03.062.062.156 0 .531-.375.938l-1.062 1.093a.34.34 0 0 0-.094.25q.03.219.031.469 0 .25-.031.469 0 .156.094.25l1.062 1.125q.375.375.375.906-.031.095-.062.156a8 8 0 0 1-.438.969l-.125.25h-.031a5 5 0 0 1-.594.875.5.5 0 0 1-.125.094 1.3 1.3 0 0 1-.969.187l-1.5-.375a.35.35 0 0 0-.25.032q-.405.28-.812.468-.156.094-.188.188l-.437 1.5a1.25 1.25 0 0 1-.625.781.35.35 0 0 1-.156.031A7 7 0 0 1 8 20a7 7 0 0 1-1.187-.094.35.35 0 0 1-.157-.031 1.25 1.25 0 0 1-.625-.781l-.437-1.5q-.032-.094-.188-.188a5.4 5.4 0 0 1-.812-.468.35.35 0 0 0-.25-.032l-1.5.375q-.531.094-.969-.156L1.75 17a5 5 0 0 1-.594-.875h-.031L1 15.875a8 8 0 0 1-.437-.969.35.35 0 0 1-.032-.156q-.03-.5.344-.906l1.063-1.125a.34.34 0 0 0 .093-.25A3 3 0 0 1 2 12v-.219q0-.124.031-.25a.34.34 0 0 0-.094-.25L.876 10.187A1.34 1.34 0 0 1 .5 9.25q.03-.094.063-.156A8 8 0 0 1 1 8.125l.125-.25h.031q.25-.468.594-.875a.5.5 0 0 1 .125-.094 1.2 1.2 0 0 1 .969-.156l1.5.375q.124 0 .25-.062.405-.282.812-.47.156-.093.188-.187l.437-1.5q.157-.531.625-.75a.21.21 0 0 1 .157-.062A7 7 0 0 1 8 4m-1.75 8q.031 1 .875 1.5.875.5 1.75 0 .844-.5.875-1.5-.03-1-.875-1.5-.875-.5-1.75 0-.843.5-.875 1.5m4.5 0q-.063 1.563-1.375 2.375-1.375.75-2.75 0Q5.313 13.563 5.25 12q.063-1.562 1.375-2.375 1.375-.75 2.75 0 1.312.813 1.375 2.375' />
    </g>
    <defs>
      <clipPath id='22b15a98ce7a49e1fef6fd036b1970fd__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGearMdRegularIcon);
export default ForwardRef;
