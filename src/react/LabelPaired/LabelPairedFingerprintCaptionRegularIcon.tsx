import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFingerprintCaptionRegularIcon = (
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
      <path d='M.75 9.5v1.125c0 .21-.187.375-.375.375A.37.37 0 0 1 0 10.625V9.5c0-3.305 2.672-6 6-6 1.875 0 3.563.867 4.664 2.227a.4.4 0 0 1-.07.539c-.164.117-.399.093-.516-.07A5.3 5.3 0 0 0 6 4.25 5.256 5.256 0 0 0 .75 9.5m11.016-1.594c.14.516.234 1.055.234 1.594v1.125c0 .21-.187.375-.375.375a.37.37 0 0 1-.375-.375V9.5c0-.469-.07-.937-.21-1.383-.048-.21.07-.422.28-.469.188-.046.399.07.446.258M6 5.375h-.023A4.116 4.116 0 0 1 10.102 9.5v.586c0 .703-.024 1.406-.118 2.11-.023.187-.187.304-.375.304a.37.37 0 0 1-.375-.422c.094-.656.141-1.312.141-1.992V9.5A3.39 3.39 0 0 0 6 6.125c-.422 0-.82.094-1.195.21-.14.071-.328.024-.446-.093-.164-.187-.117-.492.118-.562A4.1 4.1 0 0 1 6 5.375M3.398 6.852a.39.39 0 0 1-.023.515 3.42 3.42 0 0 0-.75 2.133v.586c0 .726-.094 1.453-.281 2.156a.35.35 0 0 1-.352.258.385.385 0 0 1-.375-.469 7.8 7.8 0 0 0 .258-1.945V9.5a4.04 4.04 0 0 1 .984-2.672c.141-.164.399-.14.54.024M6 7.25A2.25 2.25 0 0 1 8.25 9.5v.586c0 .984-.117 1.945-.305 2.883-.023.164-.187.281-.351.281a.366.366 0 0 1-.375-.445c.187-.89.281-1.805.281-2.72V9.5C7.5 8.68 6.82 8 6 8c-.844 0-1.5.68-1.5 1.5v.586c0 .984-.14 1.969-.422 2.906a.35.35 0 0 1-.351.258c-.258 0-.422-.234-.352-.492.234-.867.375-1.758.375-2.672V9.5A2.25 2.25 0 0 1 6 7.25m.375 2.25v.586c0 1.523-.281 3.023-.844 4.453l-.14.352c-.07.21-.282.304-.47.21-.21-.07-.304-.28-.21-.468l.117-.375c.516-1.313.797-2.742.797-4.172V9.5c0-.187.164-.375.375-.375.188 0 .375.188.375.375' />
    </g>
    <defs>
      <clipPath id='c7d2ca332ea37c4d4b8764c823fc48ee__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFingerprintCaptionRegularIcon);
export default ForwardRef;
