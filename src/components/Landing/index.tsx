import React from 'react';
import { Header } from '../Header';
import { AchievementsSection } from './components/AchievementsSection';
import { FirstSection } from './components/FirstSection';
import { FoundersSection } from './components/FoundersSection';
import { WhatWeDoSection } from './components/WhatWeDoSection';
import { WhoWeAreSection } from './components/WhoWeAreSection';
import { LandingContainer } from './styled';

export const Landing: React.FC = () => {
  return (
    <LandingContainer>
      <Header />
      <FirstSection />
      <WhoWeAreSection />
      <div style={{ position: 'relative', overflow: 'visible', zIndex: 0 }}>
        <span
          style={{
            height: '50vh',
            width: '100%',
            position: 'absolute',
            left: '0',
            top: '-15vh',
            background: '#F4F5F7',
          }}
        />
      </div>
      <WhatWeDoSection />
      <AchievementsSection />
      <FoundersSection />
    </LandingContainer>
  );
};
