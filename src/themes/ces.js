import { theme } from "@chakra-ui/core";
import LogoWhite from "./logos/ces-white.svg";

const data = {
  pretitle: "Rencontre de codeuses & codeurs à Rouen",
  title: "La conférence IT en Normandie",
};

const logos = {
  alt: "Codeurs en Seine",
  white: LogoWhite,
};

const colors = {
  ...theme.colors,
  brand: {
    50: "#E1EEFA",
    100: "#BAD3F3",
    200: "#8BB9F2",
    300: "#68A2E4",
    400: "#418EDE",
    500: "#247BCE",
    600: "#0066B3",
    700: "#004081",
    800: "#082348",
    900: "#050C1B",
  },
};

const fonts = {
  body: 'Lato, "Helvetica Neue", Helvetica, Arial, sans-serif;',
  heading: 'Montserrat, "Helvetica Neue", Helvetica, Arial, sans-serif',
};

const gradients = {
  brand: `linear-gradient(45deg, #007dc5, #034ea2)`,
};

const shadows = {
  ...theme.shadows,
  paper: `
    rgba(32, 47, 71, 0.06) 0px 0.8125rem 0.4375rem -0.4375rem,
    rgba(32, 47, 71, 0.08) 0.625rem 0.25rem 0.4375rem -0.5rem,
    rgba(32, 47, 71, 0.08) -0.625rem 0.25rem 0.4375rem -0.5rem,
    rgba(32, 47, 71, 0.06) 0px 0.1875rem 0.375rem 0px,
    rgba(32, 47, 71, 0.04) 0px -0.25rem 0.5rem -0.125rem,
    rgba(32, 47, 71, 0.03) 0px 0px 0px 0.0625rem;
  `,
  brand: `0 0.25rem 1.25rem rgba(0, 102, 179, 0.2)`,
};

export default {
  ...theme,
  themeName: "ces",
  data,
  colors,
  fonts,
  shadows,
  gradients,
  logos,
};
