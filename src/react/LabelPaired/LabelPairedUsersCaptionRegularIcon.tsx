import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedUsersCaptionRegularIcon = (
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
      <path d='M2.25 5.375c0 .422.21.773.563.984.328.211.773.211 1.124 0 .329-.21.563-.562.563-.984 0-.398-.234-.75-.562-.96a1.08 1.08 0 0 0-1.126 0c-.351.21-.562.562-.562.96m3 0c0 .68-.375 1.29-.937 1.64a1.91 1.91 0 0 1-1.875 0 1.9 1.9 0 0 1-.938-1.64c0-.656.352-1.266.938-1.617a1.91 1.91 0 0 1 1.874 0c.563.351.938.96.938 1.617M7.5 7.25c-.54 0-1.031.305-1.312.75a1.55 1.55 0 0 0 0 1.5c.28.469.773.75 1.312.75.516 0 1.008-.281 1.29-.75a1.55 1.55 0 0 0 0-1.5c-.282-.445-.774-.75-1.29-.75m0 3.75c-.82 0-1.547-.422-1.969-1.125a2.27 2.27 0 0 1 0-2.25C5.953 6.945 6.68 6.5 7.5 6.5c.797 0 1.523.445 1.945 1.125.399.703.399 1.57 0 2.25C9.023 10.578 8.297 11 7.5 11m-1.383 1.5c-1.265 0-2.32 1.008-2.367 2.25h7.477c-.047-1.242-1.102-2.25-2.368-2.25zm0-.75H8.86A3.14 3.14 0 0 1 12 14.89c0 .352-.281.61-.633.61H3.61A.605.605 0 0 1 3 14.89a3.12 3.12 0 0 1 3.117-3.14M12 4.25c-.422 0-.773.234-.984.563a1.08 1.08 0 0 0 0 1.125 1.122 1.122 0 0 0 1.945 0 1.08 1.08 0 0 0 0-1.125c-.211-.329-.563-.563-.961-.563m0 3c-.68 0-1.29-.352-1.64-.937a1.91 1.91 0 0 1 0-1.875c.35-.563.96-.938 1.64-.938.656 0 1.266.375 1.617.938a1.91 1.91 0 0 1 0 1.875A1.89 1.89 0 0 1 12 7.25m.375 1.5H10.5c0-.258-.047-.492-.094-.75h1.969C13.805 8 15 9.195 15 10.625c0 .21-.187.375-.375.375a.37.37 0 0 1-.375-.375 1.88 1.88 0 0 0-1.875-1.875m-7.875 0H2.625A1.866 1.866 0 0 0 .75 10.625c0 .21-.187.375-.375.375A.37.37 0 0 1 0 10.625 2.636 2.636 0 0 1 2.625 8h1.969c-.07.258-.094.492-.094.75' />
    </g>
    <defs>
      <clipPath id='1235c6a44cfcb4b369822b8349b206af__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedUsersCaptionRegularIcon);
export default ForwardRef;
