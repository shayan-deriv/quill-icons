import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMacosLgIcon = (
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
      <path d='M11.758 17.648c0 1.68-.86 2.735-2.266 2.735s-2.265-1.055-2.265-2.735.859-2.734 2.265-2.734 2.266 1.055 2.266 2.734m1.953-5.937-.586.039c-.352.04-.508.156-.508.39s.195.352.469.352c.351 0 .625-.234.625-.547zM2.5 15.5a9.93 9.93 0 0 1 5-8.633c3.086-1.797 6.875-1.797 10 0 3.086 1.797 5 5.078 5 8.633 0 3.594-1.914 6.875-5 8.672-3.125 1.797-6.914 1.797-10 0-3.125-1.797-5-5.078-5-8.672m12.305-3.906c0 .82.43 1.328 1.172 1.328.625 0 1.015-.352 1.054-.86h-.468c-.079.274-.274.43-.586.43-.43 0-.665-.351-.665-.898s.235-.86.665-.86c.312 0 .546.196.585.43h.47c-.04-.469-.43-.86-1.055-.86-.743 0-1.172.508-1.172 1.29m-6.72-1.211v2.46h.47V11.32c0-.312.234-.586.547-.586.273 0 .468.196.468.47v1.64h.508V11.28c0-.312.195-.547.508-.547.312 0 .469.196.469.508v1.602h.508v-1.719c0-.508-.274-.82-.782-.82-.351 0-.664.195-.781.468h-.04a.73.73 0 0 0-.702-.468c-.313 0-.586.156-.664.468h-.04v-.43zm4.571 7.265c0-2.148-1.21-3.515-3.164-3.515-1.914 0-3.125 1.367-3.125 3.515 0 2.188 1.211 3.555 3.125 3.555 1.953 0 3.164-1.367 3.164-3.555m.313-4.765c.312 0 .586-.117.742-.39h.039v.35h.469v-1.679c0-.547-.352-.86-.977-.86-.547 0-.976.274-1.015.704h.468c.078-.195.274-.274.547-.274.313 0 .508.157.508.43v.195l-.703.04c-.586.039-.899.312-.899.78-.039.43.313.704.82.704m5.39 6.25c0-.977-.586-1.524-1.992-1.836l-.742-.195c-.937-.196-1.328-.547-1.328-1.094 0-.703.664-1.133 1.523-1.133.899 0 1.485.469 1.563 1.21h.86c-.04-1.132-1.055-1.952-2.384-1.952-1.445 0-2.421.781-2.421 1.914 0 .976.585 1.601 1.953 1.875l.78.195c.938.195 1.329.586 1.329 1.133 0 .703-.703 1.172-1.602 1.172-1.015 0-1.68-.43-1.796-1.172h-.82c.077 1.172 1.054 1.953 2.538 1.953 1.524 0 2.54-.82 2.54-2.07' />
    </g>
    <defs>
      <clipPath id='8900c60917333784296671d930fde999__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMacosLgIcon);
export default ForwardRef;
