import Link from "next/link";

export default function Intro() {
  return (
    <section>

      <div className="w-full h-full bg-[url('https://i.imgur.com/Brwm73m.jpg')] bg-cover bg-center flex justify-center items-center grid grid-cols-1 sm:grid-cols-2">
        <div className="bg-orange/75 h-full">
          <h1 className=" font-sans text-4xl text-white text-left my-10 font-light sm:mt-28 mx-20 ">
            Join our Comunidad<br></br>of
            <span className=" font-serif  text-white text-7xl ">
              {" "}
              Developers, Engineers,<br></br> & Entrepreneurs
            </span>
          </h1>
        </div>
        <div>
          <div className="grid bg-cyan/75  text-center">
            <p className=" my-10 mx-10 py-8 px-10 text-white text-left text-3xl">
              Hispanic Hackers' goal is to showcase Hispanic innovator talent in
              the world of tech and share the growth of our expanding network of
              engineering and entrepreneurship excellence. We offer resources to
              get you connected and host tech socials, presentations from Latino
              industry leaders, and networking opportunities.
            </p>
          </div>
          <div className="grid grid-cols-2 bg-yellow-600/50  text-center">
            <Link
              href="/about"

      className="bg-yellow/75 p-14 border-4 border-yellow h-44 text-white font-bold hover:bg-yellow "

            >
              Join Us
            </Link>
            <Link
              href="https://www.meetup.com/austin-hispanic-hackers-meetup/"
              target="_blank"


              className="bg-yellow/75 p-14 border-4 border-yellow h-44 text-white font-bold text-2xl sm:text-3xl hover:bg-yellow"

            >
              Upcoming Events
            </Link>
            <Link
              href="/contact"

              className="bg-yellow/75 p-14 border-4 border-yellow-500 h-44 text-white font-bold hover:bg-yellow"

            >
              Resources
            </Link>
            <Link
              href="/contact"
              className="bg-yellow/75 p-14 border-4 border-yellow-500 h-44 text-white font-bold hover:bg-yellow"

            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
