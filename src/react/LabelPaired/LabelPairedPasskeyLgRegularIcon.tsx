import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPasskeyLgRegularIcon = (
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
      <path d='M9.883 16.125a13 13 0 0 1 1.758-.117c.312 0 .625 0 .898.039.313 0 .586.039.899.078h.039a4.9 4.9 0 0 0 .468 2.578c.43.781 1.016 1.445 1.758 1.914v2.617H4.258v-3.086c0-.585.156-1.132.508-1.64.312-.508.703-.899 1.25-1.172.898-.43 1.797-.781 2.773-.977a5.5 5.5 0 0 1 1.094-.234M5.82 19.172l6.407-1.914h-.586c-.86 0-1.72.078-2.578.312-.86.196-1.68.508-2.5.899-.313.156-.547.39-.743.703m6.407-1.914L5.82 19.172c-.195.312-.312.625-.312.976v1.836h8.945v-.742c-.664-.508-1.21-1.21-1.601-1.992-.313-.625-.547-1.29-.625-1.992m-2.188-2.422a3.8 3.8 0 0 1-1.25-.86c-.781-.78-1.172-1.757-1.172-2.851s.39-2.07 1.172-2.852c.781-.78 1.758-1.171 2.852-1.171 1.132 0 2.07.39 2.851 1.171.82.782 1.211 1.758 1.211 2.852s-.39 2.07-1.21 2.852a3.6 3.6 0 0 1-1.212.859c-.234.078-.43.156-.664.234-.312.04-.625.078-.976.078-.586 0-1.094-.078-1.602-.312m-.351-1.758c.546.586 1.171.82 1.953.82.78 0 1.406-.234 1.992-.82.547-.547.82-1.172.82-1.953s-.273-1.406-.82-1.953c-.586-.547-1.211-.82-1.992-.82-.782 0-1.407.273-1.953.82-.586.547-.82 1.172-.82 1.953s.234 1.406.82 1.953m9.101 12.149 1.836-1.836-1.406-1.368 1.406-1.367-1.133-1.172c.625-.234 1.094-.625 1.485-1.132a3.28 3.28 0 0 0 .546-1.836c0-.86-.312-1.641-.937-2.266a3.07 3.07 0 0 0-2.266-.937c-.898 0-1.64.312-2.265.937a3.07 3.07 0 0 0-.938 2.266c0 .742.195 1.367.625 1.953.43.547.977.937 1.64 1.133v4.257zm-.469-8.243c-.351 0-.664-.156-.86-.43a1.08 1.08 0 0 1 0-.976c.196-.273.509-.469.86-.43a.85.85 0 0 1 .82.43.89.89 0 0 1 0 .977c-.156.273-.468.43-.82.43' />
    </g>
    <defs>
      <clipPath id='4403b2e5db09f5ec97b60145d3cc4358__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPasskeyLgRegularIcon);
export default ForwardRef;
