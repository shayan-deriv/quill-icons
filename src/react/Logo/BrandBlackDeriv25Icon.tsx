import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const BrandBlackDeriv25Icon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 101 72'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g fill='#414652'>
      <path d='M86.57 34.548c-1.863-1.764-4.212-3.218-7.056-4.363-2.817-1.134-6.3-1.867-10.18-2.198l1.72-5.292H57.68l-5.148 15.873c4.572 0 8.91.244 12.078.736 3.168.49 5.706 1.177 7.596 2.059 1.899.882 3.267 1.96 4.122 3.234a7.55 7.55 0 0 1 1.278 4.265q0 5.588-3.726 8.235c-2.484 1.764-6.084 2.648-10.791 2.648-2.412 0-4.932-.359-7.542-1.079-2.62-.718-6.156-2.04-8.442-3.412H3.95c-.261.487-.666 1.409-.909 1.913C1.602 60.174.585 63.734 0 67.853h43.1c1.341.662 3.078 1.083 4.653 1.598a45 45 0 0 0 5.49 1.422c1.863.358 3.672.637 5.436.833 1.764.197 3.339.294 4.707.294q7.06 0 12.447-1.716c3.6-1.143 6.606-2.76 9.027-4.852a19.7 19.7 0 0 0 5.436-7.647c1.215-3.006 1.818-6.34 1.818-10q0-3.823-1.377-7.206c-.918-2.255-2.304-4.265-4.167-6.03M63.656 4.334l-4.095 12.6 37.187-.007 4.095-12.593z' />
      <path d='M53.216 9.9a15.6 15.6 0 0 0-3.88-5.146c-1.664-1.47-3.626-2.63-5.876-3.48C41.201.424 38.771 0 36.152 0c-4.185 0-8.307.452-12.159 1.96-6.516 2.556-11.448 6.927-11.448 6.927l4.689 10.524c3.006-2.288 5.778-4.003 8.334-5.146 2.547-1.143 5.157-1.715 7.839-1.715 1.899 0 3.447.572 4.653 1.715 1.215 1.145 1.818 2.567 1.818 4.264 0 1.374-.297 2.68-.882 3.922s-1.521 2.567-2.79 3.971c-1.278 1.406-2.943 2.941-5.004 4.608a540 540 0 0 1-7.497 5.931 845 845 0 0 0-8.73 6.813c-2.259 1.787-4.76 3.699-6.624 5.719h18a76 76 0 0 1 1.611-1.257 159 159 0 0 1 5.301-3.823 119 119 0 0 0 5.337-3.922c3.006-2.353 5.544-4.477 7.596-6.372 2.06-1.895 3.708-3.759 4.959-5.59q1.85-2.744 2.646-5.685.783-2.94.783-6.667 0-3.334-1.377-6.275z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(BrandBlackDeriv25Icon);
export default ForwardRef;
