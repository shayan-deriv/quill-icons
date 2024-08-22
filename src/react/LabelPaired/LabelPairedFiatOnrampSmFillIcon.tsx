import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFiatOnrampSmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={22}
    viewBox='0 0 18 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M13.512 6.676c0-.164-.137-.301-.301-.301h-1.149v.602h1.149c.164 0 .3-.137.3-.301m0 1.148c0-.136-.137-.273-.301-.273h-1.149v.574h1.149c.164 0 .3-.137.3-.3m-7.028 2.817 2.38-2.38a3 3 0 0 1-.11-.874c0-1.996 1.613-3.637 3.61-3.637A3.653 3.653 0 0 1 16 7.387v8.039c0 1.285-1.066 2.324-2.352 2.324H5.61A3.606 3.606 0 0 1 2 14.14a3.606 3.606 0 0 1 3.61-3.609c.3 0 .6.028.874.11m8.204-.465c-.63.52-1.45.82-2.325.82A3.59 3.59 0 0 1 9.465 9.52l-1.723 1.722a3.59 3.59 0 0 1 1.477 2.899c0 .875-.301 1.695-.82 2.297h5.25c.574 0 1.039-.465 1.039-1.012zm-2.626-4.977h-.601v.602h-.574v.574h.574v1.75h-.574v.602h.574V9.3h.601v-.574h.575V9.3h.574v-.574a.88.88 0 0 0 .875-.875.85.85 0 0 0-.246-.602.867.867 0 0 0-.055-1.23.83.83 0 0 0-.574-.22v-.6h-.574v.6h-.575zm-6.207 6.864h-.738v.328c-.465.136-.765.574-.765 1.066 0 .629.492 1.148 1.12 1.148.247 0 .438.192.438.438 0 .219-.191.41-.437.41a.42.42 0 0 1-.41-.41v-.11h-.711v.11c0 .492.3.93.765 1.066v.328h.738v-.328c.465-.136.766-.574.766-1.066 0-.629-.52-1.148-1.148-1.148-.22 0-.41-.192-.41-.438a.42.42 0 0 1 .41-.41c.246 0 .437.191.437.41v.11h.711v-.11c0-.492-.3-.93-.766-1.066zM4.488 6.949c0-.355.301-.656.657-.656h2.57c.273 0 .52.164.601.41.11.246.055.52-.136.711L5.637 9.957c-.246.246-.657.246-.93 0a.68.68 0 0 1 0-.93l1.422-1.422h-.984a.65.65 0 0 1-.657-.656' />
    </g>
    <defs>
      <clipPath id='09f297477639589ac4befd2996b85344__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFiatOnrampSmFillIcon);
export default ForwardRef;
