import styled from 'styled-components';

const Heading1 = styled.h1`
  font-style: normal;
  font-weight: 800;
  font-size: 72px;
  line-height: 98px;
`;

const Heading2 = styled.h2`
  font-style: normal;
  font-weight: 800;
  font-size: 48px;
  line-height: 64px;
`;

const Heading3 = styled.h3`
  font-style: normal;
  font-weight: 800;
  font-size: 40px;
  line-height: 54px;
`;

interface SubTitleProps {
  weight?: 'light' | 'bold';
}

const Subtitle = styled.span<SubTitleProps>`
  font-style: normal;
  font-weight: ${({ weight = 'light' }) => (weight === 'light' ? 500 : 700)};
  font-size: 18px;
  line-height: 32px;
`;

export const Typography = { Heading1, Heading2, Heading3, Subtitle };
