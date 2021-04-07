import { DefaultTheme } from 'styled-components';
import colors from './_colors';

const theme: DefaultTheme = {
  fontPrimary: 'Montserrat',
  transition: '0.3s ease-in-out',
  colors,
  button: {
    size: {
      small: { padding: '.6rem 1.2rem', borderRadius: '.6rem', fontSize: '1.2rem', lineHeight: '1.6rem' },
      medium: { padding: '1rem 1.6rem', borderRadius: '.8rem', fontSize: '1.4rem', lineHeight: '2rem' },
      large: { padding: '1.6rem 2.4rem', borderRadius: '.8rem', fontSize: '2rem', lineHeight: '3rem' },
    },
    variant: {
      primary: {
        color: colors.primary,
        fontColor: colors.white,
      },
      secondary: {
        color: colors.secondary,
        fontColor: colors.primary,
      },
      outline: {
        color: colors.primary,
        fontColor: colors.white,
      },
      link: {
        color: colors.primary,
        fontColor: colors.white,
      },
    },
  },
};

theme.button.size.large;

export default theme;
