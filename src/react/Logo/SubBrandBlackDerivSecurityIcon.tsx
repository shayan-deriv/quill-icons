import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SubBrandBlackDerivSecurityIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 426 72'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g fill='#414652'>
      <path d='m34.986 1.829-2.99 16.955H21.618c-9.682 0-18.911 7.845-20.622 17.527l-.724 4.12C-1.43 50.115 5.03 57.96 14.712 57.96h8.656c7.057 0 13.78-5.713 15.021-12.77L46.361 0zM27.622 43.59c-.382 2.18-2.344 3.954-4.524 3.954h-5.26c-4.351 0-7.263-3.533-6.5-7.893l.454-2.57c.772-4.351 4.925-7.892 9.277-7.892h9.092zm87.292 14.367 6.81-38.634h10.772l-6.81 38.634h-10.781zm1.165-38.188-1.622 9.193c-5.104-1.586-10.369-1.081-11.987-.759q-2.621 14.881-5.245 29.764h-10.78L92.91 21.32c3.506-1.452 12.115-4.399 23.169-1.55m-43.677-.993h-8.385c-8.17 0-15.96 6.62-17.4 14.79l-1.694 9.603c-1.44 8.17 4.01 14.79 12.18 14.79h17.838l1.83-10.382H60.006c-2.72 0-4.543-2.204-4.057-4.933l.055-.326h27.027l1.543-8.752c1.44-8.17-4.01-14.79-12.18-14.79zm1.36 13.963-.063.557H57.63l.087-.493c.485-2.721 2.968-5.116 5.696-5.116h6.277c2.698 0 4.52 2.355 4.074 5.052m100.765-13.416c-3.672 9.763-12.088 26.371-20.24 38.634h-10.78c-3.742-11.671-6.158-27.933-6.619-38.634h10.78c.194 3.49 1.757 16.438 3.54 25.483 4.892-8.8 10.284-20.345 12.531-25.483zM200.784 53.032q10.944 0 10.944-7.488 0-2.304-1.008-3.888-.936-1.656-2.592-2.808-1.656-1.224-3.816-2.088a110 110 0 0 0-4.464-1.728 51 51 0 0 1-5.184-2.088q-2.448-1.224-4.248-2.808-1.8-1.656-2.88-3.888-1.008-2.232-1.008-5.4 0-6.552 4.464-10.224t12.312-3.672q4.536 0 8.208 1.008 3.744.936 5.472 2.088l-2.232 5.688q-1.512-.936-4.536-1.8-2.952-.936-6.912-.936-2.016 0-3.744.432t-3.024 1.296a6.65 6.65 0 0 0-2.088 2.232q-.72 1.296-.72 3.096 0 2.016.792 3.384t2.232 2.448q1.44 1.008 3.312 1.872a77 77 0 0 0 4.248 1.728 90 90 0 0 1 5.904 2.592q2.736 1.296 4.68 3.096a12.1 12.1 0 0 1 3.096 4.32q1.08 2.448 1.08 5.976 0 6.552-4.824 10.08-4.752 3.528-13.464 3.528-2.952 0-5.472-.432a42 42 0 0 1-4.392-.864 39 39 0 0 1-3.384-1.152 45 45 0 0 1-2.16-1.08l2.088-5.76q1.656.936 5.04 2.088t8.28 1.152M222.112 39.352q0-4.968 1.44-8.64 1.44-3.744 3.816-6.192a15.5 15.5 0 0 1 5.472-3.672 17.1 17.1 0 0 1 6.336-1.224q7.56 0 11.592 4.752 4.032 4.68 4.032 14.328v1.152q0 .648-.072 1.224h-25.632q.432 5.832 3.384 8.856t9.216 3.024q3.528 0 5.904-.576 2.448-.648 3.672-1.224l.936 5.616q-1.224.648-4.32 1.368-3.024.72-6.912.72-4.896 0-8.496-1.44-3.528-1.512-5.832-4.104t-3.456-6.12q-1.08-3.6-1.08-7.848m25.704-3.672q.072-4.536-2.304-7.416-2.304-2.952-6.408-2.952-2.304 0-4.104.936a9.3 9.3 0 0 0-2.952 2.304 11.4 11.4 0 0 0-1.944 3.312 17.6 17.6 0 0 0-.864 3.816zM277.811 58.864q-4.536 0-7.992-1.44-3.384-1.44-5.76-4.032-2.304-2.592-3.456-6.12-1.152-3.6-1.152-7.92t1.224-7.92q1.296-3.6 3.6-6.192 2.304-2.664 5.616-4.104 3.384-1.512 7.488-1.512 2.52 0 5.04.432t4.824 1.368l-1.512 5.688q-1.512-.72-3.528-1.152-1.944-.432-4.176-.432-5.616 0-8.64 3.528-2.952 3.528-2.952 10.296 0 3.024.648 5.544.72 2.52 2.16 4.32 1.512 1.8 3.816 2.808 2.304.936 5.616.936 2.664 0 4.824-.504t3.384-1.08l.936 5.616q-.576.36-1.656.72-1.08.288-2.448.504-1.368.288-2.952.432a21 21 0 0 1-2.952.216M321.936 56.92q-2.304.576-6.12 1.224-3.744.648-8.712.648-4.32 0-7.272-1.224-2.952-1.296-4.752-3.6t-2.592-5.4q-.792-3.168-.792-6.984V20.56h6.696v19.584q0 6.84 2.16 9.792t7.272 2.952q1.08 0 2.232-.072t2.16-.144a36 36 0 0 1 1.8-.216q.864-.144 1.224-.288V20.56h6.696zM344.416 19.768q.864 0 1.944.144 1.152.072 2.232.288 1.08.144 1.944.36.936.144 1.368.288l-1.152 5.832q-.792-.288-2.664-.648-1.8-.432-4.68-.432-1.872 0-3.744.432-1.8.36-2.376.504V58h-6.696V22.144q2.376-.864 5.904-1.584 3.528-.792 7.92-.792M362.181 58h-6.696V20.56h6.696zm-3.384-44.208q-1.8 0-3.096-1.152-1.224-1.224-1.224-3.24t1.224-3.168q1.296-1.224 3.096-1.224t3.024 1.224q1.296 1.152 1.296 3.168t-1.296 3.24q-1.224 1.152-3.024 1.152M377.08 20.56h14.184v5.616H377.08v17.28q0 2.808.432 4.68.432 1.8 1.296 2.88a4.8 4.8 0 0 0 2.16 1.44q1.296.432 3.024.432 3.024 0 4.824-.648 1.872-.72 2.592-1.008l1.296 5.544q-1.008.504-3.528 1.224-2.52.792-5.76.792-3.816 0-6.336-.936-2.448-1.008-3.96-2.952t-2.16-4.752q-.576-2.88-.576-6.624V10.12l6.696-1.152z' />
      <path d='M392.513 64.984q.792.36 2.016.648 1.296.36 2.52.36 3.96 0 6.192-1.8 2.232-1.728 4.032-5.688-4.536-8.64-8.496-18.288a165 165 0 0 1-6.48-19.656h7.2q.792 3.24 1.872 6.984a238 238 0 0 0 2.52 7.704q1.368 3.96 2.952 7.92t3.312 7.632a192 192 0 0 0 4.752-14.976 394 394 0 0 0 3.816-15.264h6.912a291 291 0 0 1-5.76 20.376q-3.168 9.72-6.84 18.216-1.44 3.24-3.024 5.544-1.512 2.376-3.384 3.888a12.4 12.4 0 0 1-4.248 2.232q-2.304.72-5.256.72-.792 0-1.656-.144a11 11 0 0 1-1.728-.288 14 14 0 0 1-1.512-.36 8 8 0 0 1-.936-.36z' />
    </g>
    <defs>
      <clipPath id='05a48f1a2b00e940b2a1691eaf1bf8c9__a'>
        <path fill='#fff' d='M0 0h426v72H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(SubBrandBlackDerivSecurityIcon);
export default ForwardRef;
