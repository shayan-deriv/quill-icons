import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedUsersSmRegularIcon = (
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
      <path d='M2.875 5.938c0 .492.246.902.656 1.148.383.246.903.246 1.313 0 .383-.246.656-.656.656-1.149 0-.464-.273-.875-.656-1.12-.41-.247-.93-.247-1.313 0-.41.245-.656.656-.656 1.12m3.5 0c0 .792-.437 1.503-1.094 1.914-.683.382-1.531.382-2.187 0A2.22 2.22 0 0 1 2 5.937c0-.765.41-1.476 1.094-1.886.656-.383 1.504-.383 2.187 0 .657.41 1.094 1.12 1.094 1.886M9 8.124c-.629 0-1.203.355-1.531.875-.301.547-.301 1.23 0 1.75.328.547.902.875 1.531.875.602 0 1.176-.328 1.504-.875.3-.52.3-1.203 0-1.75-.328-.52-.902-.875-1.504-.875M9 12.5a2.65 2.65 0 0 1-2.297-1.312 2.65 2.65 0 0 1 0-2.626C7.195 7.77 8.043 7.25 9 7.25c.93 0 1.777.52 2.27 1.313.464.82.464 1.832 0 2.624-.493.82-1.34 1.313-2.27 1.313m-1.613 1.75c-1.477 0-2.707 1.176-2.762 2.625h8.723c-.055-1.45-1.286-2.625-2.762-2.625zm0-.875h3.199a3.664 3.664 0 0 1 3.664 3.664c0 .41-.328.711-.738.711H4.46a.706.706 0 0 1-.711-.71c0-2.024 1.613-3.665 3.637-3.665m6.863-8.75c-.492 0-.902.273-1.148.656-.247.41-.247.93 0 1.313.246.41.656.656 1.148.656.465 0 .875-.246 1.121-.656.246-.383.246-.903 0-1.313-.246-.383-.656-.656-1.121-.656m0 3.5c-.793 0-1.504-.41-1.914-1.094-.383-.656-.383-1.504 0-2.187.41-.657 1.121-1.094 1.914-1.094.766 0 1.477.438 1.887 1.094.383.683.383 1.531 0 2.187-.41.684-1.121 1.094-1.887 1.094m.438 1.75H12.5c0-.3-.055-.574-.11-.875h2.297c1.668 0 3.063 1.395 3.063 3.063a.45.45 0 0 1-.437.437.43.43 0 0 1-.438-.437 2.194 2.194 0 0 0-2.187-2.188m-9.188 0H3.313c-1.231 0-2.188.984-2.188 2.188a.45.45 0 0 1-.437.437.43.43 0 0 1-.438-.437A3.075 3.075 0 0 1 3.313 9h2.296c-.082.3-.109.574-.109.875' />
    </g>
    <defs>
      <clipPath id='183a9c333cc8670c568eaf86153a84c3__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedUsersSmRegularIcon);
export default ForwardRef;
