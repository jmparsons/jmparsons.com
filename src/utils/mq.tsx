import { css } from 'styled-components';

interface Sizes {
  [key: string]: number;
}

const sizes: Sizes = {
  desktop: 1024,
  tablet: 768,
  mobile: 600,
};

const media = Object.keys(sizes).reduce((accumulator: any, label: string) => {
  const emSize = sizes[label] / 16;
  accumulator[label] = (...args: any[]) => css`
    @media (max-width: ${emSize}em) {
      ${(css as any)(...args)};
    }
  `;
  return accumulator;
}, {});

export { media };
