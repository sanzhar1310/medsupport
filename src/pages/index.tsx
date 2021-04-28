import dynamic from 'next/dynamic';
import React from 'react';
import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { Landing } from '../components/Landing';

const Layout = dynamic(() => import('../components/Layout').then((ctx) => ctx.Layout), {
  ssr: false,
}) as React.FC<{ title?: string }>;

export default function Home(): JSX.Element {
  return (
    <Layout title="MedSupport | Medical Support">
      <Landing />
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(locale && (await serverSideTranslations(locale, ['landing']))),
    },
  };
};
