import React from 'react';
import styled, { css } from 'styled-components';
import rwd from '../../../styles/rwd';
import { Button } from '../../Button';
import { Typography } from '../../Typography';

export const FirstSection: React.FC = () => {
  return (
    <Container className="section">
      <div className="leftSide">
        <div className="content">
          <Typography.Heading1>
            PUBLIC HEALTH
            <br />
            MEDICINE
            <br />
            SCIENCE
          </Typography.Heading1>
          <div className="subtitle">
            <Typography.Subtitle>
              Community of scientists and medical workers promoting science and empirical thinking
              in regards to medicine, healthcare, and personal health.
            </Typography.Subtitle>
          </div>
          <div className="buttonWrapper">
            <a className="icon" href="https://www.instagram.com/medsupportkz/" target="__blank">
              <Button size="large" as="a">
                <Typography.Label>Subscribe on Instagram</Typography.Label>
              </Button>
            </a>
          </div>
        </div>
      </div>
      <div className="rightSide">{/* <Image src="/landing/4386464.jpg" layout="fill" /> */}</div>
    </Container>
  );
};

const Container = styled.div`
  z-index: 1;
  width: 100%;
  height: fit-content;
  min-height: 100vh;
  background-color: white;

  display: flex;
  flex-flow: row nowrap;

  .leftSide {
    min-height: 100vh;
    flex: 5;
    padding-left: 16.5rem;
    padding-right: 6.5rem;
    padding-top: 7.2rem;

    display: flex;
    /* justify-content: flex-end; */
    align-items: center;

    .content {
      /* max-width: 54rem; */
      .subtitle {
        max-width: 54rem;
        margin-top: 1.6rem;
      }
      .buttonWrapper {
        margin-top: 3.2rem;
        a {
          color: unset;
          text-decoration: unset;
        }
      }
    }
  }
  .rightSide {
    position: relative;
    height: 100vh;
    flex: 3;

    background-color: #18191f;
    background-image: url('/landing/6074952.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  ${rwd['PHONE'](css`
    flex-flow: column-reverse nowrap;
    justify-content: flex-end;
    .rightSide {
      height: 35vh;
      flex: unset;
      /* flex-flow: row nowrap;
      display: none; */
    }

    .leftSide {
      min-height: unset;
      height: fit-content;
      flex: unset;
      padding: 0;
      padding-top: 14.5rem;
      justify-content: center;
      align-items: flex-start;
    }

    /* background: red; */
  `)}

  ${rwd['TABLET'](css`
    flex-flow: column-reverse nowrap;
    justify-content: flex-end;
    min-height: 100vh;
    .rightSide {
      height: 40vh;
      flex: unset;
      /* flex-flow: row nowrap;
      display: none; */
    }

    .leftSide {
      height: fit-content;
      flex: unset;
      padding: 0;
      padding-top: 14.5rem;
      justify-content: center;
      align-items: flex-start;
    }

    /* background: red; */
  `)}

  ${rwd['DESKTOP'](css`
    flex-flow: row nowrap;
    .rightSide {
      height: 100vh;
      flex: 3;
      /* flex-flow: row nowrap;
      display: none; */
    }
    .leftSide {
      min-height: 100vh;
      justify-content: unset;
      align-items: center;
      flex: 5;
      padding-left: 16.5rem;
      padding-right: 6.5rem;
      padding-top: 7.2rem;
    }
  `)}
`;
