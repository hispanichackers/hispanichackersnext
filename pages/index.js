import Layout from '../components/Layout';
import Intro from '../components/Home/Intro';
import Mission from '../components/Home/Mission';
import Links from '../components/Links';

export default function IndexPage(props) {
  return (
    <Layout {...props}>
      <Intro />
      <Mission />
      <Links/>
    </Layout>
  );
}
