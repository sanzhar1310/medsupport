import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import { ColorTypes } from '../../../styles/_colors';
import { Typography, TextSizes } from '../../Typography';

interface Props {
  color?: ColorTypes;
  textSize?: TextSizes;
}

export const NavItems: React.FC<Props> = ({ color, textSize }) => {
  return (
    <NavItemsBlock>
      <Typography.Label className="link" color={color} size={textSize}>
        <Link href="#about">About us</Link>
      </Typography.Label>
      <Typography.Label className="link" color={color} size={textSize}>
        <Link href="#team">Team</Link>
      </Typography.Label>
      <Typography.Label className="link" color={color} size={textSize}>
        <Link href="#partners">Partners</Link>
      </Typography.Label>
    </NavItemsBlock>
  );
};

const NavItemsBlock = styled.div`
  font-weight: 700;
  display: flex;
  flex-flow: row nowrap;
  .link {
    a {
      color: inherit;
      text-decoration: none;

      :hover {
        color: ${({ theme }) => theme.colors.primary};
      }
    }
    margin-right: 3.2rem;
    :last-child {
      margin-right: 0;
    }
  }
`;
