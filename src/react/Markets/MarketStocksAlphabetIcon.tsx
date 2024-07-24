import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const MarketStocksAlphabetIcon = (
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
    <g clipPath='url(#af5ca9179226072e167339cad47f5ea9__a)'>
      <path
        fill='#F6F7F8'
        d='M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16'
      />
      <path
        fill='#ED1C24'
        d='M26.556 16.63v-1.6h-.536v-.525h.535v-.933h.573v.935h.75v.525h-.75v1.554c0 .343.144.498.412.498q.137.006.26-.05l.2.492c-.146.06-.303.088-.46.082a.884.884 0 0 1-.985-.979m-3.693-.6a1.54 1.54 0 0 1 1.495-1.626 1.466 1.466 0 0 1 1.494 1.625c0 .044-.006.106-.006.106h-2.41a.98.98 0 0 0 .975.996.85.85 0 0 0 .835-.525l.504.22a1.38 1.38 0 0 1-1.332.834 1.53 1.53 0 0 1-1.557-1.625zm1.482-1.103a.9.9 0 0 0-.871.735h1.768a.826.826 0 0 0-.897-.732zm-4.289 2.204h-.025v.423h-.548V13.1h.573v1.407l-.025.423h.025a1.22 1.22 0 0 1 1.04-.525 1.54 1.54 0 0 1 1.45 1.625 1.54 1.54 0 0 1-1.45 1.625 1.22 1.22 0 0 1-1.04-.52zm1.918-1.102a.98.98 0 1 0-1.943 0 .98.98 0 1 0 1.943 0m-5.79.6c0-.691.622-1.065 1.338-1.065.287-.005.57.059.826.187v-.08a.808.808 0 0 0-1.526-.3l-.525-.225a1.26 1.26 0 0 1 1.239-.741 1.255 1.255 0 0 1 1.357 1.307v1.843h-.548v-.423h-.02a1.15 1.15 0 0 1-1.003.525 1.045 1.045 0 0 1-1.138-1.02zm2.166-.392a1.2 1.2 0 0 0-.729-.2c-.6 0-.84.325-.84.6 0 .325.337.487.636.487a.95.95 0 0 0 .933-.88zM13.588 14.5l-.024.423h.024a1.16 1.16 0 0 1 .966-.525 1.125 1.125 0 0 1 1.164 1.283v1.867h-.573v-1.772c0-.635-.318-.847-.754-.847a.875.875 0 0 0-.803.94v1.688h-.572V13.1h.572v1.407zm-3.492 2.625h-.025l.025.423v1.345h-.573v-4.395h.548v.423h.025a1.22 1.22 0 0 1 1.04-.525 1.54 1.54 0 0 1 1.45 1.625 1.54 1.54 0 0 1-1.45 1.625 1.22 1.22 0 0 1-1.04-.512zm1.918-1.102a.98.98 0 1 0-1.943 0 .98.98 0 1 0 1.943 0m-3.675 1.525h.575V13.1h-.574zM5.681 13.1 4 17.557h.635l.436-1.207h1.875l.429 1.207h.635L6.33 13.1zm.311.704h.026l.728 2.01H5.264z'
      />
    </g>
    <defs>
      <clipPath id='af5ca9179226072e167339cad47f5ea9__a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(MarketStocksAlphabetIcon);
export default ForwardRef;
