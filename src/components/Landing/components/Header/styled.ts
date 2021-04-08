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
    margin-left: 1.6rem;
    margin-right: 10%;
  }

  &.color {
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: rem 0.1rem rem #e5e9f2;
  }

  transition: 500ms background-color ease;
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
