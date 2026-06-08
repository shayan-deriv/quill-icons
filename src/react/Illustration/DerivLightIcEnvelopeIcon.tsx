import * as React from 'react';
import type { QuillIllustrationProps } from '../../types';
import { Ref, forwardRef } from 'react';
import illustrationSrc from './assets/DerivLightIcEnvelope.png';

const DerivLightIcEnvelopeIcon = (
  { title, titleId, alt, ...props }: QuillIllustrationProps,
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
const ForwardRef = forwardRef(DerivLightIcEnvelopeIcon);
export default ForwardRef;
