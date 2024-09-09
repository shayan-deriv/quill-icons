import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedRedditXlIcon = (
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
      <path d='M0 18C0 11.39 5.344 6 12 6c6.61 0 12 5.39 12 12 0 6.656-5.39 12-12 12H1.734c-.656 0-.984-.75-.515-1.219l2.297-2.297C1.313 24.328 0 21.328 0 18m16.36-4.781a2 2 0 0 0 2.015-2.016c0-1.078-.89-1.969-2.016-1.969-.937 0-1.78.657-1.968 1.594-1.594.14-2.86 1.547-2.86 3.188-1.781.093-3.375.609-4.64 1.359a3.06 3.06 0 0 0-1.735-.562c-1.547 0-2.765 1.265-2.765 2.812 0 1.125.656 2.063 1.593 2.531.094 3.235 3.657 5.86 8.016 5.86 4.36 0 7.875-2.625 7.969-5.86.937-.468 1.593-1.453 1.593-2.531 0-1.547-1.218-2.812-2.765-2.812-.656 0-1.266.187-1.735.562-1.265-.797-2.906-1.266-4.687-1.36 0-1.171.89-2.203 2.063-2.343.187.89.984 1.547 1.921 1.547m-8.063 4.36c.75 0 1.36.843 1.312 1.874-.046.985-.609 1.36-1.406 1.36s-1.5-.422-1.453-1.407c.047-1.031.75-1.828 1.547-1.828m8.906 1.827c.047.985-.656 1.407-1.453 1.407-.75 0-1.36-.375-1.406-1.36-.047-1.031.562-1.875 1.36-1.875.75 0 1.452.797 1.5 1.828m-2.25 2.625C14.438 23.203 13.313 24 12 24c-1.36 0-2.484-.797-2.953-1.969-.094-.14 0-.281.187-.281.844-.094 1.782-.14 2.766-.14.938 0 1.875.046 2.766.14.14 0 .234.14.187.281' />
    </g>
    <defs>
      <clipPath id='9d8e6f563526f3c88b9f064f7454f3ed__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedRedditXlIcon);
export default ForwardRef;
