import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const MarketStocksSonyIcon = (
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
    <g clipPath='url(#94fb4e7bcc1ce9ee5880535225753a47__a)'>
      <path
        fill='#000'
        d='M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16'
      />
      <path
        fill='#fff'
        d='M11.975 18.465c-1.014 0-1.956-.304-2.584-.869a2.12 2.12 0 0 1-.703-1.6c0-.589.238-1.172.703-1.596.583-.532 1.614-.865 2.584-.865 1.074 0 1.933.27 2.59.867.468.424.694 1.004.694 1.594 0 .571-.24 1.18-.694 1.6-.612.568-1.573.869-2.59.869v-.65c.539 0 1.038-.186 1.387-.533.346-.345.507-.769.507-1.286 0-.496-.174-.96-.507-1.29-.344-.338-.856-.529-1.387-.529-.532 0-1.044.189-1.389.53-.331.329-.506.794-.506 1.289 0 .493.177.958.506 1.286.345.343.855.533 1.39.533zm-7.413-4.927c-.543 0-1.16.101-1.683.335-.483.216-.879.564-.879 1.143 0 .52.33.825.322.817.14.13.367.35.96.48.265.058.83.147 1.395.206.56.059 1.11.115 1.334.172.179.045.478.107.478.443 0 .334-.315.436-.37.459-.055.021-.433.195-1.114.195a4.7 4.7 0 0 1-1.326-.23c-.253-.09-.52-.21-.768-.513a.9.9 0 0 1-.159-.487h-.615v1.726h.684v-.234c0-.026.033-.135.148-.083.143.065.562.232 1.001.323.36.075.592.13 1.039.13.73 0 1.121-.12 1.392-.197.256-.073.571-.204.827-.409.139-.11.443-.393.443-.907 0-.494-.265-.8-.358-.893a1.6 1.6 0 0 0-.443-.301 3.3 3.3 0 0 0-.545-.19c-.352-.087-1.15-.194-1.531-.234-.4-.042-1.094-.1-1.371-.185-.084-.026-.255-.107-.255-.306q0-.213.233-.358c.245-.154.742-.25 1.26-.25a3.65 3.65 0 0 1 1.458.285c.112.05.243.122.347.207.118.095.283.295.343.572h.552v-1.501h-.617v.174c0 .057-.058.13-.168.07-.276-.146-1.057-.458-2.014-.46m13.524.272 3.01 2.717-.03-1.829c-.004-.24-.048-.34-.307-.34h-.567v-.547h2.575v.547h-.553c-.264 0-.28.085-.284.34l.047 3.495h-.882l-3.467-3.095v2.197c.003.238.015.35.26.35h.619v.548h-2.528v-.547h.59c.222 0 .213-.21.213-.364V14.72c0-.166-.023-.36-.37-.36h-.48v-.549zm7.622 3.835c.024 0 .131-.003.152-.01a.2.2 0 0 0 .119-.105.6.6 0 0 0 .011-.118v-.865c0-.02 0-.03-.036-.076-.039-.05-1.577-1.794-1.647-1.87-.088-.096-.241-.243-.474-.243h-.535v-.547h3.018v.546h-.364c-.084 0-.14.08-.068.169 0 0 1.016 1.215 1.025 1.228.01.012.018.016.03.004.014-.012 1.042-1.22 1.05-1.23a.105.105 0 0 0-.09-.17h-.373v-.547H30v.547h-.553c-.2 0-.282.037-.433.208l-1.665 1.9c-.023.025-.02.06-.02.081v.865c0 .017.003.1.011.118.019.044.06.087.119.105.02.006.127.01.15.01h.566v.547h-3.003v-.547z'
      />
    </g>
    <defs>
      <clipPath id='94fb4e7bcc1ce9ee5880535225753a47__a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(MarketStocksSonyIcon);
export default ForwardRef;
