import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedHandGestureTapLeftXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={30}
    height={36}
    viewBox='0 0 30 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M4.922 7.5c-.234 0-.422.234-.422.469v20.11a.42.42 0 0 0 .422.421c.234 0 .469-.187.469-.422V7.968a.504.504 0 0 0-.47-.468M6 15.75c0-1.64 1.36-3 3-3s3 1.36 3 3a2.9 2.9 0 0 1-.375 1.453l.89 1.828c.141-.14.329-.328.563-.422a1.91 1.91 0 0 1 1.875.188c.14-.094.281-.188.422-.235a1.91 1.91 0 0 1 1.875.188l.094-.094c.047 0 .093-.047.14-.047.891-.468 2.063-.047 2.485.891l1.218 2.531c.75 1.64.047 3.61-1.593 4.36l-3.563 1.734c-.656.281-1.312.422-2.015.375h-.328c-1.5-.047-2.907-.984-3.563-2.39l-.234-.563a2.15 2.15 0 0 1 .046-2.063l.376-.703c.046-.14.093-.234.14-.328L8.72 18.75C7.172 18.61 6 17.344 6 15.75m1.922 1.406h.047c-.422-.797-.047-1.828.75-2.203s1.828 0 2.203.797l.14.328v-.328A2.08 2.08 0 0 0 9 13.688c-1.172 0-2.11.937-2.11 2.062 0 .89.563 1.688 1.313 1.969zm4.5 7.219c.094.234-.047.516-.235.61-.234.14-.515.046-.609-.235l-.61-1.266-.234.47a1.39 1.39 0 0 0 0 1.218l.235.515c.515 1.079 1.547 1.829 2.765 1.922l.282-.047a3.1 3.1 0 0 0 1.593-.28l3.61-1.688c1.172-.563 1.64-1.969 1.125-3.14l-1.219-2.532a1 1 0 0 0-1.266-.469c-.093.047-.187.14-.28.235-.095.046-.235.14-.376.14-.094 0-.234-.094-.328-.187a.94.94 0 0 0-1.125-.235c-.14.094-.281.188-.375.328s-.234.235-.375.235a.6.6 0 0 1-.422-.188c-.234-.375-.75-.515-1.125-.328a.98.98 0 0 0-.515.75c-.047.188-.188.328-.422.375-.188.047-.375-.047-.47-.234l-1.968-4.219c-.187-.328-.61-.469-.937-.328-.375.187-.516.61-.328.937z' />
    </g>
    <defs>
      <clipPath id='7823e639a8394ec64f16239fba34c75a__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHandGestureTapLeftXlRegularIcon);
export default ForwardRef;
