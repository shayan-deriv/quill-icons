import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleDollarCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M10.875 9.5c0-1.734-.937-3.328-2.437-4.219a4.89 4.89 0 0 0-4.876 0A4.87 4.87 0 0 0 1.126 9.5a4.88 4.88 0 0 0 2.438 4.242c1.5.867 3.351.867 4.874 0 1.5-.89 2.438-2.484 2.438-4.242M0 9.5a5.96 5.96 0 0 1 3-5.18 5.97 5.97 0 0 1 6 0 6 6 0 0 1 3 5.18 6.01 6.01 0 0 1-3 5.203 5.97 5.97 0 0 1-6 0A5.97 5.97 0 0 1 0 9.5m6.469-2.86v.329a3.2 3.2 0 0 1 .68.164c.046 0 .093.023.14.023.258.094.422.375.352.633-.07.281-.352.422-.633.352-.024 0-.07-.024-.094-.024A4 4 0 0 0 6.422 8c-.328-.07-.68-.047-.961.094-.258.094-.469.375-.188.562.235.14.516.211.774.305.07 0 .117.023.164.023.375.118.844.258 1.195.493.446.304.657.82.563 1.359-.094.516-.469.867-.89 1.055-.188.07-.4.117-.61.14v.352a.5.5 0 0 1-.492.515.52.52 0 0 1-.516-.515v-.399c-.328-.093-.656-.187-1.008-.304a.497.497 0 0 1-.305-.633c.094-.281.375-.422.633-.328.07.023.117.047.188.07.258.07.515.164.797.211.398.07.726.023.937-.047.281-.117.399-.469.117-.656a3 3 0 0 0-.797-.305c-.046-.023-.117-.023-.164-.047-.351-.093-.796-.234-1.125-.445-.468-.281-.68-.773-.586-1.312.094-.516.493-.844.915-1.032.117-.07.257-.093.398-.14V6.64a.52.52 0 0 1 .516-.516.5.5 0 0 1 .492.516' />
    </g>
    <defs>
      <clipPath id='6bef021dfb4c9f30adea8aaf1dea43ef__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleDollarCaptionBoldIcon);
export default ForwardRef;
