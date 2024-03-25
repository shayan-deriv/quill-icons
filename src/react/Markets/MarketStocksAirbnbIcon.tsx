import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const MarketStocksAirbnbIcon = (
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
    <g clipPath='url(#fd8862a1c5b41a5cac654668a862c71f__a)'>
      <path
        fill='#FF5A5F'
        d='M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16'
      />
      <path
        fill='#fff'
        d='M23.989 21.198a2.97 2.97 0 0 1-1.822 2.342c-.48.2-1.001.26-1.522.2-.5-.06-1.001-.22-1.521-.52-.72-.401-1.442-1.02-2.283-1.942 1.322-1.622 2.122-3.103 2.423-4.424.14-.621.16-1.182.1-1.703-.08-.5-.26-.961-.54-1.361-.621-.901-1.663-1.422-2.824-1.422s-2.202.54-2.823 1.422c-.28.4-.46.861-.54 1.361-.08.521-.06 1.101.1 1.703.3 1.321 1.12 2.823 2.422 4.444-.821.92-1.561 1.542-2.283 1.942a3.9 3.9 0 0 1-1.52.52 3.2 3.2 0 0 1-1.522-.2 2.98 2.98 0 0 1-1.822-2.342c-.06-.5-.02-1 .18-1.561.06-.2.16-.4.26-.64.14-.32.301-.661.46-1.002l.021-.04a218 218 0 0 1 4.405-8.99l.06-.12c.16-.3.32-.621.48-.921.161-.32.341-.621.562-.881.42-.481.98-.741 1.601-.741.62 0 1.182.26 1.602.74.22.26.4.561.56.882.161.3.32.62.481.92l.06.12a265 265 0 0 1 4.385 9.01v.02c.16.32.3.68.46 1 .1.242.201.441.26.641.16.522.22 1.022.14 1.543M16 20.256c-1.08-1.361-1.781-2.643-2.022-3.724-.1-.46-.12-.861-.06-1.221.04-.32.16-.601.32-.841.38-.54 1.021-.881 1.762-.881s1.402.32 1.762.88c.16.242.28.522.32.842.06.36.04.78-.06 1.221-.24 1.062-.94 2.343-2.022 3.724m9.03-1.04c-.1-.24-.2-.5-.3-.72-.16-.361-.32-.702-.461-1.022l-.02-.02a209 209 0 0 0-4.424-9.05l-.06-.12c-.16-.3-.32-.62-.48-.94-.201-.36-.401-.742-.721-1.102A3.23 3.23 0 0 0 16.02 5c-1.002 0-1.902.44-2.564 1.201-.3.36-.52.741-.72 1.101-.161.32-.32.64-.481.941l-.06.12a235 235 0 0 0-4.425 9.05l-.02.04c-.14.32-.3.66-.46 1.02q-.16.357-.3.721c-.261.741-.341 1.442-.241 2.163a4.25 4.25 0 0 0 2.602 3.323c.521.22 1.062.32 1.622.32a5.285 5.285 0 0 0 2.523-.72c.821-.46 1.602-1.121 2.483-2.083.88.962 1.681 1.622 2.482 2.082a5.3 5.3 0 0 0 2.523.721c.56 0 1.12-.1 1.622-.32a4.25 4.25 0 0 0 2.603-3.323c.16-.7.08-1.4-.18-2.141'
      />
    </g>
    <defs>
      <clipPath id='fd8862a1c5b41a5cac654668a862c71f__a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(MarketStocksAirbnbIcon);
export default ForwardRef;
