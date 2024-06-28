import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFiatOfframpCaptionFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={18}
    viewBox='0 0 15 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M4.102 5.75v.516h1.007a.26.26 0 0 0 .258-.258.26.26 0 0 0-.258-.258zm0 1.008v.492h1.007a.26.26 0 0 0 .258-.258c0-.117-.117-.234-.258-.234zm6.28 2.555c1.712 0 3.118 1.382 3.118 3.093S12.094 15.5 10.383 15.5h-6.89A1.99 1.99 0 0 1 1.5 13.508v-6.89C1.5 4.905 2.883 3.5 4.594 3.5s3.093 1.406 3.093 3.117c0 .258-.023.516-.093.75l2.039 2.04c.234-.071.492-.095.75-.095m-7.757 4.195a.88.88 0 0 0 .867.867h4.5c-.445-.516-.703-1.219-.703-1.969 0-1.008.492-1.922 1.266-2.484L7.078 8.445a3.04 3.04 0 0 1-2.484 1.266c-.75 0-1.453-.258-1.969-.703zm1.477-8.25v-.516h-.493v.516h-.492v.492h.492v1.5h-.492v.516h.492v.492h.493v-.492h.515v.492h.492v-.492c.399 0 .75-.328.75-.75a.73.73 0 0 0-.21-.516.744.744 0 0 0-.047-1.055.76.76 0 0 0-.493-.187v-.516h-.492v.516zm6.703 5.648v-.281h-.633v.281c-.399.117-.656.492-.656.914 0 .54.422.985.96.985a.37.37 0 0 1 .376.375c0 .187-.165.351-.375.351a.36.36 0 0 1-.352-.351v-.094h-.61v.094c0 .422.258.797.657.914v.281h.633v-.281c.398-.117.656-.492.656-.914a.99.99 0 0 0-.984-.985c-.188 0-.352-.164-.352-.375a.36.36 0 0 1 .352-.351c.21 0 .375.164.375.351v.094h.609v-.094c0-.422-.258-.797-.656-.914m.515-4.664v2.18a.56.56 0 0 1-.351.515.54.54 0 0 1-.61-.117L8.18 6.64c-.21-.21-.21-.562 0-.796a.58.58 0 0 1 .798 0l1.218 1.218v-.82c0-.304.235-.562.563-.562a.57.57 0 0 1 .562.562' />
    </g>
    <defs>
      <clipPath id='625cc463b6a8d1c7f2db29d8307f5d79__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFiatOfframpCaptionFillIcon);
export default ForwardRef;
