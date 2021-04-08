import styled, { css } from 'styled-components';
import { ColorTypes } from '../../styles/_colors';

interface CommonProps {
  color?: ColorTypes;
  align?: 'start' | 'center' | 'end';
}

const commonCss = css<CommonProps>`
  ${({ color, theme }) => {
    return (
      color &&
      `
        color: ${theme.colors[color] || color};
        -webkit-text-fill-color: ${theme.colors[color] || color};
      `
    );
  }}

  ${({ align }) => align && `text-align: ${align}`}
`;

const Heading1 = styled.h1<CommonProps>`
  font-style: normal;
  font-weight: 800;
  font-size: 7.2rem;
  line-height: 9.8rem;
  ${commonCss}
`;

const Heading2 = styled.h2<CommonProps>`
  font-style: normal;
  font-weight: 800;
  font-size: 4.8rem;
  line-height: 6.4rem;
  ${commonCss}
`;

const Heading3 = styled.h3<CommonProps>`
  font-style: normal;
  font-weight: 800;
  font-size: 4rem;
  line-height: 5.4rem;
  ${commonCss}
`;

interface SubTitleProps extends CommonProps {
  weight?: 'light' | 'bold';
}

const Subtitle = styled.span<SubTitleProps>`
  font-style: normal;
  font-weight: ${({ weight = 'light' }) => (weight === 'light' ? 500 : 700)};
  strong {
    font-weight: 700;
  }
  font-size: 1.8rem;
  line-height: 3.2rem;
  ${commonCss}
`;

const Lead2 = styled.p<CommonProps>`
  font-style: normal;
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 2.4rem;
  strong {
    font-weight: 700;
  }
  ${commonCss}
`;

interface LabelProps extends CommonProps {
  size?: TextSizes;
}

const labelSizes: Record<TextSizes, Record<'fontSize' | 'lineHeight', string>> = {
  large: {
    fontSize: '2rem',
    lineHeight: '3rem',
  },
  medium: {
    fontSize: '1.4rem',
    lineHeight: '2rem',
  },
  small: {
    fontSize: '1.2rem',
    lineHeight: '1.6rem',
  },
};

const Label = styled.label<LabelProps>`
  font-style: normal;
  font-weight: 700;

  font-size: ${({ size = 'medium' }) => labelSizes[size].fontSize};
  line-height: ${({ size = 'medium' }) => labelSizes[size].lineHeight};
  ${commonCss}
`;

export const Typography = { Heading1, Heading2, Heading3, Subtitle, Lead2, Label };

export type TextSizes = 'large' | 'medium' | 'small';
