import React from "react";
import Image from "next/image";
import ArrowLink from "../components/Home/Links/arrowlink";

export default function ResourceCard({
  title,
  text,
  linkText,
  linkUrl,
  image,
  imageAlt,
  tags,
  linkTarget
}) {
  const icons = {
    "developers": {
      icon: "/static/images/gear.svg",
      color: "#ff6000"
    },
    "entrepreneurs": {
      icon: "/static/images/briefcase.svg",
      color: "#267e7e"
    },
    "nonprofits": {
      icon: "/static/images/volunteer.svg",
      color: "#41cecf"
    },
    "students": {
      icon: "/static/images/cap.svg",
      color: "#f5bb00"
    }
  }
  return (
    <>
      <div className="flex flex-col bg-[#F4EBDC] p-4 rounded-[25px] text-black w-[350px] h-auto min-h-[225px] md:w-[450px] md:p-6 gap-y-2 hover:scale-105">
        <div className="flex flex-col flex-wrap md:flex-nowrap md:flex-row md:justify-between gap-x-2 gap-y-1">
          <h3 className="font-bold text-lg md:text-xl leading-6 md:leading-6">{title}</h3>
          <div className="flex flex-row gap-x-1">
            {
              tags.map((tag) => {
                if (icons[tag]) {
                  return (<div key={tag} style={{ backgroundColor: icons[tag].color }} className={`flex justify-center items-center w-[24px] h-[24px] rounded-[12px] bg-${icons[tag].color}`}>
                    <img src={icons[tag].icon} className="h-2/3 fill-white"/>
                  </div>)
                }
              })
            }
          </div>
        </div>
        <div className="flex flex-row h-fill gap-x-4 items-center md:gap-x-6">
          {
            image && (
                <div className="w-[75px] md:w-[100px]">
                  <img src={image} alt={imageAlt} className="w-fill h-auto" />
                </div>
            )
          }
          <div className="flex flex-col text-base w-[250px] md:w-[300px] md:text-lg gap-y-2">
            <p className="leading-5">{text}</p>
            <div className="self-end">
            <ArrowLink 
              details={{ link: linkText, url: linkUrl, target: linkTarget, color: "black" }}
            ></ArrowLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
