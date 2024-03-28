import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileCertificateSmFillIcon = (
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
      <path d='M3.5 5.5c0-.957.766-1.75 1.75-1.75h4.375v3.5c0 .492.383.875.875.875H14V16c0 .984-.793 1.75-1.75 1.75H6.043c.055-.137.082-.273.082-.437v-2.188c.027 0 .055-.027.082-.027.191-.082.41-.22.574-.438.164-.191.274-.465.301-.738.027-.082.027-.137.027-.192.055-.027.082-.054.164-.109a1.57 1.57 0 0 0 .493-1.805q-.082-.123-.082-.164c0-.054.027-.109.082-.191a1.58 1.58 0 0 0-.493-1.805c-.082-.054-.109-.082-.164-.11 0-.054 0-.108-.027-.19A1.51 1.51 0 0 0 5.77 8.042c-.082-.027-.137-.027-.192-.027-.027-.028-.055-.082-.11-.164a1.52 1.52 0 0 0-1.804-.465c-.055.027-.137.054-.164.082zM14 7.25h-3.5v-3.5zm-11.02.93.438.164c.027.027.11.027.164 0l.41-.164a.72.72 0 0 1 .793.191l.274.383a.15.15 0 0 0 .136.082l.465.055c.3.054.52.273.574.574l.055.465c0 .054.027.11.082.136l.356.274a.65.65 0 0 1 .218.765l-.164.438a.23.23 0 0 0 0 .191l.164.41c.11.274.028.602-.191.766l-.383.3a.15.15 0 0 0-.082.138l-.055.464a.7.7 0 0 1-.574.575l-.41.054v2.871c0 .165-.11.329-.246.41a.5.5 0 0 1-.438-.027l-1.066-.71-1.094.71c-.11.082-.3.082-.437.028a.48.48 0 0 1-.219-.41V14.44l-.437-.054c-.301-.055-.52-.274-.547-.575l-.082-.464a.15.15 0 0 0-.082-.137l-.356-.3c-.246-.165-.328-.493-.219-.766l.192-.438v-.164l-.192-.41c-.109-.274-.027-.602.22-.766l.355-.3a.15.15 0 0 0 .082-.137l.054-.465c.055-.3.274-.52.575-.574l.464-.055a.15.15 0 0 0 .137-.082l.3-.356c.165-.246.493-.328.766-.218m2.27 3.445c0-.602-.355-1.176-.875-1.504-.547-.3-1.23-.3-1.75 0a1.77 1.77 0 0 0-.875 1.504c0 .629.328 1.203.875 1.531.52.301 1.203.301 1.75 0 .52-.328.875-.902.875-1.531' />
    </g>
    <defs>
      <clipPath id='c77c18c679ea7fb3385632731f2d9e83__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileCertificateSmFillIcon);
export default ForwardRef;
