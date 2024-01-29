import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const MarketDerivedJump50Icon = (
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
    <path
      fill='#FF444F'
      fillRule='evenodd'
      d='M4 12v2H2v-2zM8 12v4H6v-4zM12 12v17h-2V12zM16 26v6h-2v-6z'
      clipRule='evenodd'
    />
    <path
      fill='#0AA0B0'
      fillRule='evenodd'
      d='M20 22v7h-2v-7zM24 0v26h-2V0zM28 4v8h-2V4zM32 8v4h-2V8z'
      clipRule='evenodd'
    />
    <path
      fill='#414652'
      d='M10.064 6.728q-.184.352-.664.352t-.664-.352-.184-.992V4.68q0-.64.184-.992t.664-.352.664.352.184.992v1.056q0 .64-.184.992'
    />
    <path
      fill='#414652'
      fillRule='evenodd'
      d='M2 0a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm5.776 7.336q.528.76 1.624.76t1.624-.76.528-2.128-.528-2.128T9.4 2.32t-1.624.76-.528 2.128.528 2.128M3.843 3.464H6.38V2.416H2.963l-.208 3.16.984.136q.112-.127.32-.256.216-.135.544-.136.392 0 .616.224t.224.608v.064q0 .408-.224.656-.216.248-.648.248t-.688-.224a2.2 2.2 0 0 1-.44-.56l-.872.688q.128.216.304.408t.416.344q.24.144.552.232t.72.088q.511 0 .912-.144.4-.152.672-.416.28-.264.416-.624.144-.368.144-.792 0-.416-.136-.744a1.6 1.6 0 0 0-.912-.912 1.9 1.9 0 0 0-.672-.12q-.264 0-.456.064a.9.9 0 0 0-.328.184q-.135.112-.24.28a2.5 2.5 0 0 0-.176.36h-.064z'
      clipRule='evenodd'
    />
    <path
      fill='#fff'
      d='M6.38 3.464H3.842l-.12 1.768h.064q.08-.2.176-.36.105-.168.24-.28.136-.12.328-.184t.456-.064q.36 0 .672.12t.544.352a1.6 1.6 0 0 1 .368.56q.135.329.136.744 0 .425-.144.792-.136.36-.416.624a1.9 1.9 0 0 1-.672.416q-.4.144-.912.144a2.7 2.7 0 0 1-.72-.088 2.3 2.3 0 0 1-.552-.232 2 2 0 0 1-.416-.344 2.5 2.5 0 0 1-.304-.408l.872-.688a2.2 2.2 0 0 0 .44.56q.256.224.688.224t.648-.248q.224-.248.224-.656v-.064q0-.384-.224-.608-.225-.225-.616-.224-.328 0-.544.136-.208.127-.32.256l-.984-.136.208-3.16H6.38zM9.4 8.096q-1.096 0-1.624-.76t-.528-2.128.528-2.128T9.4 2.32t1.624.76.528 2.128-.528 2.128-1.624.76m0-1.016q.48 0 .664-.352t.184-.992V4.68q0-.64-.184-.992T9.4 3.336t-.664.352-.184.992v1.056q0 .64.184.992t.664.352'
    />
  </svg>
);
const ForwardRef = forwardRef(MarketDerivedJump50Icon);
export default ForwardRef;
