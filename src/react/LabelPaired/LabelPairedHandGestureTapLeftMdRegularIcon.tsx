import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedHandGestureTapLeftMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={24}
    viewBox='0 0 20 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3.281 5C3.125 5 3 5.156 3 5.313v13.406a.28.28 0 0 0 .281.281c.156 0 .313-.125.313-.281V5.312A.336.336 0 0 0 3.28 5M4 10.5c0-1.094.906-2 2-2s2 .906 2 2c0 .375-.094.688-.25.969l.594 1.219c.094-.094.219-.22.375-.282a1.27 1.27 0 0 1 1.25.125c.094-.062.187-.125.281-.156a1.27 1.27 0 0 1 1.25.125l.063-.062c.03 0 .062-.032.093-.032.594-.312 1.375-.031 1.656.594l.813 1.688c.5 1.093.031 2.406-1.062 2.906l-2.376 1.156a2.86 2.86 0 0 1-1.343.25h-.219c-1-.031-1.937-.656-2.375-1.594l-.156-.375a1.43 1.43 0 0 1 .031-1.375l.25-.469a1.5 1.5 0 0 1 .094-.218L5.812 12.5A1.98 1.98 0 0 1 4 10.5m1.281.938h.032c-.282-.532-.032-1.22.5-1.47.53-.25 1.218 0 1.468.532l.094.219V10.5c0-.75-.625-1.375-1.375-1.375-.781 0-1.406.625-1.406 1.375 0 .594.375 1.125.875 1.313zm3 4.812c.063.156-.031.344-.156.406-.156.094-.344.032-.406-.156l-.407-.844-.156.313a.93.93 0 0 0 0 .812l.157.344a2.24 2.24 0 0 0 1.843 1.281l.188-.031c.375.031.719-.031 1.062-.187l2.406-1.125c.782-.375 1.094-1.313.75-2.094l-.812-1.688a.67.67 0 0 0-.844-.312.8.8 0 0 0-.187.156c-.063.031-.156.094-.25.094-.063 0-.156-.063-.219-.125a.626.626 0 0 0-.75-.156.8.8 0 0 0-.25.218c-.062.094-.156.156-.25.156a.4.4 0 0 1-.281-.124.6.6 0 0 0-.75-.22.65.65 0 0 0-.344.5c-.031.126-.125.22-.281.25-.125.032-.25-.03-.313-.155L6.72 10.75a.51.51 0 0 0-.625-.219c-.25.125-.344.406-.219.625z' />
    </g>
    <defs>
      <clipPath id='5e85b110728a757b31e88a7cf38fa66f__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHandGestureTapLeftMdRegularIcon);
export default ForwardRef;
