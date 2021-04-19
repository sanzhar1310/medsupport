import { Landing } from '../components/Landing';
import dynamic from 'next/dynamic';
import React from 'react';

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
