import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const MarketCryptocurrencyBatusdIcon = (
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
    <g clipPath='url(#3c0127f917428b915cdb99e10256d042__a)'>
      <path fill='#FF5000' d='M20 11a8.999 8.999 0 1 1-17.998 0A8.999 8.999 0 0 1 20 11' />
      <path
        fill='#fff'
        fillRule='evenodd'
        d='m11 5.47-6.199 9.298H17.2zm-2.066 7.232 2.067-3.1 2.066 3.1z'
        clipRule='evenodd'
      />
    </g>
    <path
      fill='#fff'
      d='M12.019 20.438a9 9 0 0 0 .052 1.687h17.86a9 9 0 0 0 .051-1.687zM21 17.063v1.687h8.716a9 9 0 0 0-.621-1.687zM21 15.376h7.026a9 9 0 0 0-1.778-1.688H21zM12.45 23.812c.194.592.449 1.157.756 1.688h15.59q.462-.798.756-1.688zM14.466 27.187a9 9 0 0 0 2.175 1.687h8.72a9 9 0 0 0 2.175-1.687z'
    />
    <path
      fill='#F44336'
      d='M21 12.001v1.687h5.248A8.96 8.96 0 0 0 21 12.001M21 20.438h8.982a9 9 0 0 0-.266-1.688h-8.715zM21 17.063h8.095a9 9 0 0 0-1.07-1.687h-7.024zM29.93 22.125a9 9 0 0 1-.378 1.687H12.45a9 9 0 0 1-.379-1.687zM13.206 25.5a9 9 0 0 0 1.26 1.687h13.07a9 9 0 0 0 1.26-1.687zM21 29.999a8.96 8.96 0 0 0 4.36-1.125h-8.72A8.96 8.96 0 0 0 21 30'
    />
    <path
      fill='#283991'
      fillRule='evenodd'
      d='M21 20.438H12.02q.028-.45.099-.886l-.007.038.016-.007a.044.044 0 0 0 .017-.05l-.015-.047q.034-.2.076-.397l-.002.009.11-.08a.045.045 0 0 0-.028-.08h-.046a9 9 0 0 1 .693-1.927l.149-.107.27.194q.011.01.025.01a.044.044 0 0 0 .043-.027.04.04 0 0 0 0-.032l-.1-.316.27-.2a.045.045 0 0 0-.028-.08h-.328a9.05 9.05 0 0 1 2.512-2.758l.158.113a.05.05 0 0 0 .035.009l.012-.004.003-.002.003-.001a.044.044 0 0 0 .016-.05l-.059-.184a8.96 8.96 0 0 1 5.088-1.575zm-1.397-8.079-.08-.237-.135.023-.073.216h-.332l-.017.004-.005.002-.002.002a.045.045 0 0 0-.003.072l.27.199-.11.315a.045.045 0 0 0 .047.056.1.1 0 0 0 .022-.007l.27-.194.27.194q.007.005.016.008.02.004.036-.007a.044.044 0 0 0 .017-.05l-.102-.317.27-.199a.1.1 0 0 0 .013-.016l.001-.004.002-.005a.1.1 0 0 0-.001-.024.05.05 0 0 0-.042-.03zm-2.378.646a.044.044 0 0 0 .017-.05l-.038-.117-.094.045-.063.03.125.09a.044.044 0 0 0 .053.002m2.09 5.934.107-.317a.038.038 0 0 1 .074-.001l.107.316h.332a.05.05 0 0 1 .042.031.05.05 0 0 1-.015.05l-.27.198.102.317a.044.044 0 0 1-.07.049l-.27-.194-.27.194-.007.004-.003.001-.005.002a.04.04 0 0 1-.019 0 .05.05 0 0 1-.029-.02l-.001-.002-.002-.002-.001-.004a.05.05 0 0 1-.002-.028l.111-.315-.27-.199a.045.045 0 0 1 .003-.072l.004-.002.003-.002h.002l.005-.002.01-.002zm-2.371-.318a.038.038 0 0 0-.074.001l-.107.317h-.332a.045.045 0 0 0-.027.08l.27.2-.11.314a.05.05 0 0 0 .004.035l.003.004.002.003.008.007c.015.01.036.01.052 0l.27-.194.27.194a.04.04 0 0 0 .02.009h.013a.044.044 0 0 0 .036-.058l-.102-.317.27-.199.009-.009.002-.004.003-.005.002-.009v-.017l-.001-.005a.05.05 0 0 0-.042-.03h-.332zm-2.546 0 .107.316h.332a.045.045 0 0 1 .043.057.05.05 0 0 1-.016.023l-.27.2.102.316.002.007v.009l-.002.013a.044.044 0 0 1-.069.02l-.27-.194-.27.194a.045.045 0 0 1-.07-.03v-.019l.111-.315-.27-.199a.05.05 0 0 1-.014-.05.05.05 0 0 1 .041-.03h.333l.107-.317c.001-.045.06-.045.073-.001m3.822-.837a.041.041 0 0 0-.075-.024.04.04 0 0 0-.008.024l-.107.317h-.332a.045.045 0 0 0-.027.08l.27.198-.102.317a.045.045 0 0 0 .07.049l.27-.194.27.194a.044.044 0 0 0 .069-.049l-.102-.317.27-.198a.045.045 0 0 0 0-.07.04.04 0 0 0-.027-.01h-.332zm-2.546 0 .107.317h.332a.045.045 0 0 1 .027.08l-.27.198.102.317a.044.044 0 0 1-.07.049l-.27-.194-.27.194a.045.045 0 0 1-.069-.049l.102-.317-.27-.198a.045.045 0 0 1 .027-.08h.332l.107-.317c.011-.043.07-.043.083 0m-2.445.317-.107-.317c-.013-.043-.072-.043-.073 0l-.107.317h-.352l-.012.006a.045.045 0 0 0-.005.073l.27.2-.102.316a.045.045 0 0 0 .07.049l.27-.194.27.194a.044.044 0 0 0 .07-.049l-.103-.317.27-.198a.045.045 0 0 0-.027-.08zm6.267-1.128.107.317h.332a.045.045 0 0 1 .027.08l-.27.199.102.316a.04.04 0 0 1-.008.043l-.009.008a.044.044 0 0 1-.052-.002l-.27-.194-.27.194a.045.045 0 0 1-.052 0 .05.05 0 0 1-.018-.049l.102-.316-.27-.2a.045.045 0 0 1 .027-.08h.332l.107-.316c.016-.037.076-.037.083 0m-2.445.317-.107-.317c-.007-.037-.067-.037-.083 0l-.107.317h-.332a.045.045 0 0 0-.027.08l.27.199-.102.316a.045.045 0 0 0 .07.049l.27-.194.27.194a.044.044 0 0 0 .069-.049l-.102-.316.27-.2a.045.045 0 0 0-.027-.08zm-2.653-.317.107.317h.332q.032.002.042.03a.05.05 0 0 1-.015.05l-.27.199.102.316a.044.044 0 0 1-.07.049l-.27-.194-.27.194a.045.045 0 0 1-.069-.049l.102-.316-.27-.2a.05.05 0 0 1-.014-.049.05.05 0 0 1 .041-.03h.342l.107-.317c.001-.037.06-.037.073 0m3.822-.836a.041.041 0 0 0-.063-.035h-.002l-.003.003-.003.002-.002.003a.04.04 0 0 0-.01.022v.005l-.107.317h-.332a.045.045 0 0 0-.027.08l.27.199-.102.316a.05.05 0 0 0 .01.042l.004.004.004.003a.05.05 0 0 0 .052 0l.27-.194.27.194a.04.04 0 0 0 .052.002.04.04 0 0 0 .019-.03.04.04 0 0 0-.002-.02l-.102-.317.27-.2a.045.045 0 0 0-.027-.08h-.332zm-2.546 0 .107.317h.332a.045.045 0 0 1 .027.08l-.27.199.102.316.002.008a.04.04 0 0 1-.008.032l-.01.01a.044.044 0 0 1-.053-.001l-.27-.194-.27.194a.045.045 0 0 1-.07-.027v-.005l-.001-.005.002-.012.101-.316-.27-.2a.045.045 0 0 1 .027-.08h.332l.107-.316c.011-.043.07-.043.083 0m3.93-.489-.108-.316a.038.038 0 0 0-.052-.026.04.04 0 0 0-.022.027l-.107.317h-.332a.045.045 0 0 0-.027.08l.27.199-.11.315a.045.045 0 0 0 .07.049l.269-.194.27.194a.044.044 0 0 0 .052.001.044.044 0 0 0 .017-.05l-.102-.317.27-.199a.045.045 0 0 0-.027-.08zm-2.701-.358q.016 0 .027.011a.04.04 0 0 1 .014.03l.107.317h.332a.045.045 0 0 1 .027.08l-.27.2.102.316a.04.04 0 0 1-.006.04l-.002.003-.003.002-.006.005a.044.044 0 0 1-.053-.001l-.27-.194-.27.194a.045.045 0 0 1-.069-.049l.102-.317-.27-.199a.045.045 0 0 1 .027-.08h.332l.107-.316c0-.023.019-.042.041-.042m-2.398.358-.107-.316c-.012-.044-.072-.044-.073 0l-.107.316h-.342a.045.045 0 0 0-.027.08l.27.2-.101.316a.045.045 0 0 0 .069.049l.27-.194.27.194a.044.044 0 0 0 .069-.049l-.102-.317.27-.199a.045.045 0 0 0-.027-.08zm1.17-1.16.106.317h.332a.05.05 0 0 1 .042.03.05.05 0 0 1-.015.05l-.27.199.102.317a.044.044 0 0 1-.07.048l-.27-.193-.27.193a.045.045 0 0 1-.052 0 .05.05 0 0 1-.017-.048l.102-.317-.27-.199a.045.045 0 0 1 .027-.08h.332l.107-.317c.011-.037.07-.037.083 0m2.652.317-.107-.317c-.007-.037-.067-.037-.083 0l-.107.317h-.332a.045.045 0 0 0-.027.08l.27.199-.102.317a.045.045 0 0 0 .07.048l.27-.193.27.193a.044.044 0 0 0 .07-.049l-.103-.316.27-.199a.045.045 0 0 0-.027-.08zm-1.383-1.121.107.317h.342l.012.006a.045.045 0 0 1 .005.074l-.27.199.102.316a.044.044 0 0 1-.07.049l-.27-.194-.27.194a.045.045 0 0 1-.07-.044l.001-.005.102-.316-.27-.2a.045.045 0 0 1 .027-.08h.332l.107-.316c.016-.037.076-.037.083 0m2.66.317-.108-.317c-.007-.037-.067-.037-.083 0l-.107.317h-.332a.045.045 0 0 0-.041.03.05.05 0 0 0 .014.05l.27.199-.102.316-.001.008v.007a.04.04 0 0 0 .009.024l.01.01c.015.01.036.01.052 0l.27-.194.27.194a.044.044 0 0 0 .052.002.044.044 0 0 0 .017-.05l-.102-.317.27-.2a.045.045 0 0 0-.027-.08zm-1.391-1.178.006.016.001.008.107.317h.332l.012.001.01.005q.014.008.02.024a.05.05 0 0 1-.015.05l-.27.199.102.316a.044.044 0 0 1-.017.05.044.044 0 0 1-.052-.001l-.27-.194-.27.194a.05.05 0 0 1-.052 0 .05.05 0 0 1-.018-.049l.102-.316-.27-.2a.05.05 0 0 1-.014-.049.05.05 0 0 1 .041-.03h.332l.107-.317a.041.041 0 0 1 .062-.036.04.04 0 0 1 .014.012'
      clipRule='evenodd'
    />
    <path fill='#283991' d='m14.692 14.583-.044.043-.02.02a.044.044 0 0 0 .068-.05z' />
    <path
      fill='#fff'
      d='m19.388 12.145.135-.023.08.237h.332a.045.045 0 0 1 .027.08l-.27.2.102.316a.044.044 0 0 1-.017.05.044.044 0 0 1-.052-.002l-.27-.193-.27.194a.045.045 0 0 1-.07-.05l.111-.314-.27-.199a.045.045 0 0 1 .027-.08h.332zM17.047 12.914q.079-.038.157-.075l.038.116a.044.044 0 0 1-.07.049zM15.745 13.695l.168-.119.059.183a.044.044 0 0 1-.07.049zM14.628 14.646l.064-.063.004.013a.044.044 0 0 1-.068.05M12.932 17.011q.141-.285.3-.557h.33a.045.045 0 0 1 .026.08l-.27.199.102.316a.044.044 0 0 1-.07.049l-.27-.194zM12.112 19.59l.015-.007a.044.044 0 0 0 .017-.05l-.015-.047zM12.203 19.098l.036-.16h.046c.019 0 .036.012.042.03a.05.05 0 0 1-.015.05zM19.496 18.62a.038.038 0 0 0-.074.002l-.107.317h-.332a.045.045 0 0 0-.027.08l.27.2-.11.314a.045.045 0 0 0 .069.049l.27-.194.27.194a.044.044 0 0 0 .069-.049l-.102-.317.27-.199a.045.045 0 0 0-.027-.08h-.332zM16.944 18.62a.038.038 0 0 0-.074.002l-.107.317h-.332a.045.045 0 0 0-.027.08l.27.2-.11.314a.045.045 0 0 0 .069.049l.27-.194.27.194a.044.044 0 0 0 .069-.049l-.102-.317.27-.199a.045.045 0 0 0-.027-.08h-.332zM14.505 18.937l-.107-.316c-.012-.044-.072-.044-.073.001l-.107.317h-.333a.045.045 0 0 0-.027.08l.27.2-.11.314a.045.045 0 0 0 .069.049l.27-.194.27.194a.044.044 0 0 0 .069-.049l-.102-.317.27-.199a.045.045 0 0 0-.027-.08zM18.22 17.784a.041.041 0 0 0-.083 0l-.107.317h-.332a.045.045 0 0 0-.027.08l.27.198-.102.317a.045.045 0 0 0 .07.049l.27-.194.27.194a.044.044 0 0 0 .069-.049l-.102-.317.27-.198a.045.045 0 0 0-.027-.08h-.332zM15.781 18.1l-.107-.316c-.012-.043-.072-.043-.083 0l-.107.317h-.332a.045.045 0 0 0-.027.08l.27.198-.101.317a.045.045 0 0 0 .069.049l.27-.194.27.194a.044.044 0 0 0 .07-.049l-.103-.317.27-.198a.045.045 0 0 0-.027-.08zM13.23 18.1l-.108-.316c-.013-.043-.072-.043-.073 0l-.107.317H12.6a.045.045 0 0 0-.027.08l.27.198-.102.317a.045.045 0 0 0 .07.049l.27-.194.27.194a.044.044 0 0 0 .07-.049l-.103-.317.27-.198a.045.045 0 0 0-.027-.08zM19.603 17.29l-.107-.317c-.007-.037-.067-.037-.083 0l-.107.317h-.332a.045.045 0 0 0-.027.08l.27.199-.102.316a.045.045 0 0 0 .07.049l.27-.194.27.194a.044.044 0 0 0 .069-.049l-.102-.316.27-.2a.045.045 0 0 0-.027-.08zM17.051 17.29l-.107-.317c-.007-.037-.067-.037-.083 0l-.107.317h-.332a.045.045 0 0 0-.027.08l.27.199-.102.316a.045.045 0 0 0 .07.049l.27-.194.27.194a.044.044 0 0 0 .069-.049l-.102-.316.27-.2a.045.045 0 0 0-.027-.08zM14.505 17.29l-.107-.317c-.012-.037-.072-.037-.073 0l-.107.317h-.342a.05.05 0 0 0-.041.03.05.05 0 0 0 .014.05l.27.199-.101.316a.045.045 0 0 0 .069.049l.27-.194.27.194a.044.044 0 0 0 .069-.049l-.102-.316.27-.2a.045.045 0 0 0-.027-.08zM18.22 16.137a.041.041 0 0 0-.083 0l-.107.317h-.332a.045.045 0 0 0-.027.08l.27.199-.102.316a.045.045 0 0 0 .07.049l.27-.194.27.194a.044.044 0 0 0 .069-.049l-.102-.316.27-.2a.045.045 0 0 0-.027-.08h-.332zM15.781 16.454l-.107-.317c-.012-.043-.072-.043-.083 0l-.107.317h-.332a.045.045 0 0 0-.027.08l.27.199-.101.316a.045.045 0 0 0 .069.049l.27-.194.27.194a.044.044 0 0 0 .07-.049l-.103-.316.27-.2a.045.045 0 0 0-.027-.08zM19.496 15.332a.038.038 0 0 0-.074.002l-.107.316h-.332a.045.045 0 0 0-.027.08l.27.199-.11.315a.045.045 0 0 0 .07.049l.269-.194.27.194a.044.044 0 0 0 .052.001.044.044 0 0 0 .017-.05l-.102-.317.27-.199a.045.045 0 0 0-.027-.08h-.332zM16.944 15.332a.041.041 0 1 0-.083 0l-.107.316h-.332a.045.045 0 0 0-.027.08l.27.2-.102.316a.045.045 0 0 0 .07.049l.27-.194.27.194a.044.044 0 0 0 .052.001.044.044 0 0 0 .017-.05l-.102-.317.27-.199a.045.045 0 0 0-.027-.08h-.332zM14.505 15.648l-.107-.316c-.012-.044-.072-.044-.073 0l-.107.316h-.342a.045.045 0 0 0-.027.08l.27.2-.101.316a.045.045 0 0 0 .069.049l.27-.194.27.194a.044.044 0 0 0 .069-.049l-.102-.317.27-.199a.045.045 0 0 0-.027-.08zM15.781 14.805l-.107-.317c-.012-.037-.072-.037-.083 0l-.107.317h-.332a.045.045 0 0 0-.027.08l.27.199-.101.317a.045.045 0 0 0 .069.048l.27-.193.27.193a.044.044 0 0 0 .069-.048l-.102-.317.27-.199a.045.045 0 0 0-.027-.08zM18.327 14.805l-.107-.317c-.007-.037-.067-.037-.083 0l-.107.317h-.332a.045.045 0 0 0-.027.08l.27.199-.102.317a.045.045 0 0 0 .07.048l.27-.193.27.193a.044.044 0 0 0 .07-.049l-.103-.316.27-.199a.045.045 0 0 0-.027-.08zM17.051 14l-.107-.316c-.007-.037-.067-.037-.083 0l-.107.317h-.332a.045.045 0 0 0-.027.08l.27.199-.102.316a.045.045 0 0 0 .07.049l.27-.194.27.194a.044.044 0 0 0 .07-.049l-.103-.316.27-.2a.045.045 0 0 0-.027-.08zM19.603 14l-.107-.316c-.007-.037-.067-.037-.083 0l-.107.317h-.332a.045.045 0 0 0-.027.08l.27.199-.102.316a.045.045 0 0 0 .07.049l.27-.194.27.194a.044.044 0 0 0 .052.002.044.044 0 0 0 .017-.05l-.102-.317.27-.2a.045.045 0 0 0-.027-.08zM18.22 12.847a.041.041 0 0 0-.083 0l-.107.317h-.332a.05.05 0 0 0-.041.03.05.05 0 0 0 .014.05l.27.199-.102.316a.045.045 0 0 0 .07.049l.27-.194.27.194a.044.044 0 0 0 .07-.049l-.103-.316.27-.2a.045.045 0 0 0-.027-.08h-.332z'
    />
    <defs>
      <clipPath id='3c0127f917428b915cdb99e10256d042__a'>
        <path fill='#fff' d='M2.002 2.001H20v17.998H2.002z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(MarketCryptocurrencyBatusdIcon);
export default ForwardRef;
