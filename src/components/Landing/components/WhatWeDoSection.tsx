import React from 'react';
import styled, { css } from 'styled-components';
import rwd from '../../../styles/rwd';
import { ColorTypes } from '../../../styles/_colors';
import { Typography } from '../../Typography';

const steps = [
  <Typography.Subtitle color="white">
    <strong>Medsupportkz</strong> was established in May 2020 amidst the worst time of{' '}
    <strong>COVID-19</strong> pandemic in Kazakhstan. The project includes a team of 100 volunteers:
    scientists, medical workers and experienced translators. The official communication on{' '}
    <strong>COVID-19</strong> was often inadequate and late; there was a lack of information on the
    latest scientific advancements and medical practices in Kazakhstan. Medical workers, in turn,
    were more than ever frustrated and burned out due to both poor working conditions and a lack of
    systematic support.
  </Typography.Subtitle>,
  <Typography.Subtitle>
    The <strong>COVID-19</strong> pandemic has exposed many healthcare and health literacy problems
    among people of Kazakhstan. With the start of the epidemic in Kazakhstan, the social media got
    clattered with fake information, which was widely spread among the population. Insufficient and
    inefficient communication between scientists with medical workers and decision-makers causes
    panic and spread of fake information as well as lowers public trust in science among the
    population. Thus, people distrust all health authorities, be it the Ministry of Health, WHO, or
    UNICEF, and prefer to get treated by folk medicine specialists.
  </Typography.Subtitle>,
  <Typography.Subtitle>
    <strong>Medsupport</strong> became a bridge between trusted scientific information and local
    medical workers who do not have time or sufficient level of English. Platform provides
    scientifically reliable information, studies and guidelines about <strong>Covid-19</strong> in
    Central Asia and Russian translated and adapted from English.
  </Typography.Subtitle>,
];

export const WhatWeDoSection = () => {
  return (
    <Container>
      <Typography.Heading2 className="heading" align="center">
        What We Do
      </Typography.Heading2>
      {/* <div className="titleContainer">
        <img src="/landing/question-pills.jpg" />
      </div> */}
      <div className="stepContainer">
        <TextCard className="primaryColor">{steps[0]}</TextCard>
        <TextCard className="secondaryColor">{steps[1]}</TextCard>
        <TextCard>{steps[2]}</TextCard>
        {/* <StepItem color="primary">{steps[0]}</StepItem> */}
        {/* <StepItem color="secondary">{steps[1]}</StepItem> */}
      </div>
      {/* <StepItem color="white">{}</StepItem> */}
    </Container>
  );
};

const Container = styled.div`
  z-index: 1;
  width: 100%;
  height: fit-content;

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-content: flex-start;
  /* align-items: space-evenly; */

  .heading {
    width: 100%;
    margin-bottom: 2.5rem;
  }
  .titleContainer {
    height: 100%;
    width: fit-content;

    display: flex;
    flex-flow: column nowrap;
    img {
      object-fit: cover;
      width: 44.5rem;
      height: 52.5rem;
    }
  }

  .stepContainer {
    width: 100%;

    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    /* background: ${({ theme }) => theme.colors.secondary}; */
  }

  ${rwd.PHONE(
    css`
      min-height: unset;
      flex-flow: column nowrap;
      align-items: center;
      padding: 7.2rem 0;
      .titleContainer {
        img {
          display: none;
        }
      }
      /* height: 0; */
    `,
  )}

  ${rwd.TABLET(
    css`
      min-height: unset;
      flex-flow: column nowrap;
      align-items: center;
      padding: 7.2rem 16.5rem;
      /* padding: 7.2rem 0; */
      .titleContainer {
        img {
          display: none;
        }
      }

      .stepContainer {
        gap: 2rem;
      }
      /* height: 0; */
    `,
  )}

  ${rwd.DESKTOP(
    css`
      flex-flow: column nowrap;
      align-items: flex-start;
      justify-content: flex-start;
      padding: 7.2rem 16.5rem;
      .titleContainer {
        img {
          display: block;
        }
      }
      .stepContainer {
        /* margin-top: 4rem; */
        align-self: initial;

        min-width: 30rem;
        max-height: 100%;

        display: flex;
        flex-flow: column nowrap;
      }
    `,
  )}
`;

const StepItem = styled.div<{ color?: ColorTypes }>`
  padding: 3.8rem 7rem;
  background: ${({ color, theme }) => (color ? theme.colors[color] : '')};
  height: fit-content;
  width: 100%;
`;

const TextCard = styled.div`
  /* max-width: 90rem; */
  padding: 1.6rem 3.2rem 3.2rem;
  &.primaryColor {
    background: ${({ theme }) => theme.colors.primary};
  }

  &.secondaryColor {
    background: ${({ theme }) => theme.colors.secondary};
  }

  /* ${rwd.PHONE(css``)} */
  ${rwd.TABLET(css`
    border-radius: 1rem;
  `)}/* ${rwd.DESKTOP(css``)} */
`;
