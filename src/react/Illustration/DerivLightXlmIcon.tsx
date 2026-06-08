import * as React from 'react';
import type { QuillIllustrationProps } from '../../types';
import { Ref, forwardRef } from 'react';
import illustrationSrc from './assets/DerivLightXlm.png';

const DerivLightXlmIcon = (
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
const ForwardRef = forwardRef(DerivLightXlmIcon);
export default ForwardRef;
