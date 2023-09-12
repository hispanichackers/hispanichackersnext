import PropTypes from "prop-types";
import Header from "./Header";
import Footer from "./Layout/Footer";

export default function Page({ children }) {
  return (
    <>

      <Header />
      {children}
      <Footer />
    </>
  );
}

Page.propTypes = {
  cool: PropTypes.string,
  children: PropTypes.any,
};
