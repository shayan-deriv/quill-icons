import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCashRegisterSmBoldIcon = (
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
      <path d='M1.75 3.75h6.125q.383 0 .629.246a.85.85 0 0 1 .246.629v1.75a.85.85 0 0 1-.246.629.85.85 0 0 1-.629.246H5.688v.875h5.906q.684 0 1.148.438.492.41.602 1.066l.629 4.512q.027.109.027.246V16q-.027.738-.52 1.23-.492.493-1.23.52H1.75q-.738-.027-1.23-.52Q.027 16.739 0 16v-1.75q0-.055.027-.11l.63-4.511q.109-.657.6-1.066.466-.438 1.15-.438h1.53V7.25H1.75a.85.85 0 0 1-.629-.246.85.85 0 0 1-.246-.629v-1.75q0-.383.246-.629a.85.85 0 0 1 .629-.246m.875 1.313q-.41.027-.437.437.027.41.437.438H7q.41-.029.438-.438-.029-.41-.438-.437zM1.313 16q.027.41.437.438h10.5q.41-.028.438-.438v-.437H1.313zM12.03 9.82q-.054-.355-.41-.383H2.406q-.382.028-.437.383l-.63 4.43h11.349zm-8.968.274q.601.054.656.656-.055.602-.656.656-.602-.054-.657-.656.055-.602.656-.656m1.968.656q.055-.602.657-.656.601.054.656.656-.055.602-.657.656-.601-.054-.656-.656m-.656 1.531q.602.055.656.656-.054.602-.656.657-.602-.055-.656-.656.054-.602.656-.657m3.281-1.531q.055-.602.657-.656.601.054.656.656-.055.602-.656.656-.602-.054-.657-.656M7 12.281q.602.055.656.656-.054.602-.656.657-.602-.055-.656-.656.054-.602.656-.657m3.281-1.531q.055-.602.656-.656.602.054.657.656-.055.602-.656.656-.602-.054-.657-.656m-.656 1.531q.602.055.656.656-.054.602-.656.657-.602-.055-.656-.656.054-.602.656-.657' />
    </g>
    <defs>
      <clipPath id='aae381b2e46473823c4460413f99a3a4__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCashRegisterSmBoldIcon);
export default ForwardRef;
