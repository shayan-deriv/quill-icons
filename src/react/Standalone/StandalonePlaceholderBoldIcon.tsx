import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandalonePlaceholderBoldIcon = (
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
    <path d='M10.688 7.75h.624q.86.078.938.938-.079.858-.937.937h-.626q-.663 0-1.093.469a1.42 1.42 0 0 0-.469 1.094v.624q-.079.86-.937.938-.86-.079-.938-.937v-.626q.04-1.444 1.016-2.421t2.422-1.016M8.188 14q.858.078.937.938v3.124q-.079.86-.937.938-.86-.078-.938-.937v-3.125q.078-.86.938-.938m15.625 0q.858.078.937.938v3.124q-.079.86-.937.938-.86-.078-.938-.937v-3.125q.078-.86.938-.938m0-1.25q-.86-.079-.938-.937v-.626q0-.663-.469-1.093a1.42 1.42 0 0 0-1.093-.469h-.625q-.86-.079-.938-.937.078-.86.938-.938h.625q1.445.04 2.421 1.016.977.976 1.016 2.422v.624q-.079.86-.937.938m.937 8.438v.625q-.04 1.445-1.016 2.421-.975.977-2.422 1.016h-.625q-.858-.079-.937-.937.078-.86.938-.938h.625q.663 0 1.093-.469.47-.429.469-1.093v-.625q.078-.86.938-.938.858.078.937.938m-15.625 0v.625q0 .663.469 1.093.428.47 1.094.469h.624q.86.078.938.938-.079.858-.937.937h-.626q-1.444-.04-2.421-1.016-.977-.975-1.016-2.422v-.625q.078-.858.938-.937.858.078.937.938m5.313 4.062q-.86-.079-.938-.937.078-.86.938-.938h3.124q.86.078.938.938-.078.858-.937.937zM13.5 8.688q.078-.86.938-.938h3.124q.86.078.938.938-.078.858-.937.937h-3.125q-.86-.079-.938-.937' />
  </svg>
);
const ForwardRef = forwardRef(StandalonePlaceholderBoldIcon);
export default ForwardRef;
