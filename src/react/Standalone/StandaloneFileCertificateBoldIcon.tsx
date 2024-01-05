import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneFileCertificateBoldIcon = (
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
    <path d='M23.5 24.625c.39-.026.599-.234.625-.625V12.75H21c-.365 0-.664-.117-.898-.352-.235-.234-.352-.533-.352-.898V8.375H13.5c-.39.026-.599.234-.625.625v2.656a2.13 2.13 0 0 0-1.602 0l-.234.078c0 .026-.013.04-.039.04V9c.026-.703.273-1.29.742-1.758.469-.469 1.055-.716 1.758-.742h6.484c.677 0 1.263.247 1.758.742l3.516 3.516c.495.495.742 1.094.742 1.797V24c-.026.703-.273 1.29-.742 1.758-.469.469-1.055.716-1.758.742h-8.867a1.77 1.77 0 0 0 .117-.625v-1.25zM10.258 12.828l.625.235a.362.362 0 0 0 .234 0l.625-.235c.443-.156.807-.065 1.094.274l.43.546a.49.49 0 0 0 .195.118l.664.078c.443.078.703.338.781.781l.117.664c0 .078.04.156.118.234l.507.391c.339.313.443.677.313 1.094l-.274.625a.362.362 0 0 0 0 .234l.235.625c.156.417.065.781-.274 1.094l-.546.39a.494.494 0 0 0-.118.235l-.078.664c-.078.443-.338.703-.781.781l-.625.078v4.141a.612.612 0 0 1-.312.547.67.67 0 0 1-.665-.04L11 25.368l-1.523 1.016a.603.603 0 0 1-.625.039c-.235-.13-.352-.313-.352-.547v-4.14l-.625-.079c-.443-.078-.703-.338-.781-.781l-.078-.664a.495.495 0 0 0-.118-.234l-.546-.391c-.339-.313-.43-.677-.274-1.094l.234-.625a.361.361 0 0 0 0-.234l-.234-.625c-.156-.417-.065-.781.274-1.094l.546-.39a.495.495 0 0 0 .118-.235l.078-.664c.078-.443.351-.703.82-.781l.625-.078a.495.495 0 0 0 .234-.118l.391-.546c.313-.339.677-.43 1.094-.274M8.5 17.75c.026.938.443 1.654 1.25 2.148.833.47 1.667.47 2.5 0 .807-.494 1.224-1.21 1.25-2.148-.026-.937-.443-1.654-1.25-2.148-.833-.47-1.667-.47-2.5 0-.807.494-1.224 1.21-1.25 2.148' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneFileCertificateBoldIcon);
export default ForwardRef;
