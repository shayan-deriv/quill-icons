import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFingerprintSmRegularIcon = (
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
      <path d='M.875 10.75v1.313a.45.45 0 0 1-.437.437.43.43 0 0 1-.438-.437V10.75c0-3.855 3.117-7 7-7a7 7 0 0 1 5.441 2.598.47.47 0 0 1-.082.629c-.191.136-.464.109-.601-.082C10.637 5.527 8.914 4.625 7 4.625 3.61 4.625.875 7.387.875 10.75m12.852-1.86c.164.602.273 1.231.273 1.86v1.313a.45.45 0 0 1-.437.437.43.43 0 0 1-.438-.437V10.75c0-.547-.082-1.094-.246-1.613-.055-.246.082-.492.328-.547a.437.437 0 0 1 .52.3M7 5.938h-.027c2.68 0 4.812 2.16 4.812 4.813v.684c0 .82-.027 1.64-.137 2.46-.027.22-.218.356-.437.356a.432.432 0 0 1-.438-.492c.11-.766.165-1.531.165-2.324v-.684c0-2.16-1.778-3.937-3.938-3.937-.492 0-.957.109-1.395.246-.164.082-.382.027-.52-.11-.19-.219-.136-.574.138-.656A4.8 4.8 0 0 1 7 5.937M3.965 7.66a.46.46 0 0 1-.027.602 4 4 0 0 0-.876 2.488v.684c0 .847-.109 1.695-.328 2.515a.41.41 0 0 1-.41.301.45.45 0 0 1-.437-.547c.191-.738.3-1.504.3-2.27v-.683c0-1.176.41-2.27 1.149-3.117.164-.192.465-.164.629.027M7 8.125a2.626 2.626 0 0 1 2.625 2.625v.684c0 1.148-.137 2.27-.355 3.363-.028.191-.22.328-.41.328a.427.427 0 0 1-.438-.52c.219-1.039.328-2.105.328-3.171v-.684C8.75 9.793 7.957 9 7 9c-.984 0-1.75.793-1.75 1.75v.684c0 1.148-.164 2.297-.492 3.39a.41.41 0 0 1-.41.301c-.301 0-.493-.273-.41-.574.273-1.012.437-2.051.437-3.117v-.684A2.626 2.626 0 0 1 7 8.125m.438 2.625v.684c0 1.777-.329 3.527-.985 5.195l-.164.41c-.082.246-.328.355-.547.246-.246-.082-.355-.328-.246-.547l.137-.437c.601-1.531.93-3.2.93-4.867v-.684A.45.45 0 0 1 7 10.313a.47.47 0 0 1 .438.437' />
    </g>
    <defs>
      <clipPath id='a12ccf9f45a5d6fc0004e802ce717dac__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFingerprintSmRegularIcon);
export default ForwardRef;
