import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFingerprintXlFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={36}
    viewBox='0 0 24 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.25 18v1.875Q2.157 20.907 1.125 21 .095 20.907 0 19.875V18q.047-3.375 1.64-6.047a11.9 11.9 0 0 1 4.313-4.312Q8.625 6.047 12 6q2.766 0 5.11 1.125 2.343 1.125 3.984 3.047.61.843-.094 1.594-.844.61-1.594-.094a9.5 9.5 0 0 0-3.281-2.485Q14.25 8.25 12 8.25q-4.125.094-6.89 2.86Q2.342 13.874 2.25 18m21.516-2.484Q24 16.734 24 18v1.875q-.093 1.032-1.125 1.125-1.03-.093-1.125-1.125V18q0-1.031-.187-2.016-.141-1.031.843-1.312 1.031-.141 1.36.844M12 9.75q3.516.094 5.86 2.438 2.296 2.295 2.39 5.812v1.172a32 32 0 0 1-.234 3.89q-.188.891-1.078.938-.563 0-.844-.375-.328-.375-.282-.937.188-1.736.188-3.516V18q-.047-2.531-1.734-4.266Q14.53 12.047 12 12q-.797 0-1.547.188-.843.234-1.406-.329-.375-.468-.235-.984.095-.516.657-.703A7.4 7.4 0 0 1 12 9.75m-4.922 3.234q.516.75 0 1.594Q6.047 16.078 6 18v1.172q0 2.016-.469 4.031-.234.75-1.031.797-.563 0-.89-.469a1.21 1.21 0 0 1-.235-.984q.375-1.687.375-3.375V18q.047-2.906 1.734-5.062.33-.376.797-.376.422.048.797.422M12 13.5q1.922.047 3.188 1.313Q16.452 16.078 16.5 18v1.172q0 2.813-.562 5.531-.189.75-.985.797-.468 0-.797-.375-.281-.375-.187-.89.469-2.532.469-5.063V18q-.048-1.031-.704-1.734-.702-.657-1.734-.703-1.031.046-1.734.703-.657.703-.703 1.734v1.172q0 2.859-.75 5.625-.236.656-.938.703-.562 0-.844-.422a1.23 1.23 0 0 1-.187-.937 19 19 0 0 0 .656-4.97V18q.047-1.922 1.313-3.187Q10.078 13.547 12 13.5m1.125 4.5v1.172q0 4.641-1.687 9l-.282.75q-.421.89-1.453.61-.89-.422-.61-1.454l.282-.703q1.5-3.938 1.5-8.203V18q.095-1.03 1.125-1.125 1.032.094 1.125 1.125' />
    </g>
    <defs>
      <clipPath id='d7b940220347801874626f4d6864bbce__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFingerprintXlFillIcon);
export default ForwardRef;
