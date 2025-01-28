import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPuzzlePieceTwoCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M10.36 11.563c.257.21.398.539.398.914s-.14.68-.399.89c-.234.211-.562.328-.89.352-.07.023-.14 0-.211-.024v.328c0 .305-.164.563-.399.75a1.53 1.53 0 0 1-.867.282c-.023 0-.047 0-.047-.024h-.937a.453.453 0 0 1-.328-.773 1.04 1.04 0 0 0-.211-.516.69.69 0 0 0-.492-.21.6.6 0 0 0-.47.21c-.116.117-.187.305-.21.516a.453.453 0 0 1-.328.773H4.03c-.023.024-.047.024-.047.024-.328 0-.656-.117-.867-.282-.234-.187-.398-.445-.398-.773v-3c0-.14-.024-.234-.024-.328 0-.117 0-.211.024-.422V9.5c0-.047 0-.187-.024-.305v-.023c-.047.023-.117.023-.187.023a1.65 1.65 0 0 1-.89-.328 1.12 1.12 0 0 1-.423-.89c0-.375.164-.68.422-.868s.563-.257.89-.28c.071 0 .141 0 .188.023V6.5c0-.305.188-.562.422-.75a1.53 1.53 0 0 1 .867-.281h.774c-.024-.047-.024-.117-.024-.188a1.57 1.57 0 0 1 .352-.914c.21-.234.539-.398.914-.398s.68.164.89.398q.318.387.352.914c.024.07 0 .14-.023.188h.773c.328 0 .656.117.89.281.235.188.4.445.4.75v4.055c-.024.07-.024.14-.024.375v.304c.07-.023.14-.023.21-.023.329.023.657.14.915.351zm-6.422 2.906h.82c-.024-.047-.024-.117-.024-.188a1.57 1.57 0 0 1 .352-.914 1.18 1.18 0 0 1 .89-.398c.376 0 .704.164.915.398q.316.387.351.914c0 .07 0 .14-.023.188h.797c.21 0 .398-.07.515-.14.117-.118.188-.212.188-.306v-.539c0-.421.492-.609.773-.328.211-.023.399-.094.516-.21a.6.6 0 0 0 .21-.47.65.65 0 0 0-.21-.492 1.04 1.04 0 0 0-.516-.21.453.453 0 0 1-.773-.329v-.914H7.008c-.399 0-.61-.492-.328-.773-.024-.211-.094-.399-.211-.516A.63.63 0 0 0 6 9.032a.65.65 0 0 0-.492.21 1.04 1.04 0 0 0-.211.516.453.453 0 0 1-.328.773H3.28V14c0 .094.047.21.164.305a.83.83 0 0 0 .493.164m-.657-4.5h1.477c-.024-.047-.024-.117-.024-.188a1.57 1.57 0 0 1 .352-.914 1.18 1.18 0 0 1 .89-.398c.376 0 .704.164.915.398q.316.387.351.914c0 .07 0 .14-.023.188h1.5V6.5c0-.094-.047-.187-.188-.305a.87.87 0 0 0-.539-.164h-.984a.453.453 0 0 1-.328-.773c-.024-.211-.094-.399-.211-.516A.6.6 0 0 0 6 4.532a.69.69 0 0 0-.492.21 1.04 1.04 0 0 0-.211.516.453.453 0 0 1-.328.773h-.985c-.21 0-.398.07-.539.164-.117.117-.164.211-.164.305v.023c0 .047 0 .211-.023.352-.024.094-.024.164-.047.258a.45.45 0 0 1-.188.258c-.093.07-.187.093-.257.07-.094 0-.141-.024-.188-.047 0 0-.023 0-.023-.023H2.53a1.6 1.6 0 0 0-.586.164.54.54 0 0 0-.164.422c0 .21.07.351.188.445q.175.175.562.21h.024c0-.023.023-.023.023-.023.047-.023.094-.046.188-.046.07-.024.164 0 .257.07.118.07.164.187.188.258.023.07.023.164.047.257.023.141.023.305.023.352v.492z' />
    </g>
    <defs>
      <clipPath id='bc7bf7f804ee450ce8b0612ba31619f1__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPuzzlePieceTwoCaptionRegularIcon);
export default ForwardRef;
