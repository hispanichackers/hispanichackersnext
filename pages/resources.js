import Layout from "../components/Layout";
import Image from "next/image";
import ResourceCard from "../components/resouce-card.component";
import ResourceSection from "../components/resource-section.component";

export default function Resources(props) {
  return (
    <Layout {...props}>
      <header className="grid isolate">
        <Image
          src="/static/images/Austin-skyline-daytime.jpg"
          alt="Techqueria Logo"
          width={2560}
          height={250}
          className="col-span-full row-span-full md:h-[600px] object-cover w-full h-full"
        />
        <div className="col-span-full row-span-full bg-[#277E7E] bg-opacity-60 flex justify-between flex-col">
          <div className="wrapper px-8 py-24">
            <h1>Get Connected</h1>
            <h2>Resources for growth in Austin & beyond.</h2>
          </div>
          <ul className="grid grid-cols-2 md:grid-cols-4 text-2xl">
            <li>
              <a className="h-full font-medium border-white flex items-center justify-center border-l-4 border-r-2 border-t-4 border-b-2 md:border-y-4 p-8 text-center hover:bg-white hover:text-cyan" href="#for-devs">For Developers / Engineers</a>
            </li>
            <li>
              <a className="h-full font-medium border-white flex items-center justify-center border-l-2 border-r-4 md:border-x-2 border-t-4 border-b-2 md:border-y-4 p-8 text-center hover:bg-white hover:text-cyan hover:cursor-pointer focus:bg-white focus:text-cyan" href="#for-entrepreneurs">For Entrepreneurs</a>
            </li>
            <li>
              <a className="h-full font-medium border-white flex items-center justify-center border-l-4 border-r-2 md:border-x-2 border-t-2 border-b-4 md:border-y-4 p-8 text-center hover:bg-white hover:text-cyan hover:cursor-pointer focus:bg-white focus:text-cyan" href="#for-nonprofits">For Nonprofits / Volunteers</a>
            </li>
            <li>
              <a className="h-full font-medium border-white flex items-center justify-center border-l-2 border-r-4 border-t-2 border-b-4 md:border-y-4 p-8 text-center hover:bg-white hover:text-cyan hover:cursor-pointer focus:bg-white focus:text-cyan" href="#for-students">For Students</a>
            </li>
          </ul>
        </div>
      </header>
      <ResourceSection title="General Resources" sectionId="general-resources">
        <article className="py-8 wrapper">
          <ResourceCard
            title="Free Udemy Courses through GALE"
            copy="GALE Presents provides a free version of the Udemy platform through public libraries and institutions."
            linkCopy="Find a Free Udemy Course"
            linkUrl="#"
            image="/static/images/gale-logo.png"
            imageAlt="Gale logo"
          />
        </article>
      </ResourceSection>
      <ResourceSection title="Resources for Developers / Engineers" sectionId="for-devs">
        <article className="py-8 wrapper">
          <ResourceCard
            title="Free Udemy Courses through GALE"
            copy="GALE Presents provides a free version of the Udemy platform through public libraries and institutions."
            linkCopy="Find a Free Udemy Course"
            linkUrl="#"
            image="/static/images/gale-logo.png"
            imageAlt="Gale logo"
          />
        </article>
      </ResourceSection>
      <ResourceSection title="Resources for Entrepreneurs" sectionId="for-entrepreneurs">
        <article className="py-8 wrapper">
          <ResourceCard
            title="Free Udemy Courses through GALE"
            copy="GALE Presents provides a free version of the Udemy platform through public libraries and institutions."
            linkCopy="Find a Free Udemy Course"
            linkUrl="#"
            image="/static/images/gale-logo.png"
            imageAlt="Gale logo"
          />
        </article>
      </ResourceSection>
      <ResourceSection title="Resources for Nonprofits & Volunteers" sectionId="for-nonprofits">
        <article className="py-8 wrapper">
          <ResourceCard
            title="Free Udemy Courses through GALE"
            copy="GALE Presents provides a free version of the Udemy platform through public libraries and institutions."
            linkCopy="Find a Free Udemy Course"
            linkUrl="#"
            image="/static/images/gale-logo.png"
            imageAlt="Gale logo"
          />
        </article>
      </ResourceSection>
      <ResourceSection title="Resources for Students" sectionId="for-students">
        <article className="py-8 wrapper">
          <ResourceCard
            title="Free Udemy Courses through GALE"
            copy="GALE Presents provides a free version of the Udemy platform through public libraries and institutions."
            linkCopy="Find a Free Udemy Course"
            linkUrl="#"
            image="/static/images/gale-logo.png"
            imageAlt="Gale logo"
          />
        </article>
      </ResourceSection>
    </Layout>
  );
}
