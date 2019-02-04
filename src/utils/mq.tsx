import { css, ThemedCssFunction } from 'styled-components';

export enum Breakpoints {
  small = 380,
  tablet = 768,
  desktop = 1024,
  desktopXL = 1200,
}

type BreakpointsMap = Record<keyof typeof Breakpoints, ThemedCssFunction<any>>;

export const media: BreakpointsMap = Object.keys(Breakpoints).reduce(
  (mediaQueries: BreakpointsMap, label: string) => ({
    ...mediaQueries,
    [label]: (...args: any[]) => css`
      @media (min-width: ${Breakpoints[label as keyof typeof Breakpoints] / 16}em) {
        ${(css as any)(...args)};
      }
    `,
  }),
  {} as BreakpointsMap,
);
