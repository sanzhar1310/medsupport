import React from 'react';
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
    photo: '/landing/founders/dinara.jpg',
    title: 'Dinara Uskenbayeva',
    description: 'Biologist, research assistant',
  },
  {
    photo: '/landing/founders/botagoz.jpg',
    title: 'Botagoz Kaukenova',
    description: 'MD',
  },
  {
    photo: '/landing/founders/akmaral.jpg',
    title: 'Akmaral Tursunova',
    description: 'Lawyer',
  },
  {
    photo: '/landing/founders/dana.jpg',
    title: 'Dana Akilbekova',
    description: 'PhD, Professor',
  },
  {
    photo: '/landing/founders/tomiris.jpg',
    title: 'Tomiris Mulikova',

    description: 'Chemist, research assistant',
  },
];

export const FoundersSection: React.FC = () => {
  return (
    <Container id="team" className="section">
      <FounderList>
        <Typography.Heading2>Founders</Typography.Heading2>
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

const FounderItem: React.FC<{ founder: Founder }> = ({ founder }) => (
  <FounderContainer>
    <img src={founder.photo} alt="foundersPhoto" />
    <Typography.Heading3 className="title">{founder.title}</Typography.Heading3>
    <Typography.Heading6>{founder.description}</Typography.Heading6>
  </FounderContainer>
);

const Container = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  justify-content: center;
  /* gap: 7rem; */
  padding-top: calc(7.2rem + 6.4rem);
`;

const FounderList = styled.div`
  display: flex;
  flex-flow: column nowrap;
  /* gap: 8rem; */

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
  padding: 4rem;
  display: flex;
  flex-flow: column nowrap;

  img {
    height: 60rem;
    margin-bottom: 2.5rem;
    aspect-ratio: 2 / 3;
    border-radius: 0.8rem;
    object-fit: cover;
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
