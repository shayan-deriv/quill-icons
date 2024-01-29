import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SubBrandDerivTechWhiteIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 302 60'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g fill='#fff'>
      <path d='m35.019 1.829-2.99 16.955H21.65c-9.682 0-18.91 7.845-20.621 17.527l-.724 4.12c-1.703 9.683 4.757 17.528 14.44 17.528H23.4c7.057 0 13.78-5.713 15.02-12.77L46.394 0zM27.655 43.59c-.382 2.18-2.345 3.954-4.525 3.954h-5.259c-4.351 0-7.263-3.533-6.5-7.893l.454-2.57c.772-4.351 4.925-7.892 9.276-7.892h9.093zm87.291 14.367 6.81-38.634h10.773l-6.811 38.634h-10.78zm1.165-38.188-1.622 9.193c-5.103-1.586-10.369-1.081-11.986-.759q-2.621 14.881-5.246 29.764h-10.78l6.465-36.648c3.506-1.452 12.116-4.399 23.169-1.55m-43.676-.993h-8.386c-8.17 0-15.959 6.62-17.4 14.79l-1.694 9.603c-1.44 8.17 4.01 14.79 12.18 14.79h17.838l1.83-10.382H60.039c-2.72 0-4.542-2.204-4.057-4.933l.056-.326h27.026l1.544-8.752c1.44-8.17-4.01-14.79-12.181-14.79zm1.36 13.963-.063.557H57.66l.087-.493c.486-2.721 2.968-5.116 5.697-5.116h6.277c2.697 0 4.52 2.355 4.073 5.052M174.56 19.324c-3.672 9.763-12.087 26.371-20.24 38.634h-10.78c-3.742-11.671-6.158-27.933-6.619-38.634h10.78c.195 3.49 1.758 16.438 3.541 25.483 4.891-8.8 10.283-20.345 12.53-25.483zM186.951 59.007c-3.713 0-6.49-.817-8.322-2.449q-2.753-2.457-3.039-7.135-.189-3.046.56-7.8l5.914-33.066 7.134-1.185-2.16 11.96h13.15l-1.055 5.798h-13.15l-3.037 17.086q-.675 3.492-.517 6.095c.101 1.632.621 2.811 1.556 3.525q1.404 1.078 4.523 1.076c1.436 0 2.833-.23 4.192-.701q2.037-.71 3.115-1.3l.881 5.865q-1.075.67-3.699 1.45-2.627.78-6.046.78m29.64-.073c-2.524 0-4.729-.363-6.602-1.076q-2.82-1.08-4.79-2.975a12.8 12.8 0 0 1-3.02-4.42 16.5 16.5 0 0 1-1.221-5.35q-.32-5.198.943-10.031 1.262-4.826 3.93-8.543a19.85 19.85 0 0 1 6.696-5.908q4.024-2.187 9.3-2.188 3.046 0 5.287.78 2.238.781 3.695 2.116a9.3 9.3 0 0 1 2.233 3.083c.519 1.167.813 2.364.89 3.604q.215 3.494-.898 5.907a11.4 11.4 0 0 1-3.094 4.051q-1.982 1.633-4.712 2.521a40 40 0 0 1-5.708 1.415 56 56 0 0 1-6.048.707c-2.049.121-3.985.236-5.811.333-.028.393-.032.72-.016.968l.036.592a12.7 12.7 0 0 0 .607 3.229 6.54 6.54 0 0 0 1.688 2.678q1.186 1.15 3.196 1.82c1.339.447 3.073.665 5.204.665q1.41.002 2.919-.26a23 23 0 0 0 2.856-.665 34 34 0 0 0 2.401-.816c.7-.272 1.195-.532 1.476-.78l.956 5.865q-1.437.823-4.687 1.747c-2.166.617-4.734.931-7.706.931m-8.363-21.252q4.298-.147 7.841-.556 3.54-.41 6.077-1.41c1.694-.67 2.987-1.571 3.884-2.714q1.342-1.707 1.174-4.456a4.5 4.5 0 0 0-.347-1.415c-.205-.49-.53-.95-.976-1.372-.446-.418-1.051-.768-1.809-1.04q-1.142-.406-2.775-.405c-1.733 0-3.333.368-4.799 1.112a13.6 13.6 0 0 0-3.868 2.933q-1.67 1.824-2.786 4.238a21.6 21.6 0 0 0-1.616 5.085m28.926 6.463q-.311-5.05.922-9.728 1.237-4.682 3.989-8.247c1.833-2.376 4.144-4.275 6.933-5.684q4.178-2.122 9.748-2.122 2.453.002 4.704.339c1.498.223 2.936.653 4.312 1.3l-2.243 5.792c-.819-.442-1.769-.792-2.848-1.04q-1.623-.37-4.147-.369-3.64 0-6.44 1.596a14.55 14.55 0 0 0-4.68 4.233q-1.882 2.639-2.745 6.094-.866 3.454-.638 7.171.119 1.933.632 3.64a8.2 8.2 0 0 0 1.636 3.01q1.119 1.3 2.91 2.044c1.195.496 2.685.738 4.466.738q1.336.002 2.807-.26a23.3 23.3 0 0 0 4.929-1.409q.978-.408 1.4-.78l.957 5.871q-1.358.889-4.277 1.742-2.918.86-6.707.858c-2.379 0-4.505-.363-6.381-1.076q-2.819-1.08-4.795-3.047-1.98-1.968-3.111-4.68t-1.333-5.986m30.344 13.822L277.619 1.5l7.135-1.185-3.554 19.536a26 26 0 0 1 3.544-.962 19.5 19.5 0 0 1 3.804-.375q3.343-.001 5.814.931 2.473.925 4.058 2.522 1.582 1.605 2.429 3.863.844 2.269 1.009 4.946c.134 2.177-.062 4.655-.584 7.425l-3.539 19.765h-6.908l3.259-18.278c.26-1.385.508-2.8.741-4.232.235-1.44.311-2.8.232-4.088-.122-1.983-.767-3.627-1.94-4.94q-1.755-1.968-6.212-1.97c-1.188 0-2.406.115-3.656.332-1.25.224-2.283.538-3.102.931l-5.743 32.245z' />
    </g>
    <defs>
      <clipPath id='053c51d85ca7950ffb5685f38143e292__a'>
        <path fill='#fff' d='M0 0h302v60H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(SubBrandDerivTechWhiteIcon);
export default ForwardRef;
