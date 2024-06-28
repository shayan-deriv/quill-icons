import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLightUserTieCircleDollarSmRegularIcon = (
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
      <path d='M.25 16.93a4.41 4.41 0 0 1 3.582-4.348c.191-.027.383.082.438.246l.902 1.887c.191-.574.383-1.176.574-1.777h-.273a.45.45 0 0 1-.438-.438.47.47 0 0 1 .438-.437h1.75a.45.45 0 0 1 .437.437.43.43 0 0 1-.437.438h-.246c.191.601.382 1.203.574 1.777.3-.63.601-1.258.875-1.887a.46.46 0 0 1 .465-.246c.082.027.164.027.246.055A4.8 4.8 0 0 0 9 13.73c-.492 1.04-.957 2.051-1.45 3.09 0 .028-.027.055-.027.055h2.57c.274.355.575.629.93.875H1.07a.806.806 0 0 1-.82-.82m.875-.055h4.074s-.027-.027-.027-.055c-.52-1.093-1.012-2.187-1.531-3.28a3.47 3.47 0 0 0-2.516 3.335m1.75-9.625c0-1.23.656-2.406 1.75-3.008a3.48 3.48 0 0 1 3.5 0 3.49 3.49 0 0 1 1.75 3.008 3.54 3.54 0 0 1-1.75 3.035 3.48 3.48 0 0 1-3.5 0 3.48 3.48 0 0 1-1.75-3.035m1.203-1.312a2.65 2.65 0 0 0 0 2.625 2.65 2.65 0 0 0 2.297 1.312c.93 0 1.805-.492 2.27-1.312a2.65 2.65 0 0 0 0-2.626 2.67 2.67 0 0 0-2.27-1.312c-.957 0-1.805.52-2.297 1.313m1.613 9.953c.11.191.192.382.274.574a.442.442 0 0 0 .793 0c.082-.192.191-.383.273-.574-.218-.657-.437-1.34-.656-1.996zm4.184-2.078c0-2.16 1.75-3.938 3.938-3.938 2.16 0 3.937 1.777 3.937 3.938a3.94 3.94 0 0 1-3.937 3.937 3.92 3.92 0 0 1-3.938-3.937m.875 0a3.057 3.057 0 0 0 3.063 3.062 3.075 3.075 0 0 0 3.062-3.062c0-1.668-1.395-3.063-3.062-3.063a3.075 3.075 0 0 0-3.063 3.063m1.531-.739c-.027-.52.274-.847.602-1.011q.205-.124.492-.165v-.273c0-.246.191-.437.438-.437a.45.45 0 0 1 .437.437v.273c.164.028.328.055.465.082.246.055.383.301.328.547-.055.22-.3.383-.52.301-.273-.055-.492-.11-.738-.11-.164 0-.355.055-.492.11-.082.055-.11.082-.137.11v.082c0 .027 0 .054.11.136.164.082.382.137.656.219h.027c.246.082.574.164.82.328.274.164.547.438.575.875 0 .492-.274.82-.602 1.012a1.7 1.7 0 0 1-.492.164v.3a.45.45 0 0 1-.437.438.43.43 0 0 1-.438-.437v-.328c-.246-.028-.465-.11-.656-.165-.055-.027-.11-.027-.137-.054-.246-.055-.355-.301-.3-.547.081-.219.327-.356.546-.274.055 0 .11.028.164.028.328.11.574.191.82.191.192 0 .383-.027.52-.082l.11-.11s.027-.054.027-.109c0-.054-.028-.082-.137-.164-.137-.082-.355-.136-.629-.218-.027 0-.055 0-.055-.028-.246-.054-.546-.136-.793-.273a1 1 0 0 1-.574-.848' />
    </g>
    <defs>
      <clipPath id='f3385b089cf162aea4ed796f033a6d17__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLightUserTieCircleDollarSmRegularIcon);
export default ForwardRef;
