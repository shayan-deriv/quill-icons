import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPasskeyXlBoldIcon = (
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
      <path d='M13.969 17.578a4.64 4.64 0 0 1-2.906-.984c-.188-.14-.329-.282-.516-.422-.938-.938-1.406-2.11-1.406-3.422 0-1.36.468-2.484 1.406-3.422.937-.937 2.11-1.406 3.422-1.406 1.36 0 2.484.469 3.422 1.406.984.938 1.453 2.11 1.453 3.422s-.469 2.484-1.453 3.422l-.422.422c-.188.14-.375.234-.563.375-.375.234-.797.375-1.265.515-.375.047-.75.094-1.172.094m1.828-3c.562-.515.797-1.078.797-1.828 0-.703-.235-1.266-.797-1.828-.516-.516-1.078-.75-1.828-.75s-1.313.234-1.828.75c-.516.515-.75 1.078-.75 1.828 0 .703.234 1.313.75 1.828.515.516 1.125.75 1.828.75.75 0 1.312-.234 1.828-.75m-5.25 4.453.047-.047a15.7 15.7 0 0 1 3.328-.375h.281c.281 0 .563 0 .844.047.375 0 .75.047 1.125.094-.047.281-.047.516-.047.75.047.844.281 1.594.61 2.344.515.937 1.218 1.734 2.109 2.297v3.14H5.109v-3.703q0-1.055.563-1.969c.422-.609.89-1.078 1.547-1.406 1.078-.515 2.156-.937 3.328-1.219zm3.422 1.828c-.985 0-1.969.094-2.906.328-.985.235-1.922.563-2.86 1.032-.234.14-.422.328-.61.562-.14.282-.234.516-.234.797v1.453h9c-.656-.61-1.172-1.36-1.593-2.203a7.6 7.6 0 0 1-.703-1.969zm8.578 8.813-1.688-1.64v-5.11c-.797-.235-1.453-.703-1.968-1.36-.516-.703-.75-1.453-.75-2.343 0-1.078.375-1.969 1.125-2.719s1.64-1.125 2.718-1.125 1.97.375 2.72 1.125a3.76 3.76 0 0 1 1.124 2.719c0 .843-.234 1.547-.656 2.203-.469.61-1.031 1.078-1.781 1.36l1.359 1.406-1.687 1.64 1.687 1.64zm-.563-9.89c.422 0 .797-.188.985-.516a1.07 1.07 0 0 0 0-1.172 1.02 1.02 0 0 0-.985-.516c-.422-.047-.797.188-1.03.516a1.29 1.29 0 0 0 0 1.172c.233.328.608.515 1.03.515' />
    </g>
    <defs>
      <clipPath id='751b42434260cb421a7a45fc489d227e__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPasskeyXlBoldIcon);
export default ForwardRef;
