import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLifeRingXlBoldIcon = (
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
      <path d='M18.047 25.688 14.25 21.89c-.656.422-1.453.609-2.25.609-.844 0-1.64-.187-2.297-.61l-3.797 3.797C7.594 27 9.703 27.75 12 27.75c2.25 0 4.36-.75 6.047-2.062m3.187 0 .516.562a1.027 1.027 0 0 1 0 1.547 1.027 1.027 0 0 1-1.547 0l-.562-.516C17.53 28.97 14.906 30 12 30c-2.953 0-5.578-1.031-7.687-2.719l-.563.516a1.027 1.027 0 0 1-1.547 0c-.469-.422-.469-1.125 0-1.594l.516-.515C1.03 23.578 0 20.953 0 18c0-2.906 1.031-5.531 2.719-7.64l-.516-.563c-.469-.422-.469-1.125 0-1.594.422-.422 1.125-.422 1.594 0l.515.563C6.422 7.078 9.048 6 12 6c2.906 0 5.531 1.078 7.64 2.766l.563-.516c.422-.469 1.125-.469 1.594 0a1.103 1.103 0 0 1 0 1.547l-.563.562C22.922 12.47 24 15.094 24 18c0 2.953-1.078 5.578-2.766 7.688m-1.593-1.594A9.9 9.9 0 0 0 21.75 18c0-2.25-.797-4.36-2.11-6.047l-3.796 3.797c.422.656.656 1.453.656 2.25 0 .844-.234 1.64-.656 2.297zm-1.594-13.735C16.359 9.047 14.25 8.25 12 8.25a9.9 9.9 0 0 0-6.094 2.11l3.797 3.796a4.2 4.2 0 0 1 2.25-.656c.844 0 1.64.234 2.297.656zm-9.938 9.938c-.421-.656-.609-1.453-.609-2.25 0-.844.188-1.64.61-2.297l-3.797-3.797A9.82 9.82 0 0 0 2.25 18c0 2.297.75 4.406 2.063 6.094zM9.75 18c0 .844.422 1.547 1.125 1.969.656.422 1.547.422 2.25 0 .656-.422 1.125-1.125 1.125-1.969 0-.797-.469-1.5-1.125-1.922-.703-.422-1.594-.422-2.25 0C10.172 16.5 9.75 17.203 9.75 18' />
    </g>
    <defs>
      <clipPath id='7e9c2dda829e32896d12352f1c2be102__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLifeRingXlBoldIcon);
export default ForwardRef;
