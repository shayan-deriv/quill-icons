import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const MarketDerivedStepIndices300Icon = (
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
      fill='#0AA0B0'
      d='M32 30H0v2h32zM2.5 18.6h.3l1.8 3.2c-.3.4-.4.9-.4 1.4 0 1.4 1.1 2.5 2.5 2.5s2.5-1.1 2.5-2.5c0-.5-.1-.9-.4-1.3l2.1-3.3h.4c1.4 0 2.5-1.1 2.5-2.5 0-.5-.1-1-.4-1.3l2.1-3.2h.8l2.1 3.2c-.3.4-.4.9-.4 1.3 0 1.4 1.1 2.5 2.5 2.5s2.5-1.1 2.5-2.5c0-.5-.1-1-.4-1.3l2.1-3.2h.4c1.4 0 2.5-1.1 2.5-2.5 0-.5-.2-1-.4-1.4l2-2.7h.3C30.9 5 32 3.9 32 2.5S30.9 0 29.5 0 27 1.1 27 2.5c0 .5.2 1 .5 1.4l-1.7 2.7h-.4c-1.4 0-2.5 1.1-2.5 2.5 0 .5.1 1 .4 1.3l-2.1 3.2h-.8l-2.1-3.2c.3-.4.4-.9.4-1.3 0-1.4-1.1-2.5-2.5-2.5s-2.5 1.1-2.5 2.5c0 .5.1 1 .4 1.3L12 13.6h-.4c-1.4 0-2.5 1.1-2.5 2.5 0 .5.2 1 .4 1.4l-2.1 3.2c-.2 0-.3-.1-.5-.1h-.4l-1.8-3.1c.1-.3.3-.8.3-1.4 0-1.4-1.1-2.5-2.5-2.5S0 14.7 0 16.1s1.1 2.5 2.5 2.5'
    />
    <path fill='#414652' d='M0 2a2 2 0 0 1 2-2h15a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2z' />
    <path
      fill='#fff'
      d='M4.4 4.624q.449 0 .649-.168a.55.55 0 0 0 .208-.432v-.056a.63.63 0 0 0-.2-.488q-.192-.184-.552-.184-.336 0-.632.176a1.46 1.46 0 0 0-.504.488l-.752-.704q.16-.208.344-.376.183-.176.416-.296.232-.128.52-.192.288-.072.648-.072.447 0 .808.104.368.104.624.304.264.192.4.464.144.272.144.608 0 .264-.088.48-.08.217-.232.376a1.3 1.3 0 0 1-.336.264 1.5 1.5 0 0 1-.408.136v.048q.247.048.456.16.216.105.368.272.16.168.248.4.087.225.088.512 0 .375-.152.68a1.5 1.5 0 0 1-.432.52 2.1 2.1 0 0 1-.672.336q-.393.112-.864.112-.425 0-.752-.088a2.4 2.4 0 0 1-.576-.232 2.3 2.3 0 0 1-.424-.344 3 3 0 0 1-.312-.408l.888-.688q.184.345.448.568.272.216.728.216.408 0 .632-.2a.72.72 0 0 0 .232-.56v-.048q0-.345-.264-.512-.256-.176-.712-.176H3.88v-1zM9.502 8.096q-1.096 0-1.624-.76T7.35 5.208t.528-2.128 1.624-.76 1.624.76.528 2.128-.528 2.128-1.624.76m0-1.016q.479 0 .664-.352.184-.352.184-.992V4.68q0-.64-.184-.992t-.664-.352-.664.352-.184.992v1.056q-.001.64.184.992.184.352.664.352M14.298 8.096q-1.095 0-1.624-.76-.528-.76-.528-2.128t.528-2.128 1.624-.76 1.624.76.528 2.128-.528 2.128-1.624.76m0-1.016q.48 0 .664-.352t.184-.992V4.68q.001-.64-.184-.992-.184-.352-.664-.352-.479 0-.664.352-.184.352-.184.992v1.056q0 .64.184.992t.664.352'
    />
  </svg>
);
const ForwardRef = forwardRef(MarketDerivedStepIndices300Icon);
export default ForwardRef;
