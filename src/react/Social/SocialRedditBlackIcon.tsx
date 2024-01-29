import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const SocialRedditBlackIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g fill='#000'>
      <path d='M12.332 16a1.67 1.67 0 0 0-1.665 1.666 1.67 1.67 0 0 0 1.665 1.665 1.67 1.67 0 0 0 1.666-1.665A1.67 1.67 0 0 0 12.332 16M16.019 23.28c.636 0 2.807-.075 3.948-1.217a.48.48 0 0 0 .038-.617.44.44 0 0 0-.618 0c-.73.71-2.245.973-3.35.973s-2.638-.262-3.35-.973a.44.44 0 0 0-.617 0 .44.44 0 0 0 0 .617c1.123 1.123 3.313 1.217 3.949 1.217M18.002 17.666a1.67 1.67 0 0 0 1.666 1.665 1.67 1.67 0 0 0 1.665-1.665A1.67 1.67 0 0 0 19.668 16a1.67 1.67 0 0 0-1.666 1.666' />
      <path
        fillRule='evenodd'
        d='M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16m-7.672-2.34A2.34 2.34 0 0 1 26.667 16c0 .954-.58 1.778-1.348 2.152.038.225.056.45.056.692 0 3.593-4.173 6.494-9.338 6.494S6.7 22.438 6.7 18.844c0-.243.02-.486.057-.71A2.33 2.33 0 0 1 5.37 16a2.34 2.34 0 0 1 2.339-2.34c.617 0 1.198.263 1.61.656 1.609-1.18 3.836-1.909 6.325-1.984l1.178-5.576a.46.46 0 0 1 .188-.262c.093-.057.205-.075.318-.057l3.873.824a1.62 1.62 0 0 1 1.479-.936 1.67 1.67 0 0 1 1.665 1.666 1.667 1.667 0 0 1-3.331.075l-3.462-.73-1.066 4.996c2.432.094 4.64.842 6.231 1.984a2.25 2.25 0 0 1 1.61-.655'
        clipRule='evenodd'
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(SocialRedditBlackIcon);
export default ForwardRef;
