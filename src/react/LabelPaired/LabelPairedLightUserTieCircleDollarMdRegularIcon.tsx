import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLightUserTieCircleDollarMdRegularIcon = (
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
      <path d='M0 19.063c0-2.47 1.75-4.532 4.094-4.97.218-.03.437.095.5.282l1.031 2.156c.219-.656.438-1.343.656-2.031H5.97c-.25 0-.5-.219-.5-.5 0-.25.25-.5.5-.5h2c.281 0 .5.25.5.5 0 .281-.219.5-.5.5h-.282c.22.688.438 1.375.657 2.031.344-.718.687-1.437 1-2.156a.525.525 0 0 1 .531-.281c.094.031.188.031.281.062a5.5 5.5 0 0 0-.156 1.25c-.562 1.188-1.094 2.344-1.656 3.531 0 .032-.031.063-.031.063h2.937c.313.406.656.719 1.063 1H.938A.92.92 0 0 1 0 19.063M1 19h4.656s-.031-.031-.031-.062c-.594-1.25-1.156-2.5-1.75-3.75A3.965 3.965 0 0 0 1 19M3 8c0-1.406.75-2.75 2-3.437 1.219-.72 2.75-.72 4 0 1.219.687 2 2.03 2 3.437 0 1.438-.781 2.75-2 3.469-1.25.719-2.781.719-4 0A3.98 3.98 0 0 1 3 8m1.375-1.5c-.531.938-.531 2.094 0 3A3.03 3.03 0 0 0 7 11a2.98 2.98 0 0 0 2.594-1.5c.531-.906.531-2.062 0-3A3.05 3.05 0 0 0 7 5c-1.094 0-2.062.594-2.625 1.5m1.844 11.375c.125.219.218.438.312.656a.506.506 0 0 0 .907 0c.093-.218.218-.437.312-.656-.25-.75-.5-1.531-.75-2.281zM11 15.5c0-2.469 2-4.5 4.5-4.5 2.469 0 4.5 2.031 4.5 4.5 0 2.5-2.031 4.5-4.5 4.5-2.5 0-4.5-2-4.5-4.5m1 0c0 1.938 1.563 3.5 3.5 3.5 1.906 0 3.5-1.562 3.5-3.5 0-1.906-1.594-3.5-3.5-3.5-1.937 0-3.5 1.594-3.5 3.5m1.75-.844c-.031-.594.313-.969.688-1.156q.234-.14.562-.187V13c0-.281.219-.5.5-.5.25 0 .5.219.5.5v.313c.188.03.375.062.531.093.282.063.438.344.375.625-.062.25-.343.438-.593.344-.313-.062-.563-.125-.844-.125-.188 0-.406.063-.563.125-.094.063-.125.094-.156.125v.094c0 .031 0 .062.125.156.188.094.438.156.75.25h.031c.281.094.656.188.938.375.312.188.625.5.656 1 0 .563-.312.938-.687 1.156a2 2 0 0 1-.563.188v.343c0 .282-.25.5-.5.5a.494.494 0 0 1-.5-.5v-.375c-.281-.03-.531-.125-.75-.187-.062-.031-.125-.031-.156-.062-.281-.063-.406-.344-.344-.625.094-.25.375-.407.625-.313.063 0 .125.031.188.031.374.125.656.219.937.219.219 0 .438-.031.594-.094l.125-.125s.031-.062.031-.125c0-.062-.031-.093-.156-.187-.157-.094-.407-.157-.719-.25-.031 0-.062 0-.062-.031-.282-.063-.626-.157-.907-.313-.312-.156-.625-.469-.656-.969' />
    </g>
    <defs>
      <clipPath id='a1136e7ddcc7eb5abc78d95461ed3eae__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLightUserTieCircleDollarMdRegularIcon);
export default ForwardRef;
