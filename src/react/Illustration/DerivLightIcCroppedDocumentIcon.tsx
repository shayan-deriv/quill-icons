import * as React from 'react';
import type { QuillIllustrationProps } from '../../types';
import { Ref, forwardRef } from 'react';
import illustrationSrc from './assets/DerivLightIcCroppedDocument.png';

const DerivLightIcCroppedDocumentIcon = (
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
const ForwardRef = forwardRef(DerivLightIcCroppedDocumentIcon);
export default ForwardRef;
