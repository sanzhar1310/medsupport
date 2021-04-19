import Head from 'next/head';
import { FC, useEffect, useState } from 'react';
import { PageLoader } from '../PageLoader';

interface Props {
  title?: string;
}

export const Layout: FC<Props> = (props) => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    document.onreadystatechange = () => {
      if (document.readyState === 'complete') {
        setLoading(false);
      }
    };
    if (document.readyState === 'complete') {
      setLoading(false);
    }
  }, []);

  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {isLoading ? <PageLoader /> : null}
      {props.children}
    </>
  );
};
