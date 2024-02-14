import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const DerivLightIntegrityIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 120 152'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g clipPath='url(#a86d764492cc2ac23342c6cc91da0dbd__a)'>
      <path
        fill='#FF444F'
        d='M46.156 66.479q-4.824-5.41-9.643-10.82a29 29 0 0 1-.887-1.089c-.557-.72-1.547-2.01-2.48-3.791a22.8 22.8 0 0 1-1.917-5.103 22.5 22.5 0 0 1-.645-4.557 21 21 0 0 1 0-1.473l-.021-13.883q5.004 5.7 10.004 11.403c-.051 2.768-.158 9.571 0 14.56.017.54.052 1.487.222 2.723.494 3.574 1.657 6.138 1.997 6.857a22.7 22.7 0 0 0 3.37 5.173'
      />
      <path
        fill='#000'
        d='M46.157 66.764a.28.28 0 0 1-.213-.095q-4.823-5.41-9.643-10.82c-.211-.247-.53-.626-.9-1.105-.501-.648-1.545-1.997-2.507-3.834a23 23 0 0 1-1.941-5.167 23 23 0 0 1-.653-4.616 22 22 0 0 1 0-1.493l-.021-13.872c0-.12.072-.226.184-.268a.29.29 0 0 1 .316.079q5.003 5.7 10.004 11.403a.28.28 0 0 1 .071.194c-.077 4.189-.141 10.112 0 14.546.015.465.046 1.434.219 2.693.443 3.204 1.426 5.618 1.973 6.774a22.3 22.3 0 0 0 3.327 5.107.285.285 0 0 1-.216.473zM30.85 26.523l.02 13.123c-.017.505-.017.981 0 1.463.049 1.451.269 3.007.636 4.498a22.6 22.6 0 0 0 1.893 5.039c.938 1.793 1.924 3.066 2.452 3.75.363.468.676.84.879 1.078q3.225 3.623 6.459 7.248a23 23 0 0 1-.662-1.293c-.56-1.185-1.568-3.66-2.021-6.94-.177-1.29-.209-2.279-.225-2.753-.14-4.407-.078-10.276-.002-14.464l-9.43-10.75z'
      />
      <path
        fill='#FF535E'
        d='M85.924 40.796c-.083 1.496-.207 3.058-.584 5.001-.154.793-.723 3.569-2.219 7.099-.374.884-1.997 4.626-5.244 8.956-3.816 5.088-7.671 8.054-8.711 8.832a41 41 0 0 1-5.87 3.67c-2.465-.09-6.218-.58-10.205-2.581-3.277-1.643-5.318-3.607-5.868-4.154a19 19 0 0 1-.973-1.033l-.094-.107a22.7 22.7 0 0 1-3.37-5.173c-.34-.719-1.503-3.283-1.998-6.857a25 25 0 0 1-.22-2.723c-.16-4.989-.052-11.792 0-14.56a41.2 41.2 0 0 0 10.136-3.309 41.5 41.5 0 0 0 12.522-9.227 27.7 27.7 0 0 0 9.368 3.07c5.973.82 10.779-.53 13.257-1.426.377 6.913.228 11.763.073 14.522'
      />
      <path
        fill='#000'
        d='M63.296 74.64h-.01c-3.663-.134-7.136-1.013-10.322-2.611-3.004-1.506-5.013-3.283-5.941-4.207a19 19 0 0 1-.987-1.048l-.033-.038-.057-.065a23 23 0 0 1-3.419-5.244c-.56-1.184-1.569-3.66-2.021-6.94-.178-1.29-.209-2.278-.225-2.753-.141-4.445-.078-10.38 0-14.574.003-.136.1-.25.233-.276A41 41 0 0 0 50.581 33.6a41.1 41.1 0 0 0 12.436-9.165.286.286 0 0 1 .346-.057 27.3 27.3 0 0 0 9.271 3.039c4.369.6 8.906.111 13.122-1.412.084-.03.18-.02.254.03s.123.133.127.223c.29 5.326.316 10.223.073 14.553-.093 1.684-.229 3.186-.589 5.04-.435 2.24-1.23 4.782-2.235 7.156-.578 1.364-2.248 4.974-5.279 9.016-3.46 4.614-6.978 7.55-8.769 8.89a41.5 41.5 0 0 1-5.91 3.695.3.3 0 0 1-.13.032zM40.849 37.403c-.076 4.173-.135 9.96.004 14.314.014.466.045 1.435.218 2.693.443 3.204 1.426 5.619 1.973 6.774a22.3 22.3 0 0 0 3.39 5.178l.03.035.175.196q.389.433.785.823c.906.901 2.863 2.631 5.796 4.103 3.09 1.551 6.459 2.408 10.011 2.548a41 41 0 0 0 5.763-3.61c1.766-1.321 5.237-4.218 8.654-8.776 2.993-3.991 4.64-7.551 5.21-8.895 1.338-3.156 1.953-5.767 2.202-7.042.354-1.822.487-3.301.58-4.962.236-4.208.217-8.952-.053-14.11-4.199 1.454-8.696 1.908-13.031 1.312a27.9 27.9 0 0 1-9.272-2.997 41.6 41.6 0 0 1-12.457 9.13 41.5 41.5 0 0 1-9.978 3.287z'
      />
      <path
        fill='#FF7E88'
        d='M85.852 26.274c-2.48.896-7.285 2.246-13.258 1.426a27.7 27.7 0 0 1-9.368-3.07l-1.832-2.077-8.171-9.267a30.5 30.5 0 0 0 12.219 3.065 30.5 30.5 0 0 0 10.46-1.451q4.973 5.687 9.95 11.374'
      />
      <path
        fill='#000'
        d='M76.3 28.237a27.5 27.5 0 0 1-3.744-.254 27.9 27.9 0 0 1-9.466-3.102.3.3 0 0 1-.079-.062l-.915-1.039-.916-1.039-4.086-4.632-4.085-4.633a.285.285 0 0 1-.013-.362.29.29 0 0 1 .353-.084 30.4 30.4 0 0 0 12.104 3.037c3.508.13 6.994-.354 10.361-1.438a.29.29 0 0 1 .303.084l9.95 11.374a.287.287 0 0 1-.118.457 28.5 28.5 0 0 1-9.65 1.695zm-12.893-3.834c2.896 1.557 6 2.57 9.227 3.014 4.233.582 8.623.142 12.726-1.271L75.811 15.23a30.6 30.6 0 0 1-10.378 1.409 31 31 0 0 1-11.1-2.527l3.193 3.62 4.085 4.632.916 1.039.882 1z'
      />
      <path
        fill='#FF7E88'
        d='M63.226 24.63a41.5 41.5 0 0 1-12.522 9.227 41.2 41.2 0 0 1-10.137 3.309q-5-5.702-10.004-11.403a42.7 42.7 0 0 0 11.671-4.14 42.8 42.8 0 0 0 10.989-8.337l8.171 9.267z'
      />
      <path
        fill='#000'
        d='M40.567 37.452a.28.28 0 0 1-.214-.098L30.349 25.952a.286.286 0 0 1 .16-.47A42.3 42.3 0 0 0 42.1 21.37a42.4 42.4 0 0 0 10.916-8.281.286.286 0 0 1 .421.009q2.044 2.315 4.086 4.634l4.086 4.632.916 1.039.915 1.039a.285.285 0 0 1-.005.382 41.6 41.6 0 0 1-12.607 9.29 41.5 41.5 0 0 1-10.208 3.332.3.3 0 0 1-.052.004zm-9.464-11.508 9.571 10.91a41 41 0 0 0 9.907-3.255 41 41 0 0 0 12.259-8.975l-.744-.844-.916-1.039-4.086-4.632q-1.94-2.202-3.88-4.4a42.93 42.93 0 0 1-22.111 12.235'
      />
      <path
        fill='#EBECEE'
        d='M114.604 54.57c-.89.259-2.133.731-3.428 1.634a11.4 11.4 0 0 0-2.946 2.965c-.456.685-1.207 1.838-1.491 3.528a8 8 0 0 0-.102 1.776l-.02 8.591a20 20 0 0 1-.283 3.893c-.098.579-.44 2.407-1.391 4.639-.88 2.064-1.859 3.477-2.602 4.537a31.5 31.5 0 0 1-2.722 3.349c-1.39 1.515-1.978 1.908-3.63 3.528-1.369 1.343-2.258 2.34-3.712 3.973-1.771 1.991-2.923 3.424-5.001 6.01a91 91 0 0 0-2.905 3.813c-1.261 1.75-1.645 2.417-1.975 3.105a14.6 14.6 0 0 0-1.17 3.509 14.2 14.2 0 0 0-.257 2.966l.004 8.047-18.249-20.794v-7.072a17 17 0 0 1 0-1.614c.046-.953.143-2.723.902-4.651.347-.885.738-1.503 1.518-2.743.779-1.235 1.294-1.867 2.529-3.523 1.761-2.363 1.558-2.21 2.487-3.416 1.314-1.707 2.344-2.824 4.154-4.786a151 151 0 0 1 4.41-4.571c2.93-2.93 2.885-2.693 3.833-3.819a26.5 26.5 0 0 0 3.724-5.795c.853-1.823 1.24-3.218 1.33-3.549.405-1.487.542-2.676.633-3.483.154-1.377.18-2.568.162-3.495q.012-4.081.027-8.162c.035-.534.13-1.277.39-2.124.681-2.23 2.014-3.6 2.554-4.142 1.86-1.865 3.952-2.567 4.989-2.837z'
      />
      <path
        fill='#000'
        d='M80.974 124.719a.28.28 0 0 1-.214-.098L62.51 103.827a.28.28 0 0 1-.071-.188v-7.072a17 17 0 0 1 0-1.627c.043-.889.131-2.736.921-4.743.353-.898.742-1.517 1.518-2.75l.025-.041c.622-.985 1.083-1.599 1.849-2.618.206-.272.433-.575.693-.924a80 80 0 0 0 1.601-2.207c.26-.371.449-.64.889-1.211 1.327-1.723 2.397-2.883 4.17-4.806 1.915-2.079 3.544-3.706 4.418-4.58 1.343-1.343 2.063-2.023 2.539-2.473.563-.531.773-.73 1.277-1.329a26.2 26.2 0 0 0 3.684-5.732c.75-1.605 1.144-2.883 1.313-3.503.403-1.482.536-2.66.624-3.44.129-1.15.183-2.314.16-3.457q.012-4.09.028-8.169v-.019c.05-.745.185-1.482.4-2.188.718-2.347 2.154-3.786 2.627-4.26 1.757-1.763 3.752-2.557 5.118-2.912a.29.29 0 0 1 .286.088l18.239 20.713a.29.29 0 0 1 .06.268.29.29 0 0 1-.195.194c-1.203.35-2.328.886-3.344 1.595-1.131.785-2.151 1.811-2.871 2.888-.408.614-1.169 1.757-1.448 3.417a8 8 0 0 0-.097 1.713v.016l-.02 8.591a20.3 20.3 0 0 1-.287 3.94 21.6 21.6 0 0 1-1.41 4.703c-.91 2.135-1.946 3.612-2.63 4.589-1.128 1.61-2.141 2.715-2.746 3.377-.857.934-1.401 1.436-2.09 2.071-.427.393-.91.84-1.551 1.468-1.367 1.34-2.244 2.325-3.699 3.958-1.763 1.981-2.905 3.403-4.98 5.983l-.012.016a90 90 0 0 0-2.896 3.801c-1.217 1.689-1.612 2.356-1.95 3.063a14.5 14.5 0 0 0-1.147 3.44c-.185.956-.27 1.933-.252 2.906l.004 8.053a.287.287 0 0 1-.284.285zM63.01 103.531l17.677 20.143-.004-7.287a14.5 14.5 0 0 1 .263-3.02 15 15 0 0 1 1.192-3.577c.353-.737.76-1.426 2.002-3.149a92 92 0 0 1 2.913-3.824l.013-.016c2.08-2.587 3.225-4.013 4.998-6.005 1.462-1.642 2.345-2.633 3.725-3.988.647-.634 1.134-1.082 1.562-1.48.679-.627 1.216-1.12 2.056-2.038.596-.652 1.593-1.74 2.7-3.32.672-.959 1.686-2.406 2.573-4.486a21 21 0 0 0 1.373-4.574c.217-1.266.311-2.556.278-3.837l.02-8.592a8.5 8.5 0 0 1 .106-1.83c.299-1.78 1.103-2.988 1.536-3.638.76-1.136 1.833-2.216 3.02-3.042a12 12 0 0 1 3.086-1.541q-8.917-10.125-17.83-20.249c-1.29.359-3.095 1.117-4.69 2.718-.446.448-1.806 1.812-2.482 4.022a9 9 0 0 0-.377 2.052l-.027 8.151a27 27 0 0 1-.163 3.527c-.09.797-.227 2.002-.642 3.526-.172.637-.578 1.952-1.347 3.594a26.8 26.8 0 0 1-3.764 5.859c-.526.623-.758.844-1.323 1.376-.474.447-1.19 1.123-2.527 2.461-.871.871-2.493 2.493-4.401 4.563-1.823 1.976-2.828 3.063-4.139 4.766-.433.561-.617.825-.873 1.191a82 82 0 0 1-1.611 2.222c-.26.348-.489.652-.695.925-.757 1.007-1.214 1.615-1.82 2.579l-.027.041c-.755 1.202-1.135 1.804-1.468 2.654-.756 1.92-.842 3.705-.882 4.562a17 17 0 0 0 0 1.587v6.977z'
      />
      <path
        fill='#fff'
        d='M114.604 54.57v61.754l-33.631 8.109-.004-8.047c-.015-.773.03-1.793.257-2.966.114-.587.411-1.927 1.17-3.509.33-.688.714-1.355 1.975-3.105a91 91 0 0 1 2.905-3.813c2.078-2.586 3.23-4.019 5.001-6.01 1.454-1.633 2.343-2.63 3.712-3.973 1.652-1.62 2.24-2.013 3.63-3.529a31.5 31.5 0 0 0 2.722-3.348c.743-1.06 1.722-2.473 2.602-4.537.951-2.232 1.293-4.06 1.391-4.639.266-1.544.309-2.88.283-3.893l.02-8.591a8 8 0 0 1 .102-1.776c.284-1.69 1.035-2.843 1.491-3.528a11.4 11.4 0 0 1 2.946-2.965 11.7 11.7 0 0 1 3.428-1.634'
      />
      <path
        fill='#000'
        d='M80.973 124.719a.286.286 0 0 1-.286-.286l-.004-8.047c-.019-1.007.07-2.026.263-3.02a15 15 0 0 1 1.193-3.577c.352-.738.76-1.426 2.001-3.149a92 92 0 0 1 2.913-3.824l.013-.016c2.08-2.587 3.225-4.013 4.998-6.006 1.462-1.641 2.345-2.633 3.725-3.987.647-.634 1.134-1.083 1.562-1.48.679-.627 1.216-1.121 2.056-2.038.596-.652 1.593-1.74 2.7-3.32.672-.959 1.686-2.406 2.573-4.486a21 21 0 0 0 1.373-4.574c.217-1.266.311-2.556.278-3.838l.02-8.591a8.5 8.5 0 0 1 .106-1.83c.299-1.78 1.103-2.989 1.536-3.639.76-1.135 1.833-2.215 3.02-3.041a12 12 0 0 1 3.511-1.674.284.284 0 0 1 .366.274v61.754c0 .132-.09.247-.219.277L81.04 124.71a.3.3 0 0 1-.067.009m33.346-69.762a11.4 11.4 0 0 0-2.98 1.481c-1.132.786-2.152 1.812-2.872 2.89-.407.613-1.168 1.756-1.447 3.416a8 8 0 0 0-.097 1.713v.016l-.02 8.591a20.3 20.3 0 0 1-.287 3.94 21.7 21.7 0 0 1-1.41 4.703c-.91 2.134-1.946 3.612-2.63 4.589-1.129 1.61-2.142 2.715-2.746 3.377-.857.934-1.401 1.436-2.09 2.071-.427.393-.91.84-1.551 1.467-1.368 1.342-2.245 2.326-3.699 3.959-1.763 1.981-2.906 3.403-4.98 5.983l-.013.016a90 90 0 0 0-2.896 3.801c-1.217 1.689-1.611 2.356-1.95 3.063a14.5 14.5 0 0 0-1.147 3.44c-.184.956-.27 1.933-.251 2.906l.004 7.69 33.06-7.972V54.954z'
      />
      <path
        fill='#EBECEE'
        d='M53.494 113.713c-.677-.586-1.618-1.286-3.287-2.531-3.247-2.423-3.453-2.589-4.194-3.066a48 48 0 0 0-3.612-2.097c-2.028-1.057-2.587-1.153-4.134-2.117-.963-.602-1.717-1.072-2.581-1.916-1.197-1.172-1.843-2.317-2.359-3.247-.464-.838-1.031-1.877-1.393-3.349-.257-1.053-.34-2.04-.383-2.581a19 19 0 0 1-.06-1.593q.002-.693.006-1.384c.174.152.439.381.76.658 1.709 1.462 2.353 1.906 3.227 2.689a21 21 0 0 1 2.084 2.151z'
      />
      <path
        fill='#000'
        d='M53.494 113.999a.3.3 0 0 1-.187-.07c-.647-.56-1.52-1.212-3.107-2.396l-1.332-.994c-2.152-1.609-2.378-1.776-3.01-2.183a48 48 0 0 0-3.588-2.084c-.814-.425-1.384-.69-1.889-.926-.741-.346-1.327-.619-2.264-1.203-.981-.613-1.747-1.091-2.63-1.954-1.25-1.223-1.92-2.432-2.409-3.313-.44-.793-1.042-1.88-1.42-3.419-.27-1.104-.35-2.133-.39-2.627a20 20 0 0 1-.06-1.616q0-.691.005-1.385a.286.286 0 0 1 .474-.213c.174.153.437.38.759.657.86.736 1.457 1.219 1.935 1.606.479.387.858.694 1.296 1.085.74.662 1.45 1.396 2.111 2.18l15.923 18.38a.285.285 0 0 1-.217.473zM31.78 90.456q0 .38-.003.761c-.001.527.019 1.055.059 1.569.038.48.117 1.477.375 2.536.36 1.465.942 2.512 1.366 3.278.471.852 1.119 2.017 2.309 3.182.838.818 1.581 1.282 2.521 1.87.919.572 1.49.838 2.214 1.177a43 43 0 0 1 1.912.937c.691.36 2.081 1.114 3.634 2.11.649.417.876.587 3.043 2.206l1.331.994q.446.331.819.611l-14.009-16.17a21 21 0 0 0-2.058-2.125c-.427-.383-.8-.685-1.274-1.068-.482-.39-1.082-.875-1.949-1.617l-.291-.251z'
      />
      <path
        fill='#EBECEE'
        d='M30.024 78.106a6 6 0 0 0-1.377-1.139c-1.238-.747-2.403-.826-2.964-.857a7 7 0 0 0-2.169.221Q14.402 65.958 5.286 55.586a6 6 0 0 1 1.681-.249c.749-.006 1.3.131 1.814.261.613.156 1.48.436 2.462.97z'
      />
      <path
        fill='#000'
        d='M30.026 78.391a.28.28 0 0 1-.213-.095A5.8 5.8 0 0 0 28.5 77.21c-1.203-.725-2.345-.79-2.832-.817a6.7 6.7 0 0 0-2.08.213.29.29 0 0 1-.288-.087L5.073 55.774a.286.286 0 0 1 .133-.463 6.3 6.3 0 0 1 1.76-.26c.795-.005 1.374.14 1.885.27.869.22 1.719.556 2.528.995q.046.023.078.063l1.967 2.255 16.814 19.283a.286.286 0 0 1-.214.473zm-4.73-2.578q.2 0 .404.011c.441.025 1.377.077 2.441.556L12.996 59.011l-1.933-2.217a10.4 10.4 0 0 0-2.35-.918c-.479-.122-1.016-.259-1.742-.253q-.588.004-1.16.124l17.806 20.264a7.3 7.3 0 0 1 1.681-.198z'
      />
      <path
        fill='#CED0D6'
        d='M23.514 76.331q-.003 30.899-.01 61.795L5.313 117.343q-.013-30.88-.027-61.757 9.116 10.372 18.228 20.745'
      />
      <path
        fill='#000'
        d='M23.506 138.411a.29.29 0 0 1-.216-.097L5.099 117.531a.28.28 0 0 1-.072-.188Q5.015 86.463 5 55.586a.287.287 0 0 1 .5-.189q9.115 10.372 18.229 20.746a.28.28 0 0 1 .071.188v5.149l-.01 56.646a.287.287 0 0 1-.286.285zM5.599 117.236l17.62 20.13q.006-27.942.008-55.886v-5.041Q14.401 66.39 5.571 56.343l.028 60.891z'
      />
      <path
        fill='#fff'
        d='M57.206 122.839q-.051 3.59-.102 7.18l-33.6 8.107q.007-30.896.01-61.795a7 7 0 0 1 2.169-.221c.561.031 1.726.11 2.964.857a6.1 6.1 0 0 1 1.49 1.267c.289.342.567.75.79 1.233.487 1.059.546 2.107.585 2.794.018.339.017.623.01.826q-.014 3.373-.025 6.744l-.006 1.385c0 .401.01.948.06 1.593.043.54.126 1.528.383 2.58.362 1.472.929 2.512 1.393 3.35.516.93 1.162 2.075 2.359 3.247.864.844 1.618 1.314 2.581 1.915 1.547.965 2.106 1.06 4.134 2.118.43.224 1.912 1.005 3.612 2.097.741.477.947.643 4.194 3.065 1.669 1.246 2.61 1.946 3.287 2.532.485.42.832.78 1.21 1.24.729.883 1.185 1.654 1.513 2.38.453.997.632 1.828.736 2.33.16.758.313 1.848.253 3.176'
      />
      <path
        fill='#000'
        d='M23.504 138.411a.286.286 0 0 1-.286-.285q.007-28.322.01-56.646v-5.149c0-.13.09-.242.213-.275a7.2 7.2 0 0 1 2.258-.23c.53.03 1.772.1 3.095.897a6.4 6.4 0 0 1 1.562 1.328c.338.402.618.838.83 1.298.51 1.107.57 2.184.61 2.897.02.37.017.667.01.853v.571a4368 4368 0 0 0-.03 7.549c-.002.527.018 1.054.058 1.568.039.48.117 1.477.376 2.536.36 1.466.941 2.513 1.366 3.278.471.852 1.118 2.018 2.308 3.182.839.818 1.582 1.283 2.522 1.87.918.573 1.49.838 2.214 1.177a43 43 0 0 1 1.912.937c.69.36 2.08 1.114 3.634 2.11.648.417.876.587 3.043 2.206l1.331.994c1.597 1.192 2.476 1.849 3.139 2.422.482.418.843.788 1.244 1.274.674.817 1.167 1.594 1.553 2.444.476 1.049.657 1.922.755 2.39a13 13 0 0 1 .26 3.242l-.102 7.175a.29.29 0 0 1-.219.275l-.773.187q-16.413 3.96-32.827 7.92a.3.3 0 0 1-.067.008zm.296-61.855v4.925l-.01 56.283 32.474-7.835.559-.135.099-6.958v-.009c.047-1.056-.036-2.1-.248-3.104-.093-.447-.265-1.28-.715-2.272-.363-.802-.832-1.538-1.473-2.315-.379-.46-.72-.81-1.177-1.206-.648-.559-1.52-1.211-3.106-2.396l-1.332-.994c-2.152-1.609-2.378-1.776-3.01-2.183a48 48 0 0 0-3.588-2.084c-.814-.424-1.384-.69-1.889-.926-.741-.346-1.327-.618-2.264-1.203-.981-.613-1.747-1.091-2.63-1.954-1.25-1.223-1.92-2.431-2.409-3.313-.44-.793-1.042-1.88-1.42-3.418-.27-1.105-.35-2.133-.39-2.628a20 20 0 0 1-.06-1.615q0-.692.005-1.386l.021-6.164.003-.58a9 9 0 0 0-.01-.809c-.037-.67-.094-1.681-.558-2.69a5.1 5.1 0 0 0-.853-1.287 5.8 5.8 0 0 0-1.316-1.089c-1.203-.725-2.346-.79-2.833-.817a6.6 6.6 0 0 0-1.867.16z'
      />
    </g>
    <defs>
      <clipPath id='a86d764492cc2ac23342c6cc91da0dbd__a'>
        <path fill='#fff' d='M0 0h120v152H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(DerivLightIntegrityIcon);
export default ForwardRef;
