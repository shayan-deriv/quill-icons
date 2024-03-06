import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedUsersSmRegularIcon = (
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
      <path d='M2.875 5.938q.027.738.656 1.148.657.328 1.313 0 .629-.41.656-1.149-.027-.738-.656-1.148a1.4 1.4 0 0 0-1.313 0q-.629.41-.656 1.149m3.5 0q-.027 1.23-1.094 1.886-1.094.601-2.187 0Q2.027 7.168 2 5.938q.027-1.23 1.094-1.887 1.094-.601 2.187 0 1.067.656 1.094 1.886M9 8.124q-.985.027-1.504.875-.492.875 0 1.75.52.848 1.504.875.985-.027 1.504-.875.492-.875 0-1.75-.52-.848-1.504-.875M9 12.5q-.71 0-1.312-.355a2.631 2.631 0 0 1-1.312-2.27 2.63 2.63 0 0 1 1.311-2.27A2.53 2.53 0 0 1 9 7.25q.71 0 1.313.355.6.356.957.957.355.63.355 1.313a2.63 2.63 0 0 1-1.312 2.27A2.53 2.53 0 0 1 9 12.5m-1.613 1.75q-1.122.027-1.914.766-.765.738-.848 1.859h8.75q-.082-1.12-.848-1.86-.792-.738-1.914-.765zm0-.875h3.226q1.532.027 2.57 1.066 1.04 1.04 1.067 2.57-.056.684-.738.739H4.488q-.683-.056-.738-.738.027-1.532 1.066-2.57 1.04-1.04 2.57-1.067m6.863-8.75q-.738.027-1.148.656a1.4 1.4 0 0 0 0 1.313q.41.629 1.148.656.738-.027 1.148-.656a1.4 1.4 0 0 0 0-1.313q-.41-.629-1.148-.656m0 3.5q-1.23-.027-1.887-1.094-.6-1.094 0-2.187.657-1.067 1.887-1.094 1.23.027 1.887 1.094.6 1.094 0 2.187-.657 1.067-1.887 1.094m.438 1.75H12.5q0-.465-.11-.875h2.297q1.314.027 2.16.902.876.848.903 2.16-.027.411-.437.438-.411-.027-.438-.437-.027-.93-.629-1.56-.63-.6-1.558-.628m-9.188 0H3.313q-.93.027-1.56.629-.6.63-.628 1.559-.027.41-.437.437-.411-.027-.438-.437.027-1.314.902-2.16Q2 9.026 3.312 9H5.61q-.11.41-.109.875' />
    </g>
    <defs>
      <clipPath id='98c2531ce3ae6bbe1e61b1d1429b8254__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedUsersSmRegularIcon);
export default ForwardRef;
