import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const MarketDerivedVolatility151sIcon = (
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
      d='M2.955 8v-.968H4.46V3.288h-.072L3.251 4.776l-.768-.6 1.336-1.76h1.84v4.616h1.184V8zM11.176 3.464H8.64l-.12 1.768h.064q.08-.2.176-.36.105-.168.24-.28.136-.12.328-.184t.456-.064q.36 0 .672.12t.544.352a1.6 1.6 0 0 1 .368.56q.136.329.136.744 0 .425-.144.792-.136.36-.416.624a1.9 1.9 0 0 1-.672.416q-.4.144-.912.144a2.7 2.7 0 0 1-.72-.088 2.3 2.3 0 0 1-.552-.232 2 2 0 0 1-.416-.344 2.5 2.5 0 0 1-.304-.408l.872-.688q.185.328.44.56.255.224.688.224t.648-.248q.224-.248.224-.656v-.064q0-.384-.224-.608-.225-.225-.616-.224-.328 0-.544.136-.208.127-.32.256l-.984-.136.208-3.16h3.416z'
    />
  </svg>
);
const ForwardRef = forwardRef(MarketDerivedVolatility151sIcon);
export default ForwardRef;
