import { useState, useEffect } from "react";
import Link from "next/link";
import WorldRender from "../WorldConRender";
import ArrowLink from "./Links/arrowlink";

export default function Mission() {
  const [isClient, setIsClient] = useState(false); // State to determine if code is running on the client

  useEffect(() => {
    setIsClient(true); // Set isClient to true when component is mounted on the client side
  }, []);

  return (
    <section className="flex flex-col bg-cyan md:grid md:grid-cols-2 md:grid-rows-3">
      {isClient && <WorldRender />}

      <div className=" mb-10 ml-10 h-max text-center text-white mt-6 lg:mt-20 2xl:ml-60 lg:ml-18 max-w-[600px] lg:ml-20 md:mb-0">
        <h2 className="text-left text-2xl font-sans-serif lg:text-left md:mt-10 lg:text-3xl">
          Austin born, <br></br>
          <span className="w-full font-bebas text-5xl lg:text-6xl">
            LATINO-RAISED.<br></br>
          </span>
          <span className="ml-4  text-center font-serif text-xl font-light lg:ml-12 lg:text-2xl">
            (Hecho en Austin por Latinos)
          </span>
        </h2>
        <div className="mt-5 text-left text-xl  lg:ml-10 lg:mr-10 lg:text-left lg:text-2xl ">
          <p>Hispanic Hackers is an inclusive community of software developers,
          entrepreneurs, & ambitious innovators of Latino/Hispanic ethnicity.</p>
          <br></br>
          <div
            className="ml-8 mr-44 inline-flex w-max text-xl font-light text-white lg:ml-10 lg:ml-24 lg:text-2xl"
          >
            <ArrowLink
                details={{ link: "Join Our Community", url: "/join", target:"", color: "white" }}
            ></ArrowLink>
          </div>
        </div>
      </div>
      <div className="inline-flex h-full lg:h-96 2xl:ml-60 justify-center">
        <img
          className="md:mt-18 h-80 lg:h-[400px] lg:mt-2"
          src="/static/images/satellite.webp"
          alt="Satelite"
        />
      </div>
      <div className=" ml-6 h-max text-white pb-12 md:col-span-1 max-w-[600px] lg:ml-20">
        <h2 className="mt-6 text-left text-2xl font-light md:mt-2 lg:text-3xl">
          Participate from <br></br>
          <span className="text-left font-bebas text-5xl lg:text-left ">
            AROUND THE WORLD.
          </span>
        </h2>
        <div className="text-left text-xl lg:text-left mt-3 lg:text-2xl">
          <p>Join Hispanic Hackers on Google Meet, Meetup, Discord and
          beyond.</p>
          <div
            className="flex w-max p-1 text-xl text-white  sm:ml-5 lg:text-2xl items-center gap-x-2 mt-2"
          >
            <Link href="https://www.meetup.com/austin-hispanic-hackers-meetup/" target="_blank" className="cursor-pointer">
              <img
                className="h-[50px] hover:opacity-70 cursor-pointer"
                src="/static/images/meetup-logo.webp"
                alt="Meetup Logo"
              />
            </Link>
            <Link href="https://discord.com/invite/h5eSJwR6pK" target="_blank" className="cursor-pointer">
              <img
                className="h-[30px] text-xl mr-3 hover:opacity-70 cursor-pointer lg:text-2xl"
                src="/static/images/discord-mark-white.svg"
                alt="Meetup Logo"
              />
            </Link>
            <ArrowLink
                details={{ link: "Find an Event", url: "https://www.meetup.com/austin-hispanic-hackers-meetup/", target:"_blank", color: "white" }}
            ></ArrowLink>
          </div>
        </div>
      </div>
    </section>
  );
}
