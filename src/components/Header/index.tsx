import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HeaderContainer, NavItemsBlock, SocialBlock } from './styled';

export const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Image src="/icons/logo.svg" width={28} height={28} />
      <NavItemsBlock>
        <div className="link">
          <Link href="#about">About us</Link>
        </div>
        <div className="link">
          <Link href="#team">Team</Link>
        </div>
        <div className="link">
          <Link href="#partners">Partners</Link>
        </div>
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
