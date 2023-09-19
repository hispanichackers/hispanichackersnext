import { useState, useEffect } from "react";
import Link from "next/link";
import WorldRender from "../WorldConRender";
import { FaMeetup, FaDiscord } from "react-icons/fa";

export default function Mission() {
  const [isClient, setIsClient] = useState(false); // State to determine if code is running on the client

  useEffect(() => {
    setIsClient(true); // Set isClient to true when component is mounted on the client side
  }, []);

  return (
    <section className="flex flex-col bg-cyan lg:grid lg:grid-cols-2 lg:grid-rows-3">
      {isClient && <WorldRender />}

      <div className=" mb-10 ml-10 h-max text-center text-white mt-10 lg:mt-20 2xl:ml-60 lg:ml-18">
        <h2 className="text-left text-3xl font-sans-serif  lg:text-left lg:text-3xl  ">
          Austin-born, <br></br>
          <span className="w-full font-bebas text-6xl ">
            LATINO-RAISED.<br></br>
          </span>
          <span className="ml-4  text-center font-serif text-xl font-light lg:ml-12 lg:text-2xl   ">
            (Hecho en Austin por Latinos)
          </span>
        </h2>
        <p className="mt-5 text-left text-xl  lg:ml-10 lg:mr-10 lg:text-left ">
          Hispanic Hackers is an inclusive community of software developers,
          entrepreneurs, & ambitious innovators of Latino/Hispanic ethnicity.
          <br></br>
          <Link
            href="/contact"
            className="ml-6 mr-44 mt-5 inline-flex w-max  text-xl font-light text-white hover:underline hover:underline-offset-1 lg:ml-10  lg:ml-24  "
            passHref
          >
            {" "}
            Join Our Community
            <img
              className="ml-5 mt-1 h-6  lg:h-6 lg:mt-1"
              src="/static/images/Arrow1.png"
              alt="arrow"
            />
          </Link>
        </p>
      </div>
      <div className="inline-flex h-full   lg:h-96 2xl:ml-60">
        <img
          className="md:mt-18 ml-7 h-80 md:ml-52 lg:ml-28    lg:mt-5 "
          src="/static/images/satellite.png"
          alt="Satelite"
        />
      </div>
      <div className=" ml-10 h-max text-white  lg:ml-0  lg:col-span-1  ">
        <h2 className="mt-10 text-left text-2xl font-light   ">
          Participate from <br></br>
          <span className="text-left font-bebas text-4xl lg:text-left ">
            AROUND THE WORLD.
          </span>
        </h2>
        <p className="text-left text-xl lg:text-left lg:mr-10 lg:ml-10 ">
          Join Hispanic Hackers on Google Meet, Meetup, Discord and
          beyond.<br></br>
          <Link
            href="https://www.meetup.com/austin-hispanic-hackers-meetup/"
            target="_blank"
            className="inline-flex w-max p-1 text-2xl    text-white hover:underline hover:underline-offset-1  sm:ml-5 lg:text-3xl "
            passHref
          >
            <FaDiscord className="mr-1 mt-1 " color="blue " />
            <FaMeetup className="mr-1 mt-1" color="red" />
            Find an event
            <img
              className=" ml-5 mt-1 h-6  lg:mt-2 lg:h-6  "
              src="/static/images/Arrow1.png"
              alt="arrow"
            />
          </Link>
        </p>
      </div>
    </section>
  );
}
