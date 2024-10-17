import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const PaymentMethodPaymeroWhiteIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 128 80'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <mask
      id='df8859c2fad5efaae05ad79e915774eb__a'
      width={94}
      height={16}
      x={30.846}
      y={32.128}
      fill='#000'
      maskUnits='userSpaceOnUse'
    >
      <path fill='#fff' d='M30.846 32.128h94v16h-94z' />
      <path d='M31.847 46.732a.465.465 0 0 0 .49.49.42.42 0 0 0 .332-.14.53.53 0 0 0 .132-.35v-5.358c.247.346.538.658.866.928q.46.426 1.016.718.569.288 1.182.464c.42.108.852.164 1.286.166a5.2 5.2 0 0 0 4.806-3.212 4.95 4.95 0 0 0 .412-2.023c0-.719-.156-1.43-.455-2.083a5.18 5.18 0 0 0-4.806-3.204 5 5 0 0 0-1.313.166c-.42.106-.824.268-1.2.482q-.556.306-1.024.735-.449.458-.78 1.007l-.07-1.75a.9.9 0 0 0-.165-.342.31.31 0 0 0-.28-.14.34.34 0 0 0-.307.14.65.65 0 0 0-.079.35v12.956zm1.313-9.98c.204-.506.5-.969.875-1.365a4.22 4.22 0 0 1 3.029-1.252c.58-.002 1.154.11 1.69.332.504.212.96.525 1.339.92.379.393.676.857.875 1.365.218.53.328 1.099.324 1.672a4.2 4.2 0 0 1-.324 1.646 4.5 4.5 0 0 1-.875 1.366 4.4 4.4 0 0 1-1.34.936 4.05 4.05 0 0 1-1.69.342 3.9 3.9 0 0 1-1.645-.342 4.32 4.32 0 0 1-2.258-2.302 4.2 4.2 0 0 1-.368-1.646 4.3 4.3 0 0 1 .333-1.672zm13.192 3.703c.27.623.652 1.19 1.13 1.672a5.25 5.25 0 0 0 3.693 1.532 5 5 0 0 0 2.46-.639 5.5 5.5 0 0 0 1.042-.744c.31-.275.587-.587.823-.928v1.672a.46.46 0 0 0 .14.35.44.44 0 0 0 .341.14.47.47 0 0 0 .36-.14.57.57 0 0 0 .14-.35v-9.227a.7.7 0 0 0-.088-.359.33.33 0 0 0-.298-.13.32.32 0 0 0-.289.13q-.108.158-.166.342l-.088 1.68a4.3 4.3 0 0 0-.875-.875 5.2 5.2 0 0 0-1.024-.726 5 5 0 0 0-1.19-.473 5.5 5.5 0 0 0-1.288-.201 4.95 4.95 0 0 0-2.022.411 5.3 5.3 0 0 0-1.672 1.12 5.1 5.1 0 0 0-1.13 1.672 5.25 5.25 0 0 0 0 4.071m.875-3.703c.205-.506.501-.969.876-1.365a4.2 4.2 0 0 1 1.357-.92 4.38 4.38 0 0 1 3.352 0 4.23 4.23 0 0 1 2.25 2.285 4.32 4.32 0 0 1 0 3.318 4.38 4.38 0 0 1-2.25 2.302 4 4 0 0 1-1.68.342 3.9 3.9 0 0 1-1.672-.342c-.51-.22-.97-.538-1.357-.936a4.4 4.4 0 0 1-.876-1.366 4.2 4.2 0 0 1-.332-1.646 4 4 0 0 1 .332-1.672m13.657-3.134a.46.46 0 0 0-.184-.219.4.4 0 0 0-.254-.087.52.52 0 0 0-.353.154.48.48 0 0 0-.085.546l4.185 9.113-.088.245q-.265.635-.604 1.235c-.184.32-.41.615-.674.875-.25.242-.548.427-.875.543a3 3 0 0 1-1.12.192h-.307a.5.5 0 0 0-.342.123.5.5 0 0 0-.07.604.32.32 0 0 0 .167.14 1.116 1.116 0 0 0 .481.053c.485.01.968-.065 1.427-.22.4-.153.77-.375 1.094-.656.34-.336.635-.716.876-1.13q.465-.77.814-1.601l.14-.324 4.21-9.166a.5.5 0 0 0-.428-.7.465.465 0 0 0-.438.306l-3.826 8.36zm12.255 9.385a.47.47 0 0 0 .132.358.46.46 0 0 0 .358.132.41.41 0 0 0 .307-.158.56.56 0 0 0 .131-.359V36.56c.03-.321.113-.635.245-.928a2.77 2.77 0 0 1 1.375-1.305c.299-.137.625-.206.954-.201.33-.005.66.06.963.193.296.118.567.294.796.516.228.22.412.482.543.77.141.305.216.636.22.972v6.443a.47.47 0 0 0 .157.341.43.43 0 0 0 .324.132.41.41 0 0 0 .332-.132.46.46 0 0 0 .132-.34v-6.339c.019-.33.099-.653.236-.954.135-.31.331-.59.578-.823.237-.24.515-.437.823-.578s.641-.216.98-.218c.325-.003.647.063.945.192a2.3 2.3 0 0 1 .788.508c.224.222.405.483.534.77.134.3.203.626.202.954v6.47a.43.43 0 0 0 .283.438.48.48 0 0 0 .366-.002.4.4 0 0 0 .147-.104.45.45 0 0 0 .14-.341V36.55a4.3 4.3 0 0 0-.245-1.322 3.7 3.7 0 0 0-.665-1.077 3 3 0 0 0-1.007-.726c-.41-.181-.855-.27-1.304-.263a3.3 3.3 0 0 0-.972.14q-.46.138-.875.385-.417.245-.753.596a4 4 0 0 0-.578.77 4.4 4.4 0 0 0-.49-.77 4.3 4.3 0 0 0-.674-.596 3.1 3.1 0 0 0-.823-.402 3.15 3.15 0 0 0-2.547.306c-.478.28-.878.673-1.165 1.147v-.963a1.3 1.3 0 0 0-.166-.35.35.35 0 0 0-.298-.14.31.31 0 0 0-.306.14.65.65 0 0 0-.079.35v9.227zm27.059-4.141a.4.4 0 0 0 .333-.131.5.5 0 0 0 .122-.333 5.2 5.2 0 0 0-.411-2.031 5.5 5.5 0 0 0-1.12-1.654 5.5 5.5 0 0 0-1.664-1.121 4.95 4.95 0 0 0-2.03-.411 4.9 4.9 0 0 0-2.023.411 5.2 5.2 0 0 0-1.663 1.12 5.4 5.4 0 0 0-1.112 1.62 5.254 5.254 0 0 0 0 4.07 5.25 5.25 0 0 0 2.784 2.802 5.1 5.1 0 0 0 2.022.411 4.9 4.9 0 0 0 2.206-.481 5.3 5.3 0 0 0 1.62-1.208.42.42 0 0 0 .166-.36.56.56 0 0 0-.123-.314.6.6 0 0 0-.21-.175.07.07 0 0 0-.052 0h-.053a.57.57 0 0 0-.359.14 3 3 0 0 1-.613.604 5.6 5.6 0 0 1-.77.464 4.5 4.5 0 0 1-.875.289 4 4 0 0 1-.876.096 4.27 4.27 0 0 1-2.897-1.086 4.5 4.5 0 0 1-.876-1.225 4.2 4.2 0 0 1-.411-1.506h8.885zm-8.964-.78a4.375 4.375 0 0 1 1.27-2.784 3.9 3.9 0 0 1 1.312-.83 4 4 0 0 1 1.602-.307 4.1 4.1 0 0 1 1.594.306c.482.196.927.474 1.313.823.412.333.752.747.998 1.217.237.478.377 1 .411 1.532H91.27zm13.7 4.947a.48.48 0 0 0 .304.466.44.44 0 0 0 .195.024.4.4 0 0 0 .324-.131.53.53 0 0 0 .14-.36v-4.236a4.7 4.7 0 0 1 .324-1.75 4.5 4.5 0 0 1 .875-1.437c.38-.414.842-.745 1.357-.971a4 4 0 0 1 1.672-.36h.105a.47.47 0 0 0 .359-.14.426.426 0 0 0 .14-.341.48.48 0 0 0-.131-.341.5.5 0 0 0-.368-.14h-.105a4.5 4.5 0 0 0-1.383.21 4.2 4.2 0 0 0-1.199.569 4.8 4.8 0 0 0-.954.875 5.6 5.6 0 0 0-.727 1.13l-.088-2.338a1.3 1.3 0 0 0-.157-.35.37.37 0 0 0-.307-.14.31.31 0 0 0-.297.14.65.65 0 0 0-.088.35v9.245zM114.8 36.752a4.4 4.4 0 0 1 .875-1.365 4.1 4.1 0 0 1 1.357-.92 4.3 4.3 0 0 1 1.672-.332 4.3 4.3 0 0 1 1.681.333c.505.21.962.522 1.339.919.382.39.68.855.876 1.365.218.53.328 1.099.323 1.672a4.2 4.2 0 0 1-.323 1.646 4.4 4.4 0 0 1-.876 1.366 4.2 4.2 0 0 1-1.339.936 4 4 0 0 1-1.681.342 3.9 3.9 0 0 1-1.672-.342 4.1 4.1 0 0 1-1.357-.936 4.4 4.4 0 0 1-.875-1.366 4.2 4.2 0 0 1-.324-1.646 4.3 4.3 0 0 1 .324-1.672m-.876 3.703a5.4 5.4 0 0 0 1.156 1.672 5.25 5.25 0 0 0 5.743 1.12 5.1 5.1 0 0 0 1.663-1.12 5.7 5.7 0 0 0 1.112-1.672 5.35 5.35 0 0 0 0-4.07 5.6 5.6 0 0 0-1.112-1.672 5.4 5.4 0 0 0-1.663-1.12 5.26 5.26 0 0 0-5.743 1.12 5.1 5.1 0 0 0-1.121 1.672 5.25 5.25 0 0 0 0 4.07z' />
    </mask>
    <path
      fill='#fff'
      d='M31.847 46.732a.465.465 0 0 0 .49.49.42.42 0 0 0 .332-.14.53.53 0 0 0 .132-.35v-5.358c.247.346.538.658.866.928q.46.426 1.016.718.569.288 1.182.464c.42.108.852.164 1.286.166a5.2 5.2 0 0 0 4.806-3.212 4.95 4.95 0 0 0 .412-2.023c0-.719-.156-1.43-.455-2.083a5.18 5.18 0 0 0-4.806-3.204 5 5 0 0 0-1.313.166c-.42.106-.824.268-1.2.482q-.556.306-1.024.735-.449.458-.78 1.007l-.07-1.75a.9.9 0 0 0-.165-.342.31.31 0 0 0-.28-.14.34.34 0 0 0-.307.14.65.65 0 0 0-.079.35v12.956zm1.313-9.98c.204-.506.5-.969.875-1.365a4.22 4.22 0 0 1 3.029-1.252c.58-.002 1.154.11 1.69.332.504.212.96.525 1.339.92.379.393.676.857.875 1.365.218.53.328 1.099.324 1.672a4.2 4.2 0 0 1-.324 1.646 4.5 4.5 0 0 1-.875 1.366 4.4 4.4 0 0 1-1.34.936 4.05 4.05 0 0 1-1.69.342 3.9 3.9 0 0 1-1.645-.342 4.32 4.32 0 0 1-2.258-2.302 4.2 4.2 0 0 1-.368-1.646 4.3 4.3 0 0 1 .333-1.672zm13.192 3.703c.27.623.652 1.19 1.13 1.672a5.25 5.25 0 0 0 3.693 1.532 5 5 0 0 0 2.46-.639 5.5 5.5 0 0 0 1.042-.744c.31-.275.587-.587.823-.928v1.672a.46.46 0 0 0 .14.35.44.44 0 0 0 .341.14.47.47 0 0 0 .36-.14.57.57 0 0 0 .14-.35v-9.227a.7.7 0 0 0-.088-.359.33.33 0 0 0-.298-.13.32.32 0 0 0-.289.13q-.108.158-.166.342l-.088 1.68a4.3 4.3 0 0 0-.875-.875 5.2 5.2 0 0 0-1.024-.726 5 5 0 0 0-1.19-.473 5.5 5.5 0 0 0-1.288-.201 4.95 4.95 0 0 0-2.022.411 5.3 5.3 0 0 0-1.672 1.12 5.1 5.1 0 0 0-1.13 1.672 5.25 5.25 0 0 0 0 4.071m.875-3.703c.205-.506.501-.969.876-1.365a4.2 4.2 0 0 1 1.357-.92 4.38 4.38 0 0 1 3.352 0 4.23 4.23 0 0 1 2.25 2.285 4.32 4.32 0 0 1 0 3.318 4.38 4.38 0 0 1-2.25 2.302 4 4 0 0 1-1.68.342 3.9 3.9 0 0 1-1.672-.342c-.51-.22-.97-.538-1.357-.936a4.4 4.4 0 0 1-.876-1.366 4.2 4.2 0 0 1-.332-1.646 4 4 0 0 1 .332-1.672m13.657-3.134a.46.46 0 0 0-.184-.219.4.4 0 0 0-.254-.087.52.52 0 0 0-.353.154.48.48 0 0 0-.085.546l4.185 9.113-.088.245q-.265.635-.604 1.235c-.184.32-.41.615-.674.875-.25.242-.548.427-.875.543a3 3 0 0 1-1.12.192h-.307a.5.5 0 0 0-.342.123.5.5 0 0 0-.07.604.32.32 0 0 0 .167.14 1.116 1.116 0 0 0 .481.053c.485.01.968-.065 1.427-.22.4-.153.77-.375 1.094-.656.34-.336.635-.716.876-1.13q.465-.77.814-1.601l.14-.324 4.21-9.166a.5.5 0 0 0-.428-.7.465.465 0 0 0-.438.306l-3.826 8.36zm12.255 9.385a.47.47 0 0 0 .132.358.46.46 0 0 0 .358.132.41.41 0 0 0 .307-.158.56.56 0 0 0 .131-.359V36.56c.03-.321.113-.635.245-.928a2.77 2.77 0 0 1 1.375-1.305c.299-.137.625-.206.954-.201.33-.005.66.06.963.193.296.118.567.294.796.516.228.22.412.482.543.77.141.305.216.636.22.972v6.443a.47.47 0 0 0 .157.341.43.43 0 0 0 .324.132.41.41 0 0 0 .332-.132.46.46 0 0 0 .132-.34v-6.339c.019-.33.099-.653.236-.954.135-.31.331-.59.578-.823.237-.24.515-.437.823-.578s.641-.216.98-.218c.325-.003.647.063.945.192a2.3 2.3 0 0 1 .788.508c.224.222.405.483.534.77.134.3.203.626.202.954v6.47a.43.43 0 0 0 .283.438.48.48 0 0 0 .366-.002.4.4 0 0 0 .147-.104.45.45 0 0 0 .14-.341V36.55a4.3 4.3 0 0 0-.245-1.322 3.7 3.7 0 0 0-.665-1.077 3 3 0 0 0-1.007-.726c-.41-.181-.855-.27-1.304-.263a3.3 3.3 0 0 0-.972.14q-.46.138-.875.385-.417.245-.753.596a4 4 0 0 0-.578.77 4.4 4.4 0 0 0-.49-.77 4.3 4.3 0 0 0-.674-.596 3.1 3.1 0 0 0-.823-.402 3.15 3.15 0 0 0-2.547.306c-.478.28-.878.673-1.165 1.147v-.963a1.3 1.3 0 0 0-.166-.35.35.35 0 0 0-.298-.14.31.31 0 0 0-.306.14.65.65 0 0 0-.079.35v9.227zm27.059-4.141a.4.4 0 0 0 .333-.131.5.5 0 0 0 .122-.333 5.2 5.2 0 0 0-.411-2.031 5.5 5.5 0 0 0-1.12-1.654 5.5 5.5 0 0 0-1.664-1.121 4.95 4.95 0 0 0-2.03-.411 4.9 4.9 0 0 0-2.023.411 5.2 5.2 0 0 0-1.663 1.12 5.4 5.4 0 0 0-1.112 1.62 5.254 5.254 0 0 0 0 4.07 5.25 5.25 0 0 0 2.784 2.802 5.1 5.1 0 0 0 2.022.411 4.9 4.9 0 0 0 2.206-.481 5.3 5.3 0 0 0 1.62-1.208.42.42 0 0 0 .166-.36.56.56 0 0 0-.123-.314.6.6 0 0 0-.21-.175.07.07 0 0 0-.052 0h-.053a.57.57 0 0 0-.359.14 3 3 0 0 1-.613.604 5.6 5.6 0 0 1-.77.464 4.5 4.5 0 0 1-.875.289 4 4 0 0 1-.876.096 4.27 4.27 0 0 1-2.897-1.086 4.5 4.5 0 0 1-.876-1.225 4.2 4.2 0 0 1-.411-1.506h8.885zm-8.964-.78a4.375 4.375 0 0 1 1.27-2.784 3.9 3.9 0 0 1 1.312-.83 4 4 0 0 1 1.602-.307 4.1 4.1 0 0 1 1.594.306c.482.196.927.474 1.313.823.412.333.752.747.998 1.217.237.478.377 1 .411 1.532H91.27zm13.7 4.947a.48.48 0 0 0 .304.466.44.44 0 0 0 .195.024.4.4 0 0 0 .324-.131.53.53 0 0 0 .14-.36v-4.236a4.7 4.7 0 0 1 .324-1.75 4.5 4.5 0 0 1 .875-1.437c.38-.414.842-.745 1.357-.971a4 4 0 0 1 1.672-.36h.105a.47.47 0 0 0 .359-.14.426.426 0 0 0 .14-.341.48.48 0 0 0-.131-.341.5.5 0 0 0-.368-.14h-.105a4.5 4.5 0 0 0-1.383.21 4.2 4.2 0 0 0-1.199.569 4.8 4.8 0 0 0-.954.875 5.6 5.6 0 0 0-.727 1.13l-.088-2.338a1.3 1.3 0 0 0-.157-.35.37.37 0 0 0-.307-.14.31.31 0 0 0-.297.14.65.65 0 0 0-.088.35v9.245zM114.8 36.752a4.4 4.4 0 0 1 .875-1.365 4.1 4.1 0 0 1 1.357-.92 4.3 4.3 0 0 1 1.672-.332 4.3 4.3 0 0 1 1.681.333c.505.21.962.522 1.339.919.382.39.68.855.876 1.365.218.53.328 1.099.323 1.672a4.2 4.2 0 0 1-.323 1.646 4.4 4.4 0 0 1-.876 1.366 4.2 4.2 0 0 1-1.339.936 4 4 0 0 1-1.681.342 3.9 3.9 0 0 1-1.672-.342 4.1 4.1 0 0 1-1.357-.936 4.4 4.4 0 0 1-.875-1.366 4.2 4.2 0 0 1-.324-1.646 4.3 4.3 0 0 1 .324-1.672m-.876 3.703a5.4 5.4 0 0 0 1.156 1.672 5.25 5.25 0 0 0 5.743 1.12 5.1 5.1 0 0 0 1.663-1.12 5.7 5.7 0 0 0 1.112-1.672 5.35 5.35 0 0 0 0-4.07 5.6 5.6 0 0 0-1.112-1.672 5.4 5.4 0 0 0-1.663-1.12 5.26 5.26 0 0 0-5.743 1.12 5.1 5.1 0 0 0-1.121 1.672 5.25 5.25 0 0 0 0 4.07z'
    />
    <path
      stroke='#fff'
      strokeWidth={0.875}
      d='M31.847 46.732a.465.465 0 0 0 .49.49.42.42 0 0 0 .332-.14.53.53 0 0 0 .132-.35v-5.358c.247.346.538.658.866.928q.46.426 1.016.718.569.288 1.182.464c.42.108.852.164 1.286.166a5.2 5.2 0 0 0 4.806-3.212 4.95 4.95 0 0 0 .412-2.023c0-.719-.156-1.43-.455-2.083a5.18 5.18 0 0 0-4.806-3.204 5 5 0 0 0-1.313.166c-.42.106-.824.268-1.2.482q-.556.306-1.024.735-.449.458-.78 1.007l-.07-1.75a.9.9 0 0 0-.165-.342.31.31 0 0 0-.28-.14.34.34 0 0 0-.307.14.65.65 0 0 0-.079.35v12.956zm1.313-9.98c.204-.506.5-.969.875-1.365a4.22 4.22 0 0 1 3.029-1.252c.58-.002 1.154.11 1.69.332.504.212.96.525 1.339.92.379.393.676.857.875 1.365.218.53.328 1.099.324 1.672a4.2 4.2 0 0 1-.324 1.646 4.5 4.5 0 0 1-.875 1.366 4.4 4.4 0 0 1-1.34.936 4.05 4.05 0 0 1-1.69.342 3.9 3.9 0 0 1-1.645-.342 4.32 4.32 0 0 1-2.258-2.302 4.2 4.2 0 0 1-.368-1.646 4.3 4.3 0 0 1 .333-1.672zm13.192 3.703c.27.623.652 1.19 1.13 1.672a5.25 5.25 0 0 0 3.693 1.532 5 5 0 0 0 2.46-.639 5.5 5.5 0 0 0 1.042-.744c.31-.275.587-.587.823-.928v1.672a.46.46 0 0 0 .14.35.44.44 0 0 0 .341.14.47.47 0 0 0 .36-.14.57.57 0 0 0 .14-.35v-9.227a.7.7 0 0 0-.088-.359.33.33 0 0 0-.298-.13.32.32 0 0 0-.289.13q-.108.158-.166.342l-.088 1.68a4.3 4.3 0 0 0-.875-.875 5.2 5.2 0 0 0-1.024-.726 5 5 0 0 0-1.19-.473 5.5 5.5 0 0 0-1.288-.201 4.95 4.95 0 0 0-2.022.411 5.3 5.3 0 0 0-1.672 1.12 5.1 5.1 0 0 0-1.13 1.672 5.25 5.25 0 0 0 0 4.071Zm.875-3.703c.205-.506.501-.969.876-1.365a4.2 4.2 0 0 1 1.357-.92 4.38 4.38 0 0 1 3.352 0 4.23 4.23 0 0 1 2.25 2.285 4.32 4.32 0 0 1 0 3.318 4.38 4.38 0 0 1-2.25 2.302 4 4 0 0 1-1.68.342 3.9 3.9 0 0 1-1.672-.342c-.51-.22-.97-.538-1.357-.936a4.4 4.4 0 0 1-.876-1.366 4.2 4.2 0 0 1-.332-1.646 4 4 0 0 1 .332-1.672Zm13.657-3.134a.46.46 0 0 0-.184-.219.4.4 0 0 0-.254-.087.52.52 0 0 0-.353.154.48.48 0 0 0-.085.546l4.185 9.113-.088.245q-.265.635-.604 1.235c-.184.32-.41.615-.674.875-.25.242-.548.427-.875.543a3 3 0 0 1-1.12.192h-.307a.5.5 0 0 0-.342.123.5.5 0 0 0-.07.604.32.32 0 0 0 .167.14 1.116 1.116 0 0 0 .481.053c.485.01.968-.065 1.427-.22.4-.153.77-.375 1.094-.656.34-.336.635-.716.876-1.13q.465-.77.814-1.601l.14-.324 4.21-9.166a.5.5 0 0 0-.428-.7.465.465 0 0 0-.438.306l-3.826 8.36zm12.255 9.385a.47.47 0 0 0 .132.358.46.46 0 0 0 .358.132.41.41 0 0 0 .307-.158.56.56 0 0 0 .131-.359V36.56c.03-.321.113-.635.245-.928a2.77 2.77 0 0 1 1.375-1.305c.299-.137.625-.206.954-.201.33-.005.66.06.963.193.296.118.567.294.796.516.228.22.412.482.543.77.141.305.216.636.22.972v6.443a.47.47 0 0 0 .157.341.43.43 0 0 0 .324.132.41.41 0 0 0 .332-.132.46.46 0 0 0 .132-.34v-6.339c.019-.33.099-.653.236-.954.135-.31.331-.59.578-.823.237-.24.515-.437.823-.578s.641-.216.98-.218c.325-.003.647.063.945.192a2.3 2.3 0 0 1 .788.508c.224.222.405.483.534.77.134.3.203.626.202.954v6.47a.43.43 0 0 0 .283.438.48.48 0 0 0 .366-.002.4.4 0 0 0 .147-.104.45.45 0 0 0 .14-.341V36.55a4.3 4.3 0 0 0-.245-1.322 3.7 3.7 0 0 0-.665-1.077 3 3 0 0 0-1.007-.726c-.41-.181-.855-.27-1.304-.263a3.3 3.3 0 0 0-.972.14q-.46.138-.875.385-.417.245-.753.596a4 4 0 0 0-.578.77 4.4 4.4 0 0 0-.49-.77 4.3 4.3 0 0 0-.674-.596 3.1 3.1 0 0 0-.823-.402 3.15 3.15 0 0 0-2.547.306c-.478.28-.878.673-1.165 1.147v-.963a1.3 1.3 0 0 0-.166-.35.35.35 0 0 0-.298-.14.31.31 0 0 0-.306.14.65.65 0 0 0-.079.35v9.227zm27.059-4.141a.4.4 0 0 0 .333-.131.5.5 0 0 0 .122-.333 5.2 5.2 0 0 0-.411-2.031 5.5 5.5 0 0 0-1.12-1.654 5.5 5.5 0 0 0-1.664-1.121 4.95 4.95 0 0 0-2.03-.411 4.9 4.9 0 0 0-2.023.411 5.2 5.2 0 0 0-1.663 1.12 5.4 5.4 0 0 0-1.112 1.62 5.254 5.254 0 0 0 0 4.07 5.25 5.25 0 0 0 2.784 2.802 5.1 5.1 0 0 0 2.022.411 4.9 4.9 0 0 0 2.206-.481 5.3 5.3 0 0 0 1.62-1.208.42.42 0 0 0 .166-.36.56.56 0 0 0-.123-.314.6.6 0 0 0-.21-.175.07.07 0 0 0-.052 0h-.053a.57.57 0 0 0-.359.14 3 3 0 0 1-.613.604 5.6 5.6 0 0 1-.77.464 4.5 4.5 0 0 1-.875.289 4 4 0 0 1-.876.096 4.27 4.27 0 0 1-2.897-1.086 4.5 4.5 0 0 1-.876-1.225 4.2 4.2 0 0 1-.411-1.506h8.885zm-8.964-.78a4.375 4.375 0 0 1 1.27-2.784 3.9 3.9 0 0 1 1.312-.83 4 4 0 0 1 1.602-.307 4.1 4.1 0 0 1 1.594.306c.482.196.927.474 1.313.823.412.333.752.747.998 1.217.237.478.377 1 .411 1.532H91.27zm13.7 4.947a.48.48 0 0 0 .304.466.44.44 0 0 0 .195.024.4.4 0 0 0 .324-.131.53.53 0 0 0 .14-.36v-4.236a4.7 4.7 0 0 1 .324-1.75 4.5 4.5 0 0 1 .875-1.437c.38-.414.842-.745 1.357-.971a4 4 0 0 1 1.672-.36h.105a.47.47 0 0 0 .359-.14.426.426 0 0 0 .14-.341.48.48 0 0 0-.131-.341.5.5 0 0 0-.368-.14h-.105a4.5 4.5 0 0 0-1.383.21 4.2 4.2 0 0 0-1.199.569 4.8 4.8 0 0 0-.954.875 5.6 5.6 0 0 0-.727 1.13l-.088-2.338a1.3 1.3 0 0 0-.157-.35.37.37 0 0 0-.307-.14.31.31 0 0 0-.297.14.65.65 0 0 0-.088.35v9.245zM114.8 36.752a4.4 4.4 0 0 1 .875-1.365 4.1 4.1 0 0 1 1.357-.92 4.3 4.3 0 0 1 1.672-.332 4.3 4.3 0 0 1 1.681.333c.505.21.962.522 1.339.919.382.39.68.855.876 1.365.218.53.328 1.099.323 1.672a4.2 4.2 0 0 1-.323 1.646 4.4 4.4 0 0 1-.876 1.366 4.2 4.2 0 0 1-1.339.936 4 4 0 0 1-1.681.342 3.9 3.9 0 0 1-1.672-.342 4.1 4.1 0 0 1-1.357-.936 4.4 4.4 0 0 1-.875-1.366 4.2 4.2 0 0 1-.324-1.646 4.3 4.3 0 0 1 .324-1.672Zm-.876 3.703a5.4 5.4 0 0 0 1.156 1.672 5.25 5.25 0 0 0 5.743 1.12 5.1 5.1 0 0 0 1.663-1.12 5.7 5.7 0 0 0 1.112-1.672 5.35 5.35 0 0 0 0-4.07 5.6 5.6 0 0 0-1.112-1.672 5.4 5.4 0 0 0-1.663-1.12 5.26 5.26 0 0 0-5.743 1.12 5.1 5.1 0 0 0-1.121 1.672 5.25 5.25 0 0 0 0 4.07z'
      mask='url(#df8859c2fad5efaae05ad79e915774eb__a)'
    />
    <path
      fill='#fff'
      stroke='#fff'
      strokeWidth={0.875}
      d='M4.438 37.006c0-5.182 4.119-9.402 9.262-9.564V46.57c-5.143-.162-9.262-4.381-9.262-9.563Zm5.376-9.568a10.48 10.48 0 0 0-5.376 5.376v-5.376zm4.76 19.12V27.453c5.02.295 9 4.459 9 9.552s-3.98 9.257-9 9.551Zm-10.136-5.36a10.45 10.45 0 0 0 9.262 6.247v4.61H4.438z'
    />
  </svg>
);
const ForwardRef = forwardRef(PaymentMethodPaymeroWhiteIcon);
export default ForwardRef;
