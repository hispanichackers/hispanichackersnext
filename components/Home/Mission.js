import Link from "next/link";
import {
  FaMeetup,
  FaDiscord,

} from 'react-icons/fa';


export default function Mission() {
  return (
    <section className="flex flex-col sm:grid sm:grid-cols-2 bg-cyan lg:grid-rows-3">
      <div className="h-full lg:h-96 md:row-span-2 md:relative lg:row-span-3 lg:bottom-52 ">
        <img
          className="h-2/6 w-3/6 sm:h-max sm:w-max lg:absolute     "
          src="/static/images/Hack_the_New_World.png"
          alt="Hack the New World"
        />
      </div>

      <div className="text-center mt-10 mb-10 h-max sm:mt-10 lg:ml-18 lg:mt-20 2xl:ml-60">
        <h2 className="text-6xl text-center font-light sm:text-left sm:mt-24 sm:text-4xl xl:text-6xl ">
          Austin-born, <br></br>
          <span className="text-6xl font-bebas w-full xl:text-8xl">LATINO-RAISED.<br></br></span>

        <span className="text-3xl mt-2 text-center font-serif sm:text-3xl sm:ml-16 md:text-4xl xl:text-6xl ">
          (Hecho en Austin por Latinos)
        </span>
        </h2>
        <p className="text-center text-2xl mt-5  sm:text-left sm:ml-16 sm:text-3xl xl:text-5xl">
          Hispanic Hackers is an inclusive <br></br> community of software
          developers,<br></br> entrepreneurs, & ambitious innovators of<br></br>
          Latino/Hispanic ethnicity.<br></br>
          <Link
          href="/contact"
          className="inline-flex w-max text-3xl mt-5 ml-24 font-medium mr-44 text-white hover:underline hover:underline-offset-1 sm:ml-10 md:ml-24 sm:text-3xl xl:text-5xl "
          passHref
        > Join our community

         <img
          className="ml-5 h-6 mt-2  md:h-6 md:mt-3 xl:h-9 xl:mt-3"
          src="/static/images/Arrow1.png"
          alt="arrow"
        />
        </Link>
        </p>


      </div>
      <div className="h-full inline-flex md:h-96 sm:order-last md:order-2 2xl:ml-60">
        <img
          className="h-96 ml-44 sm:h-max sm:ml-0 md:ml-0 md:mt-18   lg:mt-5 "
          src="/static/images/satellite.png"
          alt="Satelite"
        />
      </div>
      <div className=" h-96 sm:ml-24 sm:mt-10 md:order-last md:ml-36  md:col-span-2 md:row-span-4  lg:mr-80 lg:col-span-1 lg:ml-0 lg:mt-40 ">
        <h2 className="mt-10 text-4xl text-center font-light sm:text-left  xl:text-6xl">
          Participate from <br></br>
          <span className="text-5xl text-center font-bebas sm:text-left lg:text-7xl">
            AROUND THE WORLD.
          </span>
        </h2>
        <p className="text-md text-center mt-3 ml-2 md:w-max sm:text-left sm:text-3xl xl:text-5xl">
          Join Hispanic Hackers on Google Meet,<br></br> Meetup, Discord and beyond.<br></br>


        <Link
          href="https://www.meetup.com/austin-hispanic-hackers-meetup/"
          target="_blank"
          className="inline-flex p-1 text-3xl text-white    hover:underline hover:underline-offset-1 w-max  sm:ml-5 lg:text-5xl xl:text-7xl"
          passHref
        >
          <FaDiscord className="mr-1 mt-1" />
          <FaMeetup className="mr-1 mt-1"/>
          Find an event
          <img
          className=" ml-5 h-6 mt-2  md:h-6 md:mt-3 xl:h-9 xl:mt-6"
          src="/static/images/Arrow1.png"
          alt="arrow"
        />
        </Link>
        </p>
      </div>
    </section>
  );
}
