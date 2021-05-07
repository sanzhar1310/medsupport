import { motion } from 'framer-motion';
import styled, {
  css,
  DefaultTheme,
  FlattenInterpolation,
  ThemedStyledProps,
} from 'styled-components';

interface ButtonStyledProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'link';
  size?: 'small' | 'medium' | 'large';
  width?: string;
}

interface ButtonConfigs {
  size: Record<
    'small' | 'medium' | 'large',
    FlattenInterpolation<ThemedStyledProps<ButtonStyledProps, DefaultTheme>>
  >;
  variant: Record<
    'primary' | 'secondary' | 'outline' | 'link',
    FlattenInterpolation<ThemedStyledProps<ButtonStyledProps, DefaultTheme>>
  >;
}

const primaryColor = ({ theme }: { theme: DefaultTheme }): string => theme.colors.primary;
const secondaryColor = ({ theme }: { theme: DefaultTheme }): string => theme.colors.secondary;
const whiteColor = ({ theme }: { theme: DefaultTheme }): string => theme.colors.white;

const buttonConfigs: ButtonConfigs = {
  size: {
    small: css`
      padding: 0.6rem 1.2rem;
      border-radius: 0.6rem;
      font-size: 1.2rem;
      line-height: 1.6rem;
    `,
    medium: css`
      padding: 1rem 1.6rem;
      border-radius: 0.8rem;
      font-size: 1.4rem;
      line-height: 2rem;
    `,
    large: css`
      padding: 1.6rem 2.4rem;
      border-radius: 0.8rem;
      font-size: 2rem;
      line-height: 3rem;
    `,
  },
  variant: {
    primary: css<ButtonStyledProps>`
      background-color: ${primaryColor};
      color: ${whiteColor};
      -webkit-text-fill-color: ${whiteColor};
    `,
    secondary: css<ButtonStyledProps>`
      background-color: ${secondaryColor};
      color: ${primaryColor};
      -webkit-text-fill-color: ${primaryColor};
    `,
    outline: css<ButtonStyledProps>`
      background-color: transparent;
      color: ${primaryColor};
      -webkit-text-fill-color: ${primaryColor};
      border: 0.1rem solid ${primaryColor};
    `,
    link: css<ButtonStyledProps>`
      background-color: transparent;
      color: ${primaryColor};
      -webkit-text-fill-color: ${primaryColor};
    `,
  },
};

export const Button = styled(motion.button)<ButtonStyledProps>`
  width: ${({ width }) => width || 'inherit'};
  height: fit-content;
  font-weight: bold;
  ${({ size = 'medium' }) => buttonConfigs.size[size]}
  ${({ variant = 'primary' }) => buttonConfigs.variant[variant]}
`;
