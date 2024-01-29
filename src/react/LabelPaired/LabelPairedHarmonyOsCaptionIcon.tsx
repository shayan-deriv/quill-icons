import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedHarmonyOsCaptionIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={18}
    viewBox='0 0 15 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3.938 3.5h7.101A2.46 2.46 0 0 1 13.5 5.96v7.103a2.44 2.44 0 0 1-2.46 2.437H3.937A2.42 2.42 0 0 1 1.5 13.063V5.96A2.44 2.44 0 0 1 3.938 3.5m.468 2.766V8.96h.54V7.812h1.171v1.149h.516V6.266h-.516V7.32H4.945V6.266zm3.657 0V8.96h.515V7.625l-.047-.445h.047l.703 1.195h.305l.726-1.195h.024l-.024.445v1.336h.516V6.266h-.515l-.868 1.406h-.023l-.844-1.406zm1.054 6.515c.117.024.235.047.352.047s.234-.023.351-.047c.117-.047.211-.094.305-.164s.164-.14.234-.234c.047-.117.094-.235.094-.375a.65.65 0 0 0-.07-.305.6.6 0 0 0-.14-.234c-.071-.07-.165-.117-.259-.164-.093-.047-.187-.094-.304-.14l-.164-.048c-.164-.047-.282-.117-.375-.164-.07-.047-.094-.117-.094-.21 0-.071.023-.141.117-.188.07-.07.164-.094.281-.094s.211.047.282.094q.105.105.14.21l.492-.187c-.023-.07-.07-.117-.117-.187a.4.4 0 0 0-.164-.188.53.53 0 0 0-.281-.14c-.094-.047-.211-.047-.352-.047s-.28 0-.375.046a1.3 1.3 0 0 0-.304.165c-.07.07-.141.14-.188.234a.65.65 0 0 0 0 .586c.047.07.094.14.164.21a.5.5 0 0 0 .211.141c.07.047.14.094.235.118l.164.046c.117.047.187.07.257.118.07.023.141.047.188.093.023.024.07.07.094.118 0 .023.023.07.023.117 0 .07-.023.117-.047.14a.4.4 0 0 1-.094.118c-.046.023-.07.046-.14.046-.047.024-.094.024-.164.024a.48.48 0 0 1-.352-.14.51.51 0 0 1-.187-.329l-.516.188c.047.117.094.234.164.328s.14.164.235.234c.093.07.21.117.304.164m-3.586.047c.188 0 .375-.047.54-.117.163-.07.304-.164.445-.305a1.375 1.375 0 0 0 .375-.984c0-.211-.024-.399-.094-.563a1.4 1.4 0 0 0-.281-.445c-.141-.117-.282-.234-.446-.305a1.4 1.4 0 0 0-.539-.093c-.187 0-.375.023-.539.093a1.25 1.25 0 0 0-.445.305 1.4 1.4 0 0 0-.281.445c-.07.164-.118.352-.118.563 0 .187.047.375.118.539s.164.328.28.445c.118.14.259.235.446.305.164.07.352.117.54.117m0-.492a.9.9 0 0 1-.351-.07 1 1 0 0 1-.282-.188.8.8 0 0 1-.187-.281 1.095 1.095 0 0 1 0-.774c.047-.093.117-.21.187-.28.094-.071.188-.141.282-.188a.9.9 0 0 1 .351-.07c.117 0 .235.023.328.07.118.047.211.117.282.187.093.07.14.188.187.281a1.1 1.1 0 0 1 0 .774c-.047.117-.094.21-.187.281-.07.094-.164.14-.282.188a.75.75 0 0 1-.328.07m-1.008.726v.469h1.97v-.469z' />
    </g>
    <defs>
      <clipPath id='9747af8693023721128792adb2274a0e__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHarmonyOsCaptionIcon);
export default ForwardRef;
