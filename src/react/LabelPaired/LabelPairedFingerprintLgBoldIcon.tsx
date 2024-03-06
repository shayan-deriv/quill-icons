import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFingerprintLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.875 15.5v1.563q-.079.858-.937.937-.86-.078-.938-.937V15.5q.04-2.812 1.367-5.04a9.9 9.9 0 0 1 3.594-3.593Q7.187 5.54 10 5.5q2.305 0 4.258.938a10 10 0 0 1 3.32 2.539q.508.702-.078 1.328-.704.507-1.328-.078a7.9 7.9 0 0 0-2.735-2.07Q11.876 7.373 10 7.374q-3.438.078-5.742 2.383-2.304 2.304-2.383 5.742m17.93-2.07Q20 14.445 20 15.5v1.563q-.078.858-.937.937-.86-.078-.938-.937V15.5q0-.86-.156-1.68-.117-.86.703-1.093.859-.118 1.133.703M10 8.625q2.929.079 4.883 2.031 1.914 1.914 1.992 4.844v.977q0 1.64-.195 3.242-.156.742-.899.781-.469 0-.703-.312-.273-.314-.234-.782.156-1.445.156-2.93V15.5q-.04-2.109-1.445-3.555Q12.109 10.54 10 10.5q-.664 0-1.29.156-.702.196-1.17-.273-.314-.39-.196-.82.078-.43.547-.586A6.2 6.2 0 0 1 10 8.625M5.898 11.32q.43.626 0 1.328Q5.04 13.898 5 15.5v.977q0 1.68-.39 3.359-.195.625-.86.664a.86.86 0 0 1-.742-.39 1 1 0 0 1-.195-.82 13 13 0 0 0 .312-2.813V15.5q.04-2.421 1.445-4.219a.85.85 0 0 1 .664-.312q.352.039.664.351m7.852 4.18v.977q0 2.344-.469 4.609-.156.625-.82.664a.85.85 0 0 1-.664-.312q-.235-.313-.156-.743.39-2.109.39-4.218V15.5q-.039-.86-.586-1.445-.585-.547-1.445-.586-.86.039-1.445.586-.547.585-.586 1.445v.977q0 2.382-.625 4.687-.194.547-.782.586-.468 0-.703-.352a1.03 1.03 0 0 1-.156-.78q.547-2.032.547-4.141V15.5q.038-1.602 1.094-2.656Q8.398 11.789 10 11.75q1.602.039 2.656 1.094 1.055 1.054 1.094 2.656M10 14.563q.859.078.938.937v.977q0 3.867-1.407 7.5l-.234.625q-.352.742-1.211.507-.742-.352-.508-1.21l.234-.587a19 19 0 0 0 1.25-6.835V15.5q.079-.86.938-.937' />
    </g>
    <defs>
      <clipPath id='c26968b3b9a9d6703684ea7c3cbfb25b__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFingerprintLgBoldIcon);
export default ForwardRef;
