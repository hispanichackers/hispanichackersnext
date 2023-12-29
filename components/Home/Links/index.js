import Link from "next/link";
import ArrowLink from "./arrowlink";


export default function Links() {
  const featured = {
    "Capital Factory": {
      image: "/static/images/capital_factory.webp",
      url: "https://www.capitalfactory.com"
    },
    "Techqueria": {
      image: "/static/images/techqueria.webp",
      url: "https://www.techqueria.org"
    },
    "Latinas in Tech": {
      image: "/static/images/lit.webp",
      url: "https://www.latinasintech.org"
    },
    "Austin Non-Profit": {
      image: "/static/images/austin-nonprofit-logo.webp",
      url: "https://www.drebarrera.com/austin-nonprofits"
    }
  };
  return (
    <>
      <div className="py-12 text-center flex flex-col items-center font-inter text-2xl gap-y-2">
        <h3 className="font-bebas text-5xl">Our Sponsors & Partners</h3>
        <div className="py-8 flex justify-center gap-x-4 flex-wrap gap-y-3 md:gap-x-6 lg:gap-y-4">
          {
            Object.entries(featured).map(([org, data]) => (
              <Link key={org} href={data.url} target="_blank">
                <img src={data.image} className="w-24 h-auto hover:opacity-70 md:w-40"/>
              </Link>
            )
          )}
        </div>
        <h4 className="text-black text-2xl">Interested in Partnering with Us?</h4>
        <ArrowLink
          details={{ link: "Contact Us", url: "/join", target:"", color: "#267e7e" }}
        ></ArrowLink>
      </div>
    </>
  );
}
