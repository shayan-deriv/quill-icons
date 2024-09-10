import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const MarketStocksCiscoIcon = (
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
    <g clipPath='url(#42933cbb054af360a2b28451ec1d1e4e__a)'>
      <path
        fill='#00A7E0'
        d='M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16'
      />
      <path
        fill='#fff'
        d='M10.633 10.154a.53.53 0 0 1 .154.37v5.535a.525.525 0 1 1-1.05 0v-5.534a.525.525 0 0 1 .896-.371M7.914 12.49a.525.525 0 0 0-1.042 0v2.534a.525.525 0 0 0 1.042 0zM4.891 13.56c.097.1.151.231.151.37v1.094a.525.525 0 0 1-1.042 0V13.93a.525.525 0 0 1 .525-.524c.138.001.27.058.366.156M15.833 19.329a3.5 3.5 0 0 0-.825-.128c-.42 0-.652.142-.652.337s.307.346.48.398l.292.097a1.25 1.25 0 0 1 .998 1.193c0 1.042-.923 1.395-1.733 1.395q-.571-.003-1.132-.113v-.93c.322.095.655.148.99.158.525 0 .75-.158.75-.39 0-.233-.203-.338-.465-.413l-.225-.075c-.585-.187-1.072-.532-1.072-1.222s.577-1.305 1.552-1.305q.52.01 1.027.135z'
      />
      <path
        fill='#fff'
        fillRule='evenodd'
        d='M25.49 21.73c.237-.37.357-.801.347-1.24a2.145 2.145 0 0 0-2.205-2.151 2.205 2.205 0 1 0 1.859 3.39m-2.475-2.155c.183-.12.398-.182.617-.179a1.08 1.08 0 0 1 1.087 1.095 1.102 1.102 0 1 1-1.704-.916'
        clipRule='evenodd'
      />
      <path
        fill='#fff'
        d='M9.34 19.606a1.83 1.83 0 0 0-.886-.225 1.125 1.125 0 0 0 0 2.25c.31 0 .613-.078.885-.225v1.117a3 3 0 0 1-.96.15 2.159 2.159 0 1 1 0-4.312c.325.004.648.052.96.143zM19.44 19.381c.31 0 .614.076.885.225v-1.102a3.6 3.6 0 0 0-.96-.143 2.16 2.16 0 1 0 0 4.312c.326 0 .65-.05.96-.15v-1.117a1.87 1.87 0 0 1-.885.225 1.125 1.125 0 0 1 0-2.25M10.786 18.406h1.05v4.17h-1.05zM13.651 12.49a.524.524 0 0 0-1.042 0v2.534a.526.526 0 0 0 1.042 0zM16.364 13.564a.52.52 0 0 1 .152.365v1.095a.517.517 0 0 1-1.035 0V13.93a.517.517 0 0 1 .883-.366M19.388 12.49a.525.525 0 0 0-1.043 0v2.534a.525.525 0 0 0 1.043 0zM22.087 10.195a.52.52 0 0 1 .173.33v5.534a.525.525 0 1 1-1.043 0v-5.534a.525.525 0 0 1 .87-.33M25.132 12.49a.525.525 0 0 0-1.05 0v2.534a.525.525 0 1 0 1.05 0zM27.976 13.71q.034.108.02.22v1.094a.526.526 0 0 1-1.042 0V13.93a.525.525 0 0 1 1.022-.219M27.396 22.028v.068h-.187v.48h-.075v-.48h-.188v-.068zM27.554 22.028h-.12v.548h.075v-.45h.007l.158.45h.075l.165-.45v.45h.082v-.548h-.12l-.157.45z'
      />
    </g>
    <defs>
      <clipPath id='42933cbb054af360a2b28451ec1d1e4e__a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(MarketStocksCiscoIcon);
export default ForwardRef;
