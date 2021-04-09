import { css, createGlobalStyle } from 'styled-components';
import fontFaces from './fonts';
import rwd from './rwd';

const resetCss = css`
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  /* ---
  Modifications
--- */
  main {
    display: block;
  }
  *[hidden] {
    display: none !important;
  }
  /* Reset svg and form elementes */
  svg,
  input,
  textarea,
  button,
  select {
    vertical-align: baseline;
    margin: 0;
    padding: 0;
    border: 0;
    font-family: inherit;
    outline: none;
  }
  input,
  textarea,
  button,
  select {
    background: none;
    border-radius: 0;
    outline: none;
    appearance: none;
  }
  textarea {
    overflow: auto;
  }
  button {
    cursor: pointer;
  }
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: greyscale;
    -webkit-text-size-adjust: 100%;
  }
`;

const GlobalStyles = createGlobalStyle`
  ${fontFaces}
  ${resetCss}
  html {
    box-sizing: border-box;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  body {
    font-family: ${({ theme }) => theme.fontPrimary};
  }
  html, body {
    ${rwd.PHONE(css`
      font-size: 30.5%;
    `)}

    ${rwd.TABLET(css`
      font-size: 46.5%;
    `)}

    ${rwd.DESKTOP(css`
      font-size: 55.5%;
    `)}

    ${rwd.XLARGE(css`
      font-size: 62.5%;
    `)}
  }
`;

export default GlobalStyles;
