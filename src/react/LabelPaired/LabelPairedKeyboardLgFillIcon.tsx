import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedKeyboardLgFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={23}
    height={30}
    viewBox='0 0 23 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.75 8h17.5c1.367 0 2.5 1.133 2.5 2.5v10c0 1.406-1.133 2.5-2.5 2.5H2.75a2.47 2.47 0 0 1-2.5-2.5v-10C.25 9.133 1.344 8 2.75 8m.625 2.5a.64.64 0 0 0-.625.625v1.25c0 .352.273.625.625.625h1.25a.64.64 0 0 0 .625-.625v-1.25c0-.312-.312-.625-.625-.625zm-.625 4.375v1.25c0 .352.273.625.625.625h1.25a.64.64 0 0 0 .625-.625v-1.25c0-.312-.312-.625-.625-.625h-1.25a.64.64 0 0 0-.625.625M3.375 18a.64.64 0 0 0-.625.625v1.25c0 .352.273.625.625.625h1.25a.64.64 0 0 0 .625-.625v-1.25c0-.312-.312-.625-.625-.625zM6.5 11.125v1.25c0 .352.273.625.625.625h1.25A.64.64 0 0 0 9 12.375v-1.25c0-.312-.312-.625-.625-.625h-1.25a.64.64 0 0 0-.625.625m.625 3.125a.64.64 0 0 0-.625.625v1.25c0 .352.273.625.625.625h1.25A.64.64 0 0 0 9 16.125v-1.25c0-.312-.312-.625-.625-.625zM6.5 18.625v1.25c0 .352.273.625.625.625h8.75a.64.64 0 0 0 .625-.625v-1.25c0-.312-.312-.625-.625-.625h-8.75a.64.64 0 0 0-.625.625m4.375-8.125a.64.64 0 0 0-.625.625v1.25c0 .352.273.625.625.625h1.25a.64.64 0 0 0 .625-.625v-1.25c0-.312-.312-.625-.625-.625zm-.625 4.375v1.25c0 .352.273.625.625.625h1.25a.64.64 0 0 0 .625-.625v-1.25c0-.312-.312-.625-.625-.625h-1.25a.64.64 0 0 0-.625.625m4.375-4.375a.64.64 0 0 0-.625.625v1.25c0 .352.273.625.625.625h1.25a.64.64 0 0 0 .625-.625v-1.25c0-.312-.312-.625-.625-.625zM14 14.875v1.25c0 .352.273.625.625.625h1.25a.64.64 0 0 0 .625-.625v-1.25c0-.312-.312-.625-.625-.625h-1.25a.64.64 0 0 0-.625.625m4.375-4.375a.64.64 0 0 0-.625.625v1.25c0 .352.273.625.625.625h1.25a.64.64 0 0 0 .625-.625v-1.25c0-.312-.312-.625-.625-.625zm-.625 4.375v1.25c0 .352.273.625.625.625h1.25a.64.64 0 0 0 .625-.625v-1.25c0-.312-.312-.625-.625-.625h-1.25a.64.64 0 0 0-.625.625M18.375 18a.64.64 0 0 0-.625.625v1.25c0 .352.273.625.625.625h1.25a.64.64 0 0 0 .625-.625v-1.25c0-.312-.312-.625-.625-.625z' />
    </g>
    <defs>
      <clipPath id='6d74fb7b6adce4081552c56014447402__a'>
        <path d='M0 0h23v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedKeyboardLgFillIcon);
export default ForwardRef;
