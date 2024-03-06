import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedWhatsappSmIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={22}
    viewBox='0 0 13 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M10.793 6.402a6.2 6.2 0 0 1 1.34 1.97 5.6 5.6 0 0 1 .492 2.323q-.027 1.695-.848 3.063a6.2 6.2 0 0 1-2.214 2.187q-1.368.793-3.063.82a5.9 5.9 0 0 1-2.898-.738l-3.227.848.848-3.145a6.04 6.04 0 0 1-.793-3.035q.027-1.694.82-3.062a6.3 6.3 0 0 1 2.188-2.188q1.367-.792 3.062-.82 2.489.027 4.293 1.777M6.5 15.754q2.133-.055 3.582-1.477 1.45-1.449 1.531-3.582-.054-2.078-1.558-3.554Q8.578 5.664 6.5 5.664q-2.133.027-3.555 1.477-1.449 1.422-1.504 3.554.028 1.45.793 2.68l.11.191-.52 1.86 1.914-.492.192.109q1.175.684 2.57.71m2.762-3.774a.2.2 0 0 1 .082.028q.164.054.219.137.082.136-.11.738-.11.273-.437.465-.329.191-.575.246a2.5 2.5 0 0 1-.738 0q-.383-.082-1.094-.383-1.066-.52-1.722-1.258-.685-.738-.82-.984-.028-.028-.028-.055h-.027a7 7 0 0 1-.328-.547 2.4 2.4 0 0 1-.274-1.012q.027-.52.192-.82.164-.3.3-.41.028-.027.028-.055.245-.19.41-.164h.328q.136-.081.3.246.056.137.165.356.11.273.191.492.082.246.11.273a.3.3 0 0 1 .027.274q-.219.383-.356.492-.19.165-.082.328.411.738.903 1.121t1.148.684q.219.136.328-.027.083-.082.246-.274.138-.192.247-.328.136-.192.328-.055.135.056.52.219.382.192.519.273' />
    </g>
    <defs>
      <clipPath id='79361d834ec0c04d70100b115ffef236__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedWhatsappSmIcon);
export default ForwardRef;
