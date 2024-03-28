import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBadgeCheckXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={36}
    viewBox='0 0 24 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M9.375 9.844c-.281.469-.797.703-1.312.562-1.032-.328-2.157-.094-3 .703a2.91 2.91 0 0 0-.704 2.954 1.23 1.23 0 0 1-.562 1.359C2.859 15.89 2.25 16.875 2.25 18c0 1.172.61 2.156 1.547 2.625.469.281.703.797.562 1.313-.328 1.03-.046 2.156.75 2.953.797.797 1.922 1.078 2.954.75.515-.141 1.078.093 1.312.562A2.98 2.98 0 0 0 12 27.75c1.125 0 2.11-.61 2.578-1.547a1.23 1.23 0 0 1 1.36-.562c.984.328 2.156.047 2.953-.75s1.03-1.922.703-2.953c-.14-.516.093-1.079.562-1.313.938-.516 1.594-1.5 1.594-2.625s-.656-2.11-1.594-2.578a1.23 1.23 0 0 1-.562-1.36 2.91 2.91 0 0 0-.703-2.953 2.91 2.91 0 0 0-2.953-.703 1.23 1.23 0 0 1-1.36-.562A2.89 2.89 0 0 0 12 8.25a2.91 2.91 0 0 0-2.625 1.594M12 6c1.64 0 3.14.797 4.125 2.063 1.547-.235 3.14.28 4.36 1.453a5.31 5.31 0 0 1 1.453 4.359C23.203 14.859 24 16.359 24 18a5.1 5.1 0 0 1-2.062 4.125 5.12 5.12 0 0 1-1.454 4.36 5.2 5.2 0 0 1-4.359 1.5C15.141 29.202 13.641 30 12 30a5.2 5.2 0 0 1-4.125-2.016c-1.547.188-3.187-.28-4.36-1.453a5.2 5.2 0 0 1-1.5-4.36C.798 21.189 0 19.689 0 18c0-1.64.797-3.14 2.016-4.125a5.31 5.31 0 0 1 1.453-4.36 5.31 5.31 0 0 1 4.36-1.453C8.812 6.798 10.312 6 12 6m5.297 9.797-6 6c-.469.469-1.172.469-1.594 0l-3-3a1.027 1.027 0 0 1 0-1.547c.422-.469 1.125-.469 1.594 0l2.203 2.203 5.203-5.203c.422-.469 1.125-.469 1.594 0a1.103 1.103 0 0 1 0 1.547' />
    </g>
    <defs>
      <clipPath id='8973970729812913ef59f7dbbc1e8d7d__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBadgeCheckXlBoldIcon);
export default ForwardRef;
