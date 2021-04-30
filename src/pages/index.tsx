import React from 'react';
import { GetStaticProps } from 'next';
import dynamic from 'next/dynamic';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Landing } from '../components/Landing';
import nextI18NextConfig from '../../next-i18next.config';

const Layout = dynamic(() => import('../components/Layout').then((ctx) => ctx.Layout), {
  ssr: false,
}) as React.FC<{ title?: string }>;

const Home: React.FC = () => {
  return (
    <Layout title="MedSupport | Medical Support">
      <Landing />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(locale && (await serverSideTranslations(locale, ['landing'], nextI18NextConfig))),
    },
  };
};

export default Home;
