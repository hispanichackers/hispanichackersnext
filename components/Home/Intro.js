import Link from "next/link";

export default function Intro() {
  return (
    <section>
      <div className="w-full h-full bg-[url('https://i.imgur.com/Brwm73m.jpg')] bg-cover bg-center flex justify-center items-center grid grid-cols-1 lg:grid-cols-2">
        <div className="bg-orange/75 h-full ">
          <h1 className=" font-sans text-xl text-white mx-20 ml-5 text-left my-5 font-light  lg:mt-8 lg:ml-14 lg:text-xl lg:ml-16 xl:mt-10  ">
             Join our Comunidad of <br></br>
            <span className=" 
            font-bebas text-white text-4xl lg:text-5xl ">
              {" "}
              DEVELOPERS,<br></br> ENGINEERS,<br></br> <span className="
              font-bebas text-4xl lg:text-5xl   ">& ENTREPRENEURS</span>
            </span>
          </h1>
        </div>
        <div>
          <div className="grid bg-cyan/75  text-center">
            <p className=" mt-5 mb-3 px-5  text-lg text-white text-center  sm:text-lg ">
              Our goal is to make the tech industry accessible to all Latinos.</p>
              <p className="mb-4 text-lg text-white text-center px-5 mb-8  sm:text-lg ">
              We do this by promoting our community, offering developer and entrepreneur resources, and creating professional opportunities.
            </p>
          </div>
          <div className="flex flex-col text-center  lg:grid lg:grid-cols-2 ">
            <Link
              href="/about"
              className="bg-yellow/75 font-bebas p-3 text-3xl  border-l-8 border-t-8 border-r-4 border-b-4 border-yellow  text-white  hover:bg-yellow lg:p-5 lg:pt-4 lg:h-20 lg:text-2xl "
            >
              Join Us
            </Link>
            <Link
              href="https://www.meetup.com/austin-hispanic-hackers-meetup/"
              target="_blank"
              className="bg-yellow/75 p-3 text-3xl sm:p-14 border-r-8 border-t-8  border-l-4 border-b-4 border-yellow sm:h-28 text-white font-bebas lg:text-2xl lg:p-1 lg:pt-5 lg:h-20 hover:bg-yellow"
            >
              Upcoming Events
            </Link>
            <Link
              href="/contact"
              className="bg-yellow/75 p-3 text-3xl  lg:pt-5  lg:pl-1 border-l-8 border-b-8 border-r-4 border-t-4 border-yellow lg:h-20 lg:text-2xl text-white
              font-bebas 
              hover:bg-yellow"
            >
              Resources
            </Link>
            <Link
              href="/contact"
              className="bg-yellow/75 p-3 text-3xl  lg:text-2xl lg:pl-1 lg:pt-5 border-l-4 border-t-4 border-r-8 border-b-8 border-yellow lg:h-20 text-white font-bebas hover:bg-yellow"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
