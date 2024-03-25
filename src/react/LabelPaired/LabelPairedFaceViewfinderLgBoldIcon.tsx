import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFaceViewfinderLgBoldIcon = (
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
      <path d='M0 7.688C0 6.516.977 5.5 2.188 5.5h3.125a.95.95 0 0 1 .937.938c0 .546-.43.937-.937.937H2.188a.31.31 0 0 0-.313.313v3.125c0 .546-.43.937-.937.937-.547 0-.938-.39-.938-.937zm13.75-1.25c0-.508.39-.938.938-.938h3.124C18.985 5.5 20 6.516 20 7.688v3.125c0 .546-.43.937-.937.937-.547 0-.938-.39-.938-.937V7.687a.336.336 0 0 0-.312-.312h-3.125c-.547 0-.938-.39-.938-.937M.938 19.25a.95.95 0 0 1 .937.938v3.125c0 .195.117.312.313.312h3.125a.95.95 0 0 1 .937.938c0 .546-.43.937-.937.937H2.188A2.184 2.184 0 0 1 0 23.313v-3.125c0-.508.39-.938.938-.938m18.125 0a.95.95 0 0 1 .937.938v3.125c0 1.21-1.016 2.187-2.187 2.187h-3.125c-.547 0-.938-.39-.938-.937 0-.508.39-.938.938-.938h3.124a.31.31 0 0 0 .313-.312v-3.125c0-.508.39-.938.938-.938m-9.688-5.312c0 .546-.43.937-.937.937-.547 0-.938-.39-.938-.937 0-.508.39-.938.938-.938a.95.95 0 0 1 .937.938m2.188.937c-.547 0-.938-.39-.938-.937 0-.508.39-.938.938-.938a.95.95 0 0 1 .937.938c0 .546-.43.937-.937.937M10 11.125c-1.602 0-3.008.86-3.79 2.188-.82 1.367-.82 3.046 0 4.374.782 1.368 2.188 2.188 3.79 2.188 1.563 0 2.969-.82 3.75-2.187.82-1.329.82-3.008 0-4.375-.781-1.329-2.187-2.188-3.75-2.188m0 10.625a6.22 6.22 0 0 1-5.43-3.125c-1.133-1.914-1.133-4.297 0-6.25C5.703 10.461 7.734 9.25 10 9.25c2.227 0 4.258 1.21 5.39 3.125 1.133 1.953 1.133 4.336 0 6.25-1.132 1.953-3.163 3.125-5.39 3.125m-1.64-5.312c.312.585.937.937 1.64.937.664 0 1.29-.352 1.602-.937.195-.274.546-.391.859-.196.312.156.39.547.234.86-.547.898-1.562 1.562-2.695 1.562-1.172 0-2.187-.664-2.734-1.562-.157-.313-.079-.704.234-.86a.62.62 0 0 1 .86.195' />
    </g>
    <defs>
      <clipPath id='48b23b08e2806b45a447dd35a02f0942__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFaceViewfinderLgBoldIcon);
export default ForwardRef;
