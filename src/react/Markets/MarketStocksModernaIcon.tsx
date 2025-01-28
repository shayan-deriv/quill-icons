import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const MarketStocksModernaIcon = (
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
    <g clipPath='url(#289f66db5acd75754a15a4828d59aef6__a)'>
      <path
        fill='#F6F7F8'
        d='M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16'
      />
      <path
        fill='#A6DFF9'
        fillRule='evenodd'
        d='M2.508 18.962c0-.096.078-.175.175-.175H4.13a.175.175 0 0 1 0 .35H2.683a.175.175 0 0 1-.175-.175'
        clipRule='evenodd'
      />
      <path
        fill='#93DAF8'
        fillRule='evenodd'
        d='M4.792 18.962c0-.096.078-.175.175-.175h1.447a.175.175 0 0 1 0 .35H4.967a.175.175 0 0 1-.175-.175'
        clipRule='evenodd'
      />
      <path
        fill='#7ED4F7'
        fillRule='evenodd'
        d='M7.077 18.962c0-.096.078-.175.175-.175h1.447a.175.175 0 0 1 0 .35H7.252a.175.175 0 0 1-.175-.175'
        clipRule='evenodd'
      />
      <path
        fill='#6BCFF6'
        fillRule='evenodd'
        d='M9.361 18.962c0-.096.078-.175.175-.175h1.447a.175.175 0 0 1 0 .35H9.536a.175.175 0 0 1-.175-.175'
        clipRule='evenodd'
      />
      <path
        fill='#52CBF5'
        fillRule='evenodd'
        d='M11.646 18.962c0-.096.078-.175.175-.175h1.447a.175.175 0 0 1 0 .35H11.82a.175.175 0 0 1-.175-.175'
        clipRule='evenodd'
      />
      <path
        fill='#39C6F4'
        fillRule='evenodd'
        d='M13.93 18.962c0-.096.078-.175.175-.175h1.447a.175.175 0 0 1 0 .35h-1.447a.175.175 0 0 1-.175-.175'
        clipRule='evenodd'
      />
      <path
        fill='#20C2F3'
        fillRule='evenodd'
        d='M16.215 18.962c0-.096.078-.175.175-.175h1.447a.175.175 0 0 1 0 .35H16.39a.175.175 0 0 1-.175-.175'
        clipRule='evenodd'
      />
      <path
        fill='#04BEF2'
        fillRule='evenodd'
        d='M18.499 18.962c0-.096.078-.175.175-.175h1.447a.175.175 0 1 1 0 .35h-1.447a.175.175 0 0 1-.175-.175'
        clipRule='evenodd'
      />
      <path
        fill='#00BAF2'
        fillRule='evenodd'
        d='M20.783 18.962c0-.096.079-.175.176-.175h1.446a.175.175 0 0 1 0 .35H20.96a.175.175 0 0 1-.176-.175'
        clipRule='evenodd'
      />
      <path
        fill='#00B6F1'
        fillRule='evenodd'
        d='M23.068 18.962c0-.096.078-.175.175-.175h1.447a.175.175 0 0 1 0 .35h-1.447a.175.175 0 0 1-.175-.175'
        clipRule='evenodd'
      />
      <path
        fill='#00B3F0'
        fillRule='evenodd'
        d='M25.352 18.962c0-.096.079-.175.175-.175h1.447a.175.175 0 0 1 0 .35h-1.447a.175.175 0 0 1-.175-.175'
        clipRule='evenodd'
      />
      <path
        fill='#00AFEF'
        fillRule='evenodd'
        d='M27.637 18.962c0-.096.078-.175.175-.175h1.447a.175.175 0 0 1 0 .35h-1.447a.175.175 0 0 1-.175-.175'
        clipRule='evenodd'
      />
      <path
        fill='#E51937'
        d='M15.186 12.87v1.866a1.52 1.52 0 0 0-1.294-.685c-.472 0-.868.167-1.203.502a1.68 1.68 0 0 0-.488 1.21c0 .488.168.892.495 1.227.32.343.724.51 1.18.51.267 0 .51-.06.732-.16q.32-.17.586-.487v.563h.419V12.87zM4.145 14.013c-.229 0-.457.06-.67.19-.18.123-.333.28-.45.464v-.57h-.418v3.32h.418v-1.41c0-.418.046-.723.122-.928.075-.193.205-.36.373-.48a.95.95 0 0 1 .541-.175c.168 0 .312.045.442.13a.7.7 0 0 1 .259.342c.045.152.068.419.068.822v1.698h.419v-1.294q0-.72.114-1.028c.076-.198.206-.366.373-.487a.92.92 0 0 1 .556-.183c.168 0 .305.038.427.122.121.076.205.19.259.32q.078.202.076.738v1.812h.426v-1.804c0-.412-.038-.731-.122-.937a1.03 1.03 0 0 0-.99-.663 1.3 1.3 0 0 0-.67.206 1.7 1.7 0 0 0-.525.594 1.5 1.5 0 0 0-.229-.45.9.9 0 0 0-.35-.25 1 1 0 0 0-.457-.1zm5.734 0c-.495 0-.906.182-1.219.555-.297.327-.46.754-.456 1.196 0 .457.152.868.472 1.218.304.343.708.518 1.195.518a1.52 1.52 0 0 0 1.196-.525c.304-.33.47-.763.464-1.211 0-.457-.144-.86-.441-1.203a1.56 1.56 0 0 0-1.219-.556zm8.186 0c-.533 0-.96.205-1.287.624q-.375.488-.373 1.127c0 .45.152.845.45 1.203a1.52 1.52 0 0 0 1.233.533c.423.006.833-.152 1.142-.442.152-.137.29-.327.396-.555l-.343-.19c-.13.22-.243.38-.358.471a1.34 1.34 0 0 1-.875.32c-.335 0-.625-.122-.853-.365-.236-.252-.358-.564-.366-.952h2.91c0-.457-.123-.838-.359-1.142a1.59 1.59 0 0 0-1.317-.633m3.564 0a.84.84 0 0 0-.457.137c-.17.114-.315.262-.427.434v-.495h-.441v3.32h.441v-1.112c0-.579.03-.967.084-1.15q.112-.377.305-.548a.62.62 0 0 1 .426-.175c.053 0 .13.015.229.06l.228-.365a.8.8 0 0 0-.388-.114zm2.513 0q-.364-.002-.67.167c-.22.128-.41.302-.556.51v-.601h-.42v3.32h.42V16.19q.002-.652.06-.906c.061-.251.198-.457.396-.632q.309-.26.686-.259c.228 0 .403.061.533.168a.84.84 0 0 1 .282.495c.038.13.053.38.053.769v1.584h.419V15.71q0-.686-.137-1.005a1.14 1.14 0 0 0-.42-.51 1.14 1.14 0 0 0-.646-.191zm3.579 0q-.677 0-1.158.502a1.72 1.72 0 0 0-.487 1.226c-.01.46.163.907.48 1.241a1.57 1.57 0 0 0 2.436-.144v.578h.412V14.09H29v.609a1.6 1.6 0 0 0-.564-.526 1.45 1.45 0 0 0-.7-.16zm-9.656.403q.296.002.548.13c.183.076.32.19.427.327.099.137.182.312.243.54H16.87c.092-.304.213-.532.381-.685q.345-.306.815-.304zm9.694 0c.358 0 .655.13.906.389.236.258.358.578.358.967 0 .25-.053.48-.152.677a1.27 1.27 0 0 1-1.105.655q-.342-.001-.64-.175a1.41 1.41 0 0 1-.464-1.835 1.23 1.23 0 0 1 1.097-.67zm-17.895.015c.342 0 .64.13.883.389a1.42 1.42 0 0 1 .206 1.622 1.2 1.2 0 0 1-1.082.655 1.2 1.2 0 0 1-1.081-.655 1.4 1.4 0 0 1-.168-.67c0-.374.122-.686.366-.952.244-.26.533-.389.883-.389zm4.05.023a1.295 1.295 0 0 1 1.295 1.333 1.37 1.37 0 0 1-.167.678 1.35 1.35 0 0 1-1.135.647 1.3 1.3 0 0 1-1.12-.67 1.36 1.36 0 0 1 0-1.325 1.27 1.27 0 0 1 1.128-.663m16.106-.099h.061c.03 0 .054 0 .061-.015.015 0 .023-.015.023-.03l-.015-.023c0-.016 0-.016-.015-.023h-.115zm-.045.175v-.304h.182a.08.08 0 0 1 .046.038l.015.038c0 .03-.015.046-.023.06a.15.15 0 0 1-.076.031l.03.015.046.061.039.061h-.061l-.023-.053-.053-.076h-.069v.13zm.121-.403a.17.17 0 0 0-.114.038.15.15 0 0 0-.084.084.23.23 0 0 0 0 .243.15.15 0 0 0 .084.084c.038.03.076.038.114.038a.18.18 0 0 0 .122-.038.16.16 0 0 0 .092-.084c.015-.038.03-.076.03-.122 0-.038-.015-.076-.03-.121a.23.23 0 0 0-.092-.084.18.18 0 0 0-.122-.038m0-.038a.3.3 0 0 1 .145.03c.046.023.076.061.107.107.03.045.038.091.038.152a.24.24 0 0 1-.038.137.29.29 0 0 1-.252.145.286.286 0 0 1-.282-.29c0-.053.016-.099.039-.144a.4.4 0 0 1 .106-.107.3.3 0 0 1 .137-.03'
      />
    </g>
    <defs>
      <clipPath id='289f66db5acd75754a15a4828d59aef6__a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(MarketStocksModernaIcon);
export default ForwardRef;
