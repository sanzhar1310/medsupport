import styled from 'styled-components';

export const LandingContainer = styled.div`
  width: 100%;
  /* overflow: auto;
  height: 100vh; */

  position: relative;

  display: flex;
  flex-flow: column nowrap;
  /* scroll-snap-type: mandatory;
  scroll-snap-points-y: repeat(3rem);
  scroll-snap-type: y mandatory; */
  .section {
    scroll-snap-align: start;
  }
`;
