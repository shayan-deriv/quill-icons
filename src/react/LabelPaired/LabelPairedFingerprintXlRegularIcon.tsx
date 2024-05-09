import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFingerprintXlRegularIcon = (
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
      <path d='M1.5 18v2.25c0 .422-.375.75-.75.75a.74.74 0 0 1-.75-.75V18C0 11.39 5.344 6 12 6c3.75 0 7.125 1.734 9.328 4.453a.804.804 0 0 1-.14 1.078c-.329.235-.797.188-1.032-.14C18.234 9.047 15.281 7.5 12 7.5 6.188 7.5 1.5 12.234 1.5 18m22.031-3.187c.282 1.03.469 2.109.469 3.187v2.25c0 .422-.375.75-.75.75a.74.74 0 0 1-.75-.75V18c0-.937-.14-1.875-.422-2.766-.094-.421.14-.843.563-.937.375-.094.797.14.89.515M12 9.75h-.047a8.23 8.23 0 0 1 8.25 8.25v1.172c0 1.406-.047 2.812-.234 4.219-.047.375-.375.609-.75.609-.469 0-.797-.375-.75-.844.187-1.312.281-2.625.281-3.984V18c0-3.703-3.047-6.75-6.75-6.75-.844 0-1.64.188-2.39.422-.282.14-.657.047-.891-.188-.328-.375-.235-.984.234-1.125A8.2 8.2 0 0 1 12 9.75m-5.203 2.953a.786.786 0 0 1-.047 1.031A6.84 6.84 0 0 0 5.25 18v1.172c0 1.453-.187 2.906-.562 4.312-.094.328-.375.516-.704.516-.515 0-.843-.469-.75-.937.329-1.266.516-2.579.516-3.891V18c0-2.016.703-3.89 1.969-5.344.281-.328.797-.281 1.078.047M12 13.5c2.484 0 4.5 2.016 4.5 4.5v1.172c0 1.969-.234 3.89-.61 5.765-.046.329-.374.563-.703.563-.515 0-.843-.422-.75-.89.376-1.782.563-3.61.563-5.438V18c0-1.64-1.36-3-3-3-1.687 0-3 1.36-3 3v1.172c0 1.969-.281 3.937-.844 5.812-.094.328-.375.516-.703.516-.516 0-.844-.469-.703-.984.469-1.735.75-3.516.75-5.344V18c0-2.484 2.016-4.5 4.5-4.5m.75 4.5v1.172c0 3.047-.562 6.047-1.687 8.906l-.282.703c-.14.422-.562.61-.937.422-.422-.14-.61-.562-.422-.937l.234-.75a23 23 0 0 0 1.594-8.344V18c0-.375.328-.75.75-.75.375 0 .75.375.75.75' />
    </g>
    <defs>
      <clipPath id='d8ec793f8c43e9232d7e26899ecf946e__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFingerprintXlRegularIcon);
export default ForwardRef;
