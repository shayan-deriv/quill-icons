import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGearMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m6.969 5.188-.438 1.5c-.093.375-.375.656-.687.812-.25.125-.469.25-.688.375a1.27 1.27 0 0 1-1.062.219l-1.5-.375h-.125A3.4 3.4 0 0 0 2 8.406l-.156.219c-.125.25-.25.5-.344.75 0 .031.031.094.063.125l1.093 1.094c.25.281.375.687.344 1.031v.781c.031.344-.094.719-.344 1l-1.094 1.125a.24.24 0 0 0-.062.125c.094.25.219.5.344.75l.125.219c.156.219.312.469.468.688h.157l1.5-.375c.375-.094.781 0 1.062.187.219.156.438.281.688.406.312.157.593.438.687.813l.438 1.5c0 .031.031.062.062.093C7.344 19 7.656 19 8 19c.313 0 .625 0 .938-.062.03-.032.062-.063.062-.094l.438-1.5c.093-.375.374-.657.687-.813.25-.125.469-.25.688-.406.312-.187.687-.281 1.062-.187l1.5.374h.156c.156-.218.313-.468.469-.687l.125-.219c.125-.25.25-.5.344-.75a.24.24 0 0 0-.063-.125l-1.094-1.125a1.36 1.36 0 0 1-.343-1c0-.125.031-.25.031-.406 0-.125-.031-.25-.031-.375-.031-.344.094-.75.344-1.031L14.406 9.5a.24.24 0 0 0 .063-.125c-.094-.25-.219-.5-.344-.75L14 8.406c-.156-.25-.312-.469-.469-.687h-.156l-1.5.375c-.375.094-.75 0-1.062-.188a5 5 0 0 0-.688-.406c-.312-.156-.594-.437-.687-.812L9 5.188a.24.24 0 0 0-.062-.125C8.625 5.03 8.312 5 8 5c-.344 0-.656.031-.969.063a.24.24 0 0 0-.062.125M8 4c.406 0 .781.031 1.188.094.062.031.093.031.156.062.281.157.531.438.625.75l.437 1.5c0 .063.063.157.156.188.282.125.563.281.813.468.094.063.188.094.25.063l1.531-.375c.313-.094.688-.031.969.156l.125.125c.219.25.406.563.594.875l.156.219v.031c.156.313.313.625.438.938a.3.3 0 0 1 .03.156c.032.344-.093.688-.343.938l-1.094 1.124c-.031.032-.062.126-.062.22 0 .155.031.312.031.468s-.031.313-.031.469c0 .125.031.219.062.25l1.094 1.125c.25.25.375.594.344.937 0 .031 0 .094-.031.156-.126.313-.282.626-.438.938l-.156.25a5.6 5.6 0 0 1-.625.875.4.4 0 0 1-.094.125c-.281.188-.656.25-1 .156l-1.5-.375c-.062-.031-.156 0-.25.063-.25.156-.531.312-.812.468-.094.032-.157.125-.157.188l-.437 1.469a1.32 1.32 0 0 1-.625.781c-.063.031-.094.031-.156.063C8.78 19.968 8.406 20 8 20s-.812-.031-1.219-.062c-.062-.032-.093-.032-.156-.063A1.32 1.32 0 0 1 6 19.094l-.437-1.469c0-.062-.063-.156-.157-.187a4.2 4.2 0 0 1-.812-.47c-.094-.062-.188-.062-.25-.062l-1.5.375a1.17 1.17 0 0 1-.969-.156c-.062-.031-.094-.062-.125-.094-.25-.281-.437-.593-.625-.906L1 15.906l-.031-.031c-.156-.312-.313-.625-.438-.937 0-.063-.031-.094-.031-.157 0-.344.094-.687.344-.937l1.094-1.125c.03-.031.062-.125.062-.25v-.938c0-.094-.031-.187-.062-.219L.843 10.189C.594 9.938.5 9.594.5 9.25c0-.062.031-.094.031-.156.125-.313.282-.625.438-.938L1 8.125l.125-.219a6 6 0 0 1 .625-.875.24.24 0 0 1 .125-.125 1.17 1.17 0 0 1 .969-.156l1.5.375c.062.031.156 0 .25-.062.25-.157.531-.344.812-.47.094-.03.157-.124.157-.187L6 4.906c.094-.312.344-.593.625-.75.063-.031.094-.031.156-.062A8 8 0 0 1 8 4m-1.75 8c0 .656.313 1.219.875 1.531.531.313 1.188.313 1.75 0 .531-.312.875-.875.875-1.531 0-.625-.344-1.187-.875-1.5-.562-.312-1.219-.312-1.75 0A1.68 1.68 0 0 0 6.25 12m4.5 0c0 1-.531 1.906-1.375 2.406a2.86 2.86 0 0 1-2.75 0C5.75 13.906 5.25 13 5.25 12c0-.969.5-1.875 1.375-2.375a2.86 2.86 0 0 1 2.75 0A2.78 2.78 0 0 1 10.75 12' />
    </g>
    <defs>
      <clipPath id='a5c6a3268dec40694e539e88e2ec8850__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGearMdRegularIcon);
export default ForwardRef;
