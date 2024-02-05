import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGripDotsVerticalSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={7}
    height={22}
    viewBox='0 0 7 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.75 6.375q-.027-.41-.437-.437-.411.027-.438.437.027.41.438.438.41-.029.437-.438m-1.75 0q.027-.738.656-1.148a1.4 1.4 0 0 1 1.313 0q.629.41.656 1.148-.027.738-.656 1.148a1.4 1.4 0 0 1-1.313 0Q.027 7.113 0 6.375m1.75 4.375q-.027-.41-.437-.437-.411.027-.438.437.027.41.438.438.41-.028.437-.438m-1.75 0q.027-.738.656-1.148a1.4 1.4 0 0 1 1.313 0q.629.41.656 1.148-.027.738-.656 1.148a1.4 1.4 0 0 1-1.313 0Q.027 11.488 0 10.75m1.313 4.813q.41-.028.437-.438-.027-.41-.437-.437-.411.027-.438.437.027.41.438.438m0-1.75q.738.027 1.148.656.328.656 0 1.312-.41.63-1.148.656-.739-.026-1.149-.656a1.4 1.4 0 0 1 0-1.312q.41-.63 1.149-.656m4.812-7.438q-.027-.41-.437-.437-.411.027-.438.437.027.41.438.438.41-.029.437-.438m-1.75 0q.027-.738.656-1.148a1.4 1.4 0 0 1 1.313 0q.629.41.656 1.148-.027.738-.656 1.148a1.4 1.4 0 0 1-1.313 0q-.629-.41-.656-1.148m1.313 4.813q.41-.028.437-.438-.027-.41-.437-.437-.411.027-.438.437.027.41.438.438m0-1.75q.738.027 1.148.656.328.656 0 1.312-.41.63-1.149.656-.738-.027-1.148-.656a1.4 1.4 0 0 1 0-1.312q.41-.63 1.149-.656m.437 5.687q-.027-.41-.437-.437-.411.027-.438.437.027.41.438.438.41-.028.437-.438m-1.75 0q.027-.738.656-1.148a1.4 1.4 0 0 1 1.313 0q.629.41.656 1.148-.027.738-.656 1.148a1.4 1.4 0 0 1-1.313 0q-.629-.41-.656-1.148' />
    </g>
    <defs>
      <clipPath id='16b9f2815599cbdfd81e96e496c808c3__a'>
        <path d='M0 0h7v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGripDotsVerticalSmRegularIcon);
export default ForwardRef;
