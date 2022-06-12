import { Layout } from '../components/Layout';
import { Newsletter } from '../components/newsletter/Newsletter';

const Sundays = (): JSX.Element => (
  <Layout>
    <Newsletter standalone />
  </Layout>
);

export default Sundays;
