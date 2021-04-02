import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

export const WhoWeAreSection = () => {
  return (
    <Container>
      {/* <ImageContainer> */}
      <Image src="/landing/4047150.jpg" width="540" height="540" layout="fixed" />
      {/* </ImageContainer> */}
    </Container>
  );
};

const Container = styled.div`
  display: flex;

  width: 100%;
  height: 100vh;

  padding: 65px 165px;

  background-color: ${({ theme }) => theme.colors.white};
`;

const ImageContainer = styled.div`
  position: relative;
  width: 540px;
  height: 540px;
`;
