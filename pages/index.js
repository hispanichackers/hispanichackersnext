import Layout from '../components/Layout';
import Intro from '../components/Home/Intro';
import Info from '../components/Home/Info';
import Mission from '../components/Home/Mission';
import Links from '../components/Home/Links';


export default function IndexPage(props) {
  return (
    <Layout {...props}>
      <Intro />
      <Info />
      <Mission />
   
      <Links/>
    </Layout>
  );
}
