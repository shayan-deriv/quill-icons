import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const MarketDerivedDsi30mIcon = (
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
    <path fill='#FF444F' d='M2 10.4H0v6.9h2zM5.8 14.8h-2v10.9h2zM9.5 21.5h-2v6.6h2z' />
    <path fill='#414652' d='M13.2 24.5h-2v5.2h2zM17 25.1h-2v3.6h2zM20.8 24.5h-2v5.2h2z' />
    <path fill='#0AA0B0' d='M32 10.4h-2v6.9h2zM28.2 14.8h-2v10.9h2zM24.5 21.5h-2v6.6h2z' />
    <path fill='#414652' d='M5 5a2 2 0 0 1 2-2h18a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z' />
    <path
      fill='#fff'
      d='M9.3 7.624q.447 0 .647-.168a.55.55 0 0 0 .208-.432v-.056a.63.63 0 0 0-.2-.488q-.192-.184-.552-.184-.336 0-.632.176a1.46 1.46 0 0 0-.504.488l-.752-.704q.16-.208.344-.376.184-.176.416-.296.232-.128.52-.192.288-.072.648-.072.448 0 .808.104.368.104.624.304.265.192.4.464.144.272.144.608 0 .264-.088.48-.08.217-.232.376a1.3 1.3 0 0 1-.336.264 1.5 1.5 0 0 1-.408.136v.048q.247.048.456.16.216.104.368.272.16.168.248.4.088.225.088.512 0 .375-.152.68a1.5 1.5 0 0 1-.432.52q-.279.216-.672.336-.392.112-.864.112a3 3 0 0 1-.752-.088 2.4 2.4 0 0 1-.576-.232 2.3 2.3 0 0 1-.424-.344 3 3 0 0 1-.312-.408l.888-.688q.184.345.448.568.272.216.728.216.408 0 .632-.2a.72.72 0 0 0 .232-.56v-.048q0-.344-.264-.512-.255-.176-.712-.176H8.78v-1zM14.4 11.096q-1.095 0-1.624-.76-.528-.76-.528-2.128t.528-2.128 1.624-.76 1.624.76.528 2.128-.528 2.128-1.624.76m0-1.016q.48 0 .664-.352t.184-.992V7.68q0-.64-.184-.992t-.664-.352-.664.352-.184.992v1.056q0 .64.184.992t.664.352M17.978 11V6.8h1.184v.712h.048q.111-.336.384-.568.272-.24.744-.24.432 0 .736.216t.44.632h.024a1.12 1.12 0 0 1 .456-.6q.168-.112.376-.176a1.4 1.4 0 0 1 .448-.072q.607 0 .928.432.327.432.328 1.232V11H22.89V8.464q0-.8-.576-.8a.8.8 0 0 0-.48.152q-.216.152-.216.464V11h-1.184V8.464q0-.8-.576-.8a.85.85 0 0 0-.48.152.7.7 0 0 0-.16.2.6.6 0 0 0-.056.264V11z'
    />
  </svg>
);
const ForwardRef = forwardRef(MarketDerivedDsi30mIcon);
export default ForwardRef;
