import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { HeaderContainer, SocialBlock } from './styled';
import { Typography } from '../../../Typography';
import { Logo } from '../Logo';
import { NavItems } from '../NavItems';
import { NavBar } from './NavBar';
import { Dropdown } from '../../../Dropdown';
import Link from 'next/link';
import { Button } from '../../../Button';
import { useTranslation } from 'react-i18next';

export const Header: React.FC = () => {
  const headerRef = useRef<HTMLElement>(null);
  const { t } = useTranslation('common');

  useEffect(() => {
    window?.addEventListener('scroll', handleScroll);
    return () => {
      window?.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = (): void => {
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
      <div className="logoWithLabel">
        <Logo />
        <Typography.Heading4>MedSupport</Typography.Heading4>
      </div>
      <NavItems />
      <SocialBlock className="socialBlock">
        <a className="icon" href="https://www.instagram.com/medsupportkz/" target="__blank">
          <Image
            loader={({ src }) => src}
            src="/images/social/instagram.svg"
            width={32}
            height={32}
          />
        </a>
        <a className="icon" href="https://www.facebook.com/medsupportkz" target="__blank">
          <Image
            loader={({ src }) => src}
            src="/images/social/facebook.svg"
            width={32}
            height={32}
          />
        </a>
        <a className="icon" href="https://t.me/medsupportkz" target="__blank">
          <Image
            loader={({ src }) => src}
            src="/images/social/telegram.svg"
            width={32}
            height={32}
          />
        </a>
      </SocialBlock>
      <div style={{ width: '13rem', display: 'flex', justifyContent: 'flex-end' }}>
        <Dropdown
          listItems={[
            <Link key="kz" href="/" locale="kz">
              <Button width="100%" variant="link">
                <Typography.Subtitle color={'white'}>Қазақ</Typography.Subtitle>
              </Button>
            </Link>,
            <Link key="en" href="/" locale="en">
              <Button width="100%" variant="link">
                <Typography.Subtitle color={'white'}>English</Typography.Subtitle>
              </Button>
            </Link>,
            <Link key="ru" href="/" locale="ru">
              <Button width="100%" variant="link">
                <Typography.Subtitle color={'white'}>Русский</Typography.Subtitle>
              </Button>
            </Link>,
          ]}
          toggleButtonLabel={t('language')}
        />
      </div>
    </HeaderContainer>
  );
};
