import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFingerprintCaptionFillIcon = (
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
      <path d='M1.125 9.5v.938A.555.555 0 0 1 .563 11 .54.54 0 0 1 0 10.438V9.5c0-3.305 2.672-6 6-6a5.99 5.99 0 0 1 4.547 2.11.584.584 0 0 1-.07.796.584.584 0 0 1-.797-.07C8.79 5.305 7.477 4.625 6 4.625c-2.695 0-4.875 2.203-4.875 4.875m10.734-1.219c.094.399.141.797.141 1.219v.96a.57.57 0 0 1-.562.563.555.555 0 0 1-.563-.562v-.938c0-.351-.047-.703-.117-1.03-.07-.282.14-.587.445-.657s.586.14.656.445M6 5.375A4.13 4.13 0 0 1 10.125 9.5v.586c0 .656-.047 1.312-.117 1.945a.56.56 0 0 1-.563.469c-.328 0-.61-.305-.562-.633.07-.586.117-1.172.117-1.781V9.5c0-1.64-1.36-3-3-3-.281 0-.54.047-.797.117a.67.67 0 0 1-.68-.187c-.257-.282-.164-.727.188-.844.398-.14.844-.211 1.289-.211M3.516 6.992a.635.635 0 0 1 0 .797A3.07 3.07 0 0 0 3 9.5v.586c0 .68-.094 1.36-.234 2.016-.047.234-.282.398-.516.398a.58.58 0 0 1-.562-.727 8 8 0 0 0 .187-1.687V9.5c0-.937.305-1.828.844-2.508.21-.258.586-.234.797 0M6 7.25A2.25 2.25 0 0 1 8.25 9.5v.586c0 .937-.094 1.875-.281 2.766a.5.5 0 0 1-.492.398.527.527 0 0 1-.516-.633c.164-.82.258-1.664.258-2.531V9.5c0-.656-.563-1.219-1.219-1.219-.68 0-1.219.563-1.219 1.219v.586c0 .96-.14 1.898-.375 2.812a.51.51 0 0 1-.492.352c-.352 0-.586-.328-.492-.68.21-.797.328-1.64.328-2.484V9.5A2.25 2.25 0 0 1 6 7.25m.563 2.25v.586c0 1.547-.305 3.07-.844 4.523l-.14.352c-.118.281-.446.445-.727.328-.282-.117-.446-.445-.329-.726l.141-.352c.516-1.313.774-2.719.774-4.125V9.5c0-.305.234-.562.562-.562a.57.57 0 0 1 .563.562' />
    </g>
    <defs>
      <clipPath id='ef19c5ba86c02fb5c7743da38bdd7268__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFingerprintCaptionFillIcon);
export default ForwardRef;
