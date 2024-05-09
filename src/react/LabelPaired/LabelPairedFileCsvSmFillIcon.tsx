import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileCsvSmFillIcon = (
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
      <path d='M0 5.5c0-.957.766-1.75 1.75-1.75h4.375v3.5c0 .492.383.875.875.875h3.5v3.938H4.813c-.985 0-1.75.792-1.75 1.75v3.937H1.75C.766 17.75 0 16.984 0 16zm10.5 1.75H7v-3.5zm-5.031 6.125h.437c.602 0 1.094.492 1.094 1.094v.219a.45.45 0 0 1-.437.437.43.43 0 0 1-.438-.437v-.22c0-.109-.11-.218-.219-.218H5.47a.216.216 0 0 0-.219.219v2.187c0 .137.082.219.219.219h.437c.11 0 .219-.082.219-.219v-.218A.45.45 0 0 1 6.563 16a.47.47 0 0 1 .437.438v.218a1.08 1.08 0 0 1-1.094 1.094H5.47a1.063 1.063 0 0 1-1.094-1.094V14.47a1.08 1.08 0 0 1 1.094-1.094m3.636 0h.957a.47.47 0 0 1 .438.438.45.45 0 0 1-.437.437h-.958c-.218 0-.355.164-.355.383 0 .137.082.246.191.328l1.04.437c.437.192.738.657.738 1.122 0 .683-.574 1.23-1.258 1.23H8.312a.43.43 0 0 1-.437-.437.45.45 0 0 1 .438-.438H9.46c.219 0 .383-.137.383-.355a.355.355 0 0 0-.219-.329l-1.04-.437c-.437-.191-.71-.656-.71-1.121 0-.684.547-1.258 1.23-1.258m2.707 0a.47.47 0 0 1 .438.438v.874c0 .63.137 1.258.438 1.805a4.1 4.1 0 0 0 .437-1.805v-.874a.45.45 0 0 1 .438-.438.47.47 0 0 1 .437.438v.874c0 .958-.3 1.887-.82 2.68l-.137.192a.4.4 0 0 1-.355.191c-.165 0-.301-.055-.383-.191l-.137-.192a4.9 4.9 0 0 1-.793-2.68v-.874a.45.45 0 0 1 .438-.438' />
    </g>
    <defs>
      <clipPath id='d3a37563da9ba81218b67f54f4c2d8ae__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileCsvSmFillIcon);
export default ForwardRef;
