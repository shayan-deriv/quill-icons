import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedThumbsUpCaptionRegularIcon = (
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
      <path d='m6.773 5.422-.117.375Q6.258 7.25 4.97 8.094l-.07.047q-.282.163-.47.445-.233.258-.515.094-.281-.21-.094-.516.258-.399.68-.656l.07-.047a3.18 3.18 0 0 0 1.36-1.852l.117-.398q.164-.54.61-.797.468-.257 1.007-.117.516.164.797.61.257.468.117 1.007l-.094.375a5.6 5.6 0 0 1-.375.961H10.5q.633.024 1.055.445.421.423.445 1.055a1.52 1.52 0 0 1-.445 1.055q.07.21.07.445-.024.68-.492 1.102.117.28.117.585-.047.868-.75 1.29v.023a1.52 1.52 0 0 1-.445 1.055q-.422.421-1.055.445H6.89q-.773 0-1.452-.445l-.891-.586a2.9 2.9 0 0 1-.75-.75q-.141-.304.117-.516.305-.165.516.094.21.328.539.539l.89.61q.469.303 1.055.304H9a.73.73 0 0 0 .54-.21.73.73 0 0 0 .21-.54.5.5 0 0 0-.023-.164q-.024-.305.257-.422.493-.187.516-.726a.65.65 0 0 0-.164-.446.47.47 0 0 1-.07-.328.35.35 0 0 1 .21-.234q.375-.21.399-.68a.74.74 0 0 0-.094-.375q-.14-.281.117-.492.329-.21.352-.633a.73.73 0 0 0-.21-.54.73.73 0 0 0-.54-.21H7.477a.37.37 0 0 1-.329-.187.36.36 0 0 1 .024-.375q.375-.633.586-1.336l.094-.399q.094-.492-.399-.68-.492-.094-.68.399M.75 8.75V14h1.5V8.75zm-.75 0a.73.73 0 0 1 .21-.54A.73.73 0 0 1 .75 8h1.5a.73.73 0 0 1 .54.21q.21.212.21.54V14a.73.73 0 0 1-.21.54.73.73 0 0 1-.54.21H.75a.73.73 0 0 1-.54-.21A.73.73 0 0 1 0 14z' />
    </g>
    <defs>
      <clipPath id='31af8ea127f6a333e191418aa17eb7cf__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedThumbsUpCaptionRegularIcon);
export default ForwardRef;
