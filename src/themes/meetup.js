import { theme } from "@chakra-ui/core"
import LogoWhite from "./logos/meetup-white.svg"

const logos = {
  alt: "Codeurs en Seine - Meetups",
  white: LogoWhite,
}

const colors = {
  ...theme.colors,
  brand: {
    50: "#d9fffd",
    100: "#adfff8",
    200: "#7dfff2",
    300: "#4dffed",
    400: "#26ffe8",
    500: "#15e6ce",
    600: "#00b3a0",
    700: "#008073",
    800: "#004e45",
    900: "#001c18",
  },
}

const gradients = {
  brand: `linear-gradient(45deg, #39bb9d, #199fa7)`,
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
  logos,
}
