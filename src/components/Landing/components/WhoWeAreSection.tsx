import React from 'react';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import styled, { css } from 'styled-components';
import rwd from '../../../styles/rwd';
import { Typography } from '../../Typography';

const features = [
  {
    image: '/images/landing/team-unity.jpg',
    text: 'whoWeAre.feature1',
  },
  {
    image: '/images/landing/team-professions.jpg',
    text: 'whoWeAre.feature2',
  },
  {
    image: '/images/landing/5361.jpg',
    text: 'whoWeAre.feature3',
  },
];

export const WhoWeAreSection: React.FC = () => {
  const { t } = useTranslation('landing');

  return (
    <Container id="about" className="section">
      <Typography.Heading2 className="heading">{t('whoWeAre.header')}</Typography.Heading2>
      <ContentBody>
        <ImageBlock src="/images/landing/5361.jpg" />
        <FeatureList>
          {features.map(({ text }, index) => (
            <li key={index}>
              <Typography.Subtitle dangerouslySetInnerHTML={{ __html: t(text) }} />
            </li>
          ))}
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
