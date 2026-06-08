import * as React from 'react';
import type { QuillIllustrationProps } from '../../types';
import { Ref, forwardRef } from 'react';
import illustrationSrc from './assets/DerivLightEmptyCardboardBox.png';

const DerivLightEmptyCardboardBoxIcon = (
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
const ForwardRef = forwardRef(DerivLightEmptyCardboardBoxIcon);
export default ForwardRef;
