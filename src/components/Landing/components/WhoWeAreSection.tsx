import React from 'react';
import styled from 'styled-components';
import { Typography } from '../../Typography';

const features = [
  {
    image: '/landing/team-unity.jpg',
    text:
      'Medsupportkz is a community that unites more than 100 people from different areas of work',
  },
  {
    image: '/landing/team-professions.jpg',
    text:
      'We have a multidisciplinary team bringing together scientists, medical doctors, IT specialists, designers, lawyers, and public health specialists',
  },
  {
    image: '',
    text:
      'Being so diverse, we are working together towards one goal - raising medical literacy in Central Asia',
  },
];

export const WhoWeAreSection = () => {
  return (
    <Container>
      <Typography.Heading2 className="heading">Who We Are</Typography.Heading2>
      <FeatureList>
        {features.map((item, index) => {
          return (
            <FeatureItem key={index}>
              <ImageBlock src={item.image} />
              <Typography.Subtitle>{item.text}</Typography.Subtitle>
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
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;

  align-items: center;

  width: 100%;
  height: 100vh;

  padding: calc(72px + 65px) 165px;

  background-color: ${({ theme }) => theme.colors.white};
  .heading {
    margin-bottom: 40px;
  }
`;

const FeatureList = styled.div`
  width: 100%;

  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 14%;
`;

const ImageBlock = styled.div<{ src: string }>`
  position: relative;
  /* width: 540px; */
  width: 100%;
  height: 204px;
  margin-bottom: 8px;
  border-radius: 4px;

  background-color: #18191f;
  background-image: url(${({ src }) => src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-size: cover;
`;

const FeatureItem = styled.div`
  height: fit-content;
  width: 255px;

  display: flex;
  flex-flow: column nowrap;
`;
