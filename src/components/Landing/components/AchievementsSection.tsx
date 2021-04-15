import Image from 'next/image';
import React from 'react';
import styled, { css } from 'styled-components';
import rwd from '../../../styles/rwd';
import { Typography } from '../../Typography';

export const AchievementsSection: React.FC = () => {
  return (
    <Container className="section">
      <Background />
      <Typography.Heading2 className="heading" color="white">
        Some count that matters
      </Typography.Heading2>
      <Typography.Subtitle className="subtitle" color="white">
        Our achievement in the journey depicted in numbers
      </Typography.Subtitle>
      <Counts>
        <Count>
          <Typography.Heading2>100+</Typography.Heading2>
          <Typography.Subtitle align="center">
            Volunteers: scientists, medical workers and experienced translators
          </Typography.Subtitle>
        </Count>
        <Count>
          <Typography.Heading2>300+</Typography.Heading2>
          <Typography.Subtitle align="center">
            translated research articles and guidelines
          </Typography.Subtitle>
        </Count>
        <Count>
          <Typography.Heading2>34,000+</Typography.Heading2>
          <Typography.Subtitle align="center">followers in social media</Typography.Subtitle>
        </Count>
        <Count>
          <Typography.Heading2>50+</Typography.Heading2>
          <Typography.Subtitle align="center">
            publications in local media and news
          </Typography.Subtitle>
        </Count>
      </Counts>
    </Container>
  );
};

const Container = styled.div`
  position: relative;

  width: 100%;
  height: fit-content;
  padding: 7.2rem 3.2rem;
  padding-top: calc(7.2rem + 6.4rem);

  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  .heading {
    z-index: 1;
    margin-bottom: 0.8rem;
  }

  .subtitle {
    z-index: 1;
    margin-bottom: 3.2rem;
  }

  ${rwd.DESKTOP(css`
    align-items: flex-start;
  `)}
`;

const Background = styled.span`
  position: absolute;
  top: 7.2rem;
  left: 0;
  width: 100%;
  background: ${({ theme }) => theme.colors.primary};
  height: 35rem;

  ${rwd.PHONE(css`
    height: 40rem;
  `)}
  ${rwd.TABLET(css`
    height: 35rem;
  `)}
`;

const Counts = styled.div`
  z-index: 1;
  width: 100%;
  height: fit-content;

  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
`;

const Count: React.FC = ({ children }) => {
  return (
    <CountContainer>
      <Image
        loader={({ src }) => src}
        src="/images/landing/polygon.svg"
        layout="fill"
        objectFit="fill"
        objectPosition="center"
      />
      {children}
    </CountContainer>
  );
};

const CountContainer = styled.div`
  position: relative;
  aspect-ratio: 1 / 1;

  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  flex-basis: 36rem;

  padding: 10rem 6rem;

  h2,
  span {
    z-index: 1;
  }
`;
