import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGearCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m5.227 4.39-.329 1.126a.96.96 0 0 1-.515.609c-.188.094-.352.188-.516.281a.95.95 0 0 1-.797.164l-1.125-.28h-.093a2.5 2.5 0 0 0-.352.515l-.117.164c-.094.187-.188.375-.258.562 0 .024.023.07.047.094l.82.82c.188.211.281.516.258.774v.586c.023.258-.07.539-.258.75l-.82.843a.2.2 0 0 0-.047.094c.07.188.164.375.258.563l.094.164c.117.164.234.351.351.515h.117l1.125-.28c.282-.071.586 0 .797.14.164.117.328.21.516.304a.96.96 0 0 1 .515.61l.329 1.125c0 .023.023.047.046.07.235.047.47.047.727.047.234 0 .469 0 .703-.047.024-.023.047-.047.047-.07l.328-1.125a.96.96 0 0 1 .516-.61c.187-.093.351-.187.515-.304.235-.14.516-.211.797-.14l1.125.28h.117c.118-.164.235-.351.352-.515l.094-.164c.094-.188.187-.375.258-.563a.2.2 0 0 0-.047-.094l-.82-.843a1.02 1.02 0 0 1-.258-.75c0-.094.023-.188.023-.305 0-.094-.023-.187-.023-.281a1.07 1.07 0 0 1 .257-.774l.82-.82a.2.2 0 0 0 .048-.094c-.07-.187-.165-.375-.258-.562l-.094-.164a10 10 0 0 0-.352-.516h-.117l-1.125.281c-.281.07-.562 0-.797-.14a4 4 0 0 0-.515-.305.96.96 0 0 1-.516-.61L6.75 4.392a.2.2 0 0 0-.047-.094C6.47 4.273 6.234 4.25 6 4.25c-.258 0-.492.023-.727.047a.2.2 0 0 0-.046.094M6 3.5c.305 0 .586.023.89.07.048.024.07.024.118.047.21.117.398.328.469.563l.328 1.125c0 .047.047.117.117.14.21.094.422.211.61.352.07.047.14.07.187.047l1.148-.282a.9.9 0 0 1 .727.118l.094.093c.164.188.304.422.445.657l.117.164v.023c.117.235.234.469.328.703.024.047.024.07.024.117a.88.88 0 0 1-.258.704l-.82.843c-.024.024-.047.094-.047.164 0 .118.023.235.023.352s-.023.234-.023.352c0 .093.023.164.046.187l.82.844a.88.88 0 0 1 .259.703c0 .023 0 .07-.024.117-.094.235-.21.469-.328.703l-.117.188c-.14.234-.281.445-.469.656-.023.047-.047.07-.07.094a.93.93 0 0 1-.75.117l-1.125-.281c-.047-.024-.117 0-.188.047-.187.117-.398.234-.61.351-.07.024-.116.094-.116.14l-.328 1.102a.99.99 0 0 1-.47.586c-.046.024-.07.024-.116.047-.305.024-.586.047-.891.047s-.61-.023-.914-.047c-.047-.023-.07-.023-.117-.047a.99.99 0 0 1-.469-.586l-.328-1.101c0-.047-.047-.117-.117-.14a3.2 3.2 0 0 1-.61-.352c-.07-.047-.14-.047-.187-.047l-1.125.28a.88.88 0 0 1-.727-.116.3.3 0 0 1-.093-.07c-.188-.211-.329-.446-.47-.68L.75 12.43l-.023-.024a9 9 0 0 1-.329-.703c0-.047-.023-.07-.023-.117 0-.258.07-.516.258-.703l.82-.844c.024-.023.047-.094.047-.187v-.704c0-.07-.023-.14-.047-.164l-.82-.843c-.188-.188-.258-.446-.258-.703 0-.047.023-.07.023-.118.094-.234.211-.468.329-.703l.023-.023.094-.164c.14-.235.304-.47.469-.657a.18.18 0 0 1 .093-.093.88.88 0 0 1 .727-.117l1.125.28c.047.024.117 0 .187-.046.188-.117.399-.258.61-.352.07-.023.117-.093.117-.14L4.5 4.18a1 1 0 0 1 .469-.563c.047-.023.07-.023.117-.047Q5.544 3.5 6 3.5m-1.312 6c0 .492.234.914.656 1.148a1.313 1.313 0 1 0 0-2.273A1.26 1.26 0 0 0 4.687 9.5m3.375 0c0 .75-.399 1.43-1.032 1.805a2.15 2.15 0 0 1-2.062 0A2.05 2.05 0 0 1 3.937 9.5c0-.727.376-1.406 1.032-1.781a2.15 2.15 0 0 1 2.062 0A2.09 2.09 0 0 1 8.063 9.5' />
    </g>
    <defs>
      <clipPath id='1f0fcd0dfa628b09a83ab6531be9bccb__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGearCaptionRegularIcon);
export default ForwardRef;
