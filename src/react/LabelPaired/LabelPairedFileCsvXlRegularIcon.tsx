import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileCsvXlRegularIcon = (
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
      <path d='M3 28.5h1.5V30H3c-1.687 0-3-1.312-3-3V9c0-1.64 1.313-3 3-3h7.313c.562 0 1.171.281 1.593.703l5.39 5.39c.423.423.704 1.032.704 1.595V19.5h-1.5V15h-5.25A2.22 2.22 0 0 1 9 12.75V7.5H3c-.844 0-1.5.703-1.5 1.5v18c0 .844.656 1.5 1.5 1.5m13.453-15c-.047-.094-.094-.234-.187-.328l-5.438-5.438c-.094-.093-.234-.14-.328-.187v5.203c0 .422.328.75.75.75zm-7.078 9h.75A1.88 1.88 0 0 1 12 24.375v.375c0 .422-.375.75-.75.75a.74.74 0 0 1-.75-.75v-.375a.4.4 0 0 0-.375-.375h-.75a.37.37 0 0 0-.375.375v3.75c0 .234.14.375.375.375h.75a.37.37 0 0 0 .375-.375v-.375c0-.375.328-.75.75-.75.375 0 .75.375.75.75v.375A1.85 1.85 0 0 1 10.125 30h-.75C8.297 30 7.5 29.203 7.5 28.125v-3.75c0-1.031.797-1.875 1.875-1.875m6.234 0h1.641c.375 0 .75.375.75.75 0 .422-.375.75-.75.75h-1.64c-.376 0-.61.281-.61.656 0 .235.14.422.328.563l1.781.75c.75.328 1.266 1.125 1.266 1.922 0 1.172-.984 2.109-2.156 2.109H14.25a.74.74 0 0 1-.75-.75c0-.375.328-.75.75-.75h1.969c.375 0 .656-.234.656-.61a.61.61 0 0 0-.375-.562l-1.781-.75c-.75-.328-1.219-1.125-1.219-1.922 0-1.172.938-2.156 2.11-2.156m4.641 0c.375 0 .75.375.75.75v1.5c0 1.078.234 2.156.75 3.094.469-.938.75-2.016.75-3.094v-1.5c0-.375.328-.75.75-.75.375 0 .75.375.75.75v1.5c0 1.64-.516 3.234-1.406 4.594l-.235.328a.68.68 0 0 1-.609.328c-.281 0-.516-.094-.656-.328l-.235-.328A8.37 8.37 0 0 1 19.5 24.75v-1.5c0-.375.328-.75.75-.75' />
    </g>
    <defs>
      <clipPath id='dc1caab73adff876c8677d1b82e1e751__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileCsvXlRegularIcon);
export default ForwardRef;
