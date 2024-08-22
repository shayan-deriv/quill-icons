import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedDerivP2pCaptionBoldIcon = (
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
      <path d='M4.5 7.813c-.14 0-.305.023-.492.023l-.516.07v3.328h.75V10.11H4.5c.492 0 .89-.093 1.148-.28.282-.165.422-.47.422-.868 0-.399-.14-.703-.398-.867-.281-.188-.656-.281-1.172-.281m.047.656c.117 0 .21 0 .305.023.093.024.164.047.234.07.07.047.117.094.14.165.047.046.047.14.047.234 0 .187-.046.328-.187.398-.14.07-.328.094-.586.094h-.258v-.96c.047 0 .094-.024.14-.024zm3.867.281c0-.14-.023-.281-.07-.398a.9.9 0 0 0-.211-.305c-.094-.07-.211-.14-.352-.188a1.6 1.6 0 0 0-.515-.07c-.211 0-.422.047-.61.14-.187.071-.351.188-.492.329l.352.492a.5.5 0 0 1 .117-.07.4.4 0 0 1 .164-.117c.047-.047.117-.07.21-.094.071-.047.141-.047.235-.047.117 0 .235.023.305.07.094.07.117.164.117.305 0 .07 0 .14-.047.21a2 2 0 0 1-.117.188l-.187.188-.211.21c-.094.095-.211.188-.305.282s-.188.21-.281.328c-.07.117-.141.235-.188.352-.047.14-.07.28-.07.445v.234h2.25v-.609H7.055a.5.5 0 0 0 .07-.117c.047-.047.094-.094.14-.164.07-.047.118-.117.165-.164l.164-.164.281-.282c.117-.093.188-.187.281-.304.07-.094.14-.211.188-.328a.9.9 0 0 0 .07-.352m1.5-.937h.024c-.141 0-.305.023-.493.023-.187.023-.375.047-.539.07v3.328h.774V10.11h.234c.492 0 .89-.093 1.172-.28.258-.165.398-.47.398-.868 0-.399-.14-.703-.398-.867-.281-.188-.656-.281-1.172-.281m.07.656c.094 0 .211 0 .282.023.093.024.187.047.234.07.07.047.117.094.14.165.047.046.07.14.07.234 0 .187-.07.328-.21.398-.117.07-.328.094-.586.094H9.68v-.96c.023 0 .07-.024.117-.024zm1.266-3.844h-7.5c-.633 0-1.125.516-1.125 1.125v7.5a1.11 1.11 0 0 0 1.125 1.125h7.5c.61 0 1.125-.492 1.125-1.125v-7.5a1.14 1.14 0 0 0-1.125-1.125M3.75 3.5h7.5a2.25 2.25 0 0 1 2.25 2.25v7.5a2.25 2.25 0 0 1-2.25 2.25h-7.5a2.25 2.25 0 0 1-2.25-2.25v-7.5A2.25 2.25 0 0 1 3.75 3.5' />
    </g>
    <defs>
      <clipPath id='ab58040503819b02f421b690322bf583__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedDerivP2pCaptionBoldIcon);
export default ForwardRef;
