import React from 'react';
import { Header } from './components/Header';
import { AchievementsSection } from './components/AchievementsSection';
import { FirstSection } from './components/FirstSection';
import { Footer } from './components/Footer';
import { FoundersSection } from './components/FoundersSection';
import { PartnersSection } from './components/PartnersSection';
import { WhatWeDoSection } from './components/WhatWeDoSection';
import { WhoWeAreSection } from './components/WhoWeAreSection';
import { LandingContainer } from './styled';
import styled from 'styled-components';

export const Landing: React.FC = () => {
  return (
    <LandingContainer className="landingContainer">
      <Header />
      <FirstSection />
      <DividerContainer>
        <span />
      </DividerContainer>
      <WhoWeAreSection />
      <DividerContainer>
        <span />
      </DividerContainer>
      <WhatWeDoSection />
      <AchievementsSection />
      <FoundersSection />
      <PartnersSection />
      <Footer />
    </LandingContainer>
  );
};

const DividerContainer = styled.div`
  position: relative;
  overflow: visible;
  z-index: 0;
  span {
    height: 50vh;
    width: 100%;
    position: absolute;
    left: 0;
    top: -15vh;
    background: #f4f5f7;
  }
`;
