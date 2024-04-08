import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileCertificateCaptionRegularIcon = (
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
      <path d='M11.25 14V8H8.625A1.11 1.11 0 0 1 7.5 6.875V4.25h-3a.755.755 0 0 0-.75.75v1.5c-.21 0-.422.023-.61.094-.046.023-.117.07-.14.07v.024V5c0-.82.656-1.5 1.5-1.5h3.656c.281 0 .586.14.797.352l2.695 2.695c.211.21.352.516.352.797V14c0 .844-.68 1.5-1.5 1.5H5.18a1 1 0 0 0 .07-.375v-.375h5.25c.398 0 .75-.328.75-.75m-.023-6.75c-.024-.047-.047-.117-.094-.164L8.414 4.367c-.047-.047-.117-.07-.164-.094v2.602c0 .21.164.375.375.375zm-5.391 3v.023s0 .047.094.235a.88.88 0 0 1-.282 1.008c-.164.117-.187.164-.187.164 0 .023-.024.07-.047.258a.85.85 0 0 1-.75.75c-.094 0-.14.023-.164.023v2.414c0 .14-.094.281-.21.352a.42.42 0 0 1-.376-.024L3 14.843l-.937.61c-.094.07-.258.07-.376.024a.41.41 0 0 1-.187-.352v-2.414c-.047 0-.094-.024-.187-.024a.895.895 0 0 1-.75-.75c-.024-.21-.024-.234-.047-.257 0 0-.024-.047-.188-.164a.88.88 0 0 1-.281-1.008c.094-.188.094-.235.094-.258 0 0 0-.047-.094-.234a.88.88 0 0 1 .281-1.008c.164-.117.188-.164.188-.164 0-.024.023-.07.046-.258.07-.399.352-.703.75-.75.211-.024.235-.047.258-.047 0 0 .047-.023.164-.187a.88.88 0 0 1 1.008-.282c.188.094.235.094.258.094 0 0 .047 0 .234-.094a.88.88 0 0 1 1.008.282c.14.164.164.187.188.187 0 0 .047.024.234.047a.85.85 0 0 1 .75.75c.024.187.047.234.047.258 0 0 .023.047.187.164a.88.88 0 0 1 .282 1.008c-.07.187-.094.234-.094.234M2.25 14.445l.54-.375a.4.4 0 0 1 .397 0l.563.375V13.25c-.187.023-.352.023-.516-.047C3.047 13.11 3 13.11 3 13.11c-.023 0-.07 0-.258.094a.9.9 0 0 1-.492.047zM.89 10.25c0 .21-.07.375-.14.54-.023.046 0 .093.047.14.14.117.281.21.375.375.094.164.117.351.14.539a.1.1 0 0 0 .094.094c.188.023.375.046.54.14.163.094.28.235.374.375.047.047.094.07.14.047.165-.07.33-.14.54-.14.188 0 .352.07.516.14.046.023.093 0 .14-.047.117-.14.211-.281.375-.375s.352-.117.54-.14a.1.1 0 0 0 .093-.094c.024-.188.047-.375.14-.54.094-.163.235-.28.4-.374.023-.047.046-.094.023-.14-.07-.165-.141-.33-.141-.54 0-.187.07-.352.14-.516.024-.046 0-.093-.023-.14-.164-.117-.305-.211-.398-.375s-.117-.352-.14-.54a.1.1 0 0 0-.095-.093c-.187-.024-.375-.047-.539-.14s-.258-.235-.375-.4c-.047-.023-.094-.046-.14-.023-.164.07-.328.141-.516.141-.21 0-.375-.07-.54-.14-.046-.024-.093 0-.14.023-.117.164-.21.305-.375.398-.164.094-.351.117-.539.14a.1.1 0 0 0-.093.095c-.024.187-.047.375-.141.539s-.234.258-.375.375c-.047.047-.07.094-.047.14.07.164.14.329.14.516' />
    </g>
    <defs>
      <clipPath id='28315134876deb3286036775ff9ad38b__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileCertificateCaptionRegularIcon);
export default ForwardRef;
