import Image from "next/image";
import { useState } from "react";
import { FaDiscord } from "react-icons/fa";
import globals from "../assets/GlobalData";
import Layout from "../components/Layout";
import facebookIcon from "../public/static/images/facebook-icon.svg";
import instagramIcon from "../public/static/images/instagram-icon.svg";
import linkedinIcon from "../public/static/images/linkedin-icon.svg";

export default function joinus() {
  const { socialsHH } = globals();
  const [email, setEmail] = useState("");

  const onchange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      alert("submited");
    }
  };

  return (
    <Layout>
      <div className="flex flex-col items-center font-inter">
        <header className="grid max-w-[90rem] grid-rows-[minmax(0,_600px)_minmax(0,_1fr)]">
          <div className="col-[1/2] row-[1/3] overflow-hidden">
            <Image
              className="min-w-[73rem] pr-64 sm:p-0"
              src="/static/images/joinus_meeting.png"
              alt="event meeting"
              width={1440}
              height={959}
            />
          </div>

          <div className="col-[1/2] row-[1/2] flex flex-col justify-end bg-turquoise/80">
            <div className="mb-14 ml-6 sm:mb-11 sm:ml-20">
              <h1 className="text-6xl sm:text-7xl">FIND YOUR FAMILIA</h1>
              <p className="text-2xl font-medium sm:text-3xl">
                Join our community of innovation excellence.
              </p>
            </div>
          </div>

          <section className="col-[1/2] row-[2/3]  flex flex-col items-center bg-cyan px-2 py-8 text-center text-[1.75rem]">
            <h2 className="text-2xl font-medium sm:mb-[1.125rem] sm:text-4xl">
              Stay Up To Date With Your Comunidad!
            </h2>

            <p className="text-2xl sm:text-3xl">Sign Up for The Monthly Hack</p>

            <form
              className="my-8 flex h-10 gap-3 sm:my-10 sm:h-[3.125rem] sm:gap-8"
              onSubmit={handleSubmit}
            >
              <input
                className="w-64 rounded-[10px] pl-3 text-2xl text-black placeholder:text-2xl placeholder:font-medium sm:w-[25rem] sm:pl-4 sm:placeholder:text-[1.75rem]"
                type="email"
                name="email"
                value={email}
                onChange={onchange}
                placeholder="hacker@gmail.com"
              />
              <button
                className="m-0 border-none bg-turquoise p-0 px-3 text-xl font-medium text-black hover:border-none sm:px-6 sm:text-3xl"
                type="submit"
              >
                Join Us
              </button>
            </form>

            <p className="mb-7 text-xl sm:text-3xl">
              We send out monthly newsletters with innovator resources and
              events happening in Austin and beyond.
            </p>

            <p className="mb-4 text-2xl font-semibold sm:text-3xl">
              Ways to Follow the Community
            </p>

            <ul className="flex gap-10">
              <a
                href={socialsHH.discord.url}
                alt={socialsHH.discord.alt}
                target="_blank"
              >
                <FaDiscord
                  className="text-[3.125rem]"
                  title={socialsHH.discord.alt}
                />
              </a>
              <a href={socialsHH.instagram.url} target="_blank">
                <Image
                  className="h-[3.125rem] w-[3.125rem]"
                  priority
                  src={instagramIcon}
                  title={socialsHH.instagram.alt}
                  alt={socialsHH.instagram.alt}
                />
              </a>
              <a href={socialsHH.facebook.url} target="_blank">
                <Image
                  className="h-[3.125rem] w-[3.125rem]"
                  priority
                  src={facebookIcon}
                  title={socialsHH.facebook.alt}
                  alt={socialsHH.facebook.alt}
                />
              </a>
              <a href={socialsHH.linkedin.url} target="_blank">
                <Image
                  className="h-[3.125rem] w-[3.125rem]"
                  priority
                  src={linkedinIcon}
                  title={socialsHH.linkedin.alt}
                  alt={socialsHH.linkedin.alt}
                />
              </a>
            </ul>
          </section>
        </header>
      </div>
    </Layout>
  );
}
