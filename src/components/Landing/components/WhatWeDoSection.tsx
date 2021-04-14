import React from 'react';
import styled, { css } from 'styled-components';
import rwd from '../../../styles/rwd';
import { Typography } from '../../Typography';

const steps = [
  <Typography.Subtitle color="white" key={0}>
    <strong>Medsupportkz</strong> was established in May 2020 amidst the worst time of{' '}
    <strong>COVID-19</strong> pandemic in Central Asia. The project includes a team of 100
    volunteers: scientists, medical workers and experienced translators. The official communication
    on <strong>COVID-19</strong> was often inadequate and late; there was a lack of information on
    the latest scientific advancements and medical practices in Central Asia. Medical workers, in
    turn, were more than ever frustrated and burned out due to both poor working conditions and a
    lack of systematic support.
  </Typography.Subtitle>,
  <Typography.Subtitle key={1}>
    The <strong>COVID-19</strong> pandemic has exposed many healthcare and health literacy problems
    among people of Central Asia. With the start of the epidemic in Central Asia, the social media
    got clattered with fake information, which was widely spread among the population. Insufficient
    and inefficient communication between scientists with medical workers and decision-makers causes
    panic and spread of fake information as well as lowers public trust in science among the
    population. Thus, people distrust all health authorities, be it the Ministry of Health, WHO, or
    UNICEF, and prefer to get treated by folk medicine specialists.
  </Typography.Subtitle>,
  <Typography.Heading6 key={2}>
    <strong>
      Medsupport became a bridge between trusted scientific information and local medical workers
      who do not have time or sufficient level of English. Platform provides scientifically reliable
      information, studies and guidelines about Covid-19 in Kazakh and Russian translated and
      adapted from English.
    </strong>
  </Typography.Heading6>,
];

export const WhatWeDoSection: React.FC = () => {
  return (
    <Container className="section">
      <Typography.Heading2 className="heading" align="center">
        What We Do
      </Typography.Heading2>
      <div className="stepContainer">
        <TextCard className="primaryColor">{steps[0]}</TextCard>
        <TextCard className="secondaryColor">{steps[1]}</TextCard>
        <TextCard className="last">{steps[2]}</TextCard>
      </div>
    </Container>
  );
};

const Container = styled.div`
  z-index: 2;
  width: 100%;
  height: fit-content;

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-content: flex-start;

  .heading {
    width: 100%;
    margin-bottom: 4rem;
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
    text-align: center;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;

    .last {
      padding-top: 6rem;
      strong {
        font-weight: 800;
      }
    }
  }

  ${rwd.PHONE(
    css`
      min-height: unset;
      flex-flow: column nowrap;
      align-items: center;
      padding: 7.2rem 0;
      padding-top: calc(7.2rem + 6.4rem);
      .titleContainer {
        img {
          display: none;
        }
      }
    `,
  )}

  ${rwd.TABLET(
    css`
      min-height: unset;
      flex-flow: column nowrap;
      align-items: center;
      padding: 7.2rem 0;
      padding-top: calc(7.2rem + 6.4rem);
      .titleContainer {
        img {
          display: none;
        }
      }

      .stepContainer {
        gap: 2rem;
      }
    `,
  )}

  ${rwd.DESKTOP(
    css`
      flex-flow: column nowrap;
      align-items: flex-start;
      justify-content: flex-start;
      .titleContainer {
        img {
          display: block;
        }
      }
      .stepContainer {
        align-self: initial;

        min-width: 30rem;
        max-height: 100%;

        display: flex;
        flex-flow: column nowrap;
      }
    `,
  )}
`;

const TextCard = styled.div`
  padding: 3.2rem;
  &.primaryColor {
    background: ${({ theme }) => theme.colors.primary};
  }

  &.secondaryColor {
    background: ${({ theme }) => theme.colors.secondary};
  }

  ${rwd.TABLET(css`
    border-radius: 1rem;
    max-width: 109rem;
  `)}
`;
