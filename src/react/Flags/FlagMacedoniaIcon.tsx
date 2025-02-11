import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const FlagMacedoniaIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 16'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill='#D82126'
      fillRule='evenodd'
      d='M13.714 0h5.715L13.01 5.99c.315.158.588.389.796.67L23.285.466C23.722.834 24 1.385 24 2v4.4l-9.838.974.003.01a2.25 2.25 0 0 1-.003 1.242L24 9.6V14c0 .615-.278 1.166-.715 1.533L13.807 9.34a2.26 2.26 0 0 1-.796.67L19.43 16h-5.715l-1.07-5.843-.028.008a2.25 2.25 0 0 1-1.26-.008L10.287 16H4.57l6.418-5.99a2.26 2.26 0 0 1-.796-.67L.715 15.534A2 2 0 0 1 0 14V9.6l9.842-.96-.007-.024a2.25 2.25 0 0 1 .007-1.256L0 6.4V2C0 1.385.278.834.715.467l9.478 6.192.004-.005a2.26 2.26 0 0 1 .792-.664L4.57 0h5.715l1.109 5.832a2.25 2.25 0 0 1 1.21 0zM14 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0'
      clipRule='evenodd'
    />
    <path
      fill='#FFE800'
      d='M19.429 0 13.01 5.99c.315.158.588.389.796.67L23.285.466A2 2 0 0 0 22 0zM24 6.4l-9.838.974.003.01a2.25 2.25 0 0 1-.003 1.242L24 9.6zM23.285 15.533 13.807 9.34a2.26 2.26 0 0 1-.796.67L19.43 16H22c.49 0 .937-.176 1.285-.467M13.714 16l-1.07-5.843-.028.008a2.25 2.25 0 0 1-1.26-.008L10.287 16zM4.571 16l6.418-5.99a2.26 2.26 0 0 1-.796-.67L.715 15.534c.348.291.796.467 1.285.467zM0 9.6l9.842-.96-.007-.024a2.25 2.25 0 0 1 .007-1.256L0 6.4zM.715.467l9.478 6.192.004-.005a2.26 2.26 0 0 1 .792-.664L4.57 0H2C1.51 0 1.063.176.715.467M10.286 0l1.109 5.832a2.25 2.25 0 0 1 1.21 0L13.715 0zM12 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4'
    />
    <path
      fill='#000'
      fillOpacity={0.08}
      fillRule='evenodd'
      d='M22 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z'
      clipRule='evenodd'
    />
  </svg>
);
const ForwardRef = forwardRef(FlagMacedoniaIcon);
export default ForwardRef;
