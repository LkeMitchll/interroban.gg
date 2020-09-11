import { createStyled } from "@stitches/react";

const theme = {
  colors: {
    $primary: "#191F18",
    $secondary: "#43564F",
  },
  space: {
    $0: "0",
    $1: "1rem",
    $2: "2rem",
    $3: "6rem",
  },
  fontSizes: {
    $1: "1rem",
    $2: "1.2rem",
    $3: "0.75rem",
  },
  fontWeights: {
    $normal: "400",
    $semi: "600",
  },
  fonts: {
    $system: "system-ui",
    $sans: "GT America Extended",
    $serif: "Blanco",
    $mono: "Pitch",
  },
  lineHeights: {
    $default: "1.4",
    $heading: "1.3",
    $crushed: "1.1",
  },
};

export const { styled, css } = createStyled({
  tokens: theme,
  breakpoints: {
    bp1: (rule) => `@media (min-width: 600px) { ${rule} }`,
    bp2: (rule) => `@media (min-width: 800px) { ${rule} }`,
    bp3: (rule) => `@media (min-width: 1000px) { ${rule} }`,
    bp4: (rule) => `@media (min-width: 1600px) { ${rule} }`,
  },
});
