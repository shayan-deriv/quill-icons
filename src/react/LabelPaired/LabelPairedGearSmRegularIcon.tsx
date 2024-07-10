import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGearSmRegularIcon = (
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
      <path d='m6.098 4.79-.383 1.312c-.082.328-.328.574-.602.71-.218.11-.41.22-.601.329a1.11 1.11 0 0 1-.93.191L2.27 7.004h-.11c-.164.191-.3.383-.41.601l-.137.192c-.11.219-.218.437-.3.656 0 .027.027.082.054.11l.957.957c.219.246.328.601.301.902v.683c.027.301-.082.63-.3.875l-.958.985a.2.2 0 0 0-.054.11c.082.218.19.437.3.656l.11.19c.136.192.273.411.41.602h.137l1.312-.328c.328-.082.684 0 .93.164.191.137.383.246.601.356.274.137.52.383.602.71l.383 1.313c0 .028.027.055.054.082.274.055.547.055.848.055.273 0 .547 0 .82-.055.028-.027.055-.054.055-.082l.383-1.312c.082-.328.328-.574.601-.711.22-.11.41-.219.602-.356.273-.164.601-.246.93-.164l1.312.328h.137c.137-.191.273-.41.41-.601l.11-.192c.109-.218.218-.437.3-.656a.2.2 0 0 0-.055-.11l-.957-.984a1.19 1.19 0 0 1-.3-.875c0-.109.027-.218.027-.355 0-.11-.027-.219-.027-.328a1.25 1.25 0 0 1 .3-.902l.957-.957a.2.2 0 0 0 .055-.11 7 7 0 0 0-.3-.656l-.11-.192c-.137-.218-.273-.41-.41-.601h-.137l-1.312.328c-.328.082-.657 0-.93-.164a4.4 4.4 0 0 0-.602-.356c-.273-.136-.52-.382-.601-.71l-.383-1.313a.2.2 0 0 0-.055-.11A8 8 0 0 0 7 4.626c-.3 0-.574.027-.848.055a.2.2 0 0 0-.054.11M7 3.75c.355 0 .684.027 1.04.082.054.027.081.027.136.055.246.136.465.383.547.656l.382 1.312c0 .055.055.137.137.165.246.109.492.246.711.41.082.054.164.082.219.054l1.34-.328a1.04 1.04 0 0 1 .847.137l.11.11c.191.218.355.492.52.765l.136.191v.028c.137.273.273.547.383.82.027.055.027.082.027.137.027.3-.082.601-.3.82l-.958.984c-.027.028-.054.11-.054.192 0 .137.027.273.027.41s-.027.273-.027.41c0 .11.027.192.054.219l.957.984c.22.219.329.52.301.82 0 .028 0 .083-.027.137-.11.274-.246.547-.383.82l-.137.22c-.164.273-.328.519-.547.765-.027.055-.054.082-.082.11a1.09 1.09 0 0 1-.875.136l-1.312-.328c-.055-.027-.137 0-.219.055-.219.136-.465.273-.71.41-.083.027-.138.11-.138.164l-.382 1.285c-.082.3-.301.547-.547.684-.055.027-.082.027-.137.054-.355.028-.684.055-1.039.055s-.71-.027-1.066-.055c-.055-.027-.082-.027-.137-.054a1.15 1.15 0 0 1-.547-.684l-.383-1.285c0-.055-.054-.137-.137-.164a3.7 3.7 0 0 1-.71-.41c-.082-.055-.165-.055-.22-.055l-1.312.328c-.3.082-.601.027-.847-.137a.4.4 0 0 1-.11-.082c-.218-.246-.383-.52-.547-.793l-.109-.191-.027-.027c-.137-.274-.274-.547-.383-.82 0-.055-.028-.083-.028-.137 0-.301.083-.602.301-.82l.957-.985c.028-.027.055-.11.055-.219v-.82c0-.082-.027-.164-.055-.192l-.957-.984c-.218-.219-.3-.52-.3-.82 0-.055.027-.082.027-.137.11-.273.246-.547.383-.82l.027-.028.11-.191c.163-.273.355-.547.546-.766a.21.21 0 0 1 .11-.109c.246-.164.547-.219.847-.137l1.313.328c.054.028.136 0 .219-.054.218-.137.464-.301.71-.41.082-.028.137-.11.137-.165l.383-1.312c.082-.273.3-.52.547-.656.055-.028.082-.028.137-.055Q6.466 3.75 7 3.75m-1.531 7c0 .574.273 1.066.765 1.34a1.531 1.531 0 1 0 0-2.652 1.47 1.47 0 0 0-.765 1.312m3.937 0c0 .875-.465 1.668-1.203 2.105-.765.41-1.668.41-2.406 0-.766-.437-1.203-1.23-1.203-2.105 0-.848.437-1.64 1.203-2.078.738-.41 1.64-.41 2.406 0a2.43 2.43 0 0 1 1.203 2.078' />
    </g>
    <defs>
      <clipPath id='e2fc14c3873b99bcb2d9ec8aa20f7cba__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGearSmRegularIcon);
export default ForwardRef;
