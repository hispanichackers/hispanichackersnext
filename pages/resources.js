import Layout from "../components/Layout";
import Image from "next/image";
import ResourceCard from "../components/resouce-card.component";
import ResourceSection from "../components/resource-section.component";
import resources from "../assets/resources.json";
import Briefcase from "../assets/briefcase";
import Cap from "../assets/cap";
import Gear from "../assets/gear";
import Volunteer from "../assets/volunteer";
import { useState } from 'react';


export default function Resources(props) {
  const [audienceFilter, setAudienceFilter] = useState(undefined);
  const [numResources, setNumResources] = useState(Object.keys(resources).length);
  const [resourceData, setResourceData] = useState(resources);
  const [resourceDescription, setResourceDescription] = useState("RESOURCES FOR ALL INNOVATORS");
  const [tagFilter, setTagFilter] = useState(undefined);

  const resourceDescriptions = {
    "developers": "RESOURCES FOR DEVELOPERS & ENGINEERS",
    "entrepreneurs": "RESOURCES FOR ENTREPRENEURS",
    "nonprofits": "RESOURCES FOR NON-PROFITS AND VOLUNTEERS",
    "students": "RESOURCES FOR STUDENTS"
  }

  const icons = {
    "tool": {
      icon: Gear,
      color: "#ff6000",
      text: "Tech Tools"
    },
    "networking": {
      icon: Briefcase,
      color: "#267e7e",
      text: "Networking"
    },
    "volunteer": {
      icon: Volunteer,
      color: "#41cecf",
      text: "Volunteering"
    },
    "scholarships": {
      icon: Cap,
      color: "#f5bb00",
      text: "Scholarships"
    }
  }

  const updateResourceData = (audience, tag) => {
    const filteredResourceData = Object.keys(resources)
      .filter(key => {
        const { tags } = resources[key];
        return (audience === undefined || tags.includes(audience)) && (tag === undefined || tags.includes(tag));
      })
      .reduce((obj, key) => ({ ...obj, [key]: resources[key] }), {});
  
    setResourceData(filteredResourceData);
    return Object.keys(filteredResourceData).length;
  };

  const toggleState = (e) => {
    setAudienceFilter((prevFilter) => {
      if (prevFilter === e.target.dataset.audience) {
        setNumResources(updateResourceData(undefined, tagFilter));
        e.target.classList.remove('resourcesToggled');
        setResourceDescription("RESOURCES FOR ALL INNOVATORS");
        return undefined;
      } else { 
        setNumResources(updateResourceData(e.target.dataset.audience, tagFilter));
        document.querySelector('.resourcesToggled') ? document.querySelector('.resourcesToggled').classList.remove('resourcesToggled') : null;
        e.target.classList.add('resourcesToggled');
        setResourceDescription(resourceDescriptions[e.target.dataset.audience]);
        return e.target.dataset.audience;
      }
    });
  }

  const toggleTag = (e) => {
    setTagFilter((prevFilter) => {
      if (prevFilter === e.target.dataset.tag) {
        setNumResources(updateResourceData(audienceFilter, undefined));
        e.target.classList.remove('resourceButtonToggled');
        return undefined;
      } else { 
        setNumResources(updateResourceData(audienceFilter, e.target.dataset.tag));
        document.querySelector('.resourceButtonToggled') ? document.querySelector('.resourceButtonToggled').classList.remove('resourceButtonToggled') : null;
        e.target.classList.add('resourceButtonToggled');
        return e.target.dataset.tag;
      }
    });
  }

  return (
    <Layout {...props}>
      <section className="grid isolate">
        <Image
          src="/static/images/Austin-skyline-daytime.webp"
          alt="Austin Skyline"
          width={2560}
          height={250}
          priority
          className="col-span-full row-span-full h-[400px] md:h-[550px] lg:h-[600px] object-cover object-center w-full"
        />
        <div className="col-span-full row-span-full bg-[#277E7E] bg-opacity-60 flex justify-between flex-col">
          <div className="wrapper px-8 py-10 md:py-14 text-white">
            <h1 className="text-6xl md:text-7xl">Get Connected</h1>
            <h2 className="text-2xl md:text-3xl">Resources for growth in Austin & beyond.</h2>
          </div>
          <ul className="grid grid-cols-2 lg:grid-cols-4 text-lg md:text-xl text-white border-2 md:border-3 border-white bg-cyan/80">
            <li>
              <span data-audience="developers" onClick={toggleState} className="h-full font-medium border-white flex items-center justify-center p-2 md:p-4 leading-tight text-center hover:bg-white hover:text-cyan border-2 cursor-pointer">For Developers / Engineers</span>
            </li>
            <li>
              <span data-audience="entrepreneurs" onClick={toggleState} className="h-full font-medium border-white flex items-center justify-center p-2 md:p-4 leading-tight text-center hover:bg-white hover:text-cyan border-2 cursor-pointer">For Entrepreneurs</span>
            </li>
            <li>
              <span data-audience="nonprofits" onClick={toggleState} className="h-full font-medium border-white flex items-center justify-center p-2 md:p-4 leading-tight text-center hover:bg-white hover:text-cyan border-2 cursor-pointer">For Nonprofits / Volunteers</span>
            </li>
            <li>
              <span data-audience="students" onClick={toggleState} className="h-full font-medium border-white flex items-center justify-center p-2s md:p-4 leading-tight text-center hover:bg-white hover:text-cyan border-2 cursor-pointer">For Students</span>
            </li>
          </ul>
        </div>
      </section>
      <article className="flex flex-col justify-center p-8 gap-y-6 md:gap-y-10">
        <h2 className="text-4xl md:text-5xl font-bebas">{numResources + " " + resourceDescription}</h2>
        <div className="flex flex-row gap-2 flex-wrap">
          {
            Object.entries(icons).map(([icon, data]) => (
              <div key={icon} data-tag={icon} onClick={toggleTag} style={{ "--buttoncolor": data.color }} className={`resourceButton px-4 py-1 rounded-xl text-sm md:text-lg text-white border-3 cursor-pointer flex flex-row gap-x-2`}>
                {<data.icon/>}
                {data.text}
              </div>
            ))
          }
        </div>
        <div className="flex max-w-[1600px] flex-wrap gap-6 justify-center">
          {
            Object.entries(resourceData).map(([resource, data]) => (
              <ResourceCard
              title={resource}
              text={data.text}
              linkText={data.link.text}
              linkUrl={data.link.url}
              image={data.icon}
              imageAlt={resource + " Icon"}
              tags={data.tags}
              linkTarget={data.link.target}
              key={resource}
              />
            ))
          }
        </div>
      </article>
      
    </Layout>
  );
}
