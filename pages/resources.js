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
          <div className="wrapper px-8 py-24 text-white">
            <h1>Get Connected</h1>
            <h2>Resources for growth in Austin & beyond.</h2>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-2xl text-white">
            <li>
              <a
                className="h-full font-medium border-white flex items-center justify-center border-l-4 border-x-4 md:border-r-2 border-t-4 border-b-2 lg:border-y-4 p-8 text-center hover:bg-white hover:text-cyan"
                href="#for-devs"
              >
                For Developers / Engineers
              </a>
            </li>
            <li>
              <a
                className="h-full font-medium border-white flex items-center justify-center border-x-4 md:border-r-4 md:border-l-2 lg:border-x-2 border-t-2 md:border-t-4 border-b-2 lg:border-y-4 p-8 text-center hover:bg-white hover:text-cyan hover:cursor-pointer focus:bg-white focus:text-cyan"
                href="#for-entrepreneurs"
              >
                For Entrepreneurs
              </a>
            </li>
            <li>
              <a
                className="h-full font-medium border-white flex items-center justify-center border-x-4 md:border-l-4 md:border-r-2 lg:border-x-2 border-t-2 border-b-2 md:border-b-4 lg:border-y-4 p-8 text-center hover:bg-white hover:text-cyan hover:cursor-pointer focus:bg-white focus:text-cyan"
                href="#for-nonprofits"
              >
                For Nonprofits / Volunteers
              </a>
            </li>
            <li>
              <a
                className="h-full font-medium border-white flex items-center justify-center border-x-4 md:border-l-2 md:border-r-4 border-t-2 md:border-t-2 border-b-4 lg:border-y-4 p-8 text-center hover:bg-white hover:text-cyan hover:cursor-pointer focus:bg-white focus:text-cyan"
                href="#for-students"
              >
                For Students
              </a>
            </li>
          </ul>
        </div>
      </header>
      <ResourceSection title="General Resources" sectionId="general-resources">
        <ResourceCard
          title="Join Hispanic Hackers"
          copy="Join us and stay up to date with your comunidad! We send out weekly newsletters with innovator events happening in Austin and beyond."
          linkCopy="Join Us"
          linkUrl="/"
          image="/static/images/logo.png"
          imageAlt="Hispanic Hackers logo"
        />
        <ResourceCard
          title="Hispanic Hackers Discord"
          copy="Join our Discord - your one stop shop for getting in touch with your fellow Hispanic jaqueros! Network, explore, and grow."
          linkCopy="Connect With Us On Discord"
          linkUrl="https://discord.gg/67nEABfYcn"
          image="/static/images/discord-logo.png"
          imageAlt="Discord logo"
        />
        <ResourceCard
          title="Hispanic Hackers Events"
          copy="GALE Presents provides a free version of the Udemy platform through public libraries and institutions."
          linkCopy="Join our events"
          linkUrl="https://library.austintexas.gov/virtual/gale-presents-udemy"
          image="/static/images/meetup-logo.png"
          imageAlt="Meetup logo"
        />
        <ResourceCard
          title="Free Udemy Courses through GALE"
          copy="Hispanic Hackers hosts Meetups in Austin and online! Join our comunidad and grow with us."
          linkCopy="Find a Free Udemy Course"
          linkUrl="https://library.austintexas.gov/virtual/gale-presents-udemy"
          image="/static/images/gale-logo.png"
          imageAlt="Gale logo"
        />
      </ResourceSection>
      <ResourceSection
        title="Resources for Developers / Engineers"
        sectionId="for-devs"
      >
        <ResourceCard
          title="Free Udemy Courses through GALE"
          copy="GALE Presents provides a free version of the Udemy platform through public libraries and institutions."
          linkCopy="Find a Free Udemy Course"
          linkUrl="https://library.austintexas.gov/virtual/gale-presents-udemy"
          image="/static/images/gale-logo.png"
          imageAlt="Gale logo"
        />
      </ResourceSection>
      <ResourceSection
        title="Resources for Entrepreneurs"
        sectionId="for-entrepreneurs"
      >
        <ResourceCard
          title="Free Udemy Courses through GALE"
          copy="GALE Presents provides a free version of the Udemy platform through public libraries and institutions."
          linkCopy="Find a Free Udemy Course"
          linkUrl="https://library.austintexas.gov/virtual/gale-presents-udemy"
          image="/static/images/gale-logo.png"
          imageAlt="Gale logo"
        />
      </ResourceSection>
      <ResourceSection
        title="Resources for Nonprofits & Volunteers"
        sectionId="for-nonprofits"
      >
        <ResourceCard
          title="Austin Nonprofits"
          copy="Austin Nonprofits is a central forum for all of Austin’s nonprofit communities to share opportunities and resources."
          linkCopy="Connect Your Community"
          linkUrl="https://join.slack.com/t/austin-nonprofit/shared_invite/zt-23fhusax2-EHdcKdb4mVQ6DspHODvO4w"
          image="/static/images/austin-nonprofit-logo.png"
          imageAlt="Austin Nonprofit logo"
        />
      </ResourceSection>
      <ResourceSection title="Resources for Students" sectionId="for-students">
        <ResourceCard
          title="Free Udemy Courses through GALE"
          copy="GALE Presents provides a free version of the Udemy platform through public libraries and institutions."
          linkCopy="Find a Free Udemy Course"
          linkUrl="https://library.austintexas.gov/virtual/gale-presents-udemy"
          image="/static/images/gale-logo.png"
          imageAlt="Gale logo"
        />
      </ResourceSection>
    </Layout>
  );
}
