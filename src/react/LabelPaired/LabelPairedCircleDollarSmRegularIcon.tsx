import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleDollarSmRegularIcon = (
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
      <path d='M13.125 10.75a6.3 6.3 0 0 0-.82-3.062 6.3 6.3 0 0 0-2.242-2.243 6.12 6.12 0 0 0-6.126 0 6.3 6.3 0 0 0-2.242 2.242 6.3 6.3 0 0 0-.82 3.063 6.3 6.3 0 0 0 .82 3.063 6.3 6.3 0 0 0 2.242 2.242 6.12 6.12 0 0 0 6.126 0 6.3 6.3 0 0 0 2.242-2.242q.792-1.395.82-3.063M0 10.75q.027-1.914.93-3.5.93-1.586 2.57-2.57 1.668-.93 3.5-.93t3.5.93q1.64.984 2.57 2.57.903 1.586.93 3.5-.027 1.914-.93 3.5-.93 1.586-2.57 2.57-1.668.93-3.5.93t-3.5-.93q-1.64-.984-2.57-2.57-.903-1.586-.93-3.5m7.438-3.719v.63q.546.054 1.093.218.028.027.055.027t.055.028q.383.136.3.52-.136.382-.52.327a2 2 0 0 0-.19-.082 10 10 0 0 0-.63-.136q-.82-.11-1.367.136-.491.247-.52.547-.081.383.274.574.438.274 1.23.465h.028q.793.191 1.477.602.792.574.656 1.531-.218.903-1.04 1.203-.409.165-.902.191v.657q-.054.41-.437.437-.41-.027-.437-.437v-.711a13 13 0 0 1-.903-.219 7 7 0 0 1-.547-.191q-.383-.165-.273-.547.136-.355.547-.274l.547.164q.492.165.765.22.82.108 1.313-.11.436-.192.492-.547.082-.41-.274-.656-.52-.3-1.12-.438a.24.24 0 0 0-.11-.027.2.2 0 0 0-.082-.027 6 6 0 0 1-1.422-.547 1.75 1.75 0 0 1-.547-.602q-.218-.383-.11-.875.22-.875 1.04-1.203.329-.11.684-.191V7.03q.027-.41.437-.437.383.027.438.437' />
    </g>
    <defs>
      <clipPath id='43cf2944e2593d1ffc23ff4ee3a012ea__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleDollarSmRegularIcon);
export default ForwardRef;
