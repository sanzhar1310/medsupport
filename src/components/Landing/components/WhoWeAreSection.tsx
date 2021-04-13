import React from 'react';
import styled from 'styled-components';
import { Typography } from '../../Typography';

const features = [
  {
    image: '/landing/team-unity.jpg',
    text: (
      <>
        <strong>Medsupportkz</strong> is a community that unites more than <strong>100</strong>{' '}
        people from different areas of work
      </>
    ),
  },
  {
    image: '/landing/team-professions.jpg',
    text:
      'We have a multidisciplinary team bringing together scientists, medical doctors, IT specialists, designers, lawyers, and public health specialists',
  },
  {
    image: '',
    text: (
      <>
        Being so diverse, we are working together towards one goal - raising medical literacy in{' '}
        <strong>Central Asia</strong>
      </>
    ),
  },
];

export const WhoWeAreSection = () => {
  return (
    <Container id="about" className="section">
      <Typography.Heading2 className="heading">Who We Are</Typography.Heading2>
      <FeatureList>
        {features.map((item, index) => {
          return (
            <FeatureItem key={index}>
              <ImageBlock src={item.image} />
              <Typography.Subtitle align="center">{item.text}</Typography.Subtitle>
            </FeatureItem>
          );
        })}
      </FeatureList>
    </Container>
  );
};
// <ImageBlock />
// <TextContentBlock>
//   <Typography.Heading2 className="header">Who We Are</Typography.Heading2>
//   <Typography.Subtitle>
//     Medsupportkz is a community that unites more than 100 people from different areas of work.
//     We have a multidisciplinary tea  m bringing together scientists, medical doctors, IT
//     specialists, designers, lawyers, and public health specialists. Being so diverse, we are
//     working together towards one goal - raising medical literacy in Central Asia.
//   </Typography.Subtitle>
// </TextContentBlock>

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

const FeatureList = styled.div`
  width: 100%;

  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 3rem 3rem;
`;

const ImageBlock = styled.div<{ src: string }>`
  position: relative;
  /* width: 54rem; */
  width: 100%;
  aspect-ratio: 3 / 2;
  margin-bottom: 0.8rem;
  border-radius: 0.4rem;

  background-color: #18191f;
  background-image: url(${({ src }) => src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-size: cover;
`;

const FeatureItem = styled.div`
  height: fit-content;
  min-width: 34rem;
  max-width: 55rem;
  flex: 1;

  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;
