import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedHandGestureTapRightMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={24}
    viewBox='0 0 20 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M15.688 10a1.98 1.98 0 0 1-1.5 1.938l-1.407 2.968c.063.125.125.25.156.344l.22.5c.187.438.155.938-.032 1.375l-.094.188A2.97 2.97 0 0 1 10.594 19h-.063a3.14 3.14 0 0 1-1.5-.281l-2.219-1.063a2.29 2.29 0 0 1-1.125-3.093l.875-1.844c.282-.625 1.063-.906 1.657-.594.031 0 .062.031.094.031l.062.063c.344-.25.844-.313 1.25-.125.094.062.188.094.281.156.344-.25.844-.312 1.25-.125.031.031.063.031.094.063l.031.03.625-1.28c-.156-.282-.219-.594-.219-.938 0-1.094.907-2 2-2 1.094 0 2 .906 2 2m-1.907-.094c.375.188.625.5.688.875a1.107 1.107 0 0 0-.781-1.875c-.594 0-1.094.469-1.094 1.063.344-.219.781-.25 1.187-.063m-2.594 6.219 1.97-4.187.374-.844a.314.314 0 0 0-.156-.344c-.125-.062-.312 0-.406.094l-.375.844-.781 1.624a.44.44 0 0 1-.47.25.41.41 0 0 1-.405-.343c-.032-.125-.094-.188-.188-.219-.125-.062-.344-.031-.406.125l-.063.156c-.094.156-.281.281-.469.25-.218 0-.374-.187-.406-.375a.42.42 0 0 0-.187-.219c-.156-.062-.344 0-.406.157a.49.49 0 0 1-.407.25.55.55 0 0 1-.437-.219.38.38 0 0 0-.157-.156c-.125-.063-.343 0-.406.156l-.875 1.844c-.312.687-.031 1.531.657 1.844l2.25 1.062q.469.234 1.03.188h.063a2.03 2.03 0 0 0 1.656-1.157l.094-.187a.73.73 0 0 0 0-.625l-.187-.469-.344.75a.36.36 0 0 1-.437.156c-.126-.062-.22-.25-.126-.406M16.532 5c.25 0 .469.219.469.438v13.156c0 .218-.219.437-.469.437a.447.447 0 0 1-.437-.437V5.437c0-.218.187-.437.437-.437' />
    </g>
    <defs>
      <clipPath id='6e84bb5ac54309dec6f494f070fc96d8__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHandGestureTapRightMdBoldIcon);
export default ForwardRef;
