import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedDerivP2pMdRegularIcon = (
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
      <path d='M6 9.75c-.187 0-.406.031-.656.031-.219.031-.469.063-.688.094v4.438h1v-1.5H6c.656 0 1.188-.126 1.531-.376.375-.218.563-.624.563-1.156s-.188-.937-.531-1.156C7.188 9.875 6.688 9.75 6 9.75m.063.875c.156 0 .28 0 .406.031.125.031.218.063.312.094a.42.42 0 0 1 .188.219c.062.062.062.187.062.312 0 .25-.062.438-.25.531-.187.094-.437.126-.781.126h-.344v-1.282c.063 0 .125-.031.188-.031zm5.156.375a1.5 1.5 0 0 0-.094-.531 1.2 1.2 0 0 0-.281-.406 1.7 1.7 0 0 0-.469-.25 2.2 2.2 0 0 0-.687-.094c-.282 0-.563.062-.813.187a1.9 1.9 0 0 0-.656.438l.469.656c.03-.031.093-.062.156-.094.062-.062.125-.125.219-.156.062-.062.156-.094.28-.125.095-.062.188-.062.313-.062.156 0 .313.03.406.093.126.094.157.219.157.406 0 .094 0 .188-.063.282-.031.062-.094.156-.156.25l-.25.25-.281.281c-.125.125-.281.25-.406.375-.126.125-.25.281-.376.438-.093.156-.187.312-.25.468a1.8 1.8 0 0 0-.093.594v.312h3V13.5H9.406c.031-.031.063-.094.094-.156.063-.063.125-.125.188-.219.093-.062.156-.156.218-.219l.219-.219.375-.374c.156-.126.25-.25.375-.407a2 2 0 0 0 .25-.437q.094-.235.094-.469m2-1.25h.031c-.187 0-.406.031-.656.031-.25.031-.5.063-.719.094v4.438h1.031v-1.5h.313c.656 0 1.187-.126 1.562-.376.344-.218.531-.624.531-1.156s-.187-.937-.53-1.156c-.376-.25-.876-.375-1.563-.375m.094.875c.124 0 .28 0 .374.031.126.031.25.063.313.094a.42.42 0 0 1 .188.219c.062.062.093.187.093.312 0 .25-.094.438-.281.531-.156.094-.437.126-.781.126h-.313v-1.282c.031 0 .094-.031.156-.031zM15 5H5c-1.125 0-2 .906-2 2v10c0 1.125.875 2 2 2h10c1.094 0 2-.875 2-2V7c0-1.094-.906-2-2-2M5 4h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3' />
    </g>
    <defs>
      <clipPath id='54fcf848f96f0bd97b58f4025320aeb6__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedDerivP2pMdRegularIcon);
export default ForwardRef;
