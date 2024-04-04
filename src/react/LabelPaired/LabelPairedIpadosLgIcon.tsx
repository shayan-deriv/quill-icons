import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedIpadosLgIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={25}
    height={30}
    viewBox='0 0 25 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M16.758 11.36c0-.547-.274-.9-.703-.9-.43 0-.703.313-.703.9 0 .585.273.937.703.937s.703-.352.703-.938m-5.742-1.016c0 .43-.274.664-.743.664H9.57V9.64h.703c.47 0 .743.234.743.703m-1.68 4.531c1.484 0 2.383 1.133 2.383 2.93 0 1.758-.899 2.89-2.383 2.89s-2.422-1.133-2.422-2.89c0-1.797.938-2.93 2.422-2.93m3.672-3.36c-.352.04-.508.157-.508.391 0 .274.195.39.469.39.39 0 .703-.233.703-.585v-.234zm9.062-3.32c.39.977.43 2.11.43 2.813v9.023c0 .703-.04 1.836-.43 2.813-.195.508-.625 1.21-1.25 1.68-.39.273-.82.546-1.406.742-.664.195-1.445.234-2.422.234H7.97c-.977 0-1.758-.04-2.422-.234-.586-.196-1.016-.47-1.406-.743-.625-.468-1.055-1.171-1.25-1.68-.391-.976-.391-2.109-.391-2.812v-9.023c0-.703 0-1.836.39-2.813.196-.508.626-1.21 1.25-1.68.391-.312.82-.546 1.407-.742.664-.195 1.445-.273 2.422-.273h9.023c.977 0 1.758.078 2.422.273.586.157 1.016.43 1.406.743.625.468 1.055 1.172 1.25 1.68m-6.172 1.797c-.664 0-1.093.547-1.093 1.367 0 .86.43 1.368 1.093 1.368.391 0 .665-.157.86-.47h.039v.43h.469V9.017h-.508v1.445h-.04a.95.95 0 0 0-.82-.469m-6.875-.82v3.515h.547v-1.21h.82c.665 0 1.172-.47 1.172-1.133 0-.703-.468-1.172-1.171-1.172zm-1.093.39c.117.04.234-.039.312-.156.078-.078.078-.234 0-.351a.36.36 0 0 0-.312-.157.36.36 0 0 0-.313.157c-.078.117-.078.273 0 .351.078.117.196.196.313.156m.273.47h-.547v2.656h.547zm1.133 11.523c2.031 0 3.32-1.446 3.32-3.75s-1.289-3.79-3.32-3.79c-2.07 0-3.36 1.485-3.36 3.79s1.29 3.75 3.36 3.75m2.617-9.61c0 .47.39.782.899.782.351 0 .625-.157.78-.43h.04v.39h.508v-1.796c0-.586-.352-.899-1.055-.899-.586 0-1.016.274-1.055.742h.508c.04-.195.235-.312.547-.312.352 0 .547.156.547.469v.234l-.742.04c-.625.038-.977.312-.977.78m4.102 9.61c1.601 0 2.656-.86 2.656-2.188 0-1.055-.586-1.64-2.11-1.992l-.78-.156c-1.016-.235-1.407-.625-1.407-1.172 0-.742.703-1.211 1.602-1.211.976 0 1.601.508 1.68 1.289h.898c-.04-1.21-1.094-2.11-2.54-2.11-1.523 0-2.577.86-2.577 2.07 0 1.017.664 1.68 2.109 1.993l.781.195c1.016.196 1.406.625 1.406 1.211 0 .703-.703 1.25-1.68 1.25-1.054 0-1.757-.468-1.874-1.25h-.899c.078 1.25 1.133 2.07 2.735 2.07' />
    </g>
    <defs>
      <clipPath id='f3ad4bca88afd7983a828345fef23989__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedIpadosLgIcon);
export default ForwardRef;
