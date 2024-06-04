import { forwardRef } from 'react';
import { SVGAttributes } from './types';

export const PresentIcon = forwardRef<SVGSVGElement, SVGAttributes>((props, ref) => (
  <svg
    width="32"
    height="35"
    viewBox="0 0 32 35"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    ref={ref}
  >
    <path d="M2.92884 30.7601C2.92884 33.4921 4.53565 34.9545 7.2791 34.9545H14.8257V20.8855H2.92884V30.7601ZM17.844 34.9545H25.4066C28.134 34.9545 29.7569 33.4921 29.7569 30.7601V20.8855H17.844V34.9545ZM0.710938 16.3738C0.710938 18.1536 1.73229 18.9472 3.50499 18.9472H14.8257V9.94659H12.4141C9.96331 9.94659 8.54194 8.4477 8.54194 6.70925C8.54194 5.00539 9.73945 3.96899 11.4721 3.96899C13.3231 3.96899 14.8257 5.43328 14.8257 7.70242V9.94659H17.844V7.70242C17.844 5.43328 19.3525 3.96899 21.2004 3.96899C22.9331 3.96899 24.1306 5.00539 24.1306 6.70925C24.1306 8.4477 22.7195 9.94659 20.2585 9.94659H17.844V18.9472H29.1777C30.9505 18.9472 31.9747 18.1536 31.9747 16.3738V12.788C31.9747 10.8238 30.8669 9.94659 28.9098 9.94659H25.7105C26.6336 9.04854 27.1911 7.8331 27.1911 6.41813C27.1911 3.22789 24.6604 0.95459 21.4759 0.95459C19.1215 0.95459 17.1285 2.28564 16.3348 4.61883C15.544 2.28564 13.5612 0.95459 11.1938 0.95459C8.02535 0.95459 5.48142 3.22789 5.48142 6.41813C5.48142 7.8331 6.03902 9.04854 6.97517 9.94659H3.77594C1.88442 9.94659 0.710938 10.8238 0.710938 12.788V16.3738Z" />
  </svg>
));
