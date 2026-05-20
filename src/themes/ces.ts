import { theme } from '@chakra-ui/react';
import LogoWhite from './logos/ces-white.svg';

const data = {
  pretitle: 'Rencontre de codeuses & codeurs à Rouen',
  title: 'La conférence IT en Normandie',
};

const logos = {
  alt: 'Codeurs en Seine',
  white: LogoWhite.src,
};

const colors = {
  ...theme.colors,
  brand: {
    50: '#F4E9FB',
    100: '#DEC7F3',
    200: '#C59FEA',
    300: '#AA73DE',
    400: '#8F4FD0',
    500: '#7736B8',
    600: '#612997',
    700: '#481F71',
    800: '#30144B',
    900: '#180924',
  },
};

const fonts = {
  body: 'Lato, "Helvetica Neue", Helvetica, Arial, sans-serif;',
  heading: 'Montserrat, "Helvetica Neue", Helvetica, Arial, sans-serif',
};

const gradients = {
  brand: `linear-gradient(145deg, #8F4FD0, #481F71)`,
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
  brand: `0 0.25rem 1.25rem rgba(97, 41, 151, 0.24)`,
};

const ces = {
  ...theme,
  themeName: 'ces',
  data,
  colors,
  fonts,
  shadows,
  gradients,
  logos,
};

export default ces;
