import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSunBrightSmBoldIcon = (
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
      <path d='M7.656 4.406v1.75c0 .383-.3.657-.656.657a.63.63 0 0 1-.656-.657v-1.75c0-.355.273-.656.656-.656.355 0 .656.3.656.656M11.95 6.73l-1.258 1.258c-.246.246-.656.246-.93 0-.245-.273-.245-.683 0-.93l1.259-1.257c.246-.246.656-.246.93 0 .245.273.245.683 0 .93M2.953 5.8 4.211 7.06c.246.246.246.656 0 .93-.274.245-.684.245-.93 0L2.051 6.73c-.274-.246-.274-.656 0-.93a.644.644 0 0 1 .902 0M.656 10.095h1.75c.356 0 .656.3.656.656 0 .383-.3.656-.656.656H.656A.63.63 0 0 1 0 10.75c0-.355.273-.656.656-.656m10.938 0h1.75c.355 0 .656.3.656.656 0 .383-.3.656-.656.656h-1.75a.63.63 0 0 1-.656-.656c0-.355.273-.656.656-.656M4.21 14.469l-1.258 1.23a.6.6 0 0 1-.902 0 .6.6 0 0 1 0-.902l1.23-1.258c.246-.246.656-.246.93 0 .246.274.246.684 0 .93m6.48-.93 1.258 1.258a.644.644 0 0 1 0 .902c-.273.274-.683.274-.93 0l-1.257-1.23c-.246-.246-.246-.656 0-.93.273-.246.683-.246.93 0m-3.035 1.805v1.75c0 .383-.3.656-.656.656a.63.63 0 0 1-.656-.656v-1.75c0-.356.273-.656.656-.656.355 0 .656.3.656.656M8.75 10.75c0-.602-.355-1.176-.875-1.504-.547-.3-1.23-.3-1.75 0a1.77 1.77 0 0 0-.875 1.504c0 .629.328 1.203.875 1.531.52.301 1.203.301 1.75 0 .52-.328.875-.902.875-1.531m-4.812 0a3 3 0 0 1 1.53-2.625 2.94 2.94 0 0 1 3.063 0c.93.547 1.531 1.531 1.531 2.625a3.07 3.07 0 0 1-1.53 2.652 2.94 2.94 0 0 1-3.063 0 3.01 3.01 0 0 1-1.532-2.652' />
    </g>
    <defs>
      <clipPath id='f72f1e3e7b169a2c2ad1cc43661dc53b__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSunBrightSmBoldIcon);
export default ForwardRef;
