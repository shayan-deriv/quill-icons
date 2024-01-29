import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedApplePaySmIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={22}
    viewBox='0 0 18 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3.45 8.098V8.07q.327-.383.3-.902-.492.027-.848.437a1.24 1.24 0 0 0-.328.875q.547 0 .875-.382m.3.464q.164 0 .465.083.329.109.601.492H4.79q-.11.055-.328.328-.246.247-.274.765.028.602.329.875.327.274.437.301 0 .028-.11.274a4 4 0 0 1-.273.547 3.7 3.7 0 0 1-.41.492.77.77 0 0 1-.492.219.8.8 0 0 1-.438-.11 1.3 1.3 0 0 0-.52-.137 1.3 1.3 0 0 0-.519.137 1.2 1.2 0 0 1-.41.11.7.7 0 0 1-.52-.22 3 3 0 0 1-.41-.519q-.382-.574-.546-1.394T.496 9.3A1.45 1.45 0 0 1 1.7 8.562q.3.028.574.165.22.08.356.109.137-.027.355-.11.329-.164.766-.164m2.734-1.011H8.48q.794.027 1.286.492.465.492.464 1.258 0 .793-.492 1.285-.465.465-1.285.492H7.305v1.805h-.82zm.82.71v2.106h.958q1.12-.027 1.148-1.039-.027-1.04-1.148-1.066zm4.458 4.677q-.601 0-.957-.329-.356-.3-.356-.82.027-1.039 1.477-1.148l1.039-.055v-.3q-.027-.657-.793-.657-.657.027-.793.547h-.738q.027-.547.464-.875.41-.328 1.094-.328.711 0 1.121.355.438.329.438.902v2.653h-.766v-.63h-.027q-.383.657-1.203.684m.218-.63q.439 0 .711-.245a.78.78 0 0 0 .274-.602v-.3l-.93.054q-.765.055-.793.547.056.519.738.547m2.79 2.024h-.301v-.656q.11.027.246.027.52.027.683-.547l.082-.246-1.394-3.883h.848l.984 3.145h.027l.957-3.145h.848l-1.45 4.075q-.245.682-.573.957-.355.3-.957.273' />
    </g>
    <defs>
      <clipPath id='70632ad9443e710854ecc70cd4929b22__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedApplePaySmIcon);
export default ForwardRef;
