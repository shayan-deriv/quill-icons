import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const IllustrativeCompetenceIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M16 10c1.653 0 3-1.347 3-3s-1.347-3-3-3-3 1.347-3 3 1.347 3 3 3m0-4.667a1.667 1.667 0 1 1-.001 3.335A1.667 1.667 0 0 1 16 5.333M18 10.667c-.367 0-.667.3-.667.666s.3.667.667.667c.733 0 1.333.6 1.333 1.333v2c0 .367-.3.667-.666.667h-5.334a.67.67 0 0 1-.666-.667v-2c0-.733.6-1.333 1.333-1.333.367 0 .667-.3.667-.667 0-.366-.3-.666-.667-.666a2.666 2.666 0 0 0-2.667 2.666v2c0 1.1.9 2 2 2h5.334c1.1 0 2-.9 2-2v-2A2.666 2.666 0 0 0 18 10.667M8.667 5.78c-1.227 0-2.22 1-2.22 2.22s1 2.22 2.22 2.22 2.22-1 2.22-2.22-1-2.22-2.22-2.22m0 3.113a.886.886 0 1 1-.001-1.772.886.886 0 0 1 0 1.772M6.887 16.227h2.446c.367 0 .667-.3.667-.667s-.3-.667-.667-.667H6.887c-.12 0-.22-.1-.22-.22V13.34c0-.367.3-.667.666-.667s.667-.3.667-.666-.3-.667-.667-.667c-1.1 0-2 .9-2 2v1.333c0 .86.7 1.554 1.554 1.554M23.333 10.227c1.227 0 2.22-1 2.22-2.22s-1-2.22-2.22-2.22-2.22 1-2.22 2.22 1 2.22 2.22 2.22m0-3.114a.886.886 0 1 1 .001 1.773.886.886 0 0 1 0-1.773M24 12.007c0 .366.3.666.667.666.366 0 .666.3.666.667v1.333c0 .12-.1.22-.22.22h-2.446c-.367 0-.667.3-.667.667s.3.667.667.667h2.446c.86 0 1.554-.7 1.554-1.554V13.34c0-1.1-.9-2-2-2-.367 0-.667.3-.667.667M18.76 21.88l-.74-.107a.65.65 0 0 1-.5-.366l-.327-.667a1.328 1.328 0 0 0-2.386 0l-.327.667a.69.69 0 0 1-.5.366l-.733.107c-.507.073-.92.42-1.074.907a1.33 1.33 0 0 0 .334 1.366l.533.52c.16.154.227.374.193.587l-.126.733A1.334 1.334 0 0 0 15.04 27.4l.66-.347c.193-.1.427-.1.62 0l.66.347c.453.24.993.2 1.407-.1.413-.3.62-.8.533-1.307l-.127-.733a.64.64 0 0 1 .194-.587l.533-.52a1.33 1.33 0 0 0-.733-2.273zm-.727 1.84a1.99 1.99 0 0 0-.573 1.773l.127.734-.66-.347a2 2 0 0 0-1.86 0l-.66.347.126-.734a2 2 0 0 0-.573-1.766l-.533-.52.733-.107a1.99 1.99 0 0 0 1.507-1.093l.326-.674.334.674c.293.593.853 1 1.506 1.093l.74.107-.533.52zM26.6 21.64l-1.207-.173-.54-1.094c-.226-.453-.973-.453-1.193 0l-.54 1.094-1.207.173a.67.67 0 0 0-.54.453.67.67 0 0 0 .167.687l.873.853-.206 1.207c-.04.253.06.5.266.653a.68.68 0 0 0 .7.054l1.08-.567 1.08.567a.66.66 0 0 0 .7-.047.67.67 0 0 0 .267-.653l-.207-1.207.874-.853a.665.665 0 0 0-.373-1.133zm-1.833 2.1c-.327-.14-.7-.14-1.027 0a1.33 1.33 0 0 0-.32-.973c.347-.08.647-.3.833-.607.187.307.487.52.834.607-.234.266-.347.62-.32.973M10.093 21.64l-1.206-.173-.54-1.094c-.227-.453-.974-.453-1.194 0l-.54 1.094-1.206.173a.665.665 0 0 0-.374 1.133l.874.854-.207 1.206c-.04.254.06.5.267.654a.68.68 0 0 0 .7.053l1.08-.567 1.08.567a.66.66 0 0 0 .7-.047.67.67 0 0 0 .266-.653l-.206-1.207.873-.853a.67.67 0 0 0-.373-1.14zm-1.833 2.1c-.327-.14-.7-.14-1.027 0a1.35 1.35 0 0 0-.32-.98c.347-.08.647-.3.834-.607.186.307.486.52.833.607-.233.267-.347.62-.32.973zM3.333 16C3.7 16 4 15.7 4 15.333c0-.366-.3-.666-.667-.666-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2 .367 0 .667-.3.667-.667s-.3-.667-.667-.667a.67.67 0 0 1-.666-.666v-6c0-.367.3-.667.666-.667M28.667 14.667c-.367 0-.667.3-.667.666s.3.667.667.667c.366 0 .666.3.666.667v6c0 .366-.3.666-.666.666S28 23.633 28 24s.3.667.667.667c1.1 0 2-.9 2-2v-6c0-1.1-.9-2-2-2' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IllustrativeCompetenceIcon);
export default ForwardRef;
