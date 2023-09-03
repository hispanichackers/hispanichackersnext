import Header from "./Header";
import Footer from "./Footer";

export default function Layout(props) {
  return (
    <>
      <Header {...props} />
      <main className="pt-[150px] md:pt-[122px]">
        {props.children}
      </main>
      <Footer {...props} />
    </>
  );
}
