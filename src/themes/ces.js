import { theme } from "@chakra-ui/core"

const colors = {
  ...theme.colors,
  brand: {
    50: "#def3ff",
    100: "#b0d7ff",
    200: "#80bcfe",
    300: "#50a1fc",
    400: "#2386fa",
    500: "#0e6ce0",
    600: "#034ea2",
    700: "#003c7e",
    800: "#00244e",
    900: "#000d1f",
  },
}

const gradients = {
  brand: `linear-gradient(45deg, ${colors.brand[500]}, ${colors.brand[600]})`,
}

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
}

export default {
  ...theme,
  colors,
  shadows,
  gradients,
}
