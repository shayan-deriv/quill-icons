import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedIpadosMdIcon = (
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
      <path d='M13.406 8.688c0-.438-.219-.72-.562-.72s-.563.25-.563.72c0 .468.219.75.563.75s.562-.282.562-.75m-4.594-.813c0 .344-.218.531-.593.531h-.563V7.312h.563c.375 0 .594.188.594.563M7.47 11.5c1.187 0 1.906.906 1.906 2.344 0 1.406-.719 2.312-1.906 2.312-1.188 0-1.938-.906-1.938-2.312 0-1.438.75-2.344 1.938-2.344m2.937-2.687c-.281.03-.406.124-.406.312 0 .219.156.313.375.313.313 0 .563-.188.563-.47v-.187zm7.25-2.657c.313.782.344 1.688.344 2.25v7.219c0 .563-.031 1.469-.344 2.25-.156.406-.5.969-1 1.344-.312.218-.656.437-1.125.593-.531.157-1.156.188-1.937.188H6.375c-.781 0-1.406-.031-1.937-.187-.47-.157-.813-.375-1.125-.594-.5-.375-.844-.938-1-1.344C2 17.094 2 16.188 2 15.625V8.406c0-.562 0-1.469.313-2.25.156-.406.5-.968 1-1.343a3.5 3.5 0 0 1 1.124-.594C4.97 4.062 5.595 4 6.376 4h7.219c.781 0 1.406.063 1.937.219.469.125.813.343 1.125.593.5.375.844.938 1 1.344M12.72 7.594c-.531 0-.875.437-.875 1.093 0 .688.344 1.094.875 1.094a.75.75 0 0 0 .687-.375h.031v.344h.376V6.813h-.407v1.156h-.031a.76.76 0 0 0-.656-.375m-5.5-.657V9.75h.437v-.969h.657c.53 0 .937-.375.937-.906 0-.562-.375-.937-.937-.937zm-.875.313c.093.031.187-.031.25-.125.062-.062.062-.187 0-.281a.28.28 0 0 0-.25-.125.28.28 0 0 0-.25.125c-.063.093-.063.218 0 .281.062.094.156.156.25.125m.218.375h-.437V9.75h.438zm.907 9.219c1.625 0 2.656-1.157 2.656-3 0-1.844-1.031-3.031-2.656-3.031-1.657 0-2.688 1.187-2.688 3.03 0 1.845 1.032 3 2.688 3m2.093-7.688c0 .375.313.625.72.625.28 0 .5-.125.624-.344h.031v.313h.407V8.313c0-.47-.281-.72-.844-.72-.469 0-.812.22-.844.595h.406c.032-.157.188-.25.438-.25.281 0 .438.125.438.375V8.5l-.594.031c-.5.031-.781.25-.781.625m3.282 7.688c1.281 0 2.125-.688 2.125-1.75 0-.844-.469-1.313-1.688-1.594l-.625-.125c-.812-.187-1.125-.5-1.125-.937 0-.594.563-.97 1.281-.97.782 0 1.282.407 1.344 1.032h.719c-.031-.969-.875-1.687-2.031-1.687-1.219 0-2.063.687-2.063 1.656 0 .812.531 1.344 1.688 1.594l.625.156c.812.156 1.125.5 1.125.969 0 .562-.563 1-1.344 1-.844 0-1.406-.375-1.5-1h-.719c.063 1 .906 1.656 2.188 1.656' />
    </g>
    <defs>
      <clipPath id='b0b854d52c9ef63ad34c18c4794c3d47__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedIpadosMdIcon);
export default ForwardRef;
