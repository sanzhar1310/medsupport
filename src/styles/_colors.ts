export type ColorTypes = 'black' | 'white' | 'primary' | 'secondary';
export type Colors = Record<ColorTypes, string>;

const colors: Colors = {
  black: '#000000',
  white: '#FFFFFF',
  primary: '#FCA800',
  secondary: '#D8E3E2',
};

export default colors;
