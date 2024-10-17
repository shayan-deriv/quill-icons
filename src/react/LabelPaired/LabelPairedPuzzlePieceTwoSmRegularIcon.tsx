import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPuzzlePieceTwoSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={22}
    viewBox='0 0 18 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M4.625 8.727c0-.301.082-.575.246-.766.137-.219.356-.383.629-.383s.492.164.629.383c.055.055.11.082.137.082.054 0 .109-.055.109-.11v-.792c0-.383.3-.684.656-.684h1.203c.055 0 .11-.055.11-.11 0-.027-.028-.081-.082-.136-.219-.164-.356-.383-.356-.656 0-.274.137-.492.356-.657.191-.164.465-.246.738-.246s.547.082.738.246c.219.165.356.383.356.657 0 .273-.137.492-.356.656-.054.055-.082.11-.082.137 0 .054.055.109.11.109h1.175c.383 0 .657.3.657.684v4.62c0 .083 0 0 .027.165v1.011q0 .083.082.083c.027 0 .082 0 .137-.082.164-.192.383-.356.656-.356.246 0 .465.164.629.355.137.22.246.493.246.766 0 .3-.11.602-.246.793-.164.219-.383.356-.629.356-.273 0-.492-.137-.656-.356-.055-.082-.11-.11-.137-.11-.055 0-.082.055-.082.11v1.723c0 .383-.3.656-.656.656H9.766a.53.53 0 0 1-.547-.547c0-.219.136-.383.273-.492a.38.38 0 0 0 .164-.3.38.38 0 0 0-.164-.302A.9.9 0 0 0 9 15.07a.9.9 0 0 0-.492.164.38.38 0 0 0-.164.301c0 .11.054.219.164.3.137.11.273.274.273.493a.53.53 0 0 1-.547.547H7.031a.63.63 0 0 1-.656-.656V9.52a.12.12 0 0 0-.11-.11c-.027 0-.081.027-.136.082a.72.72 0 0 1-.629.356.72.72 0 0 1-.629-.356c-.164-.191-.246-.465-.246-.765m3.39 2.214v.028a.8.8 0 0 1-.109-.438c0-.273.137-.492.356-.656.191-.137.465-.246.738-.246s.547.11.738.246c.082.082.164.164.219.246a.8.8 0 0 1 .137.41c0 .301-.137.52-.356.684-.054.055-.082.11-.082.137s0 .054.028.054c.027.028.054.028.082.028h1.175c.137 0 .22-.082.22-.22V7.142c0-.11-.083-.246-.22-.246H9.766a.53.53 0 0 1-.547-.547c0-.22.136-.383.273-.493a.38.38 0 0 0 .164-.3.38.38 0 0 0-.164-.301A.9.9 0 0 0 9 5.09a.9.9 0 0 0-.492.164.38.38 0 0 0-.164.3c0 .11.054.22.164.301.137.11.273.274.273.493a.53.53 0 0 1-.547.547H7.031c-.11 0-.218.136-.218.246v.793a.53.53 0 0 1-.547.546.53.53 0 0 1-.465-.246c-.11-.136-.192-.191-.301-.191-.11 0-.191.055-.3.191-.083.11-.138.274-.138.493s.055.382.137.492c.11.136.192.191.301.191.11 0 .191-.055.3-.191a.55.55 0 0 1 .466-.274c.3 0 .547.246.547.575v1.695c0 .137.109.219.218.219h1.203c.055 0 .11-.028.11-.082 0-.028-.028-.055-.028-.082-.027-.028-.027-.055-.054-.055a.8.8 0 0 1-.246-.274m.766.41c0 .301-.246.547-.547.547h-1.23c-.11 0-.219.11-.219.22v4.073c0 .137.11.247.219.247h1.23c.055 0 .11-.055.11-.11 0-.027-.028-.082-.082-.137-.219-.164-.356-.382-.356-.656a.77.77 0 0 1 .356-.656c.191-.164.465-.274.738-.274s.547.11.738.274a.77.77 0 0 1 .356.656c0 .274-.137.492-.356.656-.054.055-.082.11-.082.137 0 .055.055.11.11.11h1.175c.11 0 .22-.11.22-.247v-1.695c0-.3.245-.547.546-.547.219 0 .383.137.465.274.11.136.191.164.3.164.11 0 .192-.028.301-.164.082-.11.137-.301.137-.52 0-.191-.055-.383-.137-.492-.109-.11-.191-.191-.3-.191-.11 0-.192.054-.301.19a.55.55 0 0 1-.465.274.55.55 0 0 1-.547-.546v-.82c0-.11-.11-.22-.219-.22H9.766a.56.56 0 0 1-.41-.164.65.65 0 0 1-.137-.382c0-.247.136-.41.273-.52a.38.38 0 0 0 .164-.3.4.4 0 0 0-.054-.165c-.028-.027-.055-.082-.11-.137-.11-.082-.3-.136-.492-.136-.191 0-.383.054-.492.136-.11.11-.164.22-.164.301 0 .082 0 .137.054.192.028.027.055.082.11.109.055.055.137.11.164.191.082.082.11.192.11.329' />
    </g>
    <defs>
      <clipPath id='e1e2ad57c4905ad3fd91bfe936d089c6__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPuzzlePieceTwoSmRegularIcon);
export default ForwardRef;
