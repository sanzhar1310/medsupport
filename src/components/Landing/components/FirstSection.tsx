import React from 'react';
import styled from 'styled-components';
import { Button } from '../../Button';
import { Typography } from '../../Typography';

export const FirstSection: React.FC = () => {
  return (
    <Container>
      <div className="leftSide">
        <div className="content">
          <Typography.Heading1>PUBLIC HEALTH</Typography.Heading1>
          <Typography.Heading1>MEDICINE</Typography.Heading1>
          <Typography.Heading1>SCIENCE</Typography.Heading1>
          <div className="subtitle">
            <Typography.Subtitle>
              Community of scientists and medical workers promoting science and empirical thinking
              in regards to medicine, healthcare, and personal health.
            </Typography.Subtitle>
          </div>
          <div className="buttonWrapper">
            <Button size="large">Subscribe on Instagram</Button>
          </div>
        </div>
      </div>
      <div className="rightSide">{/* <Image src="/landing/4386464.jpg" layout="fill" /> */}</div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: white;

  display: flex;
  flex-flow: row nowrap;

  .leftSide {
    height: 100%;
    flex: 5;
    padding-left: 16.5rem;

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
      }
    }
  }
  .rightSide {
    position: relative;
    height: 100%;
    flex: 3;

    background-color: #18191f;
    background-image: url('/landing/4386464.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;
