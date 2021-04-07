import React from 'react';
import Document, { DocumentContext, Html, Main, NextScript, Head } from 'next/document';
import { RenderPageResult } from 'next/dist/next-server/lib/utils';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<RenderPageResult> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    const initialProps = await Document.getInitialProps(ctx);

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      } as RenderPageResult;
    } catch {
      return initialProps;
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
