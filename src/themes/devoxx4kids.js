import { theme } from "@chakra-ui/react";
import LogoWhite from "./logos/ces-white.svg";

const data = {
  pretitle: "Ateliers de programmation pour les 8-14 ans à Rouen",
  title: "Devoxx4kids Rouen",
};

const logos = {
  alt: "Codeurs en Seine",
  white: LogoWhite,
};

const colors = {
  ...theme.colors,
  brand: {
    50: "#fff1dd",
    100: "#f9dcb5",
    200: "#f3c98a",
    300: "#ecb85d",
    400: "#e7aa32",
    500: "#cd8418",
    600: "#a05d10",
    700: "#733b09",
    800: "#451e01",
    900: "#1b0600",
  },
};

const fonts = {
  body: 'Lato, "Helvetica Neue", Helvetica, Arial, sans-serif;',
  heading: 'Montserrat, "Helvetica Neue", Helvetica, Arial, sans-serif',
};

const gradients = {
  brand: `linear-gradient(45deg, #e8ae3c, #e8953c)`,
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

const devoxx4kids = {
  ...theme,
  themeName: "devoxx4kids",
  data,
  colors,
  fonts,
  shadows,
  gradients,
  logos,
};

export default devoxx4kids;
