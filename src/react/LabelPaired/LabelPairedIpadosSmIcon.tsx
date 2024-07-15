import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedIpadosSmIcon = (
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
      <path d='M11.98 7.852c0-.383-.19-.63-.492-.63-.3 0-.492.22-.492.63s.191.656.492.656.492-.246.492-.656M7.96 7.14c0 .3-.19.464-.519.464H6.95v-.957h.492c.329 0 .52.165.52.493m-1.175 3.172c1.04 0 1.668.792 1.668 2.05 0 1.23-.629 2.024-1.668 2.024s-1.695-.793-1.695-2.024c0-1.258.656-2.05 1.695-2.05m2.57-2.352C9.11 7.988 9 8.07 9 8.234c0 .192.137.274.328.274.274 0 .492-.164.492-.41v-.164zM15.7 5.637c.274.683.301 1.476.301 1.968v6.317c0 .492-.027 1.285-.3 1.969-.137.355-.438.847-.876 1.175a3.7 3.7 0 0 1-.984.52c-.465.137-1.012.164-1.695.164H5.828c-.683 0-1.23-.027-1.695-.164a3.7 3.7 0 0 1-.985-.52c-.437-.328-.738-.82-.875-1.175C2 15.207 2 14.414 2 13.92V7.606c0-.492 0-1.285.273-1.968.137-.356.438-.848.875-1.176.274-.219.575-.383.985-.52.465-.136 1.012-.191 1.695-.191h6.317c.683 0 1.23.055 1.695.191.41.11.71.301.984.52.438.328.739.82.875 1.176m-4.32 1.258c-.465 0-.766.382-.766.957 0 .601.301.957.766.957.273 0 .465-.11.601-.329h.028v.301h.328v-2.57h-.356v1.012h-.027a.67.67 0 0 0-.574-.328M6.566 6.32v2.461h.383v-.847h.574c.465 0 .82-.329.82-.793 0-.493-.327-.82-.82-.82zm-.765.274c.082.027.164-.028.219-.11.054-.054.054-.164 0-.246a.25.25 0 0 0-.22-.11.25.25 0 0 0-.218.11c-.055.082-.055.192 0 .246.055.082.137.137.219.11m.191.328H5.61v1.86h.383zm.793 8.066c1.422 0 2.324-1.011 2.324-2.625 0-1.613-.902-2.652-2.324-2.652-1.45 0-2.351 1.039-2.351 2.652s.902 2.625 2.351 2.625m1.832-6.726c0 .328.274.547.63.547a.6.6 0 0 0 .546-.301h.027v.273h.356V7.523c0-.41-.246-.628-.739-.628-.41 0-.71.19-.738.52h.356c.027-.138.164-.22.383-.22.246 0 .382.11.382.328v.165l-.52.027c-.437.027-.683.219-.683.547m2.871 6.726c1.121 0 1.86-.601 1.86-1.531 0-.738-.41-1.148-1.477-1.395l-.547-.109c-.71-.164-.984-.437-.984-.82 0-.52.492-.848 1.12-.848.684 0 1.122.356 1.177.902h.629c-.028-.847-.766-1.476-1.778-1.476-1.066 0-1.804.601-1.804 1.45 0 .71.464 1.175 1.476 1.394l.547.136c.711.137.984.438.984.848 0 .492-.492.875-1.175.875-.739 0-1.23-.328-1.313-.875h-.629c.055.875.793 1.45 1.914 1.45' />
    </g>
    <defs>
      <clipPath id='ed77f87ad77f97de6008fb2a716ae76a__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedIpadosSmIcon);
export default ForwardRef;
