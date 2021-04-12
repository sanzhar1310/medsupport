import styled, { css } from 'styled-components';
import rwd from '../../../../styles/rwd';

export const HeaderContainer = styled.header`
  width: 100%;
  height: 7.2rem;

  overflow: visible;

  z-index: 3;
  position: fixed;
  top: 0;

  display: flex;
  flex-flow: row nowrap;
  align-items: center;

  .logoLabel {
    margin-left: 1.6rem;
    margin-right: 1.6rem;

    ${rwd.DESKTOP(css`
      margin-right: 10%;
    `)}
  }

  &.color {
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: 0.1rem 0.1rem 0.1rem #e5e9f2;
  }

  transition: 500ms all ease;

  ${rwd.DESKTOP(css`
    padding: 0 16.5rem;
  `)}
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

  display: none;

  ${rwd.DESKTOP(css`
    display: initial;
  `)}
`;
