import React from 'react';
import styled from 'styled-components';
import { Typography } from '../../Typography';

export const AchievementsSection = () => {
  return (
    <Container>
      <Background />
      <Typography.Heading2 className="heading" color="white">
        Some count that matters
      </Typography.Heading2>
      <Typography.Subtitle className="subtitle" color="white">
        Our achievement in the journey depicted in numbers
      </Typography.Subtitle>
      <Counts>
        <Count>
          <Typography.Heading2>+100</Typography.Heading2>
          <Typography.Subtitle align="center">
            Volunteers: scientists, medical workers and experienced translators
          </Typography.Subtitle>
        </Count>
        <Count>
          <Typography.Heading2>+300</Typography.Heading2>
          <Typography.Subtitle align="center">
            translated research articles and guidelines
          </Typography.Subtitle>
        </Count>
        <Count>
          <Typography.Heading2>+29,000</Typography.Heading2>
          <Typography.Subtitle align="center">followers in social media</Typography.Subtitle>
        </Count>
        <Count>
          <Typography.Heading2>+50</Typography.Heading2>
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

  display: flex;
  flex-flow: column nowrap;

  padding: 7.2rem 16.5rem;

  .heading {
    z-index: 1;
    margin-bottom: 0.8rem;
  }

  .subtitle {
    z-index: 1;
    margin-bottom: 3.2rem;
  }
`;

const Background = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 35rem;
  background: ${({ theme }) => theme.colors.primary};
`;

const Counts = styled.div`
  z-index: 1;
  width: 100%;
  height: fit-content;

  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
`;

const Count = styled.div`
  aspect-ratio: 1 / 1;

  background-image: url('/landing/polygon.svg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;

  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  flex-basis: 36rem;

  padding: 10rem 6rem;
`;