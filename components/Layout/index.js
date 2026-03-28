import Header from "./Header";
import Footer from "./Footer";
import SiteBanner from "./SiteBanner";

export default function Layout(props) {
  return (
    <>
      <SiteBanner />
      <Header {...props} />
      <main>
        {props.children}
      </main>
      <Footer {...props} />
    </>
  );
}
