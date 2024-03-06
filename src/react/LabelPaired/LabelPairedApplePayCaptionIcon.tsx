import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedApplePayCaptionIcon = (
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
      <path d='M2.742 7.227v-.024A1.06 1.06 0 0 0 3 6.43a1 1 0 0 0-.727.375 1.07 1.07 0 0 0-.28.75q.468 0 .75-.328M3 7.625q.141 0 .398.07.282.094.516.422h-.023q-.095.047-.282.281-.21.212-.234.657.024.515.281.75.282.234.375.258 0 .023-.093.234a3 3 0 0 1-.235.469q-.164.234-.351.422a.66.66 0 0 1-.422.187.67.67 0 0 1-.375-.094 1.1 1.1 0 0 0-.446-.117 1.1 1.1 0 0 0-.445.117q-.14.07-.351.094a.6.6 0 0 1-.446-.187 2.6 2.6 0 0 1-.351-.446 3.3 3.3 0 0 1-.47-1.195q-.14-.703.165-1.29.351-.584 1.031-.632.258.024.492.14.188.072.305.094.117-.022.305-.093A1.45 1.45 0 0 1 3 7.625m2.344-.867h1.71q.68.023 1.102.422.399.42.399 1.078 0 .68-.422 1.101-.399.4-1.102.422h-.984v1.547h-.703zm.703.61v1.804h.82q.96-.024.985-.89-.024-.892-.985-.915zm3.82 4.007q-.516 0-.82-.281-.305-.258-.305-.703.024-.89 1.266-.985l.89-.047v-.257q-.023-.563-.68-.563-.56.024-.679.469h-.633a.96.96 0 0 1 .399-.75q.351-.282.937-.281.61 0 .961.304.375.282.375.774v2.273h-.656v-.539h-.024q-.327.562-1.03.586m.188-.54q.375 0 .61-.21a.67.67 0 0 0 .233-.516v-.257l-.796.046q-.657.047-.68.47.046.444.633.468m2.39 1.735h-.258v-.562a1 1 0 0 0 .211.023q.446.024.586-.469l.07-.21-1.195-3.329h.727l.844 2.696h.023l.82-2.696H15l-1.242 3.493q-.21.585-.492.82-.305.258-.82.234' />
    </g>
    <defs>
      <clipPath id='2b13711bcce481cc4536c9fcd9f9357c__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedApplePayCaptionIcon);
export default ForwardRef;
