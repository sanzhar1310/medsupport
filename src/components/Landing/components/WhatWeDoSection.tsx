import React from 'react';
import styled from 'styled-components';
import { Typography } from '../../Typography';

const steps = [
  <Typography.Lead2 color="white">
    <strong>Medsupportkz</strong> was established in May 2020 amidst the worst time of{' '}
    <strong>COVID-19</strong> pandemic in Kazakhstan. The project includes a team of 100 volunteers:
    scientists, medical workers and experienced translators. The official communication on{' '}
    <strong>COVID-19</strong> was often inadequate and late; there was a lack of information on the
    latest scientific advancements and medical practices in Kazakhstan. Medical workers, in turn,
    were more than ever frustrated and burned out due to both poor working conditions and a lack of
    systematic support.
  </Typography.Lead2>,
  <Typography.Lead2>
    The <strong>COVID-19</strong> pandemic has exposed many healthcare and health literacy problems
    among people of Kazakhstan. With the start of the epidemic in Kazakhstan, the social media got
    clattered with fake information, which was widely spread among the population. Insufficient and
    inefficient communication between scientists with medical workers and decision-makers causes
    panic and spread of fake information as well as lowers public trust in science among the
    population. Thus, people distrust all health authorities, be it the Ministry of Health, WHO, or
    UNICEF, and prefer to get treated by folk medicine specialists.
  </Typography.Lead2>,
  <Typography.Lead2>
    <strong>Medsupport</strong> became a bridge between trusted scientific information and local
    medical workers who do not have time or sufficient level of English. Platform provides
    scientifically reliable information, studies and guidelines about <strong>Covid-19</strong> in
    Kazakh and Russian translated and adapted from English.
  </Typography.Lead2>,
];

export const WhatWeDoSection = () => {
  return (
    <Container>
      <div className="titleContainer">
        <Typography.Heading2 className="heading">What We Do</Typography.Heading2>
        <img src="/landing/question-pills.jpg" width={445} height={525} />
      </div>
      <div className="stepContainer">
        <StepItem primary>{steps[0]}</StepItem>
        <StepItem>{steps[1]}</StepItem>
        <StepItem>{steps[2]}</StepItem>
      </div>
    </Container>
  );
};

const Container = styled.div`
  z-index: 1;
  width: 100%;
  height: fit-content;
  min-height: 100vh;

  padding: 7.2rem 16.5rem;

  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-content: space-evenly;
  /* align-items: space-evenly; */
  gap: 3rem;


  .titleContainer {
    height: 100%;
    width: fit-content;

    display: flex;
    flex-flow: column nowrap;

    .heading {
      margin-bottom: 2.5rem;
    }
    img {
      object-fit: cover;
    }
  }

  .stepContainer {
    /* margin-top: 4rem; */
    align-self: center;

    max-width: 122.5rem;
    height: fit-content;
    flex: 1;
    min-width: 30rem;
    max-height: 100%;

    display: flex;
    flex-flow: column nowrap;
    background: ${({ theme }) => theme.colors.secondary};
  }
`;
/* ${rwd.} */

const StepItem = styled.div<{ primary?: boolean }>`
  padding: 4.8rem 8rem;
  background: ${({ primary, theme }) => (primary ? theme.colors.primary : theme.colors.secondary)};
  height: fit-content;
  width: 100%;
`;
