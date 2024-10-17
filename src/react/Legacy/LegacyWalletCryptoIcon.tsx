import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyWalletCryptoIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 16 16'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M11.5 0a2.5 2.5 0 0 1 2.495 2.336L14 2.5l.001 1c.525.395.89.991.978 1.674l.016.162L15 5.5l.001 2c.56.422.937 1.072.992 1.813L16 9.5v1c0 .818-.392 1.543-.999 2l-.001 1a2.5 2.5 0 0 1-2.336 2.495L12.5 16h-10a2.5 2.5 0 0 1-2.495-2.336L0 13.5V1.998A2 2 0 0 1 1.85.005L2 0zM1 13.5a1.5 1.5 0 0 0 1.356 1.493L2.5 15h10a1.5 1.5 0 0 0 1.493-1.355L14 13.5v-.55a3 3 0 0 1-.33.044L13.5 13h-2a2.5 2.5 0 0 1-2.495-2.336L9 10.5v-1a2.5 2.5 0 0 1 2.336-2.495L11.5 7h2q.258 0 .5.05V5.5a1.5 1.5 0 0 0-1.355-1.493L12.52 4H2a2 2 0 0 1-1-.268L.999 7h1.293l.854-.854a.5.5 0 0 1 .275-.14L3.5 6h3.134a1 1 0 1 1 0 1.001L3.706 7l-.852.854a.5.5 0 0 1-.275.14L2.5 8H.999L1 9h4.634a1 1 0 1 1 0 1.001L1 10v1h1.5a.5.5 0 0 1 .294.095l.06.051.853.854h.927a1 1 0 1 1 0 1.001L3.5 13a.5.5 0 0 1-.294-.095l-.06-.051L2.293 12H1zM12 9a1 1 0 1 1 0 2 1 1 0 0 1 0-2m1.5-1h-2a1.5 1.5 0 0 0-1.493 1.356L10 9.5v1a1.5 1.5 0 0 0 1.355 1.493L11.5 12h2c.235 0 .457-.054.655-.15l.001-.001.021-.011.008-.003.011-.007.021-.011.06-.034.002-.001.016-.011.04-.024.04-.03.006-.004.014-.01.011-.009.037-.029.054-.044.01-.01.004-.004.035-.032.015-.014.045-.049.001-.001.033-.036.01-.012.02-.026.02-.023.037-.051.034-.05.014-.023.018-.03q.119-.2.172-.434l.008-.041.02-.136L15 10.5v-1l-.007-.149-.02-.136-.015-.069a1.5 1.5 0 0 0-.123-.331l-.021-.038-.001-.001-.01-.021-.028-.046-.014-.021-.034-.05-.037-.051-.005-.007-.015-.018-.031-.038-.032-.036-.046-.049-.015-.014-.035-.033-.004-.004-.006-.005-.05-.043.046.04-.053-.046-.049-.038-.007-.005-.007-.005-.043-.03-.004-.003-.039-.025-.019-.012-.058-.033-.042-.022.038.02a2 2 0 0 0-.113-.056l-.014-.006-.038-.015.052.021A1.5 1.5 0 0 0 13.5 8m-2-7H2a1 1 0 0 0-.942.663l-.031.107a1.003 1.003 0 0 0 .856 1.223L2 3h11v-.5a1.5 1.5 0 0 0-1.215-1.473l-.14-.02z' />
    </g>
    <defs>
      <clipPath id='cacd7d6ebc85f536c9472fbe9c7f10af__a'>
        <path d='M0 0h16v16H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LegacyWalletCryptoIcon);
export default ForwardRef;
