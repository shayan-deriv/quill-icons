import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const MarketDerivedVolatility301sIcon = (
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
      d='M22.5 13H24v9h-1.5v10h-1V22H20v-9h1.5v-2h1zM30 11v7h-1.5v4h-1v-4H26v-7zM16.5 20v-4h-1v4H14v8h1.5v2h1v-2H18v-8zM10.5 15H12v6h-1.5v7h-1v-7H8v-6h1.5v-2h1zM4.5 19H6v4H4.5v2h-1v-2H2v-4h1.5v-2h1z'
    />
    <path fill='#FF444F' d='M22 5a5 5 0 1 1 10 0 5 5 0 0 1-10 0' />
    <path
      fill='#fff'
      d='M24.253 7v-.726h1.128V3.466h-.054l-.852 1.116-.576-.45 1.002-1.32h1.38v3.462h.888V7zM28.77 7.072q-.456 0-.769-.144-.312-.15-.558-.42l.522-.528q.168.186.372.294t.462.108q.264 0 .366-.078a.27.27 0 0 0 .102-.222q0-.222-.318-.264l-.342-.042q-1.062-.132-1.062-.972 0-.228.084-.414a.94.94 0 0 1 .246-.324q.162-.138.384-.21.228-.078.51-.078.246 0 .432.036.192.03.336.096.15.06.27.156.126.09.246.204l-.51.522q-.15-.15-.342-.234a.9.9 0 0 0-.384-.09q-.228 0-.324.072a.23.23 0 0 0-.096.192q0 .126.066.198.072.066.264.096l.354.048q1.038.138 1.038.948a.9.9 0 0 1-.096.42q-.096.192-.276.336a1.3 1.3 0 0 1-.426.216 1.8 1.8 0 0 1-.552.078'
    />
    <path fill='#414652' d='M0 2a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2z' />
    <path
      fill='#fff'
      d='M4.3 4.624q.447 0 .647-.168a.55.55 0 0 0 .208-.432v-.056a.63.63 0 0 0-.2-.488q-.192-.184-.552-.184-.336 0-.632.176a1.46 1.46 0 0 0-.504.488l-.752-.704q.16-.208.344-.376.184-.176.416-.296.232-.128.52-.192.288-.072.648-.072.448 0 .808.104.368.104.624.304.264.192.4.464.144.272.144.608 0 .264-.088.48-.08.217-.232.376a1.3 1.3 0 0 1-.336.264 1.5 1.5 0 0 1-.408.136v.048q.247.048.456.16.216.105.368.272.16.168.248.4.088.225.088.512 0 .375-.152.68a1.5 1.5 0 0 1-.432.52 2.1 2.1 0 0 1-.672.336q-.392.112-.864.112-.424 0-.752-.088a2.4 2.4 0 0 1-.576-.232 2.3 2.3 0 0 1-.424-.344 3 3 0 0 1-.312-.408l.888-.688q.184.345.448.568.272.216.728.216.408 0 .632-.2a.72.72 0 0 0 .232-.56v-.048q0-.345-.264-.512-.255-.176-.712-.176H3.78v-1zM9.4 8.096q-1.095 0-1.624-.76-.528-.76-.528-2.128t.528-2.128T9.4 2.32t1.624.76.528 2.128-.528 2.128-1.624.76m0-1.016q.48 0 .664-.352t.184-.992V4.68q0-.64-.184-.992T9.4 3.336t-.664.352-.184.992v1.056q0 .64.184.992t.664.352'
    />
  </svg>
);
const ForwardRef = forwardRef(MarketDerivedVolatility301sIcon);
export default ForwardRef;
