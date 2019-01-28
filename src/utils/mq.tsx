import { css, ThemedCssFunction } from 'styled-components';

enum Breakpoints {
  desktop = 1024,
  tablet = 768,
  mobile = 600,
}

type BreakpointsMap = Record<keyof typeof Breakpoints, ThemedCssFunction<any>>;

export const media: BreakpointsMap = Object.keys(Breakpoints).reduce(
  (mediaQueries: BreakpointsMap, label: string) => ({
    ...mediaQueries,
    [label]: (...args: any[]) => css`
      @media (max-width: ${Breakpoints[label as keyof typeof Breakpoints] / 16}em) {
        ${(css as any)(...args)};
      }
    `,
  }),
  {} as BreakpointsMap,
);
