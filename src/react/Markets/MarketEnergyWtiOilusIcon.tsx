import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const MarketEnergyWtiOilusIcon = (
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
    <g clipPath='url(#8c366cdc13d40b6c69a15b798f35e845__a)'>
      <path
        fill='#282C38'
        d='M16 32c8.837 0 16-7.163 16-16S24.837 0 16 0 0 7.163 0 16s7.163 16 16 16'
      />
      <path
        fill='#fff'
        d='M10.286 12.091c1.338.874 3.637 1.223 5.714 1.223s4.375-.349 5.714-1.223v3.05c.235.22.372.523.381.844 0 1.504-3.066 2.29-6.095 2.29s-6.095-.786-6.095-2.29c.01-.32.147-.625.38-.844z'
      />
      <path
        fill='#fff'
        d='M16 19.039c-2.077 0-4.376-.349-5.714-1.223v3.05c-.234.22-.372.523-.381.844C9.905 23.213 12.97 24 16 24s6.095-.787 6.095-2.29a1.2 1.2 0 0 0-.38-.844v-3.05c-1.34.874-3.638 1.223-5.715 1.223'
      />
      <path
        fill='#fff'
        fillRule='evenodd'
        d='M14.988 8v2.46c0 .83.672 1.503 1.5 1.503h3.714c-1.147.389-2.68.588-4.202.588-3.03 0-6.095-.787-6.095-2.29 0-1.336 2.42-2.106 5.083-2.261m-1.655 1.879h-.762a.381.381 0 0 0 0 .763h.762a.381.381 0 0 0 0-.763'
        clipRule='evenodd'
      />
      <path
        fill='#282C38'
        d='M14.98 6.47a1.5 1.5 0 0 1 1.5-1.5h7.002a1.5 1.5 0 0 1 1.5 1.5v4a1.5 1.5 0 0 1-1.5 1.5H16.48a1.5 1.5 0 0 1-1.5-1.5z'
      />
      <path
        fill='#fff'
        d='M15.48 8.683v.46h9v-.46zM19.793 8.224h4.687v-.459h-4.687zM19.793 7.306h4.687v-.459h-4.687zM19.793 6.388h4.687V6.22a.8.8 0 0 0-.058-.29h-4.63zM24.48 9.601h-9v.46h9zM15.48 10.52h9v.2a.8.8 0 0 1-.046.258h-8.909a.8.8 0 0 1-.045-.258z'
      />
      <path
        fill='#F44336'
        d='M23.73 5.47h-3.937v.46h4.629a.75.75 0 0 0-.692-.46M19.793 8.683h4.687v-.459h-4.687zM19.793 7.765h4.687v-.459h-4.687zM19.793 6.847h4.687v-.459h-4.687zM15.48 9.142h9v.46h-9zM24.48 10.06h-9v.46h9zM15.526 10.978h8.909a.75.75 0 0 1-.705.492h-7.5a.75.75 0 0 1-.705-.492'
      />
      <path
        fill='#0D47A1'
        fillRule='evenodd'
        d='M19.793 5.47H16.23a.75.75 0 0 0-.75.75v2.463h4.313zm-3.867 2.662-.036-.105c-.004-.015-.022-.015-.024 0l-.036.106h-.11a.015.015 0 0 0-.009.027l.09.066-.038.105a.02.02 0 0 0 .002.012l.004.004a.02.02 0 0 0 .017 0l.09-.065.09.065a.015.015 0 0 0 .023-.016l-.034-.106.09-.066.005-.007v-.01a.02.02 0 0 0-.014-.01zm3.365-.105a.013.013 0 0 0-.013-.01.01.01 0 0 0-.012.01l-.035.106h-.111a.02.02 0 0 0-.014.01.02.02 0 0 0 .005.016l.09.067-.037.105a.015.015 0 0 0 .023.016l.09-.065.09.065a.015.015 0 0 0 .023-.016l-.034-.106.09-.066a.02.02 0 0 0 .005-.017.02.02 0 0 0-.014-.01h-.11zm-.85 0a.013.013 0 0 0-.014-.01.01.01 0 0 0-.011.01l-.036.106h-.11a.02.02 0 0 0-.015.01.02.02 0 0 0 .005.016l.09.067-.037.105a.015.015 0 0 0 .023.016l.09-.065.09.065a.015.015 0 0 0 .023-.016l-.034-.106.09-.066a.015.015 0 0 0-.008-.027h-.111zm-1.665.105-.035-.105c-.005-.015-.024-.015-.025 0l-.035.106h-.111a.02.02 0 0 0-.014.01.02.02 0 0 0 .005.016l.09.067-.037.105a.02.02 0 0 0 .006.016.02.02 0 0 0 .017 0l.09-.065.09.065a.015.015 0 0 0 .023-.016l-.034-.106.09-.066.004-.005a.02.02 0 0 0 0-.012.02.02 0 0 0-.009-.01h-.114m.851 0-.036-.105c-.004-.015-.024-.015-.024 0l-.036.106h-.11a.02.02 0 0 0-.014.01.02.02 0 0 0 .004.016l.09.067-.037.105a.02.02 0 0 0 .006.016.02.02 0 0 0 .018 0l.09-.065.09.065a.015.015 0 0 0 .023-.016l-.034-.106.09-.066a.015.015 0 0 0-.01-.027zm-1.276-.279-.035-.106c-.005-.014-.023-.014-.025 0l-.035.106h-.114a.02.02 0 0 0-.014.01.02.02 0 0 0 .005.017l.09.066-.034.106a.015.015 0 0 0 .023.016l.09-.065.09.065a.015.015 0 0 0 .023-.016l-.034-.106.09-.066a.015.015 0 0 0-.01-.027zm2.515-.106a.014.014 0 1 0-.028 0l-.036.106h-.11a.015.015 0 0 0-.01.027l.09.066-.033.106a.015.015 0 0 0 .023.016l.09-.065.09.065a.015.015 0 0 0 .023-.016l-.034-.106.09-.066a.015.015 0 0 0-.01-.027h-.11zm-.814.106-.035-.106c-.004-.014-.024-.014-.028 0l-.036.106h-.11l-.009.003-.005.007v.007q0 .005.005.01l.09.066-.034.106a.02.02 0 0 0 .006.016.02.02 0 0 0 .017 0l.09-.065.09.065a.015.015 0 0 0 .023-.016l-.034-.106.09-.066a.015.015 0 0 0-.009-.027zm-.85 0-.036-.106c-.004-.014-.024-.014-.024 0l-.036.106h-.114a.015.015 0 0 0-.009.027l.09.066-.034.106v.009l.006.007.008.003.01-.003.09-.065.09.065a.015.015 0 0 0 .022-.016l-.034-.106.09-.066a.015.015 0 0 0-.009-.027zm-.426-.27-.035-.106c-.005-.012-.024-.012-.025 0l-.035.106h-.114a.015.015 0 0 0-.009.027l.09.066-.034.105a.02.02 0 0 0 .006.017.02.02 0 0 0 .017 0l.09-.065.09.065.003.002a.015.015 0 0 0 .02-.019l-.034-.105.09-.067a.015.015 0 0 0-.009-.026zm2.55 0-.035-.106c-.003-.012-.022-.012-.028 0l-.035.106h-.111a.02.02 0 0 0-.014.01.02.02 0 0 0 .005.016l.09.067-.034.105a.015.015 0 0 0 .023.017l.09-.065.09.065a.015.015 0 0 0 .023-.008V7.78l-.034-.105.09-.067a.015.015 0 0 0-.009-.026zm-3.4 0-.036-.106c-.004-.012-.022-.012-.024 0l-.036.106h-.114a.02.02 0 0 0-.014.01.02.02 0 0 0 .005.016l.09.067-.034.105a.015.015 0 0 0 .023.017l.09-.065.09.065a.02.02 0 0 0 .018 0 .02.02 0 0 0 .005-.017l-.034-.105.09-.067a.015.015 0 0 0-.009-.026zm2.55 0-.036-.106c-.001-.007-.009-.01-.015-.009a.02.02 0 0 0-.012.01l-.036.105h-.11q-.004 0-.008.002l-.007.008a.02.02 0 0 0 .005.016l.09.067-.034.105a.015.015 0 0 0 .023.017l.09-.065.09.065a.02.02 0 0 0 .018 0 .02.02 0 0 0 .005-.017l-.034-.105.09-.067a.015.015 0 0 0-.008-.026zm-.849 0-.036-.106c-.004-.012-.024-.012-.024 0l-.036.106h-.114a.015.015 0 0 0-.009.027l.09.066-.034.105a.02.02 0 0 0 .006.017.02.02 0 0 0 .018 0l.09-.065.09.065a.02.02 0 0 0 .017 0 .02.02 0 0 0 .006-.017l-.034-.105.09-.067a.015.015 0 0 0-.01-.026zm-1.276-.279-.035-.106c-.005-.014-.023-.014-.025.001l-.035.106h-.111a.015.015 0 0 0-.01.026l.09.067-.036.105a.015.015 0 0 0 .023.016l.09-.065.09.065a.02.02 0 0 0 .017 0 .02.02 0 0 0 .006-.016l-.034-.106.09-.066a.015.015 0 0 0-.01-.027zm2.515-.106a.014.014 0 0 0-.027-.004l-.001.004-.036.106h-.11q-.004 0-.007.002l-.007.008a.02.02 0 0 0 .005.017l.09.066-.034.106a.015.015 0 0 0 .023.016l.09-.065.09.065a.015.015 0 0 0 .023-.016l-.034-.106.09-.066a.015.015 0 0 0-.01-.027h-.11zm-.814.106-.035-.106c-.004-.014-.024-.014-.028 0l-.036.106h-.11a.02.02 0 0 0-.014.01.02.02 0 0 0 .005.017l.09.066-.034.106q-.001.007.002.012l.004.004a.02.02 0 0 0 .017 0l.09-.065.09.065a.015.015 0 0 0 .023-.016l-.034-.106.09-.066a.015.015 0 0 0-.009-.027zm-.85 0-.036-.106c-.004-.014-.024-.014-.024.001l-.036.106h-.111a.015.015 0 0 0-.009.027l.09.066-.037.105a.02.02 0 0 0 .006.016.02.02 0 0 0 .017 0l.09-.065.09.065a.015.015 0 0 0 .023-.016l-.034-.106.09-.066a.015.015 0 0 0-.009-.027zm-.426-.268-.035-.106c-.005-.014-.024-.014-.025 0l-.035.106h-.111a.02.02 0 0 0-.011.005q-.002.001-.003.005a.02.02 0 0 0 .005.017l.09.066-.037.105a.02.02 0 0 0 .006.016.02.02 0 0 0 .017 0l.09-.064.09.064a.015.015 0 0 0 .023-.016l-.034-.105.09-.067.005-.008a.02.02 0 0 0-.005-.015l-.009-.003zm2.508-.114-.006-.002a.013.013 0 0 0-.012.01l-.035.106h-.111a.02.02 0 0 0-.014.01.02.02 0 0 0 .005.017l.09.066-.037.105a.015.015 0 0 0 .023.016l.09-.064.09.064a.02.02 0 0 0 .018 0l.006-.008v-.008l-.035-.105.09-.067a.015.015 0 0 0-.009-.026h-.11l-.036-.106a.01.01 0 0 0-.007-.008m-.844.008a.014.014 0 0 0-.027 0l-.036.106h-.11a.02.02 0 0 0-.015.01.02.02 0 0 0 .005.016l.09.067-.034.105a.015.015 0 0 0 .023.016l.09-.064.09.064a.02.02 0 0 0 .018 0 .02.02 0 0 0 .005-.016l-.034-.105.09-.067a.015.015 0 0 0-.008-.026h-.111zm-2.514.106-.036-.106c-.004-.014-.022-.014-.024 0l-.036.106h-.11a.015.015 0 0 0-.009.027l.09.066-.038.105a.015.015 0 0 0 .023.016l.09-.064.09.064a.015.015 0 0 0 .023-.016l-.034-.105.09-.067a.015.015 0 0 0-.009-.026zm1.701 0-.036-.106c-.004-.014-.024-.014-.024 0l-.036.106h-.114a.02.02 0 0 0-.013.01v.01q0 .003.004.006l.09.067-.034.105a.015.015 0 0 0 .015.02q.005 0 .009-.004l.09-.064.09.064a.015.015 0 0 0 .023-.016l-.034-.105.09-.067a.015.015 0 0 0-.01-.026zm-1.276-.282-.035-.105c-.005-.012-.023-.012-.025 0l-.035.105h-.114q-.005 0-.008.003l-.006.008a.02.02 0 0 0 .005.016l.09.066-.034.106a.015.015 0 0 0 .023.016l.09-.064.09.064a.015.015 0 0 0 .023-.016l-.034-.106.09-.066a.015.015 0 0 0-.01-.027zm1.701 0-.035-.105c-.004-.012-.024-.012-.028 0l-.036.105h-.11a.02.02 0 0 0-.014.01.02.02 0 0 0 .005.017l.09.066-.034.106a.02.02 0 0 0 .006.016.02.02 0 0 0 .017 0l.09-.064.09.064a.015.015 0 0 0 .023-.016l-.034-.106.09-.066.005-.007a.015.015 0 0 0-.014-.02zm-.85 0-.036-.105c-.004-.012-.024-.012-.024 0l-.036.105h-.114a.015.015 0 0 0-.009.027l.09.066-.034.106a.02.02 0 0 0 .006.016.02.02 0 0 0 .017 0l.09-.064.09.064a.015.015 0 0 0 .023-.016l-.034-.106.09-.066a.015.015 0 0 0-.009-.027zm1.7 0-.037-.105c-.002-.012-.022-.012-.027 0l-.036.105h-.11a.02.02 0 0 0-.014.01.02.02 0 0 0 .005.017l.09.066-.034.106a.015.015 0 0 0 .023.016l.09-.064.09.064a.02.02 0 0 0 .017 0 .02.02 0 0 0 .006-.016l-.034-.106.09-.066a.015.015 0 0 0-.003-.025l-.006-.002zm-1.275-.268-.036-.105c-.004-.013-.024-.013-.024 0l-.036.105h-.114a.015.015 0 0 0-.009.027l.09.066-.034.106q0 .008.003.013l.003.003a.02.02 0 0 0 .018 0l.09-.064.09.064a.015.015 0 0 0 .023-.016l-.034-.106.09-.066a.015.015 0 0 0-.01-.027zm-1.701 0-.036-.105c-.004-.013-.022-.013-.024 0l-.036.105h-.114a.02.02 0 0 0-.014.01.02.02 0 0 0 .005.017l.09.066-.034.106a.015.015 0 0 0 .023.016l.09-.064.09.064a.015.015 0 0 0 .023-.016l-.034-.106.09-.066a.015.015 0 0 0-.009-.027zm.851 0-.035-.105c-.006-.013-.025-.013-.027 0l-.036.105h-.11a.02.02 0 0 0-.014.01.02.02 0 0 0 .001.013l.003.004.09.066-.034.106a.015.015 0 0 0 .024.016l.09-.064.09.064a.015.015 0 0 0 .023-.016l-.034-.106.09-.066a.02.02 0 0 0 .005-.017.02.02 0 0 0-.014-.01zm1.699 0-.036-.105c-.002-.013-.022-.013-.027 0l-.036.105h-.11a.02.02 0 0 0-.015.01.02.02 0 0 0 .005.017l.09.066-.034.106a.02.02 0 0 0 .006.016.02.02 0 0 0 .017 0l.09-.064.09.064a.015.015 0 0 0 .023-.016l-.034-.106.09-.066a.015.015 0 0 0-.008-.027zm.85 0-.035-.105c-.003-.013-.022-.013-.028 0l-.035.105h-.111a.02.02 0 0 0-.014.01.02.02 0 0 0 .005.017l.09.066-.034.106a.015.015 0 0 0 .023.016l.09-.064.09.064a.02.02 0 0 0 .018 0 .02.02 0 0 0 .005-.016l-.034-.106.09-.066a.015.015 0 0 0-.009-.027zm-1.274-.279-.035-.105c-.004-.015-.024-.015-.028 0l-.036.105h-.11a.015.015 0 0 0-.009.027l.09.066-.034.106a.02.02 0 0 0 .006.016.02.02 0 0 0 .017 0l.09-.064.09.064a.015.015 0 0 0 .023-.016l-.034-.106.09-.066a.015.015 0 0 0-.009-.027zm-.85 0-.036-.105c-.003-.01-.013-.013-.019-.01q-.005.003-.005.01l-.036.106h-.111a.02.02 0 0 0-.014.01.02.02 0 0 0 .005.017l.09.066-.037.105a.015.015 0 0 0 .015.019l.008-.003.09-.064.09.064a.015.015 0 0 0 .023-.016l-.034-.106.09-.066a.015.015 0 0 0-.009-.027zm-.85 0-.037-.105c-.004-.015-.022-.015-.024 0l-.035.106h-.111a.015.015 0 0 0-.009.027l.09.066-.037.105a.015.015 0 0 0 .023.016l.09-.064.09.064a.015.015 0 0 0 .023-.016L16.38 6.3l.09-.066a.015.015 0 0 0-.01-.027zm2.514-.105a.014.014 0 1 0-.028 0l-.036.105h-.11a.02.02 0 0 0-.014.01.02.02 0 0 0 .005.017l.09.066-.034.106a.015.015 0 0 0 .023.016l.09-.064.09.064a.014.014 0 0 0 .017 0 .02.02 0 0 0 .006-.016L18.93 6.3l.09-.066a.015.015 0 0 0-.01-.027h-.11zm-2.94-.163-.036-.106c-.004-.014-.022-.014-.024.001l-.036.106h-.11a.015.015 0 0 0-.009.027l.09.066-.038.105a.015.015 0 0 0 .023.016l.09-.065.09.065a.015.015 0 0 0 .023-.016l-.034-.106.09-.066a.015.015 0 0 0-.009-.027zm.85 0-.035-.106q-.006-.012-.017-.01-.007.002-.008.011l-.035.106h-.111a.02.02 0 0 0-.014.01.02.02 0 0 0 .005.016l.09.067-.037.105a.015.015 0 0 0 .013.019q.005 0 .01-.003l.09-.065.09.065a.015.015 0 0 0 .023-.016l-.034-.106.09-.066.005-.008v-.009a.02.02 0 0 0-.014-.01zm.851 0-.036-.106c-.004-.014-.024-.014-.024 0l-.036.106h-.114a.015.015 0 0 0-.009.027l.09.066-.034.106a.02.02 0 0 0 .006.016l.007.002q.006.001.01-.002l.09-.065.09.065a.015.015 0 0 0 .024-.016l-.034-.106.09-.066a.015.015 0 0 0-.01-.027zm.813-.106a.01.01 0 0 0-.007-.011l-.005-.002q-.004 0-.009.002a.01.01 0 0 0-.006.011l-.036.106h-.11a.015.015 0 0 0-.01.027l.09.066-.034.106a.015.015 0 0 0 .023.016l.09-.065.09.065.008.003q.005 0 .01-.003a.02.02 0 0 0 .005-.016l-.034-.106.09-.066a.015.015 0 0 0-.008-.027h-.111zm.85 0a.013.013 0 0 0-.012-.01.013.013 0 0 0-.012.011l-.035.106h-.111q-.004 0-.008.002l-.006.008a.02.02 0 0 0 .005.016l.09.067-.037.105a.015.015 0 0 0 .023.016l.09-.065.09.065.006.003a.015.015 0 0 0 .017-.02l-.034-.105.09-.066a.015.015 0 0 0-.009-.027h-.11z'
        clipRule='evenodd'
      />
      <path
        fill='#F5F5F5'
        d='m15.89 8.027.036.105h.11q.01 0 .014.01a.02.02 0 0 1-.005.017l-.09.066.034.106a.015.015 0 0 1-.023.016l-.09-.065-.09.065a.015.015 0 0 1-.023-.016l.037-.105-.09-.067a.015.015 0 0 1 .01-.026h.11l.036-.106c.002-.015.02-.015.024 0m3.388-.01q.01 0 .013.01l.036.105h.11q.01 0 .014.01a.02.02 0 0 1-.005.017l-.09.066.034.106a.015.015 0 0 1-.023.016l-.09-.065-.09.065a.015.015 0 0 1-.023-.016l.037-.105-.09-.067q-.008-.006-.005-.016a.02.02 0 0 1 .014-.01h.11l.036-.106a.01.01 0 0 1 .012-.01m-.85 0q.008 0 .012.01l.036.105h.11q.01 0 .014.01a.02.02 0 0 1-.005.017l-.09.066.034.106a.015.015 0 0 1-.023.016l-.09-.065-.09.065a.015.015 0 0 1-.023-.016l.037-.105-.09-.067a.02.02 0 0 1-.005-.016.02.02 0 0 1 .014-.01h.11l.037-.106a.01.01 0 0 1 .011-.01m-1.687.01.035.105h.111q.01 0 .014.01a.02.02 0 0 1-.005.017l-.09.066.034.106a.015.015 0 0 1-.023.016l-.09-.065-.09.065a.02.02 0 0 1-.017 0 .02.02 0 0 1-.006-.016l.037-.105-.09-.067q-.008-.006-.005-.016a.02.02 0 0 1 .014-.01h.11l.036-.106c0-.015.02-.015.025 0m.85 0 .036.105h.11q.011 0 .015.01a.02.02 0 0 1-.005.017l-.09.066.034.106a.015.015 0 0 1-.023.016l-.09-.065-.09.065a.02.02 0 0 1-.018 0 .02.02 0 0 1-.005-.016l.036-.105-.09-.067q-.008-.006-.005-.016a.02.02 0 0 1 .014-.01h.111l.036-.106c0-.015.02-.015.024 0m-1.276-.28.036.106h.11a.015.015 0 0 1 .01.027l-.09.066.034.106a.015.015 0 0 1-.023.016l-.09-.065-.09.065a.015.015 0 0 1-.023-.016l.034-.106-.09-.066a.02.02 0 0 1-.005-.017.02.02 0 0 1 .014-.01h.114l.035-.106c.002-.014.02-.014.024 0m2.544-.011a.01.01 0 0 1 .006.011l.036.106h.11a.015.015 0 0 1 .01.027l-.09.066.034.106a.015.015 0 0 1-.023.016l-.09-.065-.09.065a.015.015 0 0 1-.023-.016l.034-.106-.09-.066a.015.015 0 0 1 .009-.027h.11l.036-.106q0-.007.007-.011a.01.01 0 0 1 .014 0m-.842.011.035.106h.111a.015.015 0 0 1 .01.027l-.09.066.033.106a.015.015 0 0 1-.023.016l-.09-.065-.09.065a.02.02 0 0 1-.017 0 .02.02 0 0 1-.006-.016l.034-.106-.09-.066a.015.015 0 0 1 .009-.027h.11l.036-.106c.004-.014.024-.014.028 0m-.851 0 .036.106h.11a.015.015 0 0 1 .01.027l-.09.066.033.106a.015.015 0 0 1-.023.016l-.09-.065-.09.065a.02.02 0 0 1-.017 0 .02.02 0 0 1-.006-.016l.034-.106-.09-.066a.015.015 0 0 1 .009-.027h.114l.036-.106c0-.014.02-.014.024 0m-.425-.27.035.106h.111q.01 0 .014.01a.02.02 0 0 1-.005.016l-.09.067.034.105a.015.015 0 0 1-.023.016l-.09-.064-.09.065a.02.02 0 0 1-.017 0 .02.02 0 0 1-.006-.017l.034-.105-.09-.067a.015.015 0 0 1 .009-.026h.114l.035-.106c0-.012.02-.012.025 0m2.55 0 .036.106h.11q.01 0 .014.01a.02.02 0 0 1-.005.016l-.09.067.034.105a.02.02 0 0 1-.005.017.02.02 0 0 1-.018 0l-.09-.065-.09.065a.015.015 0 0 1-.023-.016l.034-.106-.09-.067a.02.02 0 0 1-.005-.016.02.02 0 0 1 .014-.01h.11l.036-.106c.006-.012.025-.012.028 0m-3.4 0 .035.106h.11q.01 0 .014.01a.02.02 0 0 1-.005.016l-.09.067.034.105a.02.02 0 0 1-.005.017.02.02 0 0 1-.018 0l-.09-.065-.09.065a.015.015 0 0 1-.023-.016l.034-.106-.09-.067q-.008-.006-.005-.016a.02.02 0 0 1 .014-.01h.114l.036-.106c.002-.012.02-.012.024 0m2.55 0 .035.106h.11q.01 0 .014.01a.02.02 0 0 1-.005.016l-.09.067.034.105a.02.02 0 0 1-.005.017.02.02 0 0 1-.018 0l-.09-.065-.09.065a.015.015 0 0 1-.023-.016l.034-.106-.09-.067a.02.02 0 0 1-.005-.016.02.02 0 0 1 .014-.01h.11l.037-.106c.005-.012.025-.012.027 0m-.85 0 .036.106h.11q.011 0 .015.01a.02.02 0 0 1-.005.016l-.09.067.034.105a.02.02 0 0 1-.006.017.02.02 0 0 1-.017 0l-.09-.065-.09.065a.02.02 0 0 1-.018 0 .02.02 0 0 1-.005-.017l.033-.105-.09-.067a.015.015 0 0 1 .01-.026h.113l.036-.106c0-.012.02-.012.024 0m-1.276-.279.036.106h.11q.011 0 .015.01a.02.02 0 0 1-.005.017l-.09.066.034.106a.02.02 0 0 1-.006.016.02.02 0 0 1-.017 0l-.09-.065-.09.065a.015.015 0 0 1-.023-.016l.037-.105-.09-.067a.015.015 0 0 1 .009-.026h.11l.036-.106c.002-.015.02-.015.024 0m2.537-.013q.012.001.014.013l.035.106h.11q.011 0 .015.01a.02.02 0 0 1-.005.017l-.09.066.034.106a.015.015 0 0 1-.023.016l-.09-.065-.09.065a.015.015 0 0 1-.023-.016l.034-.106-.09-.066a.02.02 0 0 1-.005-.017.02.02 0 0 1 .014-.01h.11l.036-.106q.001-.012.014-.013m-.835.013.035.106h.111q.01 0 .014.01a.02.02 0 0 1-.005.017l-.09.066.034.106a.015.015 0 0 1-.023.016l-.09-.065-.09.065a.02.02 0 0 1-.017 0 .02.02 0 0 1-.006-.016l.034-.106-.09-.066a.015.015 0 0 1 .009-.027h.11l.036-.106c.004-.014.024-.014.028 0m-.851 0 .036.106h.11q.01 0 .014.01a.02.02 0 0 1-.005.017l-.09.066.034.106a.015.015 0 0 1-.023.016l-.09-.065-.09.065a.02.02 0 0 1-.017 0 .02.02 0 0 1-.006-.016l.037-.105-.09-.067a.02.02 0 0 1-.005-.016.02.02 0 0 1 .014-.01h.111l.036-.106c0-.015.02-.015.024 0m-.425-.268.035.106h.111q.01 0 .014.01a.02.02 0 0 1-.005.016l-.09.067.034.105a.015.015 0 0 1-.023.016l-.09-.064-.09.064a.02.02 0 0 1-.017 0 .02.02 0 0 1-.006-.016l.037-.105-.09-.066a.02.02 0 0 1-.005-.017.02.02 0 0 1 .014-.01h.11l.036-.105c0-.015.02-.015.025-.001m2.537-.01q.01 0 .013.01l.036.106h.11q.01 0 .014.01a.02.02 0 0 1-.005.016l-.09.067.034.105a.015.015 0 0 1-.023.016l-.09-.064-.09.064a.015.015 0 0 1-.023-.016l.037-.105-.09-.066a.02.02 0 0 1-.005-.017.02.02 0 0 1 .014-.01h.11l.036-.105a.013.013 0 0 1 .012-.01m-.852-.004q.013.001.014.014l.036.106h.11q.01 0 .014.01a.02.02 0 0 1-.005.016l-.09.067.034.105a.015.015 0 0 1-.023.016l-.09-.064-.09.064a.015.015 0 0 1-.023-.016l.034-.105-.09-.067a.02.02 0 0 1-.005-.016.02.02 0 0 1 .014-.01h.11l.037-.106q.001-.013.013-.014m-2.536.014.036.106h.11q.01 0 .014.01a.02.02 0 0 1-.005.016l-.09.067.034.105a.015.015 0 0 1-.023.016l-.09-.064-.09.064a.015.015 0 0 1-.023-.016l.037-.105-.09-.066a.015.015 0 0 1 .01-.027h.11l.036-.105c.002-.015.02-.015.024-.001m1.701 0 .036.106h.11q.011 0 .015.01a.02.02 0 0 1-.005.016l-.09.067.034.105a.015.015 0 0 1-.023.016l-.09-.064-.09.064a.02.02 0 0 1-.018 0 .02.02 0 0 1-.005-.016l.033-.105-.09-.067a.015.015 0 0 1 .01-.026h.113l.036-.106c0-.014.02-.014.024 0m-1.276-.281.036.105h.11q.011.001.015.01a.02.02 0 0 1-.005.017l-.09.066.034.106a.015.015 0 0 1-.023.016l-.09-.064-.09.064a.015.015 0 0 1-.023-.016l.034-.106-.09-.066q-.008-.006-.005-.016a.02.02 0 0 1 .014-.01h.114l.035-.106c.002-.012.02-.012.024 0m1.702 0 .035.105h.111q.01.001.014.01a.02.02 0 0 1-.005.017l-.09.066.034.106a.015.015 0 0 1-.023.016l-.09-.064-.09.064a.02.02 0 0 1-.017 0 .02.02 0 0 1-.006-.016l.034-.106-.09-.066a.015.015 0 0 1 .009-.027h.11l.036-.105c.004-.012.024-.012.028 0m-.851 0 .036.105h.11q.01.001.014.01a.02.02 0 0 1-.005.017l-.09.066.034.106a.015.015 0 0 1-.023.016l-.09-.064-.09.064a.02.02 0 0 1-.017 0 .02.02 0 0 1-.006-.016l.034-.106-.09-.066a.015.015 0 0 1 .009-.027h.114l.036-.105c0-.012.02-.012.024 0m1.7 0 .035.105h.11q.011.001.015.01a.02.02 0 0 1-.005.017l-.09.066.034.106a.015.015 0 0 1-.023.016l-.09-.064-.09.064a.015.015 0 0 1-.023-.016l.034-.106-.09-.066a.02.02 0 0 1-.005-.016.02.02 0 0 1 .014-.01h.11l.036-.106c.005-.012.025-.012.027 0M17.59 6.38l.036.105h.11q.011.001.015.01a.02.02 0 0 1-.005.017l-.09.066.034.106a.015.015 0 0 1-.023.016l-.09-.064-.09.064a.02.02 0 0 1-.018 0 .02.02 0 0 1-.005-.016l.033-.106-.09-.066a.015.015 0 0 1 .01-.027h.113l.036-.105c0-.013.02-.013.024 0m-1.7 0 .035.105h.11q.01.001.014.01a.02.02 0 0 1-.005.017l-.09.066.034.106a.015.015 0 0 1-.023.016l-.09-.064-.09.064a.015.015 0 0 1-.023-.016l.034-.106-.09-.066a.02.02 0 0 1-.005-.017.02.02 0 0 1 .014-.01h.114l.036-.105c.002-.013.02-.013.024 0m.85 0 .037.105h.11q.011.001.015.01a.02.02 0 0 1-.005.017l-.09.066.034.106a.015.015 0 0 1-.023.016l-.09-.064-.09.064a.015.015 0 0 1-.023-.016l.033-.106-.09-.066a.02.02 0 0 1-.004-.017.02.02 0 0 1 .013-.01h.11l.037-.105c.002-.013.021-.013.027 0m1.7 0 .035.105h.11q.01.001.014.01a.02.02 0 0 1-.005.017l-.09.066.034.106a.015.015 0 0 1-.023.016l-.09-.064-.09.064a.015.015 0 0 1-.023-.016l.034-.106-.09-.066a.02.02 0 0 1-.005-.017.02.02 0 0 1 .014-.01h.11l.037-.105c.005-.013.025-.013.027 0m.85 0 .036.105h.11q.01.001.014.01a.02.02 0 0 1-.005.017l-.09.066.034.106a.015.015 0 0 1-.023.016l-.09-.064-.09.064a.015.015 0 0 1-.023-.016l.034-.106-.09-.066a.02.02 0 0 1-.005-.017.02.02 0 0 1 .014-.01h.11l.036-.105c.006-.013.025-.013.028 0m-1.274-.28.035.106h.111q.01.001.014.01a.02.02 0 0 1-.005.017l-.09.066.034.106a.015.015 0 0 1-.023.016l-.09-.064-.09.064a.02.02 0 0 1-.017 0 .02.02 0 0 1-.006-.016l.034-.106-.09-.066a.015.015 0 0 1 .009-.027h.11l.036-.105c.004-.015.024-.015.028 0m-.851 0 .036.106h.11q.01.001.014.01a.02.02 0 0 1-.005.017l-.09.066.034.106a.015.015 0 0 1-.023.016l-.09-.064-.09.064a.02.02 0 0 1-.017 0 .02.02 0 0 1-.006-.016l.037-.105-.09-.066a.02.02 0 0 1-.005-.017.02.02 0 0 1 .014-.01h.111l.036-.106c0-.015.02-.015.024 0m-.85 0 .035.106h.11q.011.001.015.01a.02.02 0 0 1-.005.017l-.09.066.034.106a.015.015 0 0 1-.023.016l-.09-.064-.09.064a.015.015 0 0 1-.023-.016l.037-.105-.09-.066a.015.015 0 0 1 .009-.027h.11l.036-.106c.002-.015.02-.015.024 0m2.543-.011a.01.01 0 0 1 .006.012l.036.105h.11q.011.001.015.01a.02.02 0 0 1-.005.017l-.09.066.034.106a.015.015 0 0 1-.023.016l-.09-.064-.09.064a.015.015 0 0 1-.023-.016l.034-.106-.09-.066a.02.02 0 0 1-.005-.017.02.02 0 0 1 .014-.01h.11l.036-.105q0-.008.007-.012a.01.01 0 0 1 .014 0m-2.969-.257.036.106h.11a.015.015 0 0 1 .01.027l-.09.066.033.106a.015.015 0 0 1-.023.016l-.09-.065-.09.065a.015.015 0 0 1-.023-.016l.037-.105-.09-.067a.015.015 0 0 1 .01-.026h.11l.036-.106c.002-.015.02-.015.024 0m.85 0 .036.106h.111a.015.015 0 0 1 .009.027l-.09.066.034.106a.015.015 0 0 1-.023.016l-.09-.065-.09.065a.02.02 0 0 1-.017 0 .02.02 0 0 1-.006-.016l.037-.105-.09-.067a.02.02 0 0 1-.005-.016.02.02 0 0 1 .014-.01h.11l.036-.106c0-.015.02-.015.025 0m.851 0 .036.106h.11a.015.015 0 0 1 .01.027l-.09.066.034.106a.015.015 0 0 1-.023.016l-.09-.065-.09.065a.02.02 0 0 1-.018 0 .02.02 0 0 1-.005-.016l.033-.106-.09-.066a.015.015 0 0 1 .01-.027h.113l.036-.106c0-.014.02-.014.024 0m.842-.011a.01.01 0 0 1 .007.011l.036.106h.11a.015.015 0 0 1 .01.027l-.09.066.033.106a.015.015 0 0 1-.023.016l-.09-.065-.09.065a.015.015 0 0 1-.023-.016l.034-.106-.09-.066a.015.015 0 0 1 .009-.027h.11l.037-.106q0-.007.006-.011a.01.01 0 0 1 .014 0m.845.002q.01 0 .013.01l.036.105h.11a.015.015 0 0 1 .01.027l-.09.066.033.106a.015.015 0 0 1-.023.016l-.09-.065-.09.065a.015.015 0 0 1-.023-.016l.037-.105-.09-.067a.02.02 0 0 1-.005-.016.02.02 0 0 1 .014-.01h.11l.036-.106a.013.013 0 0 1 .012-.01'
      />
      <path
        fill='#000'
        fillOpacity={0.08}
        fillRule='evenodd'
        d='M23.73 5.845h-7.5a.375.375 0 0 0-.375.375v4.5c0 .207.168.375.375.375h7.5a.375.375 0 0 0 .375-.375v-4.5a.375.375 0 0 0-.375-.375m-7.5-.375a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75h7.5a.75.75 0 0 0 .75-.75v-4.5a.75.75 0 0 0-.75-.75z'
        clipRule='evenodd'
      />
    </g>
    <defs>
      <clipPath id='8c366cdc13d40b6c69a15b798f35e845__a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(MarketEnergyWtiOilusIcon);
export default ForwardRef;
