import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const CurrencyUniIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g clipPath='url(#cca6f2b7b109d0efd9138ad0b011c16a__a)'>
      <path
        fill='#FF007A'
        d='M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16'
      />
      <path
        fill='#fff'
        fillRule='evenodd'
        d='M7.51 5.444c2.405 2.92 6.11 7.461 6.296 7.709.155.206.093.402-.165.547a1.6 1.6 0 0 1-.589.165.74.74 0 0 1-.495-.217c-.093-.093-.495-.681-1.404-2.095a134 134 0 0 0-1.29-1.992c-.04-.02-.04-.02 1.218 2.23.795 1.413 1.053 1.919 1.053 1.98 0 .135-.041.207-.207.393-.278.31-.402.66-.495 1.393-.103.816-.382 1.394-1.176 2.374-.465.578-.537.681-.65.918-.145.29-.186.454-.207.826-.02.392.02.64.134 1.011.103.33.217.547.496.97.237.372.381.65.381.754 0 .082.021.082.393 0 .887-.207 1.62-.558 2.022-.991.248-.268.31-.413.31-.784 0-.238-.01-.29-.072-.434-.104-.227-.3-.413-.723-.701-.557-.382-.794-.692-.856-1.105-.052-.35.01-.588.32-1.238.32-.67.402-.95.454-1.63.03-.434.082-.61.206-.744.134-.144.248-.196.568-.237.526-.072.867-.207 1.135-.464a.97.97 0 0 0 .35-.754l.011-.237-.134-.145C13.909 12.39 7.19 5 7.16 5c-.007 0 .052.073.144.187zm3.169 14.675a.426.426 0 0 0-.134-.568c-.176-.113-.444-.062-.444.093 0 .041.02.083.082.103.093.052.104.103.031.217-.072.113-.072.217.021.289.145.113.34.051.444-.134'
        clipRule='evenodd'
      />
      <path
        fill='#fff'
        d='M13.972 9.551c-.217-.03-.228-.041-.124-.051.196-.031.65.01.97.082.743.176 1.414.63 2.126 1.424l.185.217.269-.041c1.145-.186 2.322-.042 3.302.413.268.123.692.371.743.433.02.02.052.155.072.289.073.485.042.846-.113 1.125-.083.155-.083.196-.031.33.041.103.165.175.279.175.247 0 .505-.392.629-.939l.052-.216.093.103c.526.588.939 1.403 1 1.981l.021.155-.093-.134a1.7 1.7 0 0 0-.495-.526c-.351-.238-.723-.31-1.703-.362-.887-.051-1.393-.123-1.888-.289-.847-.278-1.28-.64-2.281-1.97-.444-.589-.723-.909-1.001-1.177-.609-.588-1.218-.898-2.012-1.022'
      />
      <path
        fill='#fff'
        d='M21.66 10.86c.02-.391.072-.65.185-.887a.7.7 0 0 1 .093-.175c.01 0-.01.072-.041.155-.083.227-.093.547-.041.908.072.464.103.526.598 1.032.227.237.495.536.599.66l.175.227-.175-.165c-.217-.206-.713-.598-.826-.65-.072-.041-.083-.041-.134.01-.041.042-.052.104-.052.403-.01.464-.072.753-.227 1.053-.082.154-.093.123-.02-.052.051-.134.061-.196.061-.64 0-.898-.103-1.115-.732-1.476a8 8 0 0 0-.578-.299 2 2 0 0 1-.279-.134c.02-.02.63.155.867.258.361.144.423.155.465.144.03-.03.051-.113.061-.371M13.744 10.18c-.062.691.217 1.62.65 2.218.34.465.867.826 1.26.867.257.02.33-.062.216-.227a3.7 3.7 0 0 1-.413-.743 8 8 0 0 1-.155-.63c-.175-.846-.36-1.186-.774-1.434a2.4 2.4 0 0 0-.66-.247l-.103-.021zM21.133 16.888c-2.043-.825-2.766-1.537-2.766-2.745 0-.175.01-.32.01-.32.007 0 .042.028.091.067l.085.067c.413.33.877.475 2.167.66.754.114 1.187.197 1.58.331 1.248.413 2.022 1.26 2.207 2.405.052.33.021.96-.061 1.29-.073.258-.279.732-.33.743-.01 0-.032-.052-.032-.134-.02-.434-.237-.847-.598-1.167-.434-.371-.99-.65-2.353-1.197M19.585 16.795c.03.083.082.28.103.434.165.97-.34 1.765-1.362 2.085-.103.04-.516.123-.919.185-.815.145-1.186.238-1.547.413-.258.124-.578.31-.558.33.01.01.072-.01.134-.03.465-.166.98-.248 1.755-.29.259-.017.547-.041.707-.055l.077-.007c.691-.092 1.176-.299 1.548-.68.207-.217.33-.413.433-.692.062-.175.073-.248.073-.557 0-.32 0-.382-.073-.578a1.8 1.8 0 0 0-.33-.599l-.093-.113z'
      />
      <path
        fill='#fff'
        d='M20.627 18.891q-.402-.882-.185-1.672c.02-.051.04-.103.061-.103s.083.031.145.072c.124.083.382.228 1.042.589.836.454 1.31.805 1.641 1.207.29.351.465.753.547 1.249.052.279.02.95-.052 1.228-.227.877-.742 1.579-1.496 1.981a1.4 1.4 0 0 1-.217.104c-.01 0 .031-.104.093-.227.248-.527.279-1.032.093-1.6-.113-.351-.35-.774-.825-1.486-.568-.826-.702-1.043-.847-1.342M15.509 20.81c-.867.144-1.806.598-2.57 1.238l-.217.207.196.03c1.032.155 1.31.3 2.033 1.043.413.423.557.516.898.609.506.134 1.001-.104 1.177-.558.072-.206.061-.536-.021-.701-.206-.403-.815-.527-1.104-.238-.238.238-.165.61.134.671q.042.008.044.005a.3.3 0 0 0-.065-.036c-.134-.062-.196-.144-.196-.278-.01-.32.351-.485.681-.341.248.114.34.258.34.506a.63.63 0 0 1-.711.63 1.06 1.06 0 0 1-.588-.31c-.33-.372-.207-.98.268-1.208.361-.175.836-.124 1.207.114.423.278.61.526.97 1.362.124.279.269.578.34.681.341.516.765.774 1.26.774.279 0 .485-.041.743-.175.186-.093.464-.28.444-.3 0-.008-.051.01-.119.033l-.057.019c-.547.206-1.104.196-1.424-.041-.206-.155-.371-.444-.454-.816l-.01-.058c-.02-.114-.06-.346-.093-.571-.114-.712-.227-1.032-.475-1.404-.258-.381-.753-.691-1.3-.836-.34-.093-.96-.113-1.332-.051'
      />
      <path
        fill='#fff'
        fillRule='evenodd'
        d='M14.301 15.3c.073-.268.31-.537.558-.609.165-.051.485-.02.64.062.299.155.515.495.464.743-.052.3-.537.547-1.104.547-.29 0-.393-.041-.506-.186-.072-.092-.093-.392-.052-.557m1.115-.444c.155.093.186.227.103.351-.062.083-.248.165-.382.165-.206 0-.423-.144-.423-.278 0-.269.423-.413.702-.238'
        clipRule='evenodd'
      />
    </g>
    <defs>
      <clipPath id='cca6f2b7b109d0efd9138ad0b011c16a__a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(CurrencyUniIcon);
export default ForwardRef;
