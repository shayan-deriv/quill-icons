import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGridLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={30}
    viewBox='0 0 18 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3.688 8.313H1.812v1.874h1.876zM1.812 6.75h1.876c.859 0 1.562.703 1.562 1.563v1.874c0 .899-.703 1.563-1.562 1.563H1.812c-.898 0-1.562-.664-1.562-1.562V8.312c0-.859.664-1.562 1.563-1.562m1.876 7.813H1.812v1.874h1.876zM1.812 13h1.876c.859 0 1.562.703 1.562 1.563v1.874c0 .899-.703 1.563-1.562 1.563H1.812C.915 18 .25 17.336.25 16.438v-1.875C.25 13.703.914 13 1.813 13m0 7.813v1.875h1.876v-1.875zm-1.562 0c0-.86.664-1.563 1.563-1.563h1.875c.859 0 1.562.703 1.562 1.563v1.875c0 .898-.703 1.562-1.562 1.562H1.812c-.898 0-1.562-.664-1.562-1.562zm9.688-12.5H8.062v1.874h1.876zM8.062 6.75h1.876c.859 0 1.562.703 1.562 1.563v1.874c0 .899-.703 1.563-1.562 1.563H8.062c-.898 0-1.562-.664-1.562-1.562V8.312c0-.859.664-1.562 1.563-1.562m0 7.813v1.874h1.876v-1.875zm-1.562 0c0-.86.664-1.563 1.563-1.563h1.874c.86 0 1.563.703 1.563 1.563v1.874c0 .899-.703 1.563-1.562 1.563H8.062c-.898 0-1.562-.664-1.562-1.562zm3.438 6.25H8.062v1.875h1.876zM8.062 19.25h1.876c.859 0 1.562.703 1.562 1.563v1.875c0 .898-.703 1.562-1.562 1.562H8.062c-.898 0-1.562-.664-1.562-1.562v-1.875c0-.86.664-1.563 1.563-1.563m6.25-10.937v1.874h1.876V8.314zm-1.562 0c0-.86.664-1.563 1.563-1.563h1.874c.86 0 1.563.703 1.563 1.563v1.874c0 .899-.703 1.563-1.562 1.563h-1.875c-.899 0-1.563-.664-1.563-1.562zm3.438 6.25h-1.875v1.874h1.874zM14.313 13h1.874c.86 0 1.563.703 1.563 1.563v1.874c0 .899-.703 1.563-1.562 1.563h-1.875c-.899 0-1.563-.664-1.563-1.562v-1.875c0-.86.664-1.563 1.563-1.563m0 7.813v1.875h1.874v-1.875zm-1.563 0c0-.86.664-1.563 1.563-1.563h1.874c.86 0 1.563.703 1.563 1.563v1.875c0 .898-.703 1.562-1.562 1.562h-1.875c-.899 0-1.563-.664-1.563-1.562z' />
    </g>
    <defs>
      <clipPath id='d7f037635d7ed362a858c728cb32dc5c__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGridLgBoldIcon);
export default ForwardRef;
