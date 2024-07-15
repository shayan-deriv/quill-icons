import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFiatOfframpSmBoldIcon = (
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
      <path d='M5.61 9.684a2.298 2.298 0 0 0 1.996-3.445 2.4 2.4 0 0 0-1.997-1.177c-.82 0-1.586.465-1.996 1.176A2.298 2.298 0 0 0 5.61 9.684m-2.298.492v5.25c0 .547.465 1.011 1.012 1.011h5.25c-.52-.601-.82-1.421-.82-2.296 0-1.176.574-2.243 1.476-2.899L8.509 9.52a3.55 3.55 0 0 1-2.899 1.476c-.875 0-1.695-.3-2.296-.82m9.051 6.262a2.276 2.276 0 0 0 2.297-2.297 2.293 2.293 0 0 0-2.297-2.297q-.45 0-.82.164h-.027a2.3 2.3 0 0 0-1.45 2.133 2.293 2.293 0 0 0 2.297 2.297m-.875-5.797c.274-.082.575-.11.875-.11 1.996 0 3.637 1.614 3.637 3.61s-1.64 3.609-3.637 3.609H4.324A2.32 2.32 0 0 1 2 15.426v-8.04C2 5.392 3.613 3.75 5.61 3.75c1.995 0 3.609 1.64 3.609 3.637 0 .3-.028.601-.11.875zm1.313-4.348c.355 0 .656.3.656.656v2.543a.65.65 0 0 1-.41.602.63.63 0 0 1-.711-.137L9.793 7.414c-.246-.246-.246-.656 0-.93a.68.68 0 0 1 .93 0l1.422 1.422V6.95c0-.355.273-.656.656-.656m-.11 5.879h-.629v.273c-.437.137-.71.547-.71.985 0 .574.464 1.039 1.011 1.039.219 0 .383.164.383.383a.39.39 0 0 1-.383.382.41.41 0 0 1-.383-.382v-.11h-.628v.11c0 .437.273.82.71.957v.3h.63v-.273c.41-.164.71-.547.71-.984 0-.575-.464-1.04-1.039-1.04a.39.39 0 0 1-.383-.382c0-.22.192-.383.383-.383.219 0 .383.164.383.383v.082h.656v-.082c0-.438-.3-.82-.71-.985zM5.2 5.527h-.52v.547H4.16v.52h.52V8.18h-.52v.52h.52v.519h.52v-.52h.546v.52h.52v-.52c.41 0 .765-.355.765-.793a.72.72 0 0 0-.191-.52.785.785 0 0 0-.055-1.12.72.72 0 0 0-.52-.192v-.547h-.519v.547H5.2zm1.067 2.106c.136 0 .246.137.246.273 0 .137-.11.274-.246.274H5.199v-.547zm0-1.04c.136 0 .246.11.246.274 0 .137-.11.246-.246.246H5.199v-.52z' />
    </g>
    <defs>
      <clipPath id='417b40b47cad101627a6000fbe1b0be4__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFiatOfframpSmBoldIcon);
export default ForwardRef;
