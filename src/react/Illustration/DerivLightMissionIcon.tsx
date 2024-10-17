import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const DerivLightMissionIcon = (
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
    <g clipPath='url(#ec95e31a85f749a58a0c00d914434bf5__a)'>
      <path
        fill='#fff'
        d='M92.942 95.368c-11.541 19.989-31.378 31.401-49.756 30.543a39.7 39.7 0 0 1-7.41-1.045 37.8 37.8 0 0 1-10.08-4.018C3.933 108.283-1.24 76.505 14.137 49.87c15.378-26.636 45.487-38.044 67.247-25.48a37 37 0 0 1 3.876 2.57 37.5 37.5 0 0 1 4.757 4.27 39.4 39.4 0 0 1 4.519 5.81c9.912 15.487 9.939 38.353-1.594 58.328'
      />
      <path
        fill='#000'
        d='M45.15 126.239q-.991 0-1.976-.047a40 40 0 0 1-7.462-1.053 38.052 38.052 0 0 1-10.155-4.047c-5.359-3.094-9.815-7.379-13.246-12.737-3.31-5.171-5.53-11.118-6.598-17.674-2.193-13.47.712-28.012 8.182-40.95 7.47-12.94 18.612-22.728 31.373-27.564 6.212-2.353 12.472-3.404 18.604-3.122 6.356.292 12.294 2.007 17.653 5.101a38 38 0 0 1 3.905 2.59 38 38 0 0 1 4.791 4.304 40 40 0 0 1 4.552 5.85c4.968 7.761 7.488 17.319 7.289 27.637-.204 10.564-3.274 21.277-8.877 30.982-5.607 9.712-13.358 17.731-22.413 23.191-8.214 4.951-17.03 7.54-25.622 7.54zM61.924 19.561c-5.439 0-10.965 1.05-16.456 3.131-12.642 4.79-23.682 14.49-31.086 27.318C6.976 62.836 4.094 77.248 6.267 90.59c1.056 6.48 3.248 12.356 6.517 17.461 3.382 5.282 7.773 9.506 13.053 12.554a37.4 37.4 0 0 0 10.007 3.988c2.378.572 4.855.921 7.358 1.039 9.098.425 18.534-2.139 27.284-7.414 8.974-5.41 16.655-13.36 22.216-22.99 5.555-9.622 8.599-20.242 8.801-30.71.197-10.208-2.293-19.657-7.2-27.325a39.3 39.3 0 0 0-4.487-5.769 37.4 37.4 0 0 0-8.57-6.789c-5.28-3.048-11.132-4.74-17.396-5.027a42 42 0 0 0-1.925-.044z'
      />
      <path
        fill='#EBECEE'
        d='M81.33 88.663c-8.14 14.097-22.131 22.147-35.092 21.542a28 28 0 0 1-5.225-.737 26.5 26.5 0 0 1-3.882-1.251 26.4 26.4 0 0 1-3.228-1.583c-15.347-8.862-18.998-31.274-8.153-50.06 10.847-18.785 32.08-26.83 47.427-17.97a26.55 26.55 0 0 1 6.087 4.824 28 28 0 0 1 3.187 4.096c6.991 10.923 7.01 27.05-1.123 41.137z'
      />
      <path
        fill='#000'
        d='M47.624 110.518q-.701 0-1.398-.032a28.3 28.3 0 0 1-5.279-.746 26.928 26.928 0 0 1-7.185-2.864c-7.496-4.328-12.481-11.966-14.034-21.505-1.55-9.519.502-19.795 5.78-28.937 5.278-9.14 13.152-16.057 22.17-19.474 9.039-3.425 18.146-2.928 25.643 1.4a27 27 0 0 1 2.762 1.833 27 27 0 0 1 3.39 3.043 28 28 0 0 1 3.218 4.139c7.284 11.378 6.844 27.64-1.117 41.428-3.962 6.862-9.437 12.527-15.836 16.385-5.806 3.499-12.038 5.329-18.114 5.329zm11.847-75.246c-3.783 0-7.694.736-11.596 2.213-8.897 3.372-16.67 10.2-21.882 19.23s-7.242 19.174-5.712 28.566c1.526 9.37 6.413 16.867 13.762 21.11a26.368 26.368 0 0 0 7.036 2.803c1.674.402 3.414.647 5.173.73 6.4.299 13.04-1.505 19.196-5.217 6.317-3.808 11.725-9.404 15.639-16.185 3.91-6.773 6.053-14.25 6.196-21.62.14-7.181-1.613-13.83-5.065-19.224a27.6 27.6 0 0 0-3.154-4.056 26.3 26.3 0 0 0-6.024-4.774c-4.12-2.378-8.74-3.576-13.566-3.576z'
      />
      <path
        fill='#fff'
        d='M69.017 81.555c-4.533 7.851-12.324 12.334-19.543 11.997a15.6 15.6 0 0 1-2.91-.411 14.7 14.7 0 0 1-3.96-1.578c-8.548-4.935-10.58-17.416-4.54-27.88 6.04-10.461 17.867-14.942 26.413-10.008q.799.462 1.522 1.01c.674.508 1.297 1.07 1.869 1.677a15.5 15.5 0 0 1 1.774 2.282c3.893 6.083 3.904 15.065-.626 22.91z'
      />
      <path
        fill='#000'
        d='M50.25 93.85q-.394 0-.79-.018a16 16 0 0 1-2.962-.419 15.153 15.153 0 0 1-4.035-1.607c-8.667-5.005-10.75-17.683-4.642-28.263 2.953-5.116 7.36-8.986 12.41-10.9 5.07-1.92 10.178-1.64 14.387.79a15.137 15.137 0 0 1 3.455 2.737 16 16 0 0 1 1.806 2.323c4.081 6.375 3.839 15.484-.619 23.202-4.305 7.457-11.697 12.156-19.01 12.156zm6.593-41.906c-2.092 0-4.255.407-6.413 1.224-4.929 1.868-9.234 5.652-12.122 10.656-5.954 10.311-3.963 22.646 4.438 27.495a14.65 14.65 0 0 0 3.886 1.548c.923.222 1.885.358 2.858.403 7.36.345 14.93-4.311 19.286-11.857 4.353-7.539 4.602-16.418.633-22.62a15.3 15.3 0 0 0-1.742-2.24 14.663 14.663 0 0 0-3.327-2.636c-2.275-1.313-4.827-1.974-7.494-1.974z'
      />
      <path fill='#FF444F' d='m34.18 55.474-.81-13.184 8.658 4.95.6 13.226z' />
      <path
        fill='#000'
        d='M42.628 60.747a.3.3 0 0 1-.144-.04l-8.448-4.992a.28.28 0 0 1-.138-.224l-.81-13.184a.282.282 0 0 1 .42-.261l8.66 4.95a.29.29 0 0 1 .142.232l.598 13.227a.28.28 0 0 1-.28.293zm-8.178-5.439 7.873 4.653-.569-12.554-8.075-4.614.77 12.517z'
      />
      <path fill='#FF7E88' d='m25.774 61.752-14.294-.555-.255-4.82 13.397.682z' />
      <path
        fill='#000'
        d='M25.774 62.033h-.011l-14.293-.555a.28.28 0 0 1-.27-.265l-.255-4.821a.28.28 0 0 1 .295-.295l13.397.682a.28.28 0 0 1 .258.214l1.153 4.693a.28.28 0 0 1-.272.348zm-14.027-1.107 13.665.531-1.014-4.129-12.877-.655.226 4.255z'
      />
      <path fill='#FF7E88' d='m33.37 42.29-3.842-1.621.768 12.672 3.883 2.133z' />
      <path
        fill='#000'
        d='M34.18 55.755a.3.3 0 0 1-.136-.036l-3.883-2.133a.28.28 0 0 1-.144-.23l-.768-12.672a.28.28 0 0 1 .389-.275l3.84 1.621a.28.28 0 0 1 .17.242l.81 13.184a.28.28 0 0 1-.28.297zm-3.613-2.585 3.3 1.814-.769-12.502-3.262-1.377.731 12.067z'
      />
      <path
        fill='#EBECEE'
        d='M106.052 102.977c-14.73 25.512-43.268 36.746-64.44 25.678l-11.338-5.562a38 38 0 0 0 5.503 1.773 39.8 39.8 0 0 0 7.41 1.046c18.378.857 38.214-10.555 49.755-30.544 11.533-19.975 11.506-42.84 1.594-58.328a39.5 39.5 0 0 0-4.52-5.81 37.5 37.5 0 0 0-4.756-4.27l10.987 7.484c20.021 12.864 24.492 43.095 9.805 68.533'
      />
      <path
        fill='#000'
        d='M59.282 133.198c-6.284 0-12.328-1.434-17.798-4.293l-11.333-5.56a.28.28 0 0 1-.131-.368.28.28 0 0 1 .362-.144 37.6 37.6 0 0 0 5.462 1.76c2.378.572 4.855.921 7.358 1.039 9.098.426 18.534-2.139 27.284-7.414 8.974-5.41 16.655-13.36 22.216-22.99 5.555-9.621 8.599-20.242 8.801-30.71.197-10.208-2.293-19.657-7.2-27.325a39.3 39.3 0 0 0-4.487-5.769 37.4 37.4 0 0 0-4.721-4.238.282.282 0 0 1 .328-.458l10.987 7.486.02.015c9.755 6.28 16.152 16.835 18.017 29.727 1.867 12.92-1.027 26.828-8.148 39.162-7.145 12.374-17.778 21.847-29.943 26.678-5.72 2.27-11.49 3.403-17.071 3.403zm-24.902-8.404 7.356 3.609c5.391 2.819 11.352 4.232 17.547 4.233 5.513 0 11.21-1.119 16.862-3.362 12.048-4.783 22.583-14.172 29.664-26.436 7.058-12.227 9.928-26.006 8.078-38.802-1.842-12.742-8.161-23.167-17.792-29.353l-.032-.024-6.898-4.7q.538.53 1.057 1.08a40 40 0 0 1 4.55 5.85c4.97 7.762 7.489 17.32 7.29 27.638-.204 10.564-3.274 21.277-8.877 30.982-5.607 9.712-13.358 17.731-22.413 23.191-8.845 5.333-18.389 7.923-27.6 7.494a40.3 40.3 0 0 1-7.461-1.053q-.668-.16-1.332-.346z'
      />
      <path fill='#FF444F' d='m11.48 61.197 8.472 4.96 9.527.287.581-2.624-4.286-2.068z' />
      <path
        fill='#000'
        d='M29.48 66.725h-.008l-9.527-.287a.27.27 0 0 1-.133-.038l-8.472-4.96a.281.281 0 0 1 .153-.523l14.292.554a.3.3 0 0 1 .111.028l4.286 2.07a.28.28 0 0 1 .152.313l-.581 2.624a.28.28 0 0 1-.274.22zm-9.448-.847 9.224.278.483-2.179-4.034-1.947-13.115-.508 7.444 4.357z'
      />
      <path
        fill='#FF7E88'
        d='M31.13 59.73c-1.126 1.95-3.06 3.063-4.852 2.978a3.8 3.8 0 0 1-1.596-.432l-.11-.062c-2.12-1.224-2.626-4.322-1.127-6.92 1.5-2.597 4.435-3.708 6.558-2.484q.198.114.377.251.251.188.463.416.247.261.441.567c.968 1.509.969 3.738-.154 5.687'
      />
      <path
        fill='#000'
        d='M26.472 62.993q-.103 0-.207-.004a4 4 0 0 1-.776-.11 4 4 0 0 1-.938-.355l-.115-.064c-1.103-.636-1.833-1.752-2.06-3.145-.224-1.37.07-2.848.828-4.16 1.573-2.726 4.687-3.887 6.94-2.587a4 4 0 0 1 1.379 1.327c1.054 1.645.997 3.99-.149 5.977-1.107 1.917-3.012 3.123-4.9 3.123zm1.637-10.4c-1.64 0-3.388 1.053-4.42 2.842-.693 1.2-.963 2.545-.76 3.789.2 1.223.833 2.198 1.785 2.747l.107.06a3.582 3.582 0 0 0 1.471.397c1.748.085 3.552-1.031 4.596-2.836 1.04-1.807 1.104-3.924.162-5.395a3.6 3.6 0 0 0-.409-.527 3.3 3.3 0 0 0-.426-.383 3 3 0 0 0-.35-.233 3.5 3.5 0 0 0-1.755-.46z'
      />
      <path
        fill='#FF444F'
        d='M57.382 74.837c-1.126 1.949-3.06 3.062-4.852 2.978a3.8 3.8 0 0 1-1.259-.275l-.837-.48-25.752-14.785a3.7 3.7 0 0 0 .873.33q.356.087.723.103c1.791.084 3.726-1.03 4.852-2.978 1.123-1.948 1.122-4.178.154-5.687a3.8 3.8 0 0 0-.904-.983l25.875 14.856a3.7 3.7 0 0 1 .84.667q.248.262.442.567c.967 1.51.97 3.739-.155 5.687'
      />
      <path
        fill='#000'
        d='M52.724 78.1q-.103 0-.206-.004a4.1 4.1 0 0 1-1.386-.313l-26.59-15.264a.28.28 0 0 1 .272-.491q.15.077.313.144a3.6 3.6 0 0 0 1.167.255c1.747.084 3.551-1.032 4.596-2.837 1.04-1.805 1.105-3.924.161-5.395a3.6 3.6 0 0 0-.835-.91.28.28 0 0 1-.066-.379.283.283 0 0 1 .375-.09l25.874 14.856c.153.09.287.178.409.273q.258.192.497.446.264.282.473.61c1.056 1.646.997 3.992-.149 5.977-1.107 1.916-3.012 3.122-4.9 3.122zm-1.33-.813a3.6 3.6 0 0 0 1.15.249c1.747.082 3.552-1.032 4.597-2.838 1.041-1.805 1.105-3.922.161-5.395a3.5 3.5 0 0 0-.835-.91 4 4 0 0 0-.351-.234L31.659 54.118c.913 1.63.812 3.856-.282 5.754-1.102 1.908-2.996 3.113-4.877 3.122L51.399 77.29z'
      />
      <path fill='#FF444F' d='m33.924 60.6-1.153 5.163 8.534 5.12 1.323-5.377z' />
      <path
        fill='#000'
        d='M41.305 71.164q-.076 0-.145-.041l-8.532-5.12a.28.28 0 0 1-.13-.302l1.153-5.162a.28.28 0 0 1 .413-.184l8.704 4.907c.11.061.164.19.135.311L41.58 70.95a.28.28 0 0 1-.272.213zm-8.215-5.537 8.033 4.82 1.18-4.8-8.188-4.617z'
      />
      <path fill='#FF7E88' d='m32.771 65.763-3.754 2.772L37.7 73.7l3.605-2.816z' />
      <path
        fill='#000'
        d='M37.699 73.98q-.076 0-.144-.04l-8.683-5.163a.282.282 0 0 1-.023-.468l3.755-2.774a.28.28 0 0 1 .312-.015l8.532 5.12c.079.048.13.13.136.223a.28.28 0 0 1-.108.239l-3.605 2.816a.28.28 0 0 1-.172.059zm-8.175-5.47 8.154 4.85 3.132-2.446-8.022-4.814z'
      />
      <path fill='#FF7E88' d='m33.924 60.6-3.756 2.73-1.15 5.206 3.753-2.773z' />
      <path
        fill='#000'
        d='M29.017 68.816a.28.28 0 0 1-.274-.341l1.153-5.205a.28.28 0 0 1 .11-.168l3.755-2.73a.28.28 0 0 1 .318-.007.28.28 0 0 1 .12.296l-1.153 5.162a.28.28 0 0 1-.107.164l-3.755 2.773a.3.3 0 0 1-.167.055zm1.402-5.32-.967 4.37L32.52 65.6l.967-4.335z'
      />
    </g>
    <defs>
      <clipPath id='ec95e31a85f749a58a0c00d914434bf5__a'>
        <path fill='#fff' d='M0 0h120v152H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(DerivLightMissionIcon);
export default ForwardRef;
