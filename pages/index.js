import Layout from '../components/Layout';
import Intro from '../components/Home/Intro';
import Mission from '../components/Home/Mission';
import ContactButton from '../components/lib/ContactButton';
import ImageTileSection from '../components/Home/ImageTileSection';
import Links from '../components/Links';


export default function IndexPage(props) {
  return (
    <Layout {...props}>
      <Intro />
      <Mission />
      <ImageTileSection />
      <Links/>
    </Layout>
  );
}
