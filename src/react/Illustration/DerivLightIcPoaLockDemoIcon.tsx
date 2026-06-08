import * as React from 'react';
import type { ImgHTMLAttributes } from 'react';
import { Ref, forwardRef } from 'react';
import illustrationSrc from './assets/DerivLightIcPoaLockDemo.png';

interface IllustrationIconProps extends ImgHTMLAttributes<HTMLImageElement> {
  title?: string;
  titleId?: string;
}

const DerivLightIcPoaLockDemoIcon = (
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
const ForwardRef = forwardRef(DerivLightIcPoaLockDemoIcon);
export default ForwardRef;
