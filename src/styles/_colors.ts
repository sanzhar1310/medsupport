export type ColorTypes = 'black' | 'white' | 'primary' | 'secondary';
export type Colors = Record<ColorTypes, string>;

const colors: Colors = {
  black: '#0B0D17',
  white: '#FFFFFF',
  primary: '#8F27D7',
  secondary: '#D8E3E2',
};

export default colors;
