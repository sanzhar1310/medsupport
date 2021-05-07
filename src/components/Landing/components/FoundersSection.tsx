import Image from 'next/image';
import React from 'react';
import { useTranslation } from 'react-i18next';
import styled, { css } from 'styled-components';
import rwd from '../../../styles/rwd';
import { Typography } from '../../Typography';

interface Founder {
  photo: string;
  title: string;
  description: string;
}

const founders: Founder[] = [
  {
    photo: '/images/landing/founders/dinara.jpg',
    title: 'founders.dinara',
    description: 'founders.dinara.description',
  },
  {
    photo: '/images/landing/founders/botagoz.jpg',
    title: 'founders.botagoz',
    description: 'founders.botagoz.description',
  },
  {
    photo: '/images/landing/founders/akmaral.jpg',
    title: 'founders.akmaral',
    description: 'founders.akmaral.description',
  },
  {
    photo: '/images/landing/founders/dana.jpg',
    title: 'founders.dana',
    description: 'founders.dana.description',
  },
  {
    photo: '/images/landing/founders/tomiris.jpg',
    title: 'founders.tomiris',
    description: 'founders.tomiris.description',
  },
];

export const FoundersSection: React.FC = () => {
  const { t } = useTranslation('landing');

  return (
    <Container id="team" className="section">
      <FounderList>
        <Typography.Heading2>{t('founders.header')}</Typography.Heading2>
        <FounderItem founder={founders[0]} />
        <FounderItem founder={founders[1]} />
      </FounderList>
      <FounderList>
        <FounderItem founder={founders[2]} />
        <FounderItem founder={founders[3]} />
        <FounderItem founder={founders[4]} />
      </FounderList>
    </Container>
  );
};

const FounderItem: React.FC<{ founder: Founder }> = ({ founder }) => {
  const { t } = useTranslation('landing');

  return (
    <FounderContainer>
      <div className="founderImageContainer">
        <Image
          loader={({ src }) => src}
          src={founder.photo}
          alt="foundersPhoto"
          objectFit="cover"
          layout="fill"
        />
      </div>
      <Typography.Heading3 className="title">{t(founder.title)}</Typography.Heading3>
      <Typography.Heading6>{t(founder.description)}</Typography.Heading6>
    </FounderContainer>
  );
};

const Container = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  justify-content: center;
  gap: 7rem;
  padding-top: calc(7.2rem + 6.4rem);
`;

const FounderList = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 5rem;

  h2 {
    margin-bottom: 4rem;
    text-align: center;

    ${rwd.TABLET(css`
      text-align: start;
    `)}
  }
`;

const FounderContainer = styled.div`
  width: 100%;
  max-width: 60rem;
  height: fit-content;
  /* padding: 4rem; */
  display: flex;
  flex-flow: column nowrap;

  .founderImageContainer {
    position: relative;
    height: 60rem;
    margin-bottom: 2.5rem;
    aspect-ratio: 2 / 3;
    border-radius: 0.8rem;
  }

  .title {
    width: 100%;
    margin-bottom: 0.8rem;
    text-align: center;

    ${rwd.TABLET(css`
      text-align: start;
    `)}
  }
`;
