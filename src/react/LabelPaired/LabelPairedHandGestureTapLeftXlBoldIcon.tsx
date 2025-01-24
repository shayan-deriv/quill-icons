import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedHandGestureTapLeftXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={30}
    height={36}
    viewBox='0 0 30 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M6.422 15c0-1.64 1.36-3 3-3s3 1.36 3 3c0 .516-.094.984-.328 1.406l.937 1.922.047-.047c.047-.047.094-.047.14-.093.61-.282 1.36-.188 1.923.187.093-.094.234-.14.375-.234a1.91 1.91 0 0 1 1.875.187c.047-.047.093-.047.093-.094.047 0 .094-.047.141-.047a1.83 1.83 0 0 1 2.484.891l1.313 2.766a3.44 3.44 0 0 1-1.688 4.64l-3.328 1.594c-.703.328-1.5.469-2.25.422h-.094a4.45 4.45 0 0 1-3.656-2.531l-.094-.282c-.328-.656-.374-1.406-.093-2.062l.328-.75c.047-.14.14-.328.234-.516l-2.11-4.453A3.02 3.02 0 0 1 6.422 15m2.86-.14c.609-.282 1.265-.235 1.78.093 0-.89-.75-1.594-1.64-1.594s-1.64.75-1.64 1.641c0 .469.187.89.468 1.172.14-.563.469-1.031 1.031-1.313m3.937 9.328-.047-.047c.14.234 0 .515-.188.656-.28.094-.515 0-.656-.235l-.515-1.125-.282.704c-.14.328-.14.609 0 .937l.14.281a3.04 3.04 0 0 0 2.485 1.735h.094a2.86 2.86 0 0 0 1.547-.282l3.375-1.593c1.031-.469 1.453-1.735.984-2.766l-1.312-2.765c-.094-.235-.422-.329-.61-.235a.56.56 0 0 0-.234.235.82.82 0 0 1-.656.328c-.235 0-.469-.141-.61-.375-.093-.235-.375-.328-.609-.235-.14.094-.234.188-.281.328-.047.282-.281.563-.61.563-.28.047-.562-.14-.703-.375l-.094-.235c-.093-.234-.421-.28-.609-.187-.14.047-.234.14-.281.328a.61.61 0 0 1-.61.516.66.66 0 0 1-.703-.375l-1.171-2.438-.563-1.265c-.14-.141-.422-.235-.61-.141a.47.47 0 0 0-.234.516l.563 1.265zM5.156 7.5a.67.67 0 0 0-.656.656v19.735a.67.67 0 0 0 .656.656.67.67 0 0 0 .657-.656V8.156a.67.67 0 0 0-.657-.656' />
    </g>
    <defs>
      <clipPath id='91d1e82b433e886fc211d713a571d9c9__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHandGestureTapLeftXlBoldIcon);
export default ForwardRef;
