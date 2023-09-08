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
export const StandaloneChartMixedBoldIcon = (
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
      d='m25.688 9.39-6.563 5.626c-.417.312-.833.312-1.25 0l-4.453-3.907-5.977 3.985c-.494.26-.924.169-1.289-.274-.26-.495-.169-.924.274-1.289l6.562-4.375c.39-.234.768-.208 1.133.078l4.375 3.829 5.938-5.079c.468-.338.911-.312 1.328.079.338.468.312.911-.078 1.328ZM13.813 23.376v-6.25c-.027-.182-.13-.287-.313-.313-.182.026-.287.13-.313.313v6.25c.027.182.13.287.313.313.182-.026.287-.13.313-.313ZM13.5 15.25c.52.026.963.208 1.328.547.339.364.521.807.547 1.328v6.25c-.026.52-.208.963-.547 1.328-.364.339-.807.521-1.328.547a2.038 2.038 0 0 1-1.328-.547 2.038 2.038 0 0 1-.547-1.328v-6.25c.026-.52.208-.963.547-1.328.364-.339.807-.521 1.328-.547Zm-4.688 8.125v-2.5c-.026-.182-.13-.287-.312-.313-.182.026-.286.13-.313.313v2.5c.027.182.13.287.313.313.182-.026.286-.13.313-.313ZM8.5 19c.52.026.964.208 1.328.547.339.364.521.807.547 1.328v2.5c-.026.52-.208.963-.547 1.328-.364.339-.807.521-1.328.547a2.038 2.038 0 0 1-1.328-.547 2.038 2.038 0 0 1-.547-1.328v-2.5c.026-.52.208-.963.547-1.328.364-.339.807-.521 1.328-.547Zm10.313.625c-.026-.182-.13-.287-.313-.313-.182.026-.287.13-.313.313v3.75c.026.182.13.287.313.313.182-.026.287-.13.313-.313v-3.75Zm-2.188 0c.026-.52.208-.963.547-1.328.364-.339.807-.521 1.328-.547.52.026.963.208 1.328.547.339.364.521.807.547 1.328v3.75c-.026.52-.208.963-.547 1.328-.364.339-.807.521-1.328.547a2.038 2.038 0 0 1-1.328-.547 2.038 2.038 0 0 1-.547-1.328v-3.75Zm7.188 3.75v-6.25c-.026-.182-.13-.287-.313-.313-.182.026-.287.13-.313.313v6.25c.026.182.13.287.313.313.182-.026.287-.13.313-.313ZM23.5 15.25c.52.026.963.208 1.328.547.339.364.521.807.547 1.328v6.25c-.026.52-.208.963-.547 1.328-.364.339-.807.521-1.328.547a2.038 2.038 0 0 1-1.328-.547 2.038 2.038 0 0 1-.547-1.328v-6.25c.026-.52.208-.963.547-1.328.364-.339.807-.521 1.328-.547Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneChartMixedBoldIcon);
export default ForwardRef;
