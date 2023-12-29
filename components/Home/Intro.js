import Link from "next/link";

export default function Intro() {
  const links = [
    { title: "Join Us", url: "/join", target: "", border:[1, 0, 1, 1, 0, 0] },
    { title: "Upcoming Events", url: "https://www.meetup.com/austin-hispanic-hackers-meetup/", target: "_blank", border: [0, 0, 1, 0, 0, 1] },
    { title: "Resources", url: "/resources", target: "", border: [0, 0, 0, 1, 1, 0] },
    { title: "Contact Us", url: "/contact", target: "", border: [0, 1, 0, 0, 1, 1] }
  ];
  return (
    <section className="font-inter">
      <div className="w-full h-full bg-[url('https://i.imgur.com/Brwm73m.jpg')] bg-cover bg-center justify-center items-center grid grid-cols-1 md:grid-cols-2">
        <div className="bg-orange/75 h-full ">
          <h1 className=" font-inter text-2xl text-white mx-15 ml-6 text-left my-5 font-normal md:mt-10 lg:mt-20 lg:text-3xl lg:ml-16  ">
             Join our Comunidad of <br></br>
            <span className=" 
            font-bebas text-white text-6xl lg:text-8xl ">
              {" "}
              DEVELOPERS,<br></br> ENGINEERS,<br></br> <span className="
              font-bebas text-6xl lg:text-8xl   "><span className="text-5xl lg:text-7xl">&</span> ENTREPRENEURS</span>
            </span>
          </h1>
        </div>
        <div>
          <div className="grid bg-cyan/75 text-center md:py-30 lg:py-20 px-2">
            <p className=" mt-5 mb-3 px-5  text-xlg text-white text-center sm:text-lg lg:text-2xl">
              Hispanic Hackers is an Austin-based 501(c)(3) non-profit making the tech industry accessible to all Latinos.
            </p>
            <p className="text-xlg text-white text-center px-5 mb-8  sm:text-lg lg:text-2xl">
              We do this by promoting our community, offering developer and entrepreneur resources, and creating professional opportunities.
            </p>
          </div>
          <div className="flex flex-col text-center  lg:grid lg:grid-cols-2 border-2 border-yellow lg:border-4 ">
            {
              links.map((link) => {
                return (
                  <Link key={link.title} href={link.url} target={link.target} className={ "bg-yellow/75 p-1 text-2xl h-fit text-white font-bebas md:text-3xl hover:bg-yellow cursor-pointer border-yellow lg:py-10 border-3 lg:border-4" }>
                    <span>{link.title}</span>
                  </Link>
                );
              })
            }
          </div>
        </div>
      </div>
    </section>
  );
}
