import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { HeaderContainer, SocialBlock } from './styled';
import { Typography } from '../../../Typography';
import { Logo } from '../Logo';
import { NavItems } from '../NavItems';
import { NavBar } from './NavBar';

export const Header: React.FC = () => {
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    window?.addEventListener('scroll', handleScroll);
    return () => {
      window?.removeEventListener('scroll', handleScroll);
    };
  }, [!!headerRef.current]);

  const handleScroll = () => {
    if (window?.pageYOffset > 0) {
      headerRef.current?.classList.add('color');
      // if (!this.state.className) {
      //   this.setState({ className: 'blue' });
      // }
    } else {
      headerRef.current?.classList.remove('color');
      // if (this.state.className) {
      //   this.setState({ className: '' });
      // }
    }
  };

  return (
    <HeaderContainer ref={headerRef}>
      <NavBar />
      <Logo />
      <Typography.Subtitle weight="bold" className="logoLabel">
        MedSupport
      </Typography.Subtitle>
      <NavItems />
      <SocialBlock className="socialBlock">
        <a className="icon" href="https://www.instagram.com/medsupportkz/" target="__blank">
          <Image src="/icons/social/instagram.svg" width={32} height={32} />
        </a>
        <a className="icon" href="https://www.facebook.com/medsupportkz" target="__blank">
          <Image src="/icons/social/facebook.svg" width={32} height={32} />
        </a>
        <a className="icon" href="https://t.me/medsupportkz" target="__blank">
          <Image src="/icons/social/telegram.svg" width={32} height={32} />
        </a>
      </SocialBlock>
    </HeaderContainer>
  );
};
