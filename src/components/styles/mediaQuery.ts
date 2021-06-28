/* eslint-disable @typescript-eslint/restrict-template-expressions */
const breakMediapoints: { [key: string]: number } = {
  xs: 360,
  sm: 460,
  md: 668,
  lg: 968,
  xl: 1180,
};

export const mediaQuery =
  (key: string) =>
  (style: TemplateStringsArray): string =>
    `@media only screen and (min-width: ${breakMediapoints[key]}px) { ${style} }`;

export const mediaQueryMax =
  (key: string) =>
  (style: TemplateStringsArray): string =>
    `@media only screen and (max-width: ${breakMediapoints[key]}px) { ${style} }`;

// example

// ${mediaQuery('sm')`
//   font-size: 1.8rem;
//   height: 35rem;
// `};
