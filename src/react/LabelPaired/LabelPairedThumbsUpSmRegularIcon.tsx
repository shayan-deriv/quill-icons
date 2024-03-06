import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedThumbsUpSmRegularIcon = (
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
      <path d='m7.902 5.992-.136.438Q7.3 8.125 5.796 9.11l-.081.054q-.328.191-.547.52-.273.3-.602.109-.328-.246-.109-.602.3-.465.793-.765l.082-.055a3.7 3.7 0 0 0 1.586-2.16l.137-.465q.19-.63.71-.93.548-.3 1.176-.136.601.19.93.71.3.547.137 1.176l-.11.438a6.5 6.5 0 0 1-.437 1.121h2.789q.738.027 1.23.52.493.492.52 1.23-.027.738-.52 1.23.082.247.082.52-.028.793-.574 1.285.137.328.137.684-.055 1.011-.875 1.504v.027q-.027.738-.52 1.23-.492.493-1.23.52H8.04a3.04 3.04 0 0 1-1.696-.52l-1.04-.683a3.3 3.3 0 0 1-.874-.875q-.165-.356.136-.602.356-.19.602.11.246.383.629.629l1.039.71q.548.357 1.23.356H10.5a.85.85 0 0 0 .629-.246.85.85 0 0 0 .246-.629.6.6 0 0 0-.027-.191q-.028-.355.3-.493.575-.218.602-.847 0-.3-.191-.52a.55.55 0 0 1-.082-.383.41.41 0 0 1 .246-.273q.437-.246.464-.793a.87.87 0 0 0-.109-.437q-.165-.329.137-.575.383-.246.41-.738a.85.85 0 0 0-.246-.629A.85.85 0 0 0 12.25 9H8.723a.43.43 0 0 1-.383-.219.42.42 0 0 1 .027-.437q.438-.738.684-1.559l.11-.465q.108-.574-.466-.793-.574-.11-.793.465M.875 9.875V16h1.75V9.875zm-.875 0q0-.383.246-.629A.85.85 0 0 1 .875 9h1.75q.383 0 .629.246a.85.85 0 0 1 .246.629V16a.85.85 0 0 1-.246.629.85.85 0 0 1-.629.246H.875a.85.85 0 0 1-.629-.246A.85.85 0 0 1 0 16z' />
    </g>
    <defs>
      <clipPath id='19ef62d6ac1e04e7ce971cfb1c365802__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedThumbsUpSmRegularIcon);
export default ForwardRef;
