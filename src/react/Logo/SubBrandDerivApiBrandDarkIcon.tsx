import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SubBrandDerivApiBrandDarkIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 282 58'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path
        fill='#FF444F'
        d='m34.986 1.829-2.99 16.955H21.618c-9.682 0-18.911 7.845-20.622 17.527l-.724 4.12C-1.43 50.115 5.03 57.96 14.712 57.96h8.656c7.057 0 13.78-5.713 15.021-12.77L46.361 0zM27.622 43.59c-.382 2.18-2.344 3.954-4.524 3.954h-5.26c-4.351 0-7.263-3.533-6.5-7.893l.454-2.57c.772-4.351 4.925-7.892 9.277-7.892h9.092zm87.292 14.367 6.81-38.634h10.772l-6.81 38.634h-10.781zm1.165-38.188-1.622 9.193c-5.104-1.586-10.369-1.081-11.987-.759q-2.621 14.881-5.245 29.764h-10.78L92.91 21.32c3.506-1.452 12.115-4.399 23.169-1.55m-43.677-.993h-8.385c-8.17 0-15.96 6.62-17.4 14.79l-1.694 9.603c-1.44 8.17 4.01 14.79 12.18 14.79h17.838l1.83-10.382H60.006c-2.72 0-4.543-2.204-4.057-4.933l.055-.326h27.027l1.543-8.752c1.44-8.17-4.01-14.79-12.18-14.79zm1.36 13.963-.063.557H57.63l.087-.493c.485-2.721 2.968-5.116 5.696-5.116h6.277c2.698 0 4.52 2.355 4.074 5.052m100.765-13.416c-3.672 9.763-12.088 26.371-20.24 38.634h-10.78c-3.742-11.671-6.158-27.933-6.619-38.634h10.78c.194 3.49 1.757 16.438 3.54 25.483 4.892-8.8 10.284-20.345 12.531-25.483z'
      />
      <path
        fill='#fff'
        d='M222.528 58a264 264 0 0 1-2.304-6.336 520 520 0 0 0-2.232-6.408h-22.608L190.848 58h-7.272q2.88-7.92 5.4-14.616a768 768 0 0 1 4.896-12.816 500 500 0 0 1 4.824-11.52 282 282 0 0 1 4.968-10.944h6.408q2.592 5.4 4.968 10.944a353 353 0 0 1 4.752 11.52 489 489 0 0 1 4.968 12.816q2.52 6.696 5.4 14.616zm-6.552-18.504a545 545 0 0 0-4.608-12.096 191 191 0 0 0-4.68-11.304 191 191 0 0 0-4.824 11.304 556 556 0 0 0-4.464 12.096zM247.302 7.6q10.512 0 16.128 4.032 5.688 3.96 5.688 11.88 0 4.32-1.584 7.416-1.512 3.024-4.464 4.968-2.88 1.872-7.056 2.736t-9.432.864h-5.544V58h-6.984V8.824q2.952-.72 6.552-.936a86 86 0 0 1 6.696-.288m.576 6.12q-4.464 0-6.84.216V33.52h5.256q3.6 0 6.48-.432 2.88-.504 4.824-1.584 2.016-1.152 3.096-3.096t1.08-4.968q0-2.88-1.152-4.752-1.08-1.872-3.024-2.952-1.872-1.152-4.392-1.584a31.5 31.5 0 0 0-5.328-.432M274.979 8.104h6.984V58h-6.984z'
      />
    </g>
    <defs>
      <clipPath id='2c0248d0f4b0abebeaa33771e93beabb__a'>
        <path fill='#fff' d='M0 0h282v58H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(SubBrandDerivApiBrandDarkIcon);
export default ForwardRef;
