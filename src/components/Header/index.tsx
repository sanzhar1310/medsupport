import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HeaderContainer, HeaderLogo, NavItemsBlock, SocialBlock } from './styled';
import { Typography } from '../Typography';

export const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <HeaderLogo />
      <Typography.Subtitle weight="bold">MedSupport</Typography.Subtitle>
      <NavItemsBlock>
        <Typography.Label className="link">
          <Link href="#about">About us</Link>
        </Typography.Label>
        <Typography.Label className="link">
          <Link href="#team">Team</Link>
        </Typography.Label>
        <Typography.Label className="link">
          <Link href="#partners">Partners</Link>
        </Typography.Label>
      </NavItemsBlock>
      <SocialBlock>
        <div className="icon">
          <Image src="/icons/social/instagram.svg" width={32} height={32} />
        </div>
        <div className="icon">
          <Image src="/icons/social/facebook.svg" width={32} height={32} />
        </div>
        <div className="icon">
          <Image src="/icons/social/telegram.svg" width={32} height={32} />
        </div>
      </SocialBlock>
    </HeaderContainer>
  );
};
