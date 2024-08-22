import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedApplePayLgIcon = (
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
      <path d='M4.531 11.71c.313-.35.508-.82.469-1.327-.43.039-.937.273-1.25.625-.273.312-.508.82-.43 1.289.47.039.938-.235 1.211-.586m.43.665c.273.04 1.055.117 1.523.82-.039.04-.898.547-.898 1.602.039 1.25 1.094 1.64 1.133 1.64-.04.04-.196.625-.586 1.172-.352.508-.703 1.016-1.25 1.016-.547.04-.742-.312-1.367-.312s-.82.312-1.368.351c-.546 0-.937-.547-1.289-1.055-.703-1.054-1.25-2.89-.546-4.18.39-.624 1.015-1.015 1.718-1.015.547 0 1.016.352 1.367.352.313 0 .899-.43 1.563-.391m3.945-1.406h2.852c1.484 0 2.5 1.015 2.5 2.5 0 1.484-1.055 2.5-2.54 2.5h-1.64v2.617H8.906zm1.172.976v3.047h1.367c1.016 0 1.602-.547 1.602-1.523 0-.977-.586-1.524-1.602-1.524zm6.328 6.68c-1.093 0-1.836-.625-1.875-1.64 0-.977.742-1.524 2.149-1.602l1.445-.078v-.43c0-.625-.39-.977-1.133-.977-.586 0-1.015.313-1.094.782h-1.054c0-.977.937-1.68 2.187-1.68 1.367 0 2.227.703 2.227 1.797v3.789h-1.094v-.938c-.312.625-1.016.977-1.758.977m.313-.898c.82 0 1.406-.508 1.406-1.211v-.43l-1.29.078c-.741.04-1.132.313-1.132.82 0 .43.39.743 1.016.743m4.023 2.93c-.078 0-.39 0-.469-.04v-.898h.352c.547 0 .82-.196 1.016-.782l.117-.351-2.031-5.547h1.25l1.406 4.531 1.406-4.53H25l-2.11 5.82c-.468 1.367-1.015 1.796-2.148 1.796' />
    </g>
    <defs>
      <clipPath id='597987a973c7172a78b4b373c201ee8e__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedApplePayLgIcon);
export default ForwardRef;
