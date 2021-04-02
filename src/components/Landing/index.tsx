import React from 'react';
import { Header } from '../Header';
import { FirstSection } from './components/FirstSection';
import { WhoWeAreSection } from './components/WhoWeAreSection';
import { LandingContainer } from './styled';

export const Landing: React.FC = () => {
  return (
    <LandingContainer>
      <Header />
      <FirstSection />
      <WhoWeAreSection />
    </LandingContainer>
  );
};
