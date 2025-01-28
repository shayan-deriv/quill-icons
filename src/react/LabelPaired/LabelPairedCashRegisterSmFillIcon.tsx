import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCashRegisterSmFillIcon = (
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
      <path d='M1.75 3.75h6.125a.9.9 0 0 1 .875.875v1.75c0 .492-.41.875-.875.875H5.688v.875h5.933c.848 0 1.586.656 1.723 1.504l.601 4.074c.028.137.055.274.055.41V16c0 .984-.793 1.75-1.75 1.75H1.75C.766 17.75 0 16.984 0 16v-1.887c0-.136 0-.273.027-.383L.63 9.63a1.79 1.79 0 0 1 1.75-1.504h1.559V7.25H1.75a.864.864 0 0 1-.875-.875v-1.75c0-.465.383-.875.875-.875m.875 1.313a.45.45 0 0 0-.437.437c0 .246.19.438.437.438H7a.45.45 0 0 0 .438-.438A.47.47 0 0 0 7 5.063zm-.875 10.5c0 .246.191.437.438.437h9.625a.45.45 0 0 0 .437-.437.47.47 0 0 0-.437-.438H2.188a.45.45 0 0 0-.438.438m1.313-4.594a.65.65 0 0 0 .656-.656c0-.356-.301-.657-.656-.657-.383 0-.657.301-.657.656 0 .383.274.657.656.657m3.28-.656c0-.356-.3-.657-.655-.657-.383 0-.657.301-.657.656 0 .383.274.657.657.657a.65.65 0 0 0 .656-.656m-1.968 2.843a.65.65 0 0 0 .656-.656c0-.355-.3-.656-.656-.656-.383 0-.656.3-.656.656 0 .383.273.656.656.656m4.594-2.844c0-.355-.301-.656-.656-.656-.383 0-.657.301-.657.656 0 .383.274.657.657.657a.65.65 0 0 0 .656-.656M7 13.157a.65.65 0 0 0 .656-.656c0-.355-.3-.656-.656-.656-.383 0-.656.3-.656.656 0 .383.273.656.656.656m4.594-2.844c0-.355-.301-.656-.656-.656-.383 0-.657.301-.657.656 0 .383.274.657.656.657a.65.65 0 0 0 .657-.656m-1.969 2.844a.65.65 0 0 0 .656-.656c0-.355-.3-.656-.656-.656-.383 0-.656.3-.656.656 0 .383.273.656.656.656' />
    </g>
    <defs>
      <clipPath id='6f0f6685b20f567a591b163467adf222__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCashRegisterSmFillIcon);
export default ForwardRef;
