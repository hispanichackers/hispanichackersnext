import Link from "next/link";

export default function Mission() {
  return (
    <section className="grid grid-cols-2 bg-cyan ">
      <div className="row-span-4 h-full relative">
        <img
          className=" absolute sm:bottom-24 w-full h-full "
          src="/static/images/Hack_the_New_World.png"
          alt="Hack the New World"
        />
      </div>
      <div className="mt-24 ml-4 h-96 md:ml-24 lg:ml-64">
        <h2 className="text-4xl font-light">
          Austin born, <br></br>
          <span className="text-5xl  font-semibold ">LATINO RAISED.</span>
        </h2>
        <p className="text-lg mt-2 font-serif sm:text-2xl ml-14">
            (Hecho en Austin por Latinos)
          </p>
        <p className="text-left text-xl mt-5 sm:text-xl ml-10">
          Hispanic Hackers is an inclusive<br></br> community software developers,<br></br> entrepreneurs,<br></br> & ambitious innovators of Latino/Hispanic ethincity.{" "}
        </p>
        <Link href="/contact"  passHref>
          <button className="ml-5 text-xl border-none text-white p-1 pl-3 pr-3 pb-0 pt-0 rounded-none hover:bg-white hover:text-cyan sm:ml-28 sm:text-2xl">
            Join Our Community 
          </button>
        </Link>
      </div>
      <div className=" h-96">
        <img
          className="h-64 mt-36 ml-10 sm:h-96 md:ml-32 lg:ml-56"
          src="/static/images/satellite.png"
          alt="Hack the New World"
        />
      </div>
      <div className=" h-96 sm:mt-44">
        <h2 className="mt-10 text-4xl font-light">Participate from <br></br>
        <span className="text-5xl font-serif font-bold">Around the World.</span></h2>
        <p className="text-md mt-3 ml-2">Join Hispanic Hackers on Zoom, Discord,<br></br> Meetup and beyond.</p>

        <Link href="https://www.meetup.com/austin-hispanic-hackers-meetup/" target="_blank" passHref>
          <button 
          className="ml-16 border-white text-2xl text-white p-1 pl-3 pr-3 pb-0 pt-0 rounded-none hover:bg-white hover:text-cyan sm:ml-28">
            Find An Event
          </button>
        </Link>
      </div>
    </section>
  );
}
