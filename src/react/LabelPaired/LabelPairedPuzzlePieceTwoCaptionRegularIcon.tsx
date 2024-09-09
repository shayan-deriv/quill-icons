import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPuzzlePieceTwoCaptionRegularIcon = (
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
      <path d='M3.75 7.766c0-.258.07-.493.21-.657.118-.187.306-.328.54-.328s.422.14.54.328c.046.047.093.07.116.07a.1.1 0 0 0 .094-.093v-.68c0-.328.258-.586.563-.586h1.03a.1.1 0 0 0 .095-.093c0-.024-.024-.07-.07-.118-.188-.14-.306-.328-.306-.562s.118-.422.305-.563a.98.98 0 0 1 .633-.21c.234 0 .469.07.633.21.187.141.305.329.305.563s-.118.422-.305.562c-.047.047-.07.094-.07.118a.1.1 0 0 0 .093.093h1.008c.328 0 .563.258.563.586v3.961c0 .07 0 0 .023.14v.868q0 .07.07.07c.024 0 .07 0 .117-.07.141-.164.329-.305.563-.305.21 0 .398.14.54.305.116.188.21.422.21.656 0 .258-.094.516-.21.68-.142.187-.33.305-.54.305-.234 0-.422-.118-.562-.305-.047-.07-.094-.094-.118-.094-.047 0-.07.047-.07.094v1.476a.555.555 0 0 1-.562.563H8.156a.456.456 0 0 1-.469-.469c0-.187.118-.328.235-.422a.32.32 0 0 0 .14-.257.32.32 0 0 0-.14-.258.75.75 0 0 0-.422-.14.75.75 0 0 0-.422.14.32.32 0 0 0-.14.258c0 .093.046.187.14.257.117.094.234.235.234.422 0 .281-.21.469-.468.469H5.812a.54.54 0 0 1-.562-.562V8.445a.1.1 0 0 0-.094-.093c-.023 0-.07.023-.117.07a.62.62 0 0 1-.539.305.62.62 0 0 1-.54-.305c-.14-.164-.21-.399-.21-.656m2.906 1.898v.024a.7.7 0 0 1-.093-.376c0-.234.117-.421.304-.562.164-.117.399-.21.633-.21s.469.093.633.21c.07.07.14.14.187.21.07.118.117.235.117.352a.7.7 0 0 1-.304.586c-.047.047-.07.094-.07.118s0 .046.023.046c.023.024.047.024.07.024h1.008c.117 0 .188-.07.188-.188V6.406c0-.093-.07-.21-.188-.21H8.156a.456.456 0 0 1-.469-.47c0-.187.118-.328.235-.421a.32.32 0 0 0 .14-.258.32.32 0 0 0-.14-.258.75.75 0 0 0-.422-.14.75.75 0 0 0-.422.14.32.32 0 0 0-.14.258c0 .094.046.187.14.258.117.093.234.234.234.422 0 .28-.21.468-.468.468H5.812c-.093 0-.187.117-.187.211v.68c0 .281-.21.469-.469.469a.46.46 0 0 1-.398-.211c-.094-.117-.164-.164-.258-.164s-.164.047-.258.164a.7.7 0 0 0-.117.422c0 .187.047.328.117.422.094.117.164.164.258.164s.164-.047.258-.165a.47.47 0 0 1 .398-.234c.258 0 .469.211.469.492v1.453c0 .118.094.188.188.188h1.03c.048 0 .095-.024.095-.07 0-.024-.024-.047-.024-.07-.023-.024-.023-.048-.047-.048a.7.7 0 0 1-.21-.234m.657.352a.47.47 0 0 1-.47.468H5.79a.2.2 0 0 0-.187.188v3.492c0 .117.093.211.187.211h1.055a.1.1 0 0 0 .093-.094c0-.023-.023-.07-.07-.117-.187-.14-.304-.328-.304-.562a.66.66 0 0 1 .304-.563 1 1 0 0 1 .633-.234 1 1 0 0 1 .633.234.66.66 0 0 1 .305.563c0 .234-.118.421-.305.562-.047.047-.07.094-.07.117a.1.1 0 0 0 .093.094h1.008c.094 0 .188-.094.188-.21V12.71a.47.47 0 0 1 .468-.469c.188 0 .328.117.399.235.094.117.164.14.258.14.093 0 .164-.023.257-.14.07-.094.118-.258.118-.446a.75.75 0 0 0-.118-.422c-.093-.093-.164-.164-.257-.164-.094 0-.165.047-.258.164a.47.47 0 0 1-.399.235.47.47 0 0 1-.468-.469v-.703a.2.2 0 0 0-.188-.188H8.156a.48.48 0 0 1-.351-.14.56.56 0 0 1-.117-.328.56.56 0 0 1 .234-.446.32.32 0 0 0 .14-.258c0-.046-.023-.093-.046-.14-.024-.024-.047-.07-.094-.117a.75.75 0 0 0-.422-.117.75.75 0 0 0-.422.117c-.094.093-.14.187-.14.258 0 .07 0 .117.046.164.024.023.047.07.094.093.047.047.117.094.14.164.071.07.095.164.095.282' />
    </g>
    <defs>
      <clipPath id='a6667c368550be666942726673d1fece__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPuzzlePieceTwoCaptionRegularIcon);
export default ForwardRef;
