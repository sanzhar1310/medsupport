import Image from 'next/image';
import React from 'react';
import styled, { css } from 'styled-components';
import rwd from '../../../styles/rwd';
import { Typography } from '../../Typography';
import { Logo } from './Logo';
import { NavItems } from './NavItems';

export const Footer: React.FC = () => {
  return (
    <Container>
      <div className="logoContainer">
        <Logo />
        <Typography.Subtitle weight="bold" color="white">
          MedSupport
        </Typography.Subtitle>
      </div>
      <NavItems color="white" textSize="large" />
      <Divider />
      <div className="extrasContainer">
        <Typography.Lead2 color="white">© 2021 Medsupport. All Rights Reserved.</Typography.Lead2>
        <SocialBlock className="alwaysShow">
          <a className="icon" href="https://www.instagram.com/medsupportkz/" target="__blank">
            <SocialLogoContainer>
              <Image
                loader={({ src }) => src}
                src="/images/social/instagram-white.svg"
                layout="fill"
              />
            </SocialLogoContainer>
          </a>
          <a className="icon" href="https://www.facebook.com/medsupportkz" target="__blank">
            <SocialLogoContainer>
              <Image
                loader={({ src }) => src}
                src="/images/social/facebook-white.svg"
                layout="fill"
              />
            </SocialLogoContainer>
          </a>
          <a className="icon" href="https://t.me/medsupportkz" target="__blank">
            <SocialLogoContainer>
              <Image
                loader={({ src }) => src}
                src="/images/social/telegram-white.svg"
                layout="fill"
              />
            </SocialLogoContainer>
          </a>
        </SocialBlock>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: fit-content;
  padding: 4.8rem 3.2rem 7.2rem;

  display: flex;
  flex-flow: column;
  align-items: center;

  background: ${({ theme }) => theme.colors.black};

  .logoContainer {
    width: fit-content;
    display: flex;

    span {
      margin-left: 1.6rem;
    }

    ${rwd.DESKTOP(css`
      margin-bottom: 3.2rem;
    `)}
  }

  .extrasContainer {
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
  }

  ${rwd.TABLET(css`
    padding-right: 16.5rem;
    padding-left: 16.5rem;
  `)}
`;

const Divider = styled.span`
  width: 100%;
  height: 0.1rem;
  background: linear-gradient(
    90deg,
    rgba(192, 204, 218, 0.1) 0%,
    rgba(192, 204, 218, 0.6) 50.38%,
    rgba(192, 204, 218, 0.1) 100%
  );

  margin: 4.8rem 0 2.5rem;
`;

const SocialBlock = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin-left: auto;

  .icon {
    margin-right: 1.4rem;
    :last-child {
      margin-right: 0;
    }
  }
`;

const SocialLogoContainer = styled.div`
  width: 3.2rem;
  height: 3.2rem;
  position: relative;
`;
