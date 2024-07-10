import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const CurrencyUsdcIcon = (
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
    <g clipPath='url(#243b5f30dc0172fcba64510e222abc9c__a)'>
      <path
        fill='#2775CA'
        d='M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16'
      />
      <path
        fill='#fff'
        d='M6.667 12.733c-1.934 5.134.733 10.934 5.933 12.8.2.134.4.4.4.6v.934c0 .133 0 .2-.067.266-.066.267-.333.4-.6.267a12 12 0 0 1-7.8-7.8c-2-6.333 1.467-13.067 7.8-15.067.067-.066.2-.066.267-.066.267.066.4.266.4.533v.933c0 .334-.133.534-.4.667-2.733 1-4.933 3.133-5.933 5.933M19.067 5c.066-.267.333-.4.6-.267 3.666 1.2 6.6 4.067 7.8 7.867 2 6.333-1.467 13.067-7.8 15.067-.067.066-.2.066-.267.066-.267-.066-.4-.266-.4-.533v-.933c0-.334.133-.534.4-.667 2.733-1 4.933-3.133 5.933-5.933 1.934-5.134-.733-10.934-5.933-12.8-.2-.134-.4-.4-.4-.667v-.933c0-.134 0-.2.067-.267'
      />
      <path
        fill='#fff'
        d='M16.2 15.067c2.8.333 4.2 1.133 4.2 3.466 0 1.8-1.333 3.2-3.333 3.534v1.6c-.067.333-.267.533-.534.533h-1c-.333-.067-.533-.267-.533-.533v-1.6c-2.2-.334-3.267-1.534-3.533-3.2V18.8c0-.267.2-.467.466-.467h1.134c.2 0 .4.134.466.4.2 1 .8 1.734 2.534 1.734 1.266 0 2.2-.734 2.2-1.8s-.6-1.467-2.467-1.8c-2.8-.334-4.133-1.2-4.133-3.4 0-1.667 1.266-3 3.266-3.267V8.667c.067-.334.267-.534.534-.534h1c.333.067.533.267.533.534v1.6A3.33 3.33 0 0 1 20 13v.067c0 .266-.2.466-.467.466h-1.066c-.2 0-.4-.133-.467-.333-.333-1-1-1.4-2.2-1.4-1.333 0-2 .6-2 1.533 0 .934.4 1.467 2.4 1.734'
      />
    </g>
    <defs>
      <clipPath id='243b5f30dc0172fcba64510e222abc9c__a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(CurrencyUsdcIcon);
export default ForwardRef;
