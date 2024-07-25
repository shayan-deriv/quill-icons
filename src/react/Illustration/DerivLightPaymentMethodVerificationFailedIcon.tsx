import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const DerivLightPaymentMethodVerificationFailedIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 96 116'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g clipPath='url(#38f6e5b73e1c8b1299327ccd6635b5cf__a)'>
      <path
        fill='#C6E3E3'
        d='M76.083 0H4a4 4 0 0 0-4 4v92.173a4 4 0 0 0 4 4h72.083a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4'
      />
      <path
        fill='#fff'
        d='M21.723 32.857c-1.202 1.202-2.803 1.903-4.705 2.103v2.605h-2.103V34.96c-1.801-.1-3.503-.7-4.905-2.003-1.1-1.002-2.002-2.605-2.002-4.408h3.504c0 1.002.5 1.803 1.101 2.404a4.3 4.3 0 0 0 2.303 1.002v-5.71c-.501-.1-.901-.1-1.402-.2-3.103-.5-5.005-2.504-5.005-5.41 0-1.502.7-2.804 1.702-3.806 1.1-1.102 2.702-1.903 4.604-2.104v-2.704h2.103v2.905c1.601.2 3.003.801 4.104 1.803 1.101 1.102 1.902 2.504 2.002 4.107H19.52c0-.701-.4-1.503-.9-1.903-.401-.401-1.002-.701-1.702-.902v5.21c.3.1.7.1 1 .1 2.904.5 5.306 2.303 5.306 5.509.1 1.803-.6 3.105-1.501 4.007M14.916 17.83q-1.202.15-2.103.901c-.5.401-.8 1.102-.8 1.803 0 1.303.8 1.904 2.002 2.104.3.1.6.1.9.1zm2.602 8.915-.5-.1v5.31c.8-.101 1.501-.402 2.002-.902.5-.501.8-1.002.8-2.004 0-1.503-1.1-2.104-2.302-2.304M51.055 46.08H10.008a2 2 0 0 0-2 2v.006a2 2 0 0 0 2 2h41.047a2 2 0 0 0 2-2v-.006a2 2 0 0 0-2-2M70.075 30.052H29.028a2 2 0 0 0-2 2v.007a2 2 0 0 0 2 2h41.047a2 2 0 0 0 2-2v-.007a2 2 0 0 0-2-2M70.075 18.031H29.028a2 2 0 0 0-2 2v.007a2 2 0 0 0 2 2h41.047a2 2 0 0 0 2-2v-.007a2 2 0 0 0-2-2M51.055 58.1H10.008a2 2 0 0 0-2 2v.007a2 2 0 0 0 2 2h41.047a2 2 0 0 0 2-2V60.1a2 2 0 0 0-2-2M51.055 70.12H10.008a2 2 0 0 0-2 2v.008a2 2 0 0 0 2 2h41.047a2 2 0 0 0 2-2v-.007a2 2 0 0 0-2-2M70.075 46.08H59.06a2 2 0 0 0-2 2v.006a2 2 0 0 0 2 2h11.015a2 2 0 0 0 2-2v-.006a2 2 0 0 0-2-2M70.075 58.1H59.06a2 2 0 0 0-2 2v.007a2 2 0 0 0 2 2h11.015a2 2 0 0 0 2-2V60.1a2 2 0 0 0-2-2M70.075 70.12H59.06a2 2 0 0 0-2 2v.008a2 2 0 0 0 2 2h11.015a2 2 0 0 0 2-2v-.007a2 2 0 0 0-2-2'
      />
      <path
        fill='#EC3F3F'
        d='M74.55 116.001c11.846 0 21.45-9.604 21.45-21.45S86.396 73.1 74.55 73.1 53.1 82.704 53.1 94.55 62.703 116 74.55 116'
      />
      <path
        fill='#fff'
        fillRule='evenodd'
        d='M77.337 100.001h-4.675l-.663-19h6zm-2.347 3q1.356 0 2.183.846.826.845.826 2.163 0 1.299-.826 2.145-.827.846-2.183.846-1.337 0-2.164-.846-.825-.846-.826-2.145 0-1.297.826-2.154.827-.855 2.164-.855'
        clipRule='evenodd'
      />
    </g>
    <defs>
      <clipPath id='38f6e5b73e1c8b1299327ccd6635b5cf__a'>
        <path fill='#fff' d='M0 0h96v116H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(DerivLightPaymentMethodVerificationFailedIcon);
export default ForwardRef;
