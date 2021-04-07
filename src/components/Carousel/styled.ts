import styled from 'styled-components';

export const CarouselContainer = styled.div`
  position: relative;
  height: calc(100vh - 7.2rem);
  width: 100%;
  overflow: hidden;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  img,
  .img-item {
    position: absolute;
    height: 100%;
    width: 100%;

    > div {
      width: 100%;
      height: 100%;
    }
  }

  .motionAbsoluteItem {
    /* position: absolute;
    z-index: 2 !important;
    top: 50%;
    left: 50%;
    overflow: visible; */
    position: absolute;
    height: 100%;
    width: 100%;
  }
  .layout {
    z-index: 1;
    position: absolute;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .arrowButton {
  }

  .buttonContainer {
    button {
      /* box-shadow: rem rem 7.6rem .7rem ${({ theme }) => theme.colors.primary}; */
    }
  }
`;

export const ArrowButton = styled.div`
  z-index: 2;
  position: absolute;
  width: 6rem;
  height: 6rem;
  cursor: pointer;
  /* background-color: ${({ theme }) => theme.colors.secondary}; */

  &.prev {
    left: 1rem;
  }
  &.next {
    right: 1rem;
  }
`;
