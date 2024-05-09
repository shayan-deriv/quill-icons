import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGearLgBoldIcon = (
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
      <path d='M10 5.5c.664 0 1.29.078 1.914.195.313.078.86.235 1.172.782.078.156.117.312.156.468l.39 1.524c.04.195.43.43.665.351l1.484-.43c.156-.038.313-.078.469-.078.625 0 1.055.391 1.25.626a10 10 0 0 1 1.953 3.359c.117.312.235.86-.117 1.367a1.5 1.5 0 0 1-.313.39l-1.093 1.094c-.196.157-.196.586 0 .743l1.093 1.093c.118.118.235.235.313.391.312.508.195 1.055.117 1.367a10 10 0 0 1-1.953 3.36c-.195.234-.625.625-1.25.625a2 2 0 0 1-.469-.079l-1.484-.468c-.235-.04-.625.156-.664.39l-.39 1.524c-.04.156-.079.312-.157.468-.313.547-.86.704-1.172.782-.625.117-1.25.156-1.914.156a10.7 10.7 0 0 1-1.953-.156c-.313-.078-.86-.235-1.172-.782a2.2 2.2 0 0 1-.156-.468l-.39-1.524c-.04-.234-.43-.43-.626-.39l-1.484.468c-.157.04-.352.04-.508.079-.625 0-1.055-.391-1.25-.625a10 10 0 0 1-1.953-3.36c-.078-.312-.195-.86.117-1.406.078-.117.195-.273.313-.39L2.07 15.89c.157-.157.157-.586 0-.743L.938 14.055a1.5 1.5 0 0 1-.313-.39c-.312-.509-.195-1.056-.117-1.368a10 10 0 0 1 1.953-3.36c.195-.234.625-.624 1.25-.624.156 0 .352.039.508.078l1.484.43c.195.077.586-.157.625-.352l.39-1.524c.04-.156.079-.312.157-.468.313-.547.86-.704 1.172-.782A10.7 10.7 0 0 1 10 5.5M8.516 7.531l-.352 1.367c-.312 1.25-1.758 2.11-3.008 1.758l-1.367-.43a9.4 9.4 0 0 0-1.484 2.579l1.054.976c.938.899.938 2.578 0 3.477l-1.054.976c.351.938.86 1.797 1.484 2.578l1.367-.43c1.25-.35 2.696.509 3.008 1.759l.352 1.367a7.6 7.6 0 0 0 2.968 0l.313-1.367c.312-1.25 1.758-2.11 3.008-1.758l1.367.43a9.4 9.4 0 0 0 1.484-2.579l-1.015-.976c-.938-.899-.938-2.578 0-3.477l1.015-.976a9.4 9.4 0 0 0-1.484-2.578l-1.367.43c-1.211.35-2.696-.509-3.008-1.759l-.313-1.367a7.6 7.6 0 0 0-2.968 0M8.125 15.5c0 .703.352 1.29.938 1.64.546.352 1.289.352 1.874 0 .547-.35.938-.937.938-1.64 0-.664-.39-1.25-.937-1.602-.586-.351-1.329-.351-1.876 0-.585.352-.937.938-.937 1.602M10 19.25c-1.367 0-2.578-.703-3.281-1.875-.664-1.133-.664-2.578 0-3.75.703-1.133 1.914-1.875 3.281-1.875 1.328 0 2.54.742 3.242 1.875.664 1.172.664 2.617 0 3.75-.703 1.172-1.914 1.875-3.242 1.875' />
    </g>
    <defs>
      <clipPath id='762b889fbd7a24a10319ddaf4cf88650__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGearLgBoldIcon);
export default ForwardRef;
