import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SubBrandBlackDerivEngineeringIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 542 72'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g fill='#414652'>
      <path d='m34.986 1.829-2.99 16.955H21.618c-9.682 0-18.911 7.845-20.622 17.527l-.724 4.12C-1.43 50.115 5.03 57.96 14.712 57.96h8.656c7.057 0 13.78-5.713 15.021-12.77L46.361 0zM27.622 43.59c-.382 2.18-2.344 3.954-4.524 3.954h-5.26c-4.351 0-7.263-3.533-6.5-7.893l.454-2.57c.772-4.351 4.925-7.892 9.277-7.892h9.092zm87.292 14.367 6.81-38.634h10.772l-6.81 38.634h-10.781zm1.165-38.188-1.622 9.193c-5.104-1.586-10.369-1.081-11.987-.759q-2.621 14.881-5.245 29.764h-10.78L92.91 21.32c3.506-1.452 12.115-4.399 23.169-1.55m-43.677-.993h-8.385c-8.17 0-15.96 6.62-17.4 14.79l-1.694 9.603c-1.44 8.17 4.01 14.79 12.18 14.79h17.838l1.83-10.382H60.006c-2.72 0-4.543-2.204-4.057-4.933l.055-.326h27.027l1.543-8.752c1.44-8.17-4.01-14.79-12.18-14.79zm1.36 13.963-.063.557H57.63l.087-.493c.485-2.721 2.968-5.116 5.696-5.116h6.277c2.698 0 4.52 2.355 4.074 5.052m100.765-13.416c-3.672 9.763-12.088 26.371-20.24 38.634h-10.78c-3.742-11.671-6.158-27.933-6.619-38.634h10.78c.194 3.49 1.757 16.438 3.54 25.483 4.892-8.8 10.284-20.345 12.531-25.483zM189.192 58V8.104h30.456v5.976h-23.472v14.832h20.88v5.832h-20.88v17.28h25.272V58zM227.013 21.64q2.304-.576 6.12-1.224t8.784-.648q4.464 0 7.416 1.296 2.952 1.224 4.68 3.528 1.8 2.232 2.52 5.4t.72 6.984V58h-6.696V38.416q0-3.456-.504-5.904-.432-2.448-1.512-3.96t-2.88-2.16q-1.8-.72-4.464-.72-1.08 0-2.232.072a32 32 0 0 0-2.232.216q-1.008.072-1.872.216-.792.144-1.152.216V58h-6.696zM288.949 54.256q-.864.576-3.384 1.512-2.448.864-5.76.864-3.384 0-6.408-1.08a14.1 14.1 0 0 1-5.184-3.312q-2.232-2.304-3.528-5.688t-1.296-8.064q0-4.104 1.224-7.488 1.224-3.456 3.528-5.904 2.376-2.52 5.76-3.888 3.384-1.44 7.632-1.44 4.68 0 8.136.72 3.528.648 5.904 1.224V55.12q0 8.64-4.464 12.528t-13.536 3.888q-3.528 0-6.696-.576-3.096-.576-5.4-1.368l1.224-5.832q2.016.792 4.896 1.368 2.952.648 6.12.648 5.976 0 8.568-2.376 2.664-2.376 2.664-7.56zm-.072-27.792q-1.008-.288-2.736-.504-1.656-.288-4.536-.288-5.4 0-8.352 3.528-2.88 3.528-2.88 9.36 0 3.24.792 5.544.864 2.304 2.232 3.816 1.44 1.512 3.24 2.232 1.872.72 3.816.72 2.664 0 4.896-.72 2.232-.792 3.528-1.8zM310.918 58h-6.696V20.56h6.696zm-3.384-44.208q-1.8 0-3.096-1.152-1.224-1.224-1.224-3.24t1.224-3.168q1.296-1.224 3.096-1.224t3.024 1.224q1.296 1.152 1.296 3.168t-1.296 3.24q-1.224 1.152-3.024 1.152M319.552 21.64q2.305-.576 6.12-1.224t8.784-.648q4.465 0 7.416 1.296 2.952 1.224 4.68 3.528 1.8 2.232 2.521 5.4t.72 6.984V58h-6.697V38.416q0-3.456-.504-5.904-.43-2.448-1.511-3.96t-2.88-2.16q-1.8-.72-4.464-.72-1.08 0-2.233.072a32 32 0 0 0-2.232.216q-1.008.072-1.872.216-.792.144-1.151.216V58h-6.697zM355.928 39.352q0-4.968 1.44-8.64 1.44-3.744 3.816-6.192a15.5 15.5 0 0 1 5.472-3.672 17.1 17.1 0 0 1 6.336-1.224q7.56 0 11.592 4.752 4.032 4.68 4.032 14.328v1.152q0 .648-.072 1.224h-25.632q.432 5.832 3.384 8.856t9.216 3.024q3.528 0 5.904-.576 2.448-.648 3.672-1.224l.936 5.616q-1.224.648-4.32 1.368-3.024.72-6.912.72-4.896 0-8.496-1.44-3.528-1.512-5.832-4.104t-3.456-6.12q-1.08-3.6-1.08-7.848m25.704-3.672q.072-4.536-2.304-7.416-2.304-2.952-6.408-2.952-2.304 0-4.104.936a9.3 9.3 0 0 0-2.952 2.304 11.4 11.4 0 0 0-1.944 3.312 17.6 17.6 0 0 0-.864 3.816zM393.267 39.352q0-4.968 1.44-8.64 1.44-3.744 3.816-6.192a15.5 15.5 0 0 1 5.472-3.672 17.1 17.1 0 0 1 6.336-1.224q7.56 0 11.592 4.752 4.032 4.68 4.032 14.328v1.152q0 .648-.072 1.224h-25.632q.432 5.832 3.384 8.856t9.216 3.024q3.528 0 5.904-.576 2.448-.648 3.672-1.224l.936 5.616q-1.224.648-4.32 1.368-3.024.72-6.912.72-4.896 0-8.496-1.44-3.528-1.512-5.832-4.104t-3.456-6.12q-1.08-3.6-1.08-7.848m25.704-3.672q.072-4.536-2.304-7.416-2.304-2.952-6.408-2.952-2.304 0-4.104.936a9.3 9.3 0 0 0-2.952 2.304 11.4 11.4 0 0 0-1.944 3.312 17.6 17.6 0 0 0-.864 3.816zM446.518 19.768q.864 0 1.944.144 1.152.072 2.232.288 1.08.144 1.944.36.936.144 1.368.288l-1.152 5.832q-.792-.288-2.664-.648-1.8-.432-4.68-.432-1.872 0-3.744.432-1.8.36-2.376.504V58h-6.696V22.144q2.376-.864 5.904-1.584 3.528-.792 7.92-.792M464.283 58h-6.696V20.56h6.696zm-3.384-44.208q-1.8 0-3.096-1.152-1.224-1.224-1.224-3.24t1.224-3.168q1.296-1.224 3.096-1.224t3.024 1.224q1.296 1.152 1.296 3.168t-1.296 3.24q-1.224 1.152-3.024 1.152M472.918 21.64q2.304-.576 6.12-1.224t8.784-.648q4.464 0 7.416 1.296 2.952 1.224 4.68 3.528 1.8 2.232 2.52 5.4t.72 6.984V58h-6.696V38.416q0-3.456-.504-5.904-.432-2.448-1.512-3.96t-2.88-2.16q-1.8-.72-4.464-.72-1.08 0-2.232.072a32 32 0 0 0-2.232.216q-1.008.072-1.872.216-.792.144-1.152.216V58h-6.696zM534.854 54.256q-.864.576-3.384 1.512-2.448.864-5.76.864-3.384 0-6.408-1.08a14.1 14.1 0 0 1-5.184-3.312q-2.232-2.304-3.528-5.688t-1.296-8.064q0-4.104 1.224-7.488 1.224-3.456 3.528-5.904 2.376-2.52 5.76-3.888 3.384-1.44 7.632-1.44 4.68 0 8.136.72 3.528.648 5.904 1.224V55.12q0 8.64-4.464 12.528t-13.536 3.888q-3.528 0-6.696-.576-3.096-.576-5.4-1.368l1.224-5.832q2.016.792 4.896 1.368 2.952.648 6.12.648 5.976 0 8.568-2.376 2.664-2.376 2.664-7.56zm-.072-27.792q-1.008-.288-2.736-.504-1.656-.288-4.536-.288-5.4 0-8.352 3.528-2.88 3.528-2.88 9.36 0 3.24.792 5.544.864 2.304 2.232 3.816 1.44 1.512 3.24 2.232 1.872.72 3.816.72 2.664 0 4.896-.72 2.232-.792 3.528-1.8z' />
    </g>
    <defs>
      <clipPath id='c89b637141fac2d0b4aa7aee3d9465e4__a'>
        <path fill='#fff' d='M0 0h542v72H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(SubBrandBlackDerivEngineeringIcon);
export default ForwardRef;
