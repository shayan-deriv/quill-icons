import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, SvgSize } from 'types';
const sizes: SvgSize = {
  sm: {
    width: 24,
    height: 24,
  },
  md: {
    width: 32,
    height: 32,
  },
  lg: {
    width: 48,
    height: 48,
  },
  xl: {
    width: 64,
    height: 64,
  },
  '2xl': {
    width: 96,
    height: 96,
  },
};
export const StandaloneBarcodeBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <path
      fillOpacity={0.72}
      d='M6.938 7.75c.572.052.885.365.937.938v15.624c-.052.573-.365.886-.938.938-.572-.052-.885-.365-.937-.938V8.688c.052-.572.365-.885.938-.937Zm3.437 0c.39.026.599.234.625.625v16.25c-.026.39-.234.599-.625.625-.39-.026-.599-.234-.625-.625V8.375c.026-.39.234-.599.625-.625Zm2.813 0c.572.052.885.365.937.938v15.624c-.052.573-.365.886-.938.938-.572-.052-.885-.365-.937-.938V8.688c.052-.572.365-.885.938-.937Zm4.374 0c.573.052.886.365.938.938v15.624c-.052.573-.365.886-.938.938-.572-.052-.885-.365-.937-.938V8.688c.052-.572.365-.885.938-.937Zm6.563.938c.052-.573.365-.886.938-.938.572.052.885.365.937.938v15.624c-.052.573-.365.886-.938.938-.572-.052-.885-.365-.937-.938V8.688Zm-2.5-.313c.026-.39.234-.599.625-.625.39.026.599.234.625.625v16.25c-.026.39-.234.599-.625.625-.39-.026-.599-.234-.625-.625V8.375Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneBarcodeBoldIcon);
export default ForwardRef;
