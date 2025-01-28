import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFiatOnrampCaptionRegularIcon = (
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
      <path d='M10.5 4.25c-.82.023-1.57.445-1.969 1.148a2.27 2.27 0 0 0 0 2.25c.422.68 1.149 1.125 1.969 1.125.797 0 1.547-.445 1.945-1.125a2.31 2.31 0 0 0 0-2.273A2.28 2.28 0 0 0 10.5 4.25m2.25 4.242A2.98 2.98 0 0 1 10.5 9.5a3 3 0 0 1-2.555-1.406L6.07 9.969A2.97 2.97 0 0 1 7.5 12.5c0 .914-.398 1.71-1.031 2.25h5.156c.61 0 1.125-.492 1.125-1.125zM4.5 14.75a2.244 2.244 0 0 0 .82-4.336h-.023a2.2 2.2 0 0 0-.797-.164 2.25 2.25 0 0 0 0 4.5m.844-5.11 2.273-2.273A2.7 2.7 0 0 1 7.5 6.5c0-1.64 1.336-3 3-3 1.64 0 3 1.36 3 3v7.125a1.866 1.866 0 0 1-1.875 1.875H4.5a2.99 2.99 0 0 1-3-3c0-1.64 1.336-3 3-3q.422 0 .844.14M3.75 6.126c0-.187.164-.375.375-.375h2.25c.14 0 .281.094.328.234.07.141.024.305-.07.422l-2.25 2.25a.397.397 0 0 1-.54 0 .397.397 0 0 1 0-.539L5.462 6.5H4.125a.37.37 0 0 1-.375-.375m1.055 4.5v.281c.398.117.656.492.656.914v.094h-.61v-.094c0-.187-.163-.351-.374-.351a.36.36 0 0 0-.352.351c0 .211.164.375.352.375a.99.99 0 0 1 .984.985c0 .422-.258.797-.656.914v.281h-.633v-.281c-.399-.117-.656-.492-.656-.914v-.094h.609v.094a.36.36 0 0 0 .352.351c.21 0 .375-.164.375-.351a.37.37 0 0 0-.375-.375.97.97 0 0 1-.961-.985c0-.422.257-.797.656-.914v-.281zm5.32-5.883v.516h.492v-.516h.492v.516c.188 0 .375.07.493.187.304.282.328.75.046 1.055.141.14.211.328.211.516 0 .422-.351.75-.75.75v.492h-.492v-.492h-.492v.492h-.516v-.492h-.492V7.25h.492v-1.5h-.492v-.492h.492v-.516zm.984 2.016h-.984v.492h.984a.26.26 0 0 0 .258-.258c0-.117-.117-.234-.258-.234m0-1.008h-.984v.516h.984a.26.26 0 0 0 .258-.258.26.26 0 0 0-.258-.258' />
    </g>
    <defs>
      <clipPath id='77bec4ccf5ca32a7cba0ce0468e99a04__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFiatOnrampCaptionRegularIcon);
export default ForwardRef;
