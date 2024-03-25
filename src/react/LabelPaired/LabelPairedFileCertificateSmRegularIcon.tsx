import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileCertificateSmRegularIcon = (
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
      <path d='M13.125 16V9h-3.062A1.296 1.296 0 0 1 8.75 7.688V4.624h-3.5a.88.88 0 0 0-.875.875v1.75c-.246 0-.492.027-.71.11-.056.027-.138.081-.165.081v.028V5.5c0-.957.766-1.75 1.75-1.75h4.266c.328 0 .683.164.93.41l3.144 3.145c.246.246.41.601.41.93V16c0 .984-.793 1.75-1.75 1.75H6.043c.055-.137.082-.273.082-.437v-.438h6.125a.88.88 0 0 0 .875-.875m-.027-7.875c-.028-.055-.055-.137-.11-.191L9.816 4.762c-.054-.055-.136-.082-.191-.11v3.036c0 .246.191.437.438.437zm-6.29 3.5v.027s0 .055.11.274c.164.41.027.902-.328 1.176-.192.136-.219.191-.219.191 0 .027-.027.082-.055.3a.99.99 0 0 1-.875.876c-.109 0-.164.027-.191.027v2.816c0 .165-.11.329-.246.41a.5.5 0 0 1-.438-.027l-1.066-.71-1.094.71c-.11.082-.3.082-.437.028a.48.48 0 0 1-.219-.41v-2.817c-.055 0-.11-.027-.219-.027a1.04 1.04 0 0 1-.875-.875c-.027-.246-.027-.274-.054-.301 0 0-.028-.055-.22-.191a1.025 1.025 0 0 1-.327-1.176c.11-.219.11-.274.11-.301 0 0 0-.055-.11-.273a1.025 1.025 0 0 1 .328-1.176c.191-.137.219-.192.219-.192 0-.027.027-.082.054-.3.082-.465.41-.82.875-.875.246-.028.274-.055.301-.055 0 0 .055-.027.191-.219A1.025 1.025 0 0 1 3.2 8.207c.219.11.274.11.301.11 0 0 .055 0 .273-.11.41-.164.903-.027 1.176.328.164.192.192.219.219.219 0 0 .055.027.273.055.465.054.82.41.875.875.028.218.055.273.055.3 0 0 .027.055.219.192.355.273.492.765.328 1.176-.082.218-.11.273-.11.273M2.626 16.52l.629-.438a.47.47 0 0 1 .465 0l.656.438v-1.395c-.219.027-.41.027-.602-.055-.218-.11-.273-.11-.273-.11-.027 0-.082 0-.3.11a1.04 1.04 0 0 1-.575.055zm-1.586-4.895c0 .246-.082.438-.164.629-.027.055 0 .11.055.164.164.137.328.246.437.438.11.19.137.41.164.628 0 .055.055.11.11.11.218.027.437.054.629.164.19.11.328.273.437.437.055.055.11.082.164.055.192-.082.383-.164.629-.164.219 0 .41.082.602.164.054.027.109 0 .164-.055.136-.164.246-.328.437-.437.192-.11.41-.137.629-.164.055 0 .11-.055.11-.11.027-.218.054-.437.163-.629.11-.19.274-.328.465-.437.028-.055.055-.11.028-.164-.082-.191-.164-.383-.164-.629 0-.219.082-.41.164-.602.027-.054 0-.109-.028-.164-.191-.136-.355-.246-.465-.437-.109-.192-.136-.41-.164-.629a.12.12 0 0 0-.109-.11c-.219-.027-.437-.054-.629-.163-.191-.11-.3-.274-.437-.465-.055-.028-.11-.055-.164-.028-.192.082-.383.164-.602.164-.246 0-.437-.082-.629-.164-.055-.027-.11 0-.164.028-.137.191-.246.355-.437.465-.192.109-.41.136-.63.164a.12.12 0 0 0-.109.109c-.027.219-.054.438-.164.629s-.273.3-.437.437c-.055.055-.082.11-.055.164.082.192.164.383.164.602' />
    </g>
    <defs>
      <clipPath id='c084d7844c65b93b896e5e54412fadcc__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileCertificateSmRegularIcon);
export default ForwardRef;
