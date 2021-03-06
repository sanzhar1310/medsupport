import React, { useEffect } from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import styled, { css } from 'styled-components';
import rwd from '../../../styles/rwd';
import { ColorTypes } from '../../../styles/_colors';
import { Typography, TextSizes } from '../../Typography';
import { useRouter } from 'next/router';

interface Props {
  color?: ColorTypes;
  textSize?: TextSizes;
}

export const NavItems: React.FC<Props> = ({ color, textSize }) => {
  const router = useRouter();
  const { t } = useTranslation('landing');

  useEffect(() => {
    const hash = router.asPath.replace('/', '');
    if (hash) {
      window.document
        .querySelector(hash)
        ?.scrollIntoView({ block: 'start', behavior: 'smooth', inline: 'start' });
    }
  }, [router.asPath]);

  return (
    <NavItemsBlock>
      <Link href="#about">
        <Typography.Label className="link" color={color} size={textSize}>
          {t('header.aboutUs')}
        </Typography.Label>
      </Link>
      <Link href="#team">
        <Typography.Label className="link" color={color} size={textSize}>
          {t('header.team')}
        </Typography.Label>
      </Link>
      <Link href="#partners">
        <Typography.Label className="link" color={color} size={textSize}>
          {t('header.partners')}
        </Typography.Label>
      </Link>
    </NavItemsBlock>
  );
};

const NavItemsBlock = styled.div`
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  display: none;
  gap: 3.2rem;
  margin: auto;
  ${rwd.DESKTOP(css`
    display: flex;
  `)}
  .link {
    height: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;
    color: inherit;
    text-decoration: none;

    :hover {
      color: ${({ theme }) => theme.colors.primary};
      -webkit-text-fill-color: ${({ theme }) => theme.colors.primary};
    }
  }
`;
