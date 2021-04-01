import { Landing } from '../components/Landing';
import { Layout } from '../components/Layout';

export default function Home(): JSX.Element {
  return (
    <Layout title="MedSupport | Medical Support">
      <Landing />
    </Layout>
  );
}
