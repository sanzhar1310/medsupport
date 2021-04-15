import Image from 'next/image';
import React from 'react';
import styled, { css } from 'styled-components';
import rwd from '../../../styles/rwd';
import { Typography } from '../../Typography';

const features = [
  {
    image: '/images/landing/team-unity.jpg',
    text: (
      <Typography.Subtitle>
        <strong>Medsupportkz</strong> is a community that unites more than <strong>100</strong>{' '}
        people from different areas of work.
      </Typography.Subtitle>
    ),
  },
  {
    image: '/images/landing/team-professions.jpg',
    text: (
      <Typography.Subtitle>
        We have a multidisciplinary team bringing together scientists, medical doctors, IT
        specialists, designers, lawyers, and public health specialists.
      </Typography.Subtitle>
    ),
  },
  {
    image: '/images/landing/5361.jpg',
    text: (
      <Typography.Subtitle>
        Being so diverse, we are working together towards one goal - raising medical literacy in{' '}
        <strong>Central Asia</strong>.
      </Typography.Subtitle>
    ),
  },
];

export const WhoWeAreSection: React.FC = () => {
  return (
    <Container id="about" className="section">
      <Typography.Heading2 className="heading">Who We Are</Typography.Heading2>
      <ContentBody>
        <ImageBlock src="/images/landing/5361.jpg" />
        <FeatureList>
          <li>{features[0].text}</li>
          <li>{features[1].text}</li>
          <li>{features[2].text}</li>
        </FeatureList>
      </ContentBody>
    </Container>
  );
};

const ContentBody = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  max-width: 102rem;
  gap: 3rem;

  ${rwd.TABLET(css`
    justify-content: space-between;
  `)}
`;

const Container = styled.div`
  z-index: 1;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: center;

  width: 100%;
  height: fit-content;

  padding: 7.2rem 0 0;
  padding-top: calc(7.2rem + 6.4rem);

  .heading {
    margin-bottom: 4rem;
  }
`;

const FeatureList = styled.ul`
  width: 44rem;
  li {
    margin: 2rem 0;
    ::marker {
      font-size: 2rem;
    }
  }
`;

const ImageBlockContainer = styled.div`
  position: relative;
  width: 53rem;
  aspect-ratio: 3 / 2;
  border-radius: 0.4rem;

  background-color: #18191f;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
/* background-image: url(${({ src }) => src}); */

const ImageBlock: React.FC<{ src: string }> = ({ src }) => {
  return (
    <ImageBlockContainer>
      <Image loader={({ src }) => src} src={src} layout="fill" alt="a" objectFit="cover" />
    </ImageBlockContainer>
  );
};
