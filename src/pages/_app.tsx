import React from 'react';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/global';
import theme from '../styles/theme';
import { appWithTranslation } from 'next-i18next';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default appWithTranslation(MyApp);
