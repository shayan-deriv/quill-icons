import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGripDotsVerticalXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={36}
    viewBox='0 0 12 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3 10.5c0-.375-.375-.75-.75-.75-.422 0-.75.375-.75.75 0 .422.328.75.75.75.375 0 .75-.328.75-.75m-3 0C0 9.703.422 9 1.125 8.578c.656-.422 1.547-.422 2.25 0C4.031 9 4.5 9.703 4.5 10.5c0 .844-.469 1.547-1.125 1.969-.703.422-1.594.422-2.25 0C.422 12.047 0 11.344 0 10.5M3 18c0-.375-.375-.75-.75-.75-.422 0-.75.375-.75.75 0 .422.328.75.75.75.375 0 .75-.328.75-.75m-3 0c0-.797.422-1.5 1.125-1.922.656-.422 1.547-.422 2.25 0C4.031 16.5 4.5 17.203 4.5 18c0 .844-.469 1.547-1.125 1.969-.703.422-1.594.422-2.25 0C.422 19.547 0 18.844 0 18m2.25 8.25c.375 0 .75-.328.75-.75 0-.375-.375-.75-.75-.75-.422 0-.75.375-.75.75 0 .422.328.75.75.75m0-3c.797 0 1.5.469 1.922 1.125.422.703.422 1.594 0 2.25-.422.703-1.125 1.125-1.922 1.125-.844 0-1.547-.422-1.969-1.125-.422-.656-.422-1.547 0-2.25.422-.656 1.125-1.125 1.969-1.125M10.5 10.5c0-.375-.375-.75-.75-.75-.422 0-.75.375-.75.75 0 .422.328.75.75.75.375 0 .75-.328.75-.75m-3 0c0-.797.422-1.5 1.125-1.922.656-.422 1.547-.422 2.25 0C11.531 9 12 9.703 12 10.5c0 .844-.469 1.547-1.125 1.969-.703.422-1.594.422-2.25 0C7.922 12.047 7.5 11.344 7.5 10.5m2.25 8.25c.375 0 .75-.328.75-.75 0-.375-.375-.75-.75-.75-.422 0-.75.375-.75.75 0 .422.328.75.75.75m0-3c.797 0 1.5.469 1.922 1.125.422.703.422 1.594 0 2.25-.422.703-1.125 1.125-1.922 1.125-.844 0-1.547-.422-1.969-1.125-.422-.656-.422-1.547 0-2.25.422-.656 1.125-1.125 1.969-1.125m.75 9.75c0-.375-.375-.75-.75-.75-.422 0-.75.375-.75.75 0 .422.328.75.75.75.375 0 .75-.328.75-.75m-3 0c0-.797.422-1.5 1.125-1.922.656-.422 1.547-.422 2.25 0C11.531 24 12 24.703 12 25.5c0 .844-.469 1.547-1.125 1.969-.703.422-1.594.422-2.25 0C7.922 27.047 7.5 26.344 7.5 25.5' />
    </g>
    <defs>
      <clipPath id='5de537de9e8184b8cbc93a9bed4bd81c__a'>
        <path d='M0 0h12v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGripDotsVerticalXlRegularIcon);
export default ForwardRef;
