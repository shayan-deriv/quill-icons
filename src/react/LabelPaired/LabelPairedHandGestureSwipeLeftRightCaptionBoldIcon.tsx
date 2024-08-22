import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedHandGestureSwipeLeftRightCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={18}
    viewBox='0 0 15 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M7.5 5.914a.94.94 0 0 1 .938.938v1.406h.117c.351 0 .656.21.82.492.07-.023.14-.023.234-.023.329 0 .633.21.797.468h.14a.94.94 0 0 1 .938.938v1.523c0 .985-.796 1.758-1.757 1.758H7.875a2.4 2.4 0 0 1-1.125-.305l-.047-.023c-.68-.399-1.078-1.125-1.078-1.922v-.14c0-.376.14-.727.398-.961l.305-.282c.07-.047.14-.117.234-.164V6.852c0-.516.399-.938.938-.938m-.234.938v4.101a.25.25 0 0 1-.235.235.235.235 0 0 1-.234-.235v-.61l-.281.235c-.141.117-.188.258-.188.445v.141c0 .54.281 1.055.75 1.313l.024.023c.234.14.515.21.773.21h1.852c.562 0 1.054-.468 1.054-1.054v-1.523a.25.25 0 0 0-.234-.235c-.07 0-.117.024-.164.047a.37.37 0 0 1-.352.047.37.37 0 0 1-.187-.305.235.235 0 0 0-.235-.234c-.093 0-.14.024-.187.07-.094.118-.258.188-.399.118a.32.32 0 0 1-.234-.305v-.117a.235.235 0 0 0-.234-.235c-.094 0-.14.024-.188.07-.094.118-.258.188-.398.118a.33.33 0 0 1-.235-.328V6.852a.25.25 0 0 0-.234-.235.235.235 0 0 0-.234.235m4.125 1.382 1.265-1.265c.14-.14.14-.352 0-.469L11.32 5.14a.39.39 0 0 0-.492 0 .39.39 0 0 0 0 .493l.774.75H9.328c-.187 0-.328.164-.328.351 0 .188.14.329.328.329h2.274l-.68.68a.34.34 0 0 0 0 .491c.14.118.351.118.469 0m-7.805 0L2.344 6.97c-.14-.14-.14-.352 0-.469L3.68 5.14c.14-.117.351-.117.468 0a.34.34 0 0 1 0 .493l-.75.75h2.274c.187 0 .328.164.328.351a.32.32 0 0 1-.328.329H3.398l.68.68a.39.39 0 0 1 0 .491.39.39 0 0 1-.492 0' />
    </g>
    <defs>
      <clipPath id='05cf0b562483d1b3f8ff48b547f253cf__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHandGestureSwipeLeftRightCaptionBoldIcon);
export default ForwardRef;
