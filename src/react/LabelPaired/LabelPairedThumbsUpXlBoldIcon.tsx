import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedThumbsUpXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={36}
    viewBox='0 0 24 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M15.14 7.64c1.829.516 2.86 2.391 2.344 4.173l-.28.937a8.2 8.2 0 0 1-.563 1.5H21c1.64 0 3 1.36 3 3 0 .844-.375 1.594-.89 2.156.093.282.14.563.14.89 0 .938-.469 1.829-1.219 2.392.047.187.094.375.094.609 0 .937-.469 1.781-1.125 2.344-.094 1.593-1.406 2.906-3 2.906h-4.594a5.3 5.3 0 0 1-2.906-.89l-2.906-1.923c-.516-.375-.657-1.03-.282-1.593a1.076 1.076 0 0 1 1.547-.282l2.907 1.922a2.84 2.84 0 0 0 1.64.516H18c.375 0 .75-.375.75-.75 0-.094-.047-.14-.047-.235-.14-.562.14-1.125.656-1.359.282-.094.516-.375.516-.656a.72.72 0 0 0-.187-.469 1.2 1.2 0 0 1-.141-1.125c.094-.375.422-.61.844-.703.328-.047.609-.375.609-.75 0-.187-.094-.328-.187-.469a1.06 1.06 0 0 1-.282-1.031 1.2 1.2 0 0 1 .703-.797.76.76 0 0 0 .516-.703c0-.375-.375-.75-.75-.75h-6.281c-.422 0-.797-.234-.985-.61-.187-.374-.187-.796.047-1.124a9 9 0 0 0 1.266-2.625l.281-.938a1.173 1.173 0 0 0-.797-1.406 1.173 1.173 0 0 0-1.406.797l-.234.937a6.75 6.75 0 0 1-1.407 2.531l-2.437 2.626a1.12 1.12 0 0 1-1.594.093 1.16 1.16 0 0 1-.047-1.593l2.39-2.626c.423-.468.75-1.03.938-1.64l.235-.938c.515-1.828 2.39-2.859 4.172-2.343M1.5 15h3c.797 0 1.5.703 1.5 1.5V27c0 .844-.703 1.5-1.5 1.5h-3A1.48 1.48 0 0 1 0 27V16.5c0-.797.656-1.5 1.5-1.5' />
    </g>
    <defs>
      <clipPath id='e261950e25acf4f255f1b2d377b6ef21__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedThumbsUpXlBoldIcon);
export default ForwardRef;
