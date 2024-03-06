import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedKeyboardLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={23}
    height={30}
    viewBox='0 0 23 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.75 9.875q-.586.039-.625.625v10q.039.585.625.625h17.5q.585-.039.625-.625v-10q-.039-.585-.625-.625zm-2.5.625q.039-1.055.742-1.758T2.75 8h17.5q1.055.039 1.758.742t.742 1.758v10q-.039 1.055-.742 1.758-.704.703-1.758.742H2.75q-1.055-.039-1.758-.742Q.29 21.554.25 20.5zM7.125 18h8.75q.585.039.625.625v.625q-.039.585-.625.625h-8.75q-.585-.039-.625-.625v-.625q.039-.585.625-.625m-2.812-2.812q.039-.587.625-.626h.625q.585.04.625.626v.624q-.04.587-.625.626h-.625q-.587-.04-.625-.625zm.625-3.75h.625q.585.038.625.624v.626q-.04.585-.625.624h-.625q-.587-.038-.625-.624v-.626q.039-.585.625-.624m2.5 3.75q.039-.587.625-.626h.624q.587.04.626.626v.624q-.04.587-.626.626h-.624q-.587-.04-.626-.625zm.625-3.75h.624q.587.038.626.624v.626q-.04.585-.626.624h-.624q-.587-.038-.626-.624v-.626q.04-.585.625-.624m2.5 3.75q.038-.587.624-.626h.626q.585.04.624.626v.624q-.038.587-.624.626h-.626q-.585-.04-.624-.625zm.624-3.75h.626q.585.038.624.624v.626q-.038.585-.624.624h-.626q-.585-.038-.624-.624v-.626q.038-.585.624-.624m2.5 3.75q.04-.587.626-.626h.624q.587.04.626.626v.624q-.04.587-.626.626h-.624q-.587-.04-.626-.625zm.626-3.75h.624q.587.038.626.624v.626q-.04.585-.626.624h-.624q-.587-.038-.626-.624v-.626q.04-.585.626-.624m2.5 3.75q.039-.587.625-.626h.625q.585.04.625.626v.624q-.04.587-.625.626h-.625q-.587-.04-.625-.625zm.625-3.75h.625q.585.038.625.624v.626q-.04.585-.625.624h-.625q-.587-.038-.625-.624v-.626q.039-.585.625-.624' />
    </g>
    <defs>
      <clipPath id='c11fe7683e5f6ed0465874a9673e0f86__a'>
        <path d='M0 0h23v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedKeyboardLgBoldIcon);
export default ForwardRef;
