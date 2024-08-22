import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPuzzlePieceTwoLgBoldIcon = (
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
      <path d='M8.438 16.36v-2.344c-.157.039-.313.078-.47.078-.429 0-.82-.235-1.054-.547s-.351-.742-.351-1.172.117-.86.351-1.172.625-.547 1.055-.547c.156 0 .312.04.468.078v-.742c0-.586.508-1.094 1.094-1.094h1.328a1.04 1.04 0 0 1-.117-.468c0-.43.274-.82.586-1.055a1.89 1.89 0 0 1 2.305 0c.312.234.547.625.547 1.055 0 .156 0 .312-.078.468h1.328c.625 0 1.093.508 1.093 1.094v7.89a1.04 1.04 0 0 1 .47-.116c.429 0 .82.273 1.054.586s.351.703.351 1.132q0 .704-.351 1.172c-.235.313-.625.547-1.055.547-.156 0-.312 0-.469-.078v1.836c0 .586-.507 1.094-1.093 1.094h-2.032a.617.617 0 0 1-.625-.625.87.87 0 0 1 .157-.508c.117-.078.156-.156.156-.274 0-.156-.234-.468-.625-.468-.43 0-.625.312-.625.468 0 .118 0 .196.117.274.078.117.195.273.195.508 0 .351-.312.625-.664.625H9.531c-.586 0-1.094-.703-1.094-1.29V16.36m4.648-8.204a1 1 0 0 0-.625-.195.96.96 0 0 0-.586.195c-.117.078-.195.196-.195.274s.078.195.234.312c.156.078.234.274.234.508a.575.575 0 0 1-.585.586H9.53a.17.17 0 0 0-.156.156v1.485a.6.6 0 0 1-.586.585c-.234 0-.43-.117-.508-.273-.117-.156-.234-.195-.312-.195s-.196.039-.274.195c-.117.117-.195.313-.195.586 0 .234.078.469.195.586.078.156.196.195.274.195s.195-.039.312-.195c.078-.156.274-.274.508-.274.313 0 .547.274.547.586v2.579c0 .078.117.117.195.156h1.328c-.078-.156-.078-.313-.078-.469 0-.43.235-.82.547-1.055s.703-.39 1.172-.39c.43 0 .82.156 1.133.39.312.235.586.625.586 1.055q0 .235-.117.469h1.406c.078 0 .078-.078.078-.156v-5.86c0-.078-.04-.156-.156-.156h-2.032c-.351 0-.625-.274-.625-.586 0-.234.118-.43.274-.508.156-.117.195-.234.195-.312a.34.34 0 0 0-.156-.274m-3.555 8.79c-.117 0-.195.077-.195.156v5.859c0 .078.039.156.156.156h1.485c-.079-.117-.079-.273-.079-.469 0-.82.743-1.328 1.563-1.328.781 0 1.562.508 1.562 1.328q0 .294-.117.47h1.524c.078 0 .156-.04.156-.157v-2.578a.6.6 0 0 1 .586-.586c.234 0 .43.117.508.273.117.157.234.196.312.196s.195-.04.274-.196c.117-.117.195-.351.195-.586 0-.273-.078-.468-.195-.586-.078-.156-.196-.195-.274-.195s-.195.04-.312.195c-.078.157-.274.274-.508.274a.6.6 0 0 1-.586-.586v-1.484c0-.079-.04-.157-.117-.157h-2.071a.575.575 0 0 1-.585-.586c0-.234.078-.43.234-.507.156-.118.234-.235.234-.313s-.078-.195-.195-.273a.96.96 0 0 0-.586-.196 1 1 0 0 0-.625.196.34.34 0 0 0-.156.273c0 .078.039.195.195.313.156.078.274.273.274.507 0 .313-.274.586-.626.586H9.532' />
    </g>
    <defs>
      <clipPath id='8953ed872e7f20785261fe7c76e96736__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPuzzlePieceTwoLgBoldIcon);
export default ForwardRef;
