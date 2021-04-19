import styled from 'styled-components';

export const PageLoader = () => {
  return (
    <Layout>
      <RingLoader>
        <div />
        <div />
        <div />
        <div />
      </RingLoader>
    </Layout>
  );
};

const Layout = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9999;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RingLoader = styled.div`
  display: inline-block;
  position: relative;
  width: 8rem;
  height: 8rem;

  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 6.4rem;
    height: 6.4rem;
    margin: 0.8rem;
    border: 0.8rem solid ${({ theme }) => theme.colors.primary};
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${({ theme }) => theme.colors.primary} transparent transparent transparent;

    :nth-child(1) {
      animation-delay: -0.45s;
    }
    :nth-child(2) {
      animation-delay: -0.3s;
    }

    :nth-child(3) {
      animation-delay: -0.15s;
    }
  }
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
