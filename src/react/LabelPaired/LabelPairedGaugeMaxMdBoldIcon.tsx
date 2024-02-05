import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGaugeMaxMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M8 18.5q1.781 0 3.25-.875 1.469-.843 2.375-2.375A6.45 6.45 0 0 0 14.5 12a6.45 6.45 0 0 0-.875-3.25q-.906-1.53-2.375-2.375Q9.781 5.5 8 5.5t-3.25.875q-1.469.844-2.375 2.375A6.45 6.45 0 0 0 1.5 12q0 1.72.875 3.25.906 1.531 2.375 2.375Q6.22 18.5 8 18.5M8 4q2.188.03 4 1.063Q13.813 6.125 14.938 8 16 9.906 16 12t-1.062 4Q13.813 17.875 12 18.938 10.188 19.968 8 20q-2.187-.03-4-1.062Q2.188 17.875 1.063 16 0 14.095 0 12t1.063-4Q2.188 6.124 4 5.063 5.813 4.03 8 4m1 3.5a.97.97 0 0 1-.281.719A.97.97 0 0 1 8 8.5a.97.97 0 0 1-.719-.281A.97.97 0 0 1 7 7.5q0-.437.281-.719A.97.97 0 0 1 8 6.5q.438 0 .719.281A.97.97 0 0 1 9 7.5m-1 9.25q-.75-.03-1.25-.5-.469-.5-.5-1.25.031-.75.5-1.25.5-.469 1.25-.5.5 0 .875.25l3.438-2.375q.624-.344 1.062.219.344.594-.187 1.031l-3.47 2.344q.033.156.032.281-.03.75-.5 1.25-.5.47-1.25.5M12 9a.97.97 0 0 1-.281.719A.97.97 0 0 1 11 10a.97.97 0 0 1-.719-.281A.97.97 0 0 1 10 9q0-.437.281-.719A.97.97 0 0 1 11 8q.438 0 .719.281A.97.97 0 0 1 12 9m-8.5 2q.438 0 .719.281A.97.97 0 0 1 4.5 12a.97.97 0 0 1-.281.719A.97.97 0 0 1 3.5 13a.97.97 0 0 1-.719-.281A.97.97 0 0 1 2.5 12q0-.437.281-.719A.97.97 0 0 1 3.5 11M6 9a.97.97 0 0 1-.281.719A.97.97 0 0 1 5 10a.97.97 0 0 1-.719-.281A.97.97 0 0 1 4 9q0-.437.281-.719A.97.97 0 0 1 5 8q.438 0 .719.281A.97.97 0 0 1 6 9' />
    </g>
    <defs>
      <clipPath id='2ba8cd43abfecf2dc94f520749d6fd7e__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGaugeMaxMdBoldIcon);
export default ForwardRef;
