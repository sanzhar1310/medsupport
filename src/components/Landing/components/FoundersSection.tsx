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
    photo:
      'https://www.chanel.com/images/q_auto,f_auto,fl_lossy,dpr_auto/w_1344/FSH-CHN-1583918073239-unknown.jpeg',
    title: 'Dinara Uskenbayeva',
    description: '',
  },
  {
    photo: 'https://r.mt.ru/r1/photoF2CE/20709645488-0/jpeg/bp.webp',
    title: 'Bota Kaukenova, MD',
    description: '',
  },
  {
    photo: 'https://r3.mt.ru/r5/photoFB27/20546758507-0/jpeg/bp.webp',
    title: 'Akmaral Tursunova',
    description: '',
  },
  {
    photo: 'https://r3.mt.ru/r4/photoE1DD/20554414148-0/jpeg/bp.webp',
    title: 'Dana Akilbekova, PhD',
    description: '',
  },
  {
    photo: 'https://r2.mt.ru/r4/photoB58D/20161857937-0/jpeg/bp.webp',
    title: 'Tomiris Mulikova',
    description: '',
  },
];

export const FoundersSection = () => {
  return (
    <Container>
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
    <img src={founder.photo} />
    <Typography.Heading3 className="title">{founder.title}</Typography.Heading3>
    <Typography.Subtitle>{founder.description}</Typography.Subtitle>
  </FounderContainer>
);

const Container = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  justify-content: center;
  gap: 7rem;
  padding-top: 7.2rem;
`;

const FounderList = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 8rem;

  h2 {
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

  display: flex;
  flex-flow: column nowrap;

  img {
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
