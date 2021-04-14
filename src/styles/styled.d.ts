import 'styled-components';
import { Colors } from './_colors';

declare module 'styled-components' {
  export interface DefaultTheme {
    fontPrimary: string;
    transition: string;
    colors: Colors;
  }
}
