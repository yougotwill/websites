import { forwardRef } from 'react';
import { SVGAttributes } from './types';

export const PresentIcon = forwardRef<SVGSVGElement, SVGAttributes>((props, ref) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 35" {...props} ref={ref}>
    <path d="M2.93 30.76c0 2.73 1.6 4.2 4.35 4.2h7.55V20.88H2.93v9.87Zm14.91 4.2h7.57c2.72 0 4.35-1.47 4.35-4.2v-9.87H17.84v14.06ZM.71 16.36c0 1.78 1.02 2.58 2.8 2.58h11.32v-9H12.4c-2.45 0-3.87-1.5-3.87-3.24 0-1.7 1.2-2.74 2.93-2.74 1.85 0 3.36 1.46 3.36 3.73v2.25h3.01V7.7c0-2.27 1.51-3.73 3.36-3.73 1.73 0 2.93 1.04 2.93 2.74 0 1.74-1.41 3.24-3.87 3.24h-2.42v9h11.34c1.77 0 2.8-.8 2.8-2.58V12.8c0-1.97-1.11-2.84-3.07-2.84h-3.2a4.84 4.84 0 0 0 1.48-3.53c0-3.2-2.53-5.47-5.71-5.47a5.26 5.26 0 0 0-5.15 3.67A5.25 5.25 0 0 0 11.2.95c-3.16 0-5.7 2.28-5.7 5.47a4.8 4.8 0 0 0 1.49 3.53h-3.2c-1.9 0-3.07.87-3.07 2.84v3.58Z" />
  </svg>
));
