import * as React from 'react';
import type { ImgHTMLAttributes } from 'react';
import { Ref, forwardRef } from 'react';
import illustrationSrc from './assets/DerivLightProvenTrackRecord.png';

interface IllustrationIconProps extends ImgHTMLAttributes<HTMLImageElement> {
  title?: string;
  titleId?: string;
}

const DerivLightProvenTrackRecordIcon = (
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
const ForwardRef = forwardRef(DerivLightProvenTrackRecordIcon);
export default ForwardRef;
