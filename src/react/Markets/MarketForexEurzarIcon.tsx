import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const MarketForexEurzarIcon = (
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
      fill='#0D47A1'
      d='M22 4H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2'
    />
    <path
      fill='#FFD955'
      d='m12.067 16.671.166.506.524.004c.068 0 .096.088.042.13l-.422.316.158.508c.02.065-.053.12-.108.08l-.427-.31-.427.31c-.055.04-.129-.015-.108-.08l.158-.508-.422-.317c-.054-.04-.026-.129.042-.13l.524-.003.166-.506a.07.07 0 0 1 .134 0m-2.584-.847.166.505.524.004c.068.001.096.089.042.13l-.422.316.158.508c.02.066-.053.12-.108.08l-.427-.31-.427.31c-.055.04-.129-.014-.108-.08l.158-.508-.422-.316c-.054-.041-.026-.129.042-.13l.524-.004.166-.505a.07.07 0 0 1 .134 0m5.206 0a.07.07 0 0 1 .134 0l.166.505.525.004c.068.001.096.089.041.13l-.422.316.159.508c.02.066-.054.12-.109.08l-.426-.31-.427.31c-.055.04-.13-.014-.109-.08l.159-.508-.422-.316c-.055-.041-.027-.129.041-.13l.524-.004zm2.09-1.986.165.505.525.005c.067 0 .096.088.041.13l-.422.316.158.508c.02.065-.053.12-.108.08l-.427-.31-.426.31c-.056.04-.13-.015-.109-.08l.158-.508-.422-.317c-.054-.04-.026-.129.042-.13l.524-.004.166-.505a.07.07 0 0 1 .134 0m-9.27-.031.02.031.165.505.525.005c.054 0 .083.056.064.1l-.023.03-.422.316.158.508a.072.072 0 0 1-.074.093l-.034-.013-.427-.31-.426.31c-.045.032-.1.003-.11-.043l.001-.037.158-.508-.422-.317a.073.073 0 0 1 .006-.12l.036-.01.524-.004.166-.505a.07.07 0 0 1 .114-.031m9.899-2.561.165.505.525.004c.068.001.096.089.041.13l-.421.316.158.508c.02.066-.054.12-.109.08l-.427-.31-.426.31c-.055.04-.129-.014-.109-.08l.159-.508-.422-.316c-.055-.041-.027-.129.041-.13l.525-.004.165-.505a.07.07 0 0 1 .135 0m-10.682 0 .166.505.525.004c.068.001.096.089.041.13l-.422.316.159.508c.02.066-.054.12-.109.08l-.427-.31-.426.31c-.055.04-.13-.014-.109-.08l.159-.508-.422-.316c-.055-.041-.027-.129.041-.13l.524-.004.166-.505a.07.07 0 0 1 .134 0m.802-2.833.166.505.525.004c.067 0 .096.089.041.13l-.422.316.158.508c.02.066-.053.12-.108.08l-.427-.31-.426.31c-.056.04-.13-.014-.109-.08l.158-.508-.422-.316c-.054-.041-.026-.13.042-.13l.524-.004.166-.505a.07.07 0 0 1 .134 0m9.23-.032.02.032.166.505.525.004c.054 0 .083.057.064.1l-.023.03-.422.316.158.508a.072.072 0 0 1-.074.094l-.034-.014-.427-.31-.426.31c-.045.032-.1.004-.11-.042l.001-.038.158-.508-.422-.316a.073.073 0 0 1 .006-.12l.036-.01.524-.004.166-.505a.07.07 0 0 1 .114-.032m-1.934-1.954.165.505.525.004c.068.001.096.089.041.13l-.422.316.159.508c.02.066-.054.12-.109.08l-.426-.31-.427.31c-.055.04-.13-.014-.109-.08l.159-.508-.422-.316c-.055-.041-.027-.129.041-.13l.524-.004.166-.505a.07.07 0 0 1 .134 0m-5.361-.031.02.031.166.505.524.004c.055 0 .084.057.065.1l-.023.03-.422.316.158.508a.072.072 0 0 1-.074.094l-.034-.014-.427-.31-.427.31c-.044.033-.1.004-.11-.042l.002-.038.158-.508-.422-.316a.073.073 0 0 1 .006-.12l.036-.01.524-.004.166-.505a.07.07 0 0 1 .114-.031m2.604-.575.166.505.524.004c.068 0 .096.089.042.13l-.422.316.158.508c.02.066-.053.12-.108.08L12 7.054l-.427.31c-.055.04-.129-.014-.108-.08l.158-.508-.422-.316c-.054-.041-.026-.13.042-.13l.524-.004.166-.505a.07.07 0 0 1 .134 0'
    />
    <path
      fill='#000'
      fillOpacity={0.08}
      fillRule='evenodd'
      d='M22 5H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1M2 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z'
      clipRule='evenodd'
    />
    <path fill='#F44E46' d='M10 12c-.502 0-.961.185-1.313.491L15 17h17v-3a2 2 0 0 0-2-2z' />
    <path fill='#072CB4' d='M10 28c-.502 0-.961-.185-1.313-.491L15 23h17v3a2 2 0 0 1-2 2z' />
    <path
      fill='#fff'
      d='M8.687 27.509A2 2 0 0 1 8 26v-2l6-4-6-4v-2c0-.602.266-1.142.687-1.509L15 17h17v6H15z'
    />
    <path
      fill='#06A86E'
      d='M8 16v-2c0-.308.07-.6.194-.861L15 18h17v4H15l-6.806 4.861A2 2 0 0 1 8 26v-2l6-4z'
    />
    <path fill='#FFBF2E' d='m14 20-6-4v1.5l4 2.5-4 2.5V24z' />
    <path fill='#333' d='m8 17.5 4 2.5-4 2.5z' />
    <path
      fill='#000'
      fillOpacity={0.08}
      fillRule='evenodd'
      d='M30 13H10a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V14a1 1 0 0 0-1-1m-20-1a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V14a2 2 0 0 0-2-2z'
      clipRule='evenodd'
    />
  </svg>
);
const ForwardRef = forwardRef(MarketForexEurzarIcon);
export default ForwardRef;
