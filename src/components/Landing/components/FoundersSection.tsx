import React from 'react';
import styled from 'styled-components';
import { Typography } from '../../Typography';

interface Founder {
  photo: string;
  title: string;
  description: string;
}

const founders: Founder[] = [
  {
    photo: '',
    title: 'Dinara Uskenbayeva',
    description: '',
  },
  {
    photo: '',
    title: 'Bota Kaukenova, MD',
    description: '',
  },
  {
    photo: '',
    title: 'Akmaral Tursunova',
    description: '',
  },
  {
    photo: '',
    title: 'Dana Akilbekova, PhD',
    description: '',
  },
  {
    photo: '',
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
  padding: 7.2rem 16.5rem;

  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  justify-content: space-between;
`;

const FounderList = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 8rem;
`;

const FounderContainer = styled.div`
  width: 100%;
  max-width: 60rem;
  min-width: 25rem;
  height: fit-content;

  display: flex;
  flex-flow: column nowrap;

  img {
    height: 60rem;
    margin-bottom: 2.5rem;
    aspect-ratio: 2 / 3;
  }

  .title {
    width: 100%;
    margin-bottom: 0.8rem;
  }
`;
