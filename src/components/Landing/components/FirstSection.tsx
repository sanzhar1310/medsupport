import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import styled, { css } from 'styled-components';
import rwd from '../../../styles/rwd';
import { Button } from '../../Button';
import { Typography } from '../../Typography';
import { useRouter } from 'next/router';

export const FirstSection: React.FC = () => {
  const { t } = useTranslation('landing');
  const { locale } = useRouter();

  const headerFontSize = locale !== 'en' && '4.9rem';

  return (
    <Container className="section">
      <div className="leftSide">
        <div className="content">
          <Typography.Heading1 size={headerFontSize || undefined}>
            {t('firstSection.title.publicHealth')}
            <br />
            {t('firstSection.title.medicine')}
            <br />
            {t('firstSection.title.science')}
          </Typography.Heading1>
          <div className="subtitle">
            <Typography.Subtitle>{t('firstSection.subtitle')}</Typography.Subtitle>
          </div>
          <div className="buttonWrapper">
            <a className="icon" href="https://www.instagram.com/medsupportkz/" target="__blank">
              <Button size="large" as="a">
                <Typography.Label>{t('firstSection.button.subscribe')}</Typography.Label>
              </Button>
            </a>
          </div>
        </div>
      </div>
      <div className="rightSide">
        <Image
          loader={({ src }) => src}
          src="/images/landing/6074952.jpg"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
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
      word-break: break-word;
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
    /* background-image: url('/images/landing/6074952.jpg'); */
    /* background-position: center;
    background-repeat: no-repeat;
    background-size: cover; */
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
      padding-top: 8.5rem;
      justify-content: center;
      align-items: flex-start;
      padding-left: 3.2rem;
      padding-right: 3.2rem;
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
      padding-left: 0;
      padding-right: 0;
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
