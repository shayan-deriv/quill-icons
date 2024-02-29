import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedForwardLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M18.516 15.5 10 9.328v12.344zM9.922 8q.39 0 .703.234l8.984 6.524q.39.274.391.742a.86.86 0 0 1-.39.742l-8.985 6.524a1.14 1.14 0 0 1-.703.234q-.508 0-.82-.352-.352-.312-.352-.82v-4.023l-6.875 4.96a1.14 1.14 0 0 1-.703.235q-.508 0-.82-.352Q0 22.336 0 21.828V9.172q0-.508.352-.82Q.664 8 1.172 8q.39 0 .703.234l6.875 4.961V9.172q0-.508.352-.82Q9.414 8 9.922 8M8.75 16.242v-1.484l-7.5-5.43v12.344z' />
    </g>
    <defs>
      <clipPath id='00b63e37702085efe9450d260d332029__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedForwardLgRegularIcon);
export default ForwardRef;
