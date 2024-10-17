import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFiatOfframpXlFillIcon = (
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
      <path d='M8.203 10.5v1.031h2.016a.52.52 0 0 0 .515-.515.52.52 0 0 0-.515-.516zm0 2.016v.984h2.016a.52.52 0 0 0 .515-.516c0-.234-.234-.468-.515-.468zm12.563 5.109c3.422 0 6.234 2.766 6.234 6.188S24.188 30 20.766 30H6.984A3.98 3.98 0 0 1 3 26.016V12.234C3 8.813 5.766 6 9.188 6s6.187 2.813 6.187 6.234c0 .516-.047 1.032-.187 1.5l4.078 4.079c.468-.141.984-.188 1.5-.188M5.25 26.015c0 .938.797 1.735 1.734 1.735h9c-.89-1.031-1.406-2.437-1.406-3.937 0-2.016.985-3.844 2.531-4.97l-2.953-2.952a6.08 6.08 0 0 1-4.969 2.53c-1.5 0-2.906-.515-3.937-1.405zm2.953-16.5v-1.03H7.22v1.03h-.985v.985h.985v3h-.985v1.031h.985v.985h.984v-.985h1.031v.985h.985v-.985c.797 0 1.5-.656 1.5-1.5 0-.375-.14-.75-.422-1.031a1.487 1.487 0 0 0-.094-2.11 1.5 1.5 0 0 0-.984-.374V8.484h-.985v1.032zM21.61 20.814v-.563h-1.265v.563c-.797.234-1.313.984-1.313 1.828 0 1.078.844 1.968 1.922 1.968a.74.74 0 0 1 .75.75c0 .375-.328.703-.75.703a.72.72 0 0 1-.703-.703v-.187h-1.219v.187c0 .844.516 1.594 1.313 1.828v.563h1.265v-.562c.797-.235 1.313-.985 1.313-1.829a1.98 1.98 0 0 0-1.969-1.968c-.375 0-.703-.328-.703-.75a.72.72 0 0 1 .703-.703c.422 0 .75.328.75.703v.187h1.219v-.187c0-.844-.516-1.594-1.313-1.828m1.032-9.329v4.36c0 .469-.282.844-.703 1.031-.422.188-.891.094-1.22-.234l-4.359-4.36c-.422-.422-.422-1.125 0-1.594.422-.421 1.172-.421 1.594 0l2.438 2.438v-1.64c0-.61.468-1.126 1.125-1.126.609 0 1.125.516 1.125 1.125' />
    </g>
    <defs>
      <clipPath id='a5c039758fd7d45821c8f1383624907a__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFiatOfframpXlFillIcon);
export default ForwardRef;
