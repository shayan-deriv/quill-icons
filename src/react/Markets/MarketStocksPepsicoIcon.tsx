import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const MarketStocksPepsicoIcon = (
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
    <g clipPath='url(#bfbe37a617ca42dd210ad6a3886b1905__a)'>
      <path
        fill='#F6F7F8'
        d='M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16'
      />
      <path
        fill='#28458E'
        fillRule='evenodd'
        d='M9.2 16.972h.647c.253 0 .35.088.35.301 0 .206-.097.293-.35.293H9.2zm-1.003 2.16H9.2v-.878h1.075c.711 0 .967-.42.967-.961 0-.63-.263-.985-.975-.985h-2.07zm3.376-2.824h2.7v.688h-1.697v.38h1.577v.688h-1.577v.38h1.697v.688h-2.7zm4.124.664h.647c.253 0 .35.088.35.301 0 .206-.097.293-.35.293h-.647zm-1.004 2.16h1.004v-.878h1.074c.712 0 .968-.42.968-.961 0-.63-.263-.985-.975-.985h-2.07zm4.017-1.198c-.49-.084-.693-.4-.693-.795 0-.732.644-.93 1.469-.93 1.131 0 1.598.328 1.633.926h-1.167c0-.115-.06-.186-.153-.226a.7.7 0 0 0-.313-.06c-.299 0-.402.084-.402.203 0 .079.032.13.132.146l1.199.198c.505.083.818.344.818.822 0 .689-.505 1.013-1.633 1.013-.772 0-1.616-.118-1.619-.95h1.21c.003.096.035.159.107.203.074.04.184.059.34.059.314 0 .4-.095.4-.23 0-.083-.047-.166-.182-.19zm2.85-1.626h1.004v2.824H21.56zm4.722 1.725c-.064.371-.178.672-.427.878-.246.205-.63.32-1.242.32-.608 0-1.736-.047-1.736-1.51 0-1.465 1.128-1.512 1.736-1.512.605 0 1.537.087 1.669 1.207H25.15c-.028-.202-.15-.495-.537-.495-.41 0-.669.226-.669.8 0 .573.253.798.62.798.316 0 .505-.146.586-.486zm1.313-.313c0-.573.26-.799.669-.799s.669.226.669.8c0 .573-.26.798-.67.798-.409 0-.668-.225-.668-.799m-1.068 0c0 1.464 1.128 1.511 1.737 1.511.608 0 1.736-.047 1.736-1.51s-1.128-1.512-1.736-1.512-1.737.047-1.737 1.511M6.68 16.336c.065-1.355-1.103-2.881-2.696-3.07l.002-.018c1.57 0 2.775 1.454 2.775 2.6-.002.24-.02.387-.054.495zm-.095.172a2.6 2.6 0 0 1-.39.379c-.283-1.63-1.48-3.054-2.326-3.47l-.018.013c.85.698 1.866 2.055 2.26 3.52a3.3 3.3 0 0 1-.648.372c-.803-.916-1.552-2.683-1.793-3.804l-.025.008c.006 1.088.778 2.935 1.72 3.836q-.325.13-.67.185c-.903-.357-1.545-1.503-1.545-2.677 0-.766.233-1.24.278-1.337l-.019-.008c-.054.083-.397.557-.397 1.384 0 1.327.655 2.34 1.523 2.66a3 3 0 0 1-.93-.043l-.007.02c.093.034.408.166.89.166a2.48 2.48 0 0 0 2.118-1.19z'
        clipRule='evenodd'
      />
      <path
        fill='#0096D6'
        fillRule='evenodd'
        d='M4.378 12.769c-.824 0-1.791.595-1.791 1.14 0 .21.192.387.59.387.926 0 1.785-.635 1.785-1.13 0-.26-.25-.397-.584-.397m.33.383c0 .416-.8.925-1.469.925-.295 0-.455-.116-.455-.308 0-.422.81-.923 1.436-.923.41 0 .488.208.488.306'
        clipRule='evenodd'
      />
      <path
        fill='#EB7B30'
        fillRule='evenodd'
        d='M2.258 14.16a.9.9 0 0 0-.116.408c0 .346.35.666.991.666 1.235 0 2.662-.909 2.662-1.752 0-.38-.359-.585-.608-.628l-.004.015c.077.025.36.156.36.494 0 .672-1.259 1.588-2.514 1.588-.48 0-.783-.237-.783-.582 0-.11.023-.182.029-.202z'
        clipRule='evenodd'
      />
      <path
        fill='#00984A'
        fillRule='evenodd'
        d='M6.304 13.545a.66.66 0 0 1 .237.515c0 1.093-1.712 2.168-3.226 2.168-.903 0-1.315-.446-1.297-.841h.016c.036.205.329.573 1.12.573 1.515 0 3.208-1.112 3.208-2.087a.65.65 0 0 0-.071-.317z'
        clipRule='evenodd'
      />
      <path
        fill='#DF002C'
        fillRule='evenodd'
        d='M6.876 14.565c.007.023.044.128.044.292 0 1.216-1.733 2.257-3.24 2.257-.776 0-1.181-.377-1.267-.53l.014-.01c.215.187.638.33 1.131.33 1.331 0 3.318-1.013 3.3-2.335z'
        clipRule='evenodd'
      />
    </g>
    <defs>
      <clipPath id='bfbe37a617ca42dd210ad6a3886b1905__a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(MarketStocksPepsicoIcon);
export default ForwardRef;
