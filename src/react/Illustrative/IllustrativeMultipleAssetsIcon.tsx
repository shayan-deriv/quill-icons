import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const IllustrativeMultipleAssetsIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M17.97 17.32c.233.42.68.68 1.16.68h2.22c.48 0 .927-.26 1.16-.68l1.127-2c.226-.4.226-.9 0-1.307l-1.127-2c-.233-.42-.68-.68-1.16-.68h-2.22c-.48 0-.927.26-1.16.68l-1.126 2c-.227.4-.227.9 0 1.307l.126.227-1.553.893-.247-.433c-.233-.42-.68-.68-1.16-.68h-.447v-2h.447c.48 0 .927-.26 1.16-.68l1.127-2c.226-.4.226-.9 0-1.307l-1.127-2c-.233-.42-.68-.68-1.16-.68h-2.22c-.48 0-.926.26-1.16.68l-1.127 2c-.226.4-.226.9 0 1.307l1.127 2c.233.42.68.68 1.16.68h.447v2h-.447c-.48 0-.926.26-1.16.68l-.24.433-1.553-.893.126-.234c.227-.4.227-.9 0-1.306l-1.126-2c-.234-.42-.68-.68-1.16-.68h-2.22c-.48 0-.927.26-1.16.68l-1.127 2c-.227.4-.227.9 0 1.306l1.127 2c.233.42.68.68 1.16.68h2.22c.48 0 .926-.26 1.16-.68l.34-.606 1.553.893-.227.407c-.226.4-.226.9 0 1.306l.227.407-1.833 1.06-.06-.107c-.234-.42-.68-.68-1.16-.68h-2.22c-.48 0-.927.26-1.16.68l-1.127 2c-.227.4-.227.9 0 1.307l1.127 2c.233.42.68.68 1.16.68h2.22c.48 0 .926-.26 1.16-.68l1.126-2c.227-.4.227-.9 0-1.307l-.413-.733 1.833-1.06.247.433c.233.42.68.68 1.16.68h.447v2h-.447c-.48 0-.926.26-1.16.68l-1.127 2c-.226.4-.226.9 0 1.307l1.127 2c.233.42.68.68 1.16.68h2.22c.48 0 .927-.26 1.16-.68l1.127-2c.226-.4.226-.9 0-1.307l-1.127-2c-.233-.42-.68-.68-1.16-.68h-.447v-2h.447c.48 0 .927-.26 1.16-.68l.24-.433 1.834 1.06-.414.733c-.226.4-.226.9 0 1.307l1.127 2c.233.42.68.68 1.16.68h2.22c.48 0 .927-.26 1.16-.68l1.127-2c.226-.4.226-.9 0-1.307l-1.127-2c-.233-.42-.68-.68-1.16-.68h-2.22c-.48 0-.927.26-1.16.68l-.06.107-1.833-1.06.226-.407c.227-.4.227-.9 0-1.306l-.226-.407 1.553-.893.34.606zM11.797 12l-1.127-2 1.127-2h2.22l1.127 2-1.127 2zm-7.334 4.667-1.126-2 1.126-2h2.22l1.127 2-.447.793-.673 1.2H4.47zm2.22 8.666h-2.22l-1.126-2 1.126-2h2.22l.394.7.733 1.3zm8.46 2-1.126 2h-2.22l-1.127-2 1.127-2h2.22zm6.207-6 1.127 2-1.127 2h-2.22l-1.126-2 .733-1.3.393-.7zm-9.553-.666-1.12-1.994 1.127-2h2.22l1.12 1.994-1.12 1.993h-2.22zm7.333-8h2.22l1.127 2-1.127 2h-2.22l-.673-1.2-.447-.794 1.127-2zM26.077 2a4.333 4.333 0 1 0 0 8.666 4.333 4.333 0 0 0 0-8.666m0 7.333c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.347 3 3-1.347 3-3 3' />
      <path d='m26.604 5.527-.86.86-.194-.194a.664.664 0 1 0-.94.94l.667.667c.133.133.3.193.473.193.174 0 .34-.066.474-.193l1.333-1.333a.664.664 0 1 0-.94-.94z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IllustrativeMultipleAssetsIcon);
export default ForwardRef;
