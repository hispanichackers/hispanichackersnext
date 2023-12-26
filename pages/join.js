import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaDiscord } from "react-icons/fa";
import globals from "../assets/GlobalData";
import Layout from "../components/Layout";
import facebookIcon from "../public/static/images/facebook-icon.svg";
import instagramIcon from "../public/static/images/instagram-icon.svg";
import linkedinIcon from "../public/static/images/linkedin-icon.svg";
import discordIcon from "../public/static/images/discord-logo.webp";
import ArrowLink from "../components/Home/Links/arrowlink";

export default function joinus() {
  const { socialsHH } = globals();
  const [email, setEmail] = useState("");
  const [signup_id, setSignup_id] = useState();

  const onchange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      alert("submited: " + email);
    }
  };

  const socials = [
    { icon: discordIcon, url: socialsHH.discord.url, alt: socialsHH.discord.alt },
    { icon: instagramIcon, url: socialsHH.instagram.url, alt: socialsHH.instagram.alt },
    { icon: facebookIcon, url: socialsHH.facebook.url, alt: socialsHH.facebook.alt },
    { icon: linkedinIcon, url: socialsHH.linkedin.url, alt: socialsHH.linkedin.alt },
  ]

  const featured = {
    "ATTEND AN EVENT": {
      bg: "/static/images/attend-an-event.webp",
      color: "orange",
      text: "Hispanic Hackers hosts social events, career preparation, and innovative collaboration events throughout the year. Join us for a cafecito, a chat, and community growth!",
      flex: "flex-row",
      link: {
        icon: "/static/images/meetup-logo.webp",
        url: "https://www.meetup.com/austin-hispanic-hackers-meetup/",
        text: "Find an Event",
        target: "_blank"
      }
    },
    "GET PLUGGED IN": {
      bg: "/static/images/get-plugged-in.webp",
      color: "cyan",
      text: "We host an active Discord server for community discussion and online meetings. Join our online community!",
      flex: "flex-row-reverse",
      link: {
        icon: "/static/images/discord-logo.webp",
        url: "https://discord.gg/67nEABfYcn",
        text: "Join Our Discord",
        target: "_blank"
      }
    },
    "FIND YOUR NEXT BIG THING": {
      bg: "/static/images/next-big-thing.webp",
      color: "yellow",
      text: "Find your next project, job, or career goal through our network of innovation excellence. Sign up as a member and reach out to our leaders below!",
      flex: "flex-row",
      link: {
        icon: "/static/images/hispanic-hackers-icon.webp",
        url: "/join/#pagetop",
        text: "Become a Member",
        target: ""
      }
    }
  }

  return (
    <Layout>
      <section id="pagetop" className="relative h-80 w-full md:h-96">
        <div className="w-full h-full bg-turquoise/80 absolute flex flex-col justify-end pb-4 pl-4 md:pl-12 text-white">
          <h1 className="text-6xl sm:text-7xl">FIND YOUR FAMILIA</h1>
          <p className="text-2xl font-medium">Join our community of innovation excellence.</p>
        </div>
        <img src="/static/images/joinus_meeting.webp" className="h-full w-full object-cover"/>
      </section>

      <section id="signupform" className="flex flex-col items-center bg-white px-2 py-8 text-center font-inter text-black h-fit">
        <div className="px-4 py-8 max-w-[800px] flex flex-col items-center gap-y-2">
          <h2 className="text-2xl md:text-3xl">Stay Up To Date With Your Comunidad!</h2>
          <p className="text-xl md:text-2xl font-light">Sign Up for The Monthly Hack</p>
          <form className="my-6 flex h-10 gap-3" onSubmit={handleSubmit}>
            <input className="w-52 rounded-[10px] pl-3 border-turquoise border-2 text-black text-md placeholder:text-md placeholder:font-medium md:w-64 md:text-lg md:placeholder:text-lg" type="email" name="email" value={email} onChange={onchange} placeholder="hacker@gmail.com"/>
            <button className="m-0 rounded-lg border-none bg-gradient-to-br from-turquoise to-[#2BFEFF] p-0 px-3 font-medium text-black hover:border-none text-md w-fit hover:scale-110" type="submit">
              Join Us
            </button>
          </form>
          <p className="mb-7 text-xl md:text-2xl font-light">We send out monthly newsletters with innovator resources and events happening in Austin and beyond.</p>
          <p className="mb-4 text-xl font-medium md:text-2xl"> Ways to Follow the Community</p>
          <ul className="flex gap-6 md:gap-8">
            {
              socials.map((s) => {
                return (
                  <Link href={s.url} target="_blank" className="hover:scale-125">
                    <Image
                      className="h-8 w-auto md:h-10"
                      src={s.icon}
                      alt={s.alt}
                    />
                  </Link>
                );
              })
            }
          </ul>
        </div>
      </section>
      <section className="mx-auto font-inter">
        {
          Object.entries(featured).map(([name, data]) => (
            <div className={"md:flex " + data.flex}>
              <div className="relative md:basis-1/2">
                <img className="w-full" src={data.bg}/>
                <div className={"absolute inset-0 flex items-end justify-end bg-" + data.color + "/80 p-5 text-white md:px-10"}>
                  <h2 className="font-bebas text-5xl md:text-7xl">{name}</h2>
                </div>
              </div>
              <div className="flex flex-col justify-center p-8 text-lg md:basis-1/2 md:px-8 md:text-xl lg:text-2xl">
                <p className="mb-5">{data.text}</p>
                <div className="flex items-center justify-center gap-x-4">
                  <Link href={data.link.url} target={data.link.target}>
                    <img className="w-16 h-auto md:w-16 lg:w-20" src={data.link.icon} />
                  </Link>
                  <ArrowLink 
                    details={{ link: data.link.text, url: data.link.url, target: data.link.target, color: "black" }}
                  ></ArrowLink>
                </div>
              </div>
              </div>
          ))
        }
      </section>
    </Layout>
  );
}
