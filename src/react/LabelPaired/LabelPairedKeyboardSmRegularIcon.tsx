import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedKeyboardSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={22}
    viewBox='0 0 16 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.875 6.375A.88.88 0 0 0 1 7.25v7c0 .492.383.875.875.875h12.25A.88.88 0 0 0 15 14.25v-7a.9.9 0 0 0-.875-.875zm-1.75.875c0-.957.766-1.75 1.75-1.75h12.25c.957 0 1.75.793 1.75 1.75v7c0 .984-.793 1.75-1.75 1.75H1.875c-.984 0-1.75-.766-1.75-1.75zm2.406.219h.438a.47.47 0 0 1 .437.437v.438a.45.45 0 0 1-.437.437H2.53a.43.43 0 0 1-.437-.437v-.438a.45.45 0 0 1 .437-.437m-.437 3.062a.45.45 0 0 1 .437-.437h.438a.47.47 0 0 1 .437.437v.438a.45.45 0 0 1-.437.437H2.53a.43.43 0 0 1-.437-.437zm.437 2.188h.438a.47.47 0 0 1 .437.437v.438a.45.45 0 0 1-.437.437H2.53a.43.43 0 0 1-.437-.437v-.438a.45.45 0 0 1 .437-.437M4.72 7.906a.45.45 0 0 1 .437-.437h.438a.47.47 0 0 1 .437.437v.438a.45.45 0 0 1-.437.437h-.438a.43.43 0 0 1-.437-.437zm.437 2.188h.438a.47.47 0 0 1 .437.437v.438a.45.45 0 0 1-.437.437h-.438a.43.43 0 0 1-.437-.437v-.438a.45.45 0 0 1 .437-.437m2.188-2.188a.45.45 0 0 1 .437-.437h.438a.47.47 0 0 1 .437.437v.438a.45.45 0 0 1-.437.437H7.78a.43.43 0 0 1-.437-.437zm.437 2.188h.438a.47.47 0 0 1 .437.437v.438a.45.45 0 0 1-.437.437H7.78a.43.43 0 0 1-.437-.437v-.438a.45.45 0 0 1 .437-.437M9.97 7.906a.45.45 0 0 1 .437-.437h.438a.47.47 0 0 1 .437.437v.438a.45.45 0 0 1-.437.437h-.438a.43.43 0 0 1-.437-.437zm.437 2.188h.438a.47.47 0 0 1 .437.437v.438a.45.45 0 0 1-.437.437h-.438a.43.43 0 0 1-.437-.437v-.438a.45.45 0 0 1 .437-.437m2.188-2.188a.45.45 0 0 1 .437-.437h.438a.47.47 0 0 1 .437.437v.438a.45.45 0 0 1-.437.437h-.438a.43.43 0 0 1-.437-.437zm.437 2.188h.438a.47.47 0 0 1 .437.437v.438a.45.45 0 0 1-.437.437h-.438a.43.43 0 0 1-.437-.437v-.438a.45.45 0 0 1 .437-.437m-.437 3.062a.45.45 0 0 1 .437-.437h.438a.47.47 0 0 1 .437.437v.438a.45.45 0 0 1-.437.437h-.438a.43.43 0 0 1-.437-.437zm-7.656-.219h6.125a.47.47 0 0 1 .437.438.45.45 0 0 1-.437.438H4.937a.43.43 0 0 1-.437-.438.45.45 0 0 1 .438-.437' />
    </g>
    <defs>
      <clipPath id='6e6a2cb63d5cff6799fe181eccdca13b__a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedKeyboardSmRegularIcon);
export default ForwardRef;
