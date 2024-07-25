import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyMarketIndicesIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 16 16'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g clipPath='url(#7207a29abfa72ab45283d4efac261f77__a)'>
      <path
        fill='#333'
        d='M8 2a6 6 0 0 1 5.667 4.025h-.08c1.34 0 2.413.6 2.413 1.97.012 1.617-1.141 2.082-2.906 2.08a18.3 18.3 0 0 1-6.012-1.708 20 20 0 0 0-2.89-.902c-1.463-.313-2.316-.302-2.897.215a.92.92 0 0 0-.293.636 1 1 0 0 0 .195.676c.195.222.6.41 1.003.55a6 6 0 0 1-.192-1.223l.019-.005c.277-.062.6-.073.98-.04L3 8c0 .711.149 1.388.416 2h.812a8.6 8.6 0 0 1-.218-1.573l.183.038q.419.097.836.212a7.4 7.4 0 0 0 .229 1.324h.856a16 16 0 0 1-.087-1.017q.531.176 1.055.383l-.027-.008q.027.33.066.643h1.446c1.466.552 2.987.914 4.527 1.073h.06A6 6 0 0 1 8 14a6 6 0 0 1-5.204-3.012l.13.028c-.666-.134-1.9-.532-2.414-1.115C.15 9.463-.036 8.843.006 8.214c.041-.63.306-1.203.715-1.556.877-.78 1.91-.793 3.647-.42 1.02.234 2.028.548 3.044.953a17.6 17.6 0 0 0 5.723 1.639c1.16 0 1.87-.286 1.865-.83 0-.349-.403-.628-1.04-.706q.026.231.035.468a5 5 0 0 1-.86.068l-.14-.015L13 8c0-.71-.148-1.387-.416-2h-.811c.123.526.2 1.086.22 1.667q-.507-.086-1.013-.208A7.4 7.4 0 0 0 10.742 6L9.886 6q.067.57.096 1.186a16 16 0 0 1-1.023-.34 14 14 0 0 0-.08-.847H7.12l-.008.075a21 21 0 0 0-2.745-.837c-.599-.128-1.113-.21-1.567-.232A6 6 0 0 1 8 2m.712 9.002H7.288a9 9 0 0 0 .246.924c.128.383.269.685.405.89L8 12.9l.06-.084c.115-.17.231-.41.34-.705l.066-.185a9 9 0 0 0 .246-.924m-2.444 0h-.65c.28.603.638 1.097 1.04 1.443a9 9 0 0 1-.39-1.444m4.113 0h-.649a9.4 9.4 0 0 1-.389 1.444c.401-.347.76-.84 1.038-1.445M4.535 11h-.534c.292.39.64.735 1.033 1.025A6.5 6.5 0 0 1 4.535 11m6.93 0a7 7 0 0 1-.361.785l-.138.239.23-.18q.452-.375.803-.844zM5.032 3.974l-.114.089A5 5 0 0 0 4 5h.535q.161-.415.361-.785zm5.934 0 .025.041q.27.456.474.985H12a5 5 0 0 0-1.034-1.026m-4.31-.42c-.402.348-.759.842-1.038 1.446h.65c.104-.541.236-1.028.389-1.446m2.686 0 .04.111c.137.392.255.841.35 1.335h.65c-.28-.605-.637-1.1-1.04-1.445M8 3.1l-.06.085c-.137.205-.278.507-.406.89a9 9 0 0 0-.246.925h1.424a9 9 0 0 0-.246-.925c-.128-.383-.269-.685-.405-.89z'
      />
    </g>
    <defs>
      <clipPath id='7207a29abfa72ab45283d4efac261f77__a'>
        <path fill='#fff' d='M0 0h16v16H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LegacyMarketIndicesIcon);
export default ForwardRef;
