import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileInvoiceDollarSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={22}
    viewBox='0 0 11 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M9.875 16V9H6.813A1.296 1.296 0 0 1 5.5 7.688V4.624H2a.88.88 0 0 0-.875.875V16c0 .492.383.875.875.875h7A.88.88 0 0 0 9.875 16m-.027-7.875c-.028-.055-.055-.137-.11-.191L6.566 4.762c-.054-.055-.136-.082-.191-.11v3.036c0 .246.191.437.438.437zM.25 5.5c0-.957.766-1.75 1.75-1.75h4.266c.328 0 .683.164.93.41l3.144 3.145c.246.246.41.601.41.93V16c0 .984-.793 1.75-1.75 1.75H2c-.984 0-1.75-.766-1.75-1.75zM2 5.938a.45.45 0 0 1 .438-.438h1.75a.47.47 0 0 1 .437.438.45.45 0 0 1-.437.437h-1.75A.43.43 0 0 1 2 5.938m0 1.75a.45.45 0 0 1 .438-.438h1.75a.47.47 0 0 1 .437.438.45.45 0 0 1-.437.437h-1.75A.43.43 0 0 1 2 7.688m3.938 2.734v.383c.218.027.437.054.628.11.247.054.383.3.329.519a.43.43 0 0 1-.52.328c-.3-.055-.602-.11-.902-.11a1.06 1.06 0 0 0-.657.137c-.164.082-.191.164-.191.246 0 .055 0 .11.164.192.191.109.465.164.82.273.301.082.684.191.985.355.328.165.629.493.656.985 0 .52-.3.848-.656 1.066-.192.11-.438.164-.657.219v.355a.45.45 0 0 1-.437.438.43.43 0 0 1-.437-.437v-.383a6 6 0 0 1-.848-.22c-.055-.026-.11-.026-.164-.054-.219-.054-.356-.3-.301-.547a.48.48 0 0 1 .547-.3c.082.027.137.054.191.082.383.109.684.191 1.012.191.273.027.52-.027.684-.11.136-.081.191-.19.191-.3 0-.055-.027-.137-.191-.219-.192-.11-.465-.191-.82-.273l-.028-.028c-.3-.082-.656-.164-.957-.328s-.629-.465-.629-.957c0-.52.328-.848.656-1.039a2 2 0 0 1 .657-.191v-.383c0-.246.19-.438.437-.438.246 0 .438.192.438.438' />
    </g>
    <defs>
      <clipPath id='dbcb0a41b88ca5513fa8ecf13738d359__a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileInvoiceDollarSmRegularIcon);
export default ForwardRef;
