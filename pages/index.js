import Layout from '../components/Layout';
import Intro from '../components/Home/Intro';
import CodeFoundry from '../components/Home/CodeFoundry';
import Info from '../components/Home/Info';
import Mission from '../components/Home/Mission';
import Links from '../components/Home/Links';


export default function IndexPage(props) {
  return (
    <Layout {...props}>
      <Intro />
      <Info />
      <CodeFoundry />
      <Mission />
      <Links/>
    </Layout>
  );
}
