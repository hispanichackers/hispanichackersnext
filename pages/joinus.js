import Image from "next/image";
import Layout from "../components/Layout";

export default function joinus(props) {
  return (
    <Layout {...props}>
      {/* header */}
      <header className="grid">
        <Image
          className=""
          src="/static/images/joinus_meeting.png"
          alt=""
          width={1440}
          height={959}
        ></Image>
        {/* overlay */}
        <div className="row-start-1 row-end-2 h-[600px] bg-turquoise opacity-80" />

        <div className="h-[500px] bg-slate-600">placeholder</div>
      </header>

      {/* StayUpToDate */}

      {/* CardsWithLink  */}

      {/* Leadership */}
    </Layout>
  );
}
