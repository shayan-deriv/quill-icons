import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedHandsHoldingDiamondLgBoldIcon = (
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
      <path d='M11.602 5.89a1.205 1.205 0 0 1 1.757 0l3.75 3.75c.508.47.508 1.29 0 1.758l-3.75 3.75a1.205 1.205 0 0 1-1.757 0l-3.75-3.75a1.205 1.205 0 0 1 0-1.757zM2.812 8c1.524 0 2.813 1.29 2.813 2.813v5.039c.469-.391 1.094-.665 1.758-.665.703 0 1.406.313 1.914.82l2.383 2.384c.312.312.586.625.82.976.195-.351.469-.664.781-.976l2.383-2.383c.508-.508 1.211-.82 1.914-.82s1.328.273 1.797.664v-5.04A2.826 2.826 0 0 1 22.188 8 2.826 2.826 0 0 1 25 10.813v8.476c0 1.211-.508 2.422-1.367 3.32l-2.656 2.618c-.391.39-.977.39-1.329 0a.856.856 0 0 1 0-1.29l2.657-2.656c.508-.547.82-1.25.82-1.992v-8.477a.95.95 0 0 0-.937-.937.925.925 0 0 0-.938.938v5.703c0 1.015-.43 1.992-1.133 2.695l-.625.625-1.015 1.016-.625.625c-.391.39-.977.39-1.329 0a.856.856 0 0 1 0-1.29l.625-.625 1.016-1.054c.156-.156.273-.39.273-.586 0-.469-.39-.82-.859-.82a.86.86 0 0 0-.586.234l-2.383 2.383c-.78.742-1.171 1.797-1.171 2.851v1.992c0 .547-.43.938-.938.938-.547 0-.937-.39-.937-.937V22.57a3.96 3.96 0 0 0-1.211-2.851l-2.383-2.383c-.157-.156-.39-.273-.586-.273-.469 0-.82.39-.82.859 0 .195.078.43.234.586l1.055 1.015.625.625c.351.391.351.977 0 1.329-.391.39-.977.39-1.329 0l-.625-.625-1.054-1.016-.625-.625a3.8 3.8 0 0 1-1.094-2.695v-5.703a.95.95 0 0 0-.937-.938.925.925 0 0 0-.938.938v8.476c0 .742.273 1.445.82 1.992l2.657 2.617c.351.391.351.977 0 1.329-.391.39-.977.39-1.329 0l-2.656-2.618A4.64 4.64 0 0 1 0 19.29v-8.477A2.826 2.826 0 0 1 2.813 8' />
    </g>
    <defs>
      <clipPath id='58936a58f4722d109de034f322914780__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHandsHoldingDiamondLgBoldIcon);
export default ForwardRef;
