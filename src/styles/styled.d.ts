import 'styled-components';
import colors from './_colors';

interface ButtonVariantOptions {
  fontColor: string;
  color: string;
}

interface ButtonSizeOptions {
  padding: string;
  borderRadius: string;
  fontSize: string;
  lineHeight: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    fontPrimary: string;
    transition: string;
    colors: typeof colors;

    button: {
      variant: Record<'primary' | 'secondary' | 'outline' | 'link', ButtonVariantOptions>;
      size: Record<'small' | 'medium' | 'large', ButtonSizeOptions>;
    };
  }
}
