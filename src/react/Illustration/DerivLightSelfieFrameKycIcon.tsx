import * as React from 'react';
import type { ImgHTMLAttributes } from 'react';
import { Ref, forwardRef } from 'react';
import illustrationSrc from './assets/DerivLightSelfieFrameKyc.png';

interface IllustrationIconProps extends ImgHTMLAttributes<HTMLImageElement> {
  title?: string;
  titleId?: string;
}

const DerivLightSelfieFrameKycIcon = (
  { title, titleId, alt, ...props }: IllustrationIconProps,
  ref: Ref<HTMLImageElement>,
) => (
  <img
    src={illustrationSrc}
    ref={ref}
    role='img'
    alt={alt ?? title ?? ''}
    aria-labelledby={titleId}
    {...props}
  />
);
const ForwardRef = forwardRef(DerivLightSelfieFrameKycIcon);
export default ForwardRef;
