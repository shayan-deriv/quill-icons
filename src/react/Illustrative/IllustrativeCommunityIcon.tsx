import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const IllustrativeCommunityIcon = (
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
      <path d='M13.113 19.36c0 1.653 1.347 3 3 3 1.654 0 3-1.347 3-3s-1.346-3-3-3c-1.653 0-3 1.347-3 3m3-1.667a1.667 1.667 0 1 1 0 3.335 1.667 1.667 0 0 1 0-3.335M18.113 23.027c-.366 0-.666.3-.666.666 0 .367.3.667.666.667.734 0 1.334.6 1.334 1.333v2c0 .367-.3.667-.667.667h-5.333a.669.669 0 0 1-.667-.667v-2c0-.733.6-1.333 1.333-1.333.367 0 .667-.3.667-.667 0-.366-.3-.666-.667-.666a2.666 2.666 0 0 0-2.666 2.666v2c0 1.1.9 2 2 2h5.333c1.1 0 2-.9 2-2v-2a2.666 2.666 0 0 0-2.667-2.666M8.78 18.36c-1.227 0-2.22 1-2.22 2.22 0 1.22 1 2.22 2.22 2.22 1.22 0 2.22-1 2.22-2.22 0-1.22-1-2.22-2.22-2.22m0 3.113a.886.886 0 1 1 0-1.772.886.886 0 0 1 0 1.772M9.447 27.473H7c-.12 0-.22-.1-.22-.22V25.92c0-.367.3-.667.667-.667.366 0 .666-.3.666-.666 0-.367-.3-.667-.666-.667-1.1 0-2 .9-2 2v1.333c0 .86.7 1.554 1.553 1.554h2.447c.366 0 .666-.3.666-.667 0-.367-.3-.667-.666-.667M25.667 20.587c0-1.227-1-2.22-2.22-2.22-1.22 0-2.22 1-2.22 2.22 0 1.22 1 2.22 2.22 2.22 1.22 0 2.22-1 2.22-2.22m-3.114 0a.886.886 0 1 1 1.773-.001.886.886 0 0 1-1.773 0M24.78 23.92c-.367 0-.667.3-.667.667 0 .366.3.666.667.666.367 0 .667.3.667.667v1.333c0 .12-.1.22-.22.22H22.78c-.367 0-.667.3-.667.667 0 .367.3.667.667.667h2.447c.86 0 1.553-.7 1.553-1.554V25.92c0-1.1-.9-2-2-2M14.78 12V6.553c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2V12c0 1.1.9 2 2 2h1.927l2.166 2.167c.127.126.3.193.474.193a.559.559 0 0 0 .253-.053.668.668 0 0 0 .413-.614V14h1.547c1.1 0 2-.9 2-2m-4.213.667c-.367 0-.667.3-.667.666v.754l-1.22-1.22a.66.66 0 0 0-.473-.194h-2.2a.669.669 0 0 1-.667-.666V6.553c0-.366.3-.666.667-.666h6.78c.366 0 .666.3.666.666V12c0 .367-.3.667-.666.667zM26 2.667h-5.333c-1.1 0-2 .9-2 2V12c0 1.1.9 2 2 2h.88v1.693c0 .267.16.514.413.614a.664.664 0 0 0 .727-.14L24.853 14H26c1.1 0 2-.9 2-2V4.667c0-1.1-.9-2-2-2M26.667 12c0 .367-.3.667-.667.667h-1.42a.688.688 0 0 0-.473.193l-1.22 1.22v-.753c0-.367-.3-.667-.667-.667h-1.547a.669.669 0 0 1-.666-.667V4.667c0-.367.3-.667.666-.667h5.334c.366 0 .666.3.666.667V12z' />
      <path d='M23.333 12a.667.667 0 1 0 0-1.333.667.667 0 0 0 0 1.333M23.333 5.333c-1.1 0-2 .9-2 2 0 .367.3.667.667.667.367 0 .667-.3.667-.667 0-.366.306-.666.666-.666.36 0 .667.306.667.666 0 .42-.18.56-.553.827-.234.167-.56.393-.707.767a.67.67 0 0 0-.073.306v.1c0 .367.3.667.666.667.34 0 .62-.253.66-.587.054-.046.147-.113.22-.166.42-.294 1.12-.794 1.12-1.92 0-1.127-.9-2-2-2zM11.333 7.22h-4c-.366 0-.666.3-.666.667 0 .366.3.666.666.666h4c.367 0 .667-.3.667-.666 0-.367-.3-.667-.667-.667M10 9.887H7.333c-.366 0-.666.3-.666.666 0 .367.3.667.666.667H10c.367 0 .667-.3.667-.667 0-.366-.3-.666-.667-.666' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IllustrativeCommunityIcon);
export default ForwardRef;
