import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  height: 7.2rem;

  z-index: 2;
  position: fixed;
  top: 0;

  padding: 0 16.5rem;

  display: flex;
  flex-flow: row nowrap;
  align-items: center;

  span {
    margin-left: 1%;
  }
  /* background-color: ${({ theme }) => theme.colors.white}; */

  /* box-shadow: rem 0.1rem rem #e5e9f2; */
`;

export const SocialBlock = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin-left: auto;

  .icon {
    margin-right: 1.4rem;
    :last-child {
      margin-right: 0;
    }
  }
`;

export const NavItemsBlock = styled.div`
  font-weight: 700;
  display: flex;
  flex-flow: row nowrap;
  margin-left: 10%;
  .link {
    a {
      color: ${({ theme }) => theme.colors.black};
      text-decoration: none;

      :hover {
        color: ${({ theme }) => theme.colors.primary};
      }
    }
    margin-right: 3.2rem;
    :last-child {
      margin-right: 0;
    }
  }
`;

export const HeaderLogo = styled.div`
  position: relative;
  background: url('/icons/logo.png') center no-repeat;
  background-size: contain;
  width: 4rem;
  height: 3.2rem;
`;
