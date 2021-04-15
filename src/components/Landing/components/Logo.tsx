import Image from 'next/image';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  /* background: url('/images/logo.png') center no-repeat;
  background-size: contain; */
  width: 4rem;
  height: 3.2rem;
`;

export const Logo: React.FC = () => {
  return (
    <Container>
      <Image loader={({ src }) => src} src="/images/logo.png" layout="fill" alt="logo" />
    </Container>
  );
};
