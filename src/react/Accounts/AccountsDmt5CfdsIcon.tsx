import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const AccountsDmt5CfdsIcon = (
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
    <g clipPath='url(#17297395082029ce5ebafcd7e421f8e2__a)'>
      <path fill='#0364B9' d='M26 0H6a6 6 0 0 0-6 6v17.5h32V6a6 6 0 0 0-6-6' />
      <path
        fill='#0A559E'
        d='M6 0a6 6 0 0 0-6 6v.174l29.914-4.721A5.98 5.98 0 0 0 26 0zM32 6c0-1.504-.553-2.88-1.468-3.933L26.602 23.5H32z'
      />
      <path fill='#FF8C00' d='M0 23h32v3a6 6 0 0 1-6 6H6a6 6 0 0 1-6-6z' />
      <path
        fill='#fff'
        d='M7.346 9.684q.216.396.492.984.288.576.588 1.26.312.672.612 1.38l.564 1.332.564-1.332q.3-.708.6-1.38.312-.684.588-1.26.288-.588.504-.984h1.704q.12.828.216 1.86.108 1.02.18 2.136.084 1.104.144 2.22.072 1.116.12 2.1h-1.824q-.036-1.212-.096-2.64t-.18-2.88a518 518 0 0 1-1.008 2.34 109 109 0 0 1-.9 2.124H8.906q-.168-.396-.408-.948-.24-.564-.504-1.176-.252-.612-.516-1.224l-.48-1.116q-.12 1.452-.18 2.88T6.722 18H4.898q.048-.984.108-2.1l.144-2.22q.084-1.116.18-2.136.108-1.032.228-1.86zM21.359 9.684v1.596H18.85V18h-1.872v-6.72H14.47V9.684zM25.322 15.552a1.2 1.2 0 0 0-.156-.612q-.156-.276-.54-.456t-1.032-.276a11.5 11.5 0 0 0-1.632-.096q.132-1.116.216-2.268t.132-2.16h4.5v1.5h-3q-.024.432-.06.84-.024.396-.06.696 1.752.12 2.58.828.84.696.84 1.944 0 .576-.204 1.068t-.612.852a2.9 2.9 0 0 1-1.032.564q-.612.204-1.44.204-.324 0-.684-.048a6 6 0 0 1-.684-.108 7 7 0 0 1-.588-.132 2.3 2.3 0 0 1-.408-.144l.324-1.476q.3.132.792.264.492.12 1.176.12.828 0 1.2-.324.372-.336.372-.78M11.014 29.669q-1.014 0-1.548-.564-.528-.564-.528-1.602 0-.516.162-.918.162-.408.444-.684.282-.282.672-.426t.846-.144q.264 0 .48.042.216.036.378.09a1.7 1.7 0 0 1 .426.186l-.27.756a2.3 2.3 0 0 0-.45-.174 2.1 2.1 0 0 0-.576-.072q-.216 0-.426.072a1 1 0 0 0-.366.234q-.156.156-.252.408a1.7 1.7 0 0 0-.096.612q0 .288.06.54.066.246.204.426.144.18.372.288.228.102.552.102.204 0 .366-.024t.288-.054a2 2 0 0 0 .222-.078l.174-.078.258.75q-.198.12-.558.216t-.834.096M13.009 29.585v-4.158h2.784v.786h-1.848v.87h1.644v.786h-1.644v1.716zM17.39 28.823l.15.012h.21q.702 0 1.038-.354.342-.354.342-.978 0-.654-.324-.99t-1.026-.336q-.096 0-.198.006-.102 0-.192.012zm2.706-1.32q0 .54-.168.942a1.7 1.7 0 0 1-.48.666 2 2 0 0 1-.75.396 3.5 3.5 0 0 1-.996.132q-.252 0-.588-.024a4.5 4.5 0 0 1-.66-.084v-4.05q.324-.06.672-.078.354-.024.606-.024.534 0 .966.12.438.12.75.378t.48.66.168.966M21.724 28.943q.246 0 .348-.048t.102-.186q0-.108-.132-.186a2.3 2.3 0 0 0-.402-.186 5 5 0 0 1-.384-.162 1.2 1.2 0 0 1-.288-.198.85.85 0 0 1-.186-.282 1 1 0 0 1-.066-.39q0-.444.33-.702t.906-.258q.288 0 .552.054.264.048.42.108l-.156.696a3 3 0 0 0-.342-.096 1.8 1.8 0 0 0-.408-.042q-.42 0-.42.234 0 .054.018.096a.2.2 0 0 0 .072.084q.054.036.144.084.096.042.24.096.294.108.486.216.192.102.3.228.114.12.156.27.048.15.048.348 0 .468-.354.708-.348.24-.99.24-.42 0-.702-.072a3 3 0 0 1-.384-.12l.15-.726q.228.09.468.144.24.048.474.048'
      />
    </g>
    <defs>
      <clipPath id='17297395082029ce5ebafcd7e421f8e2__a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(AccountsDmt5CfdsIcon);
export default ForwardRef;
