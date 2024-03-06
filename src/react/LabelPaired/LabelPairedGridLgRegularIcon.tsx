import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGridLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={30}
    viewBox='0 0 18 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3.688 8H1.812q-.273.039-.312.313v1.874q.039.274.313.313h1.875q.273-.039.312-.312V8.312Q3.961 8.04 3.688 8M1.812 6.75h1.876q.664 0 1.093.469.47.429.469 1.093v1.876q0 .663-.469 1.093a1.42 1.42 0 0 1-1.093.469H1.812q-.663 0-1.093-.469a1.42 1.42 0 0 1-.469-1.094V8.314q0-.665.469-1.094a1.42 1.42 0 0 1 1.094-.469m1.876 7.5H1.812q-.273.039-.312.313v1.874q.039.274.313.313h1.875q.273-.039.312-.312v-1.875q-.039-.274-.312-.313M1.812 13h1.876q.664 0 1.093.469.47.428.469 1.094v1.874q0 .665-.469 1.094A1.42 1.42 0 0 1 3.688 18H1.812q-.663 0-1.093-.469a1.42 1.42 0 0 1-.469-1.093v-1.875q0-.665.469-1.094A1.42 1.42 0 0 1 1.813 13m0 7.5q-.273.039-.312.313v1.875q.039.273.313.312h1.875q.273-.039.312-.312v-1.875q-.039-.274-.312-.313zm-1.562.313q0-.665.469-1.094a1.42 1.42 0 0 1 1.094-.469h1.875q.664 0 1.093.469.47.429.469 1.093v1.875q0 .665-.469 1.094a1.42 1.42 0 0 1-1.093.469H1.812q-.663 0-1.093-.469a1.42 1.42 0 0 1-.469-1.093zM9.938 8H8.062q-.273.039-.312.313v1.874q.039.274.313.313h1.874q.274-.039.313-.312V8.312Q10.211 8.04 9.938 8M8.062 6.75h1.876q.663 0 1.093.469.47.429.469 1.093v1.876q0 .663-.469 1.093a1.42 1.42 0 0 1-1.094.469H8.063q-.665 0-1.094-.469a1.42 1.42 0 0 1-.469-1.094V8.314q0-.665.469-1.094a1.42 1.42 0 0 1 1.093-.469m0 7.5q-.273.039-.312.313v1.874q.039.274.313.313h1.874q.274-.039.313-.312v-1.875q-.039-.274-.312-.313zm-1.562.313q0-.665.469-1.094A1.42 1.42 0 0 1 8.062 13h1.876q.663 0 1.093.469.47.428.469 1.094v1.874q0 .665-.469 1.094A1.42 1.42 0 0 1 9.937 18H8.063q-.665 0-1.094-.469a1.42 1.42 0 0 1-.469-1.093zM9.938 20.5H8.062q-.273.039-.312.313v1.875q.039.273.313.312h1.874q.274-.039.313-.312v-1.875q-.039-.274-.312-.313m-1.876-1.25h1.876q.663 0 1.093.469.47.429.469 1.093v1.875q0 .665-.469 1.094a1.42 1.42 0 0 1-1.094.469H8.063q-.665 0-1.094-.469a1.42 1.42 0 0 1-.469-1.093v-1.875q0-.665.469-1.094a1.42 1.42 0 0 1 1.093-.469M14.313 8q-.273.039-.312.313v1.874q.039.274.313.313h1.874q.274-.039.313-.312V8.312q-.039-.273-.312-.312zm-1.562.313q0-.665.469-1.094a1.42 1.42 0 0 1 1.094-.469h1.874q.665 0 1.094.469.47.429.469 1.093v1.876q0 .663-.469 1.093a1.42 1.42 0 0 1-1.093.469h-1.875q-.665 0-1.094-.469a1.42 1.42 0 0 1-.469-1.094zm3.438 5.937h-1.875q-.274.039-.313.313v1.874q.039.274.313.313h1.874q.274-.039.313-.312v-1.875q-.039-.274-.312-.313M14.313 13h1.874q.665 0 1.094.469.47.428.469 1.094v1.874q0 .665-.469 1.094a1.42 1.42 0 0 1-1.093.469h-1.875q-.665 0-1.094-.469a1.42 1.42 0 0 1-.469-1.093v-1.875q0-.665.469-1.094A1.42 1.42 0 0 1 14.313 13m0 7.5q-.274.039-.313.313v1.875q.039.273.313.312h1.874q.274-.039.313-.312v-1.875q-.039-.274-.312-.313zm-1.563.313q0-.665.469-1.094a1.42 1.42 0 0 1 1.094-.469h1.874q.665 0 1.094.469.47.429.469 1.093v1.875q0 .665-.469 1.094a1.42 1.42 0 0 1-1.093.469h-1.875q-.665 0-1.094-.469a1.42 1.42 0 0 1-.469-1.093z' />
    </g>
    <defs>
      <clipPath id='39df12e2cfa62ae3fe06297fe1ee620d__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGridLgRegularIcon);
export default ForwardRef;
