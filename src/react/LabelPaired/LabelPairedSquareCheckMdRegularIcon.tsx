import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSquareCheckMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={24}
    viewBox='0 0 14 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2 6a.97.97 0 0 0-.719.281A.97.97 0 0 0 1 7v10q0 .438.281.719A.97.97 0 0 0 2 18h10a.97.97 0 0 0 .719-.281A.97.97 0 0 0 13 17V7a.97.97 0 0 0-.281-.719A.97.97 0 0 0 12 6zM0 7q.03-.843.594-1.406Q1.157 5.032 2 5h10q.844.03 1.406.594Q13.97 6.156 14 7v10q-.03.844-.594 1.406-.563.563-1.406.594H2q-.843-.03-1.406-.594Q.032 17.844 0 17zm10.344 3.344-4 4q-.345.312-.688 0l-2-2q-.312-.345 0-.688.345-.312.688 0L6 13.281l3.656-3.625q.345-.312.688 0 .312.345 0 .688' />
    </g>
    <defs>
      <clipPath id='4ae5b7fad525ad620f12ddb7db7b73b9__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSquareCheckMdRegularIcon);
export default ForwardRef;
