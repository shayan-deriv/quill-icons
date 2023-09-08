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
export const StandaloneChartMixedRegularIcon = (
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
      d='M25.844 7.945c.234.313.221.612-.04.899l-6.874 6.25c-.287.208-.573.195-.86-.04l-4.648-4.609-6.445 4.688c-.313.182-.6.13-.86-.156-.182-.313-.13-.6.156-.86l6.875-5c.287-.182.547-.156.782.078l4.61 4.57 6.405-5.859c.313-.234.612-.221.899.04ZM9.125 23.375v-2.5c-.026-.39-.234-.599-.625-.625-.39.026-.599.234-.625.625v2.5c.026.39.234.599.625.625.39-.026.599-.234.625-.625ZM8.5 19c.52.026.964.208 1.328.547.339.364.521.807.547 1.328v2.5c-.026.52-.208.963-.547 1.328-.364.339-.807.521-1.328.547a2.038 2.038 0 0 1-1.328-.547 2.038 2.038 0 0 1-.547-1.328v-2.5c.026-.52.208-.963.547-1.328.364-.339.807-.521 1.328-.547Zm5.625-1.875c-.026-.39-.234-.599-.625-.625-.39.026-.599.234-.625.625v6.25c.026.39.234.599.625.625.39-.026.599-.234.625-.625v-6.25Zm-2.5 0c.026-.52.208-.963.547-1.328.364-.339.807-.521 1.328-.547.52.026.963.208 1.328.547.339.364.521.807.547 1.328v6.25c-.026.52-.208.963-.547 1.328-.364.339-.807.521-1.328.547a2.038 2.038 0 0 1-1.328-.547 2.038 2.038 0 0 1-.547-1.328v-6.25Zm7.5 6.25v-3.75c-.026-.39-.234-.599-.625-.625-.39.026-.599.234-.625.625v3.75c.026.39.234.599.625.625.39-.026.599-.234.625-.625ZM18.5 17.75c.52.026.963.208 1.328.547.339.364.521.807.547 1.328v3.75c-.026.52-.208.963-.547 1.328-.364.339-.807.521-1.328.547a2.038 2.038 0 0 1-1.328-.547 2.038 2.038 0 0 1-.547-1.328v-3.75c.026-.52.208-.963.547-1.328.364-.339.807-.521 1.328-.547Zm5.625-.625c-.026-.39-.234-.599-.625-.625-.39.026-.599.234-.625.625v6.25c.026.39.234.599.625.625.39-.026.599-.234.625-.625v-6.25Zm-2.5 0c.026-.52.208-.963.547-1.328.364-.339.807-.521 1.328-.547.52.026.963.208 1.328.547.339.364.521.807.547 1.328v6.25c-.026.52-.208.963-.547 1.328-.364.339-.807.521-1.328.547a2.038 2.038 0 0 1-1.328-.547 2.038 2.038 0 0 1-.547-1.328v-6.25Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneChartMixedRegularIcon);
export default ForwardRef;
