import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGearCaptionBoldIcon = (
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
      <path d='M6 3.5c.398 0 .773.047 1.148.117.188.047.516.14.704.469.046.094.07.187.093.281l.235.914c.023.117.258.258.398.211l.89-.258c.095-.023.188-.046.282-.046.375 0 .633.234.75.375a6 6 0 0 1 1.172 2.015c.07.188.14.516-.07.82a.9.9 0 0 1-.188.235l-.656.656c-.117.094-.117.352 0 .445l.656.657c.07.07.14.14.188.234.187.305.117.633.07.82a6 6 0 0 1-1.172 2.016c-.117.14-.375.375-.75.375-.094 0-.187-.024-.281-.047l-.89-.281c-.142-.024-.376.094-.4.234l-.234.914a1.3 1.3 0 0 1-.093.281c-.188.329-.516.422-.704.47-.375.07-.75.093-1.148.093s-.797-.023-1.172-.094c-.187-.047-.516-.14-.703-.469-.047-.093-.07-.187-.094-.28l-.234-.915c-.024-.14-.258-.258-.375-.234l-.89.281c-.095.024-.212.024-.305.047-.375 0-.633-.234-.75-.375a6 6 0 0 1-1.172-2.016c-.047-.187-.117-.515.07-.843.047-.07.117-.165.188-.235l.68-.633c.093-.093.093-.351 0-.445l-.68-.656c-.07-.07-.141-.14-.188-.235-.187-.304-.117-.632-.07-.82.258-.75.656-1.43 1.172-2.016.117-.14.375-.375.75-.375.093 0 .21.024.304.047l.89.258c.118.047.352-.094.376-.21l.234-.915c.024-.094.047-.187.094-.281.188-.328.516-.422.703-.469.375-.07.774-.117 1.172-.117m-.89 1.219-.212.82c-.187.75-1.054 1.266-1.804 1.055l-.82-.258c-.376.469-.68.984-.891 1.547l.633.586c.562.539.562 1.547 0 2.086l-.633.586c.21.562.515 1.078.89 1.547l.82-.258c.75-.211 1.618.304 1.805 1.054l.211.82a4.6 4.6 0 0 0 1.782 0l.187-.82c.188-.75 1.055-1.265 1.805-1.054l.82.258c.375-.47.68-.985.89-1.547l-.609-.586c-.562-.54-.562-1.547 0-2.086l.61-.586a5.7 5.7 0 0 0-.89-1.547l-.821.258c-.727.21-1.617-.305-1.805-1.055l-.187-.82a4.6 4.6 0 0 0-1.782 0M4.874 9.5c0 .422.21.773.563.984.328.211.773.211 1.125 0 .328-.21.562-.562.562-.984 0-.398-.234-.75-.562-.96a1.08 1.08 0 0 0-1.125 0c-.352.21-.563.562-.563.96M6 11.75c-.82 0-1.547-.422-1.969-1.125a2.27 2.27 0 0 1 0-2.25C4.453 7.695 5.18 7.25 6 7.25c.797 0 1.523.445 1.945 1.125.399.703.399 1.57 0 2.25-.422.703-1.148 1.125-1.945 1.125' />
    </g>
    <defs>
      <clipPath id='7c9e14175ed9b1d7198de355f2231d34__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGearCaptionBoldIcon);
export default ForwardRef;
