import { memo, SVGProps } from 'react';

const Polygon1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 21 19' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M10.5 18.1603L0.5 0.839746H20.5L10.5 18.1603Z' fill='black' />
  </svg>
);

const Memo = memo(Polygon1Icon);
export { Memo as Polygon1Icon };
