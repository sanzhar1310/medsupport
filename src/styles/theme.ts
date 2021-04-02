import { DefaultTheme } from 'styled-components';
import colors from './_colors';

const theme: DefaultTheme = {
  fontPrimary: 'Montserrat',
  transition: '0.3s ease-in-out',
  colors,
  button: {
    size: {
      small: { padding: '6px 12px', borderRadius: '6px', fontSize: '12px', lineHeight: '16px' },
      medium: { padding: '10px 16px', borderRadius: '8px', fontSize: '14px', lineHeight: '20px' },
      large: { padding: '16px 24px', borderRadius: '8px', fontSize: '20px', lineHeight: '30px' },
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
