import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const IllustrativeFilterIcon = (
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
    <g>
      <path d='M19.333 8.667h-8C10.6 8.667 10 9.267 10 10v2c0 .533.207 1.033.587 1.413l2.553 2.554a.66.66 0 0 1 .193.473v1.84c0 .353.14.693.394.94l1.333 1.333a1.334 1.334 0 0 0 1.453.294c.5-.207.82-.694.82-1.234V16.44a.66.66 0 0 1 .194-.473l2.553-2.554c.38-.38.587-.88.587-1.413v-2c0-.733-.6-1.333-1.334-1.333m0 1.333v1.333h-8V10zm-2.746 5.027c-.38.38-.587.88-.587 1.413v3.173l-1.333-1.333v-1.84c0-.533-.207-1.033-.587-1.413l-2.36-2.36h7.22l-2.36 2.36z' />
      <path d='M27.333 4.667H4.667A3.335 3.335 0 0 0 1.333 8v13.333a3.335 3.335 0 0 0 3.334 3.334h10.666v2H12c-.367 0-.667.3-.667.666 0 .367.3.667.667.667h8c.367 0 .667-.3.667-.667 0-.366-.3-.666-.667-.666h-3.333v-2h10.666a3.334 3.334 0 0 0 3.334-3.334V8a3.335 3.335 0 0 0-3.334-3.333m2 16.666c0 1.1-.9 2-2 2H4.667c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2h22.666c1.1 0 2 .9 2 2z' />
      <path d='M27.333 8.667a.667.667 0 1 0 0-1.334.667.667 0 0 0 0 1.334M25.333 8.667a.667.667 0 1 0 0-1.334.667.667 0 0 0 0 1.334M23.333 8.667a.667.667 0 1 0 0-1.334.667.667 0 0 0 0 1.334' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IllustrativeFilterIcon);
export default ForwardRef;
