import styled from 'styled-components';

interface ButtonStyledProps {
  variant?: 'primary' | 'secondary';
  //  | 'outline' | 'link';
  size?: 'small' | 'medium' | 'large';
  width?: string;
}
export const Button = styled.button<ButtonStyledProps>`
  width: ${({ width }) => width || 'inherit'};
  height: fit-content;
  font-weight: bold;
  padding: ${({ size = 'medium', theme }) => theme.button.size[size].padding};
  border-radius: ${({ size = 'medium', theme }) => theme.button.size[size].borderRadius};
  background-color: ${({ theme, variant = 'primary' }) => theme.button.variant[variant].color};
  color: ${({ theme, variant = 'primary' }) => theme.button.variant[variant].fontColor};
  -webkit-text-fill-color: ${({ theme, variant = 'primary' }) =>
    theme.button.variant[variant].fontColor};
`;
