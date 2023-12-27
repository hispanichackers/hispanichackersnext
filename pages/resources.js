import Layout from "../components/Layout";
import Image from "next/image";
import ResourceCard from "../components/resouce-card.component";
import ResourceSection from "../components/resource-section.component";
import resources from "../assets/resources.json";

export default function Resources(props) {
  return (
    <Layout {...props}>
      <section className="grid isolate">
        <Image
          src="/static/images/Austin-skyline-daytime.jpg"
          alt="Techqueria Logo"
          width={2560}
          height={250}
          className="col-span-full row-span-full h-[400px] md:h-[600px] object-cover object-center w-full"
        />
        <div className="col-span-full row-span-full bg-[#277E7E] bg-opacity-60 flex justify-between flex-col">
          <div className="wrapper px-8 py-10 md:py-14 text-white">
            <h1 className="text-6xl md:text-7xl">Get Connected</h1>
            <h2 className="text-2xl md:text-3xl">Resources for growth in Austin & beyond.</h2>
          </div>
          <ul className="grid grid-cols-2 lg:grid-cols-4 text-lg md:text-xl text-white border-2 md:border-3 border-white bg-cyan/80">
            <li>
              <span className="h-full font-medium border-white flex items-center justify-center p-2 md:p-4 leading-tight text-center hover:bg-white hover:text-cyan border-2">For Developers / Engineers</span>
            </li>
            <li>
              <span className="h-full font-medium border-white flex items-center justify-center p-2 md:p-4 leading-tight text-center hover:bg-white hover:text-cyan border-2">For Entrepreneurs</span>
            </li>
            <li>
              <span className="h-full font-medium border-white flex items-center justify-center p-2 md:p-4 leading-tight text-center hover:bg-white hover:text-cyan border-2">For Nonprofits / Volunteers</span>
            </li>
            <li>
              <span className="h-full font-medium border-white flex items-center justify-center p-2s md:p-4 leading-tight text-center hover:bg-white hover:text-cyan border-2">For Students</span>
            </li>
          </ul>
        </div>
      </section>
      <section className="flex justify-center p-8">
        <div className="flex max-w-[1600px] flex-wrap gap-6 justify-center">
          {
            Object.entries(resources).map(([resource, data]) => (
              <ResourceCard
              title={resource}
              text={data.text}
              linkText={data.link.text}
              linkUrl={data.link.url}
              image={data.icon}
              imageAlt={resource + " Icon"}
              tags={data.tags}
              linkTarget={data.link.target}
              />
            ))
          }
        </div>
      </section>
      
    </Layout>
  );
}
