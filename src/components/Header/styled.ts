import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  height: 72px;

  z-index: 2;
  position: fixed;
  top: 0;

  padding: 0 165px;

  display: flex;
  flex-flow: row nowrap;
  align-items: center;

  span {
    margin-left: 1%;
  }
  /* background-color: ${({ theme }) => theme.colors.white}; */

  /* box-shadow: 0px 1px 0px #e5e9f2; */
`;

export const SocialBlock = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin-left: auto;

  .icon {
    margin-right: 14px;
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
    margin-right: 32px;
    :last-child {
      margin-right: 0;
    }
  }
`;

export const HeaderLogo = styled.div`
  background: url(/icons/logo.png) center no-repeat;
  background-size: contain;
  width: 40px;
  height: 32px;
`;
