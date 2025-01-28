import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPuzzlePieceTwoLgFillIcon = (
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
      <path d='M10 7.063c.39 0 .703.156.938.39.195.234.312.547.39.899v.117l-.078.117c-.312.351-.078.976.43.976h1.64c.39 0 .742.118 1.016.313a.75.75 0 0 1 .351.625v5.977h-2.89l.078-.352c0-.04.04-.117 0-.156-.04-.508-.195-1.016-.547-1.367-.312-.391-.781-.625-1.367-.625-.547 0-1.016.234-1.367.625-.313.351-.469.859-.508 1.367v.156l.078.352h-2.89V15.5c0-.078 0-.352-.04-.586 0-.117-.039-.273-.078-.39-.039-.079-.078-.235-.195-.313a.63.63 0 0 0-.352-.117c-.078.039-.156.039-.195.078-.039 0-.078.039-.078.039l-.078.039H4.18c-.43-.04-.782-.195-1.016-.39-.234-.196-.39-.508-.39-.9 0-.194.038-.35.117-.507.078-.156.156-.273.273-.351.234-.157.586-.274 1.016-.313h.078l.078.04s.039 0 .078.038c.04 0 .117.04.195.078a.63.63 0 0 0 .352-.117c.117-.078.156-.234.195-.351.04-.118.078-.235.078-.352.04-.234.04-.508.04-.586V10.5c0-.234.117-.469.39-.625.234-.195.586-.312.977-.312h1.64c.508 0 .781-.626.469-.977l-.117-.117.039-.117c.039-.352.195-.665.39-.899.196-.234.508-.39.938-.39m-.04 7.5c.43 0 .743.156.977.39.196.235.313.547.391.899v.117l-.078.117c-.312.352-.078.977.43.977h3.008v1.68c0 .507.585.741.976.429l.078-.078.156.039c.352.039.665.156.899.351.234.235.39.547.39.977 0 .39-.156.703-.39.937-.235.196-.547.313-.899.391h-.156l-.078-.078c-.39-.313-.976-.078-.976.43v.898a.75.75 0 0 1-.352.625 1.74 1.74 0 0 1-1.016.313h-1.523l.078-.352c0-.04.04-.117 0-.156-.04-.508-.195-1.016-.547-1.367-.312-.391-.781-.625-1.367-.625-.547 0-1.016.234-1.367.625-.313.351-.469.859-.508 1.367v.156l.078.352H6.641c-.391 0-.743-.118-1.016-.313-.234-.195-.352-.43-.352-.664v-5.938h3.008c.508 0 .781-.625.469-.976l-.117-.078.039-.156c.039-.352.156-.665.351-.899.235-.234.547-.39.938-.39' />
    </g>
    <defs>
      <clipPath id='afe35d1e9b63748fda2cc1f8d9bc1587__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPuzzlePieceTwoLgFillIcon);
export default ForwardRef;
