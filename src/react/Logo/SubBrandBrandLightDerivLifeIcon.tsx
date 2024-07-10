import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SubBrandBrandLightDerivLifeIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 295 59'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill='#FF444F'
      d='m34.986 1.829-2.99 16.955H21.618c-9.682 0-18.911 7.845-20.622 17.527l-.724 4.12C-1.43 50.115 5.03 57.96 14.712 57.96h8.656c7.057 0 13.78-5.713 15.021-12.77L46.361 0zM27.622 43.59c-.382 2.18-2.344 3.954-4.524 3.954h-5.26c-4.351 0-7.263-3.533-6.5-7.893l.454-2.57c.772-4.351 4.925-7.892 9.277-7.892h9.092zm87.292 14.367 6.81-38.634h10.772l-6.81 38.634h-10.781zm1.165-38.188-1.622 9.193c-5.104-1.586-10.369-1.081-11.987-.759q-2.621 14.881-5.245 29.764h-10.78L92.91 21.32c3.506-1.452 12.115-4.399 23.169-1.55m-43.677-.993h-8.385c-8.17 0-15.96 6.62-17.4 14.79l-1.694 9.603c-1.44 8.17 4.01 14.79 12.18 14.79h17.838l1.83-10.382H60.006c-2.72 0-4.543-2.204-4.057-4.933l.055-.326h27.027l1.543-8.752c1.44-8.17-4.01-14.79-12.18-14.79zm1.36 13.963-.063.557H57.63l.087-.493c.485-2.721 2.968-5.116 5.696-5.116h6.277c2.698 0 4.52 2.355 4.074 5.052m100.765-13.416c-3.672 9.763-12.088 26.371-20.24 38.634h-10.78c-3.742-11.671-6.158-27.933-6.619-38.634h10.78c.194 3.49 1.757 16.438 3.54 25.483 4.892-8.8 10.284-20.345 12.531-25.483z'
    />
    <path
      fill='#414652'
      d='M219.216 51.952V58h-30.024V8.104h6.984v43.848zM229.912 58h-6.696V20.56h6.696zm-3.384-44.208q-1.8 0-3.096-1.152-1.224-1.224-1.224-3.24t1.224-3.168q1.296-1.224 3.096-1.224t3.024 1.224q1.296 1.152 1.296 3.168t-1.296 3.24q-1.224 1.152-3.024 1.152M253.163 2.128q2.952 0 5.04.432 2.16.432 3.024.792l-1.224 5.76q-.864-.432-2.448-.792-1.584-.432-3.888-.432-4.68 0-6.552 2.592-1.872 2.52-1.872 6.84v3.24h14.4v5.616h-14.4V58h-6.696V17.176q0-7.2 3.528-11.088 3.528-3.96 11.088-3.96M261.352 39.352q0-4.968 1.44-8.64 1.44-3.744 3.816-6.192a15.5 15.5 0 0 1 5.472-3.672 17.1 17.1 0 0 1 6.336-1.224q7.56 0 11.592 4.752 4.032 4.68 4.032 14.328v1.152q0 .648-.072 1.224h-25.632q.432 5.832 3.384 8.856t9.216 3.024q3.528 0 5.904-.576 2.448-.648 3.672-1.224l.936 5.616q-1.224.648-4.32 1.368-3.024.72-6.912.72-4.896 0-8.496-1.44-3.528-1.512-5.832-4.104t-3.456-6.12q-1.08-3.6-1.08-7.848m25.704-3.672q.072-4.536-2.304-7.416-2.304-2.952-6.408-2.952-2.304 0-4.104.936a9.3 9.3 0 0 0-2.952 2.304 11.4 11.4 0 0 0-1.944 3.312 17.6 17.6 0 0 0-.864 3.816z'
    />
  </svg>
);
const ForwardRef = forwardRef(SubBrandBrandLightDerivLifeIcon);
export default ForwardRef;
