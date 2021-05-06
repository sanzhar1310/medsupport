import styled, { css } from 'styled-components';
import rwd from '../../../../styles/rwd';

export const HeaderContainer = styled.header`
  width: 100%;
  height: 7.2rem;
  gap: 1.6rem;
  overflow: visible;

  z-index: 3;
  position: fixed;
  top: 0;

  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;

  .logoWithLabel {
    display: flex;
    width: fit-content;
    flex-wrap: nowrap;
    gap: 1.6rem;
    margin: auto;
    ${rwd.DESKTOP(css`
      margin: 0;
      /* margin-right: 10%; */
    `)}
  }

  &.color {
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: 0.1rem 0.1rem 0.1rem #e5e9f2;
  }

  transition: 500ms all ease;
  /* ${rwd.PHONE(css` */
    /* padding: 0 1.6rem; */
  /* `)} */
  ${rwd.DESKTOP(css`
    padding: 0 16.5rem;
  `)}
`;

export const SocialBlock = styled.div`
  display: flex;
  flex-flow: row nowrap;
  gap: 1.4rem;

  display: none;

  .alwaysShow {
    display: flex !important;
  }
  ${rwd.DESKTOP(css`
    display: flex;
  `)}
`;
