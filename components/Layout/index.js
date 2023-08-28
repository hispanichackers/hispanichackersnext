import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";

const Section = styled.section`
  width: 90%;
  margin: 0 auto 2rem;
`;

export default function Layout(props) {
  return (
    <>
      <Header {...props} />
      <main>
        <Section>{props.children}</Section>
      </main>
      <Footer {...props} />
    </>
  );
}
