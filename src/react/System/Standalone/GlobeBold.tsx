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
export const StandaloneGlobeBoldIcon = (
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
      d='M16 24.625c.156.026.404-.091.742-.352.339-.234.716-.742 1.133-1.523.338-.703.625-1.537.86-2.5h-5.47c.235.963.521 1.797.86 2.5.417.781.794 1.29 1.133 1.523.338.26.586.378.742.352Zm-3.008-6.25h6.055c.052-.599.078-1.224.078-1.875s-.026-1.276-.078-1.875h-6.055a14.5 14.5 0 0 0-.117 1.875c0 .651.04 1.276.117 1.875Zm.274-5.625h5.468c-.234-.963-.52-1.797-.859-2.5-.417-.781-.794-1.29-1.133-1.523-.338-.26-.586-.378-.742-.352-.156-.026-.404.091-.742.352-.339.234-.716.742-1.133 1.523-.338.703-.625 1.537-.86 2.5Zm7.656 1.875c.052.599.078 1.224.078 1.875s-.026 1.276-.078 1.875h2.969a7.397 7.397 0 0 0 .234-1.875c0-.651-.078-1.276-.234-1.875h-2.97Zm2.305-1.875a8.18 8.18 0 0 0-3.868-3.633c.547 1.016.977 2.227 1.29 3.633h2.578Zm-11.875 0c.286-1.406.716-2.617 1.289-3.633a8.18 8.18 0 0 0-3.868 3.633h2.579Zm-3.243 1.875a7.399 7.399 0 0 0-.234 1.875c0 .651.078 1.276.234 1.875h2.97A21.653 21.653 0 0 1 11 16.5c0-.651.026-1.276.078-1.875H8.11Zm11.25 9.258a8.18 8.18 0 0 0 3.868-3.633h-2.579c-.286 1.406-.716 2.617-1.289 3.633Zm-6.718 0c-.547-1.016-.977-2.227-1.29-3.633H8.774a8.18 8.18 0 0 0 3.868 3.633ZM16 26.5c-1.823-.026-3.49-.469-5-1.328-1.51-.886-2.734-2.11-3.672-3.672C6.443 19.912 6 18.245 6 16.5s.443-3.412 1.328-5C8.266 9.937 9.49 8.714 11 7.828c1.51-.86 3.177-1.302 5-1.328 1.823.026 3.49.469 5 1.328 1.51.886 2.734 2.11 3.672 3.672.885 1.588 1.328 3.255 1.328 5s-.443 3.412-1.328 5c-.938 1.563-2.162 2.787-3.672 3.672-1.51.86-3.177 1.302-5 1.328Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneGlobeBoldIcon);
export default ForwardRef;
