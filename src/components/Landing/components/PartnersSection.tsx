import React from 'react';
import styled from 'styled-components';
import { Typography } from '../../Typography';

const partners = [
  {
    image: '',
    // '/landing/partners/health-ministry.png',
    title: (
      <>
        <span>Ministry of Healthcare</span>
        <br />
        <span>Republic of Kazakhstan</span>
      </>
    ),
  },
  {
    image: '/landing/partners/unicef.png',
    title: '',
  },
  {
    image: '/landing/partners/usaid.png',
    title: '',
  },
  {
    image: '/landing/partners/who.png',
    title: '',
  },
  {
    image: '',
    title: (
      <>
        <span className="experts">EXPERTS</span>
        <span className="hub">HUB</span>
      </>
    ),
  },
];

export const PartnersSection = () => {
  return (
    <Container>
      <Typography.Heading2 align="center" className="heading">
        Our Partners
      </Typography.Heading2>
      <Divider />
      <PartnersRowList>
        {partners.map((partner, index) => (
          <PartnerContainer key={index}>
            {partner.image && <PartnerImg src={partner.image} />}
            {partner.title && <Typography.Label size="large">{partner.title}</Typography.Label>}
          </PartnerContainer>
        ))}
      </PartnersRowList>
      <Divider />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: fit-content;

  padding: 7.2rem 16.5rem;

  display: flex;
  flex-flow: column nowrap;

  .heading {
    margin-bottom: 4rem;
  }
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
`;

const PartnersRowList = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: center;
  gap: 6rem;

  padding: 4rem 0;
`;

const PartnerContainer = styled.div`
  .experts {
    color: #ff1d06;
  }
  .hub {
    color: #010e74;
  }
`;

const PartnerImg = styled.img`
  max-width: 18rem;
`;