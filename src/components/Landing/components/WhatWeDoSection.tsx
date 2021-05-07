import React from 'react';
import { useTranslation } from 'next-i18next';
import styled, { css } from 'styled-components';
import rwd from '../../../styles/rwd';
import { Typography } from '../../Typography';

const steps = ['whatWeDo.step1', 'whatWeDo.step2', 'whatWeDo.step3'];

export const WhatWeDoSection: React.FC = () => {
  const { t } = useTranslation('landing');

  return (
    <Container className="section">
      <Typography.Heading2 className="heading" align="center">
        {t('whatWeDo.header')}
      </Typography.Heading2>
      <div className="stepContainer">
        <TextCard className="primaryColor">
          <Typography.Subtitle color="white" dangerouslySetInnerHTML={{ __html: t(steps[0]) }} />
        </TextCard>
        <TextCard className="secondaryColor">
          <Typography.Subtitle dangerouslySetInnerHTML={{ __html: t(steps[1]) }} />
        </TextCard>
        <TextCard className="last">
          <Typography.Heading6 dangerouslySetInnerHTML={{ __html: t(steps[2]) }} />
        </TextCard>
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
    `,
  )}

  ${rwd.TABLET(
    css`
      min-height: unset;
      flex-flow: column nowrap;
      align-items: center;
      padding: 7.2rem 0;
      padding-top: calc(7.2rem + 6.4rem);

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
