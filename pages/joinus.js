import Image from "next/image";
import { useState } from "react";
import { FaDiscord } from "react-icons/fa";
import globals from "../assets/GlobalData";
import Layout from "../components/Layout";
import facebookIcon from "../public/static/images/facebook-icon.svg";
import instagramIcon from "../public/static/images/instagram-icon.svg";
import linkedinIcon from "../public/static/images/linkedin-icon.svg";

export default function joinus(props) {
  const { socialsHH } = globals();
  const [email, setEmail] = useState("");

  const onchange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) console.log("submited");
  };

  return (
    <Layout {...props}>
      <div className="font-inter flex flex-col items-center">
        <header className="grid max-w-[90rem] grid-rows-[minmax(0,_600px)_minmax(0,_1fr)]">
          <Image
            className="col-[1/2] row-[1/3]"
            src="/static/images/joinus_meeting.png"
            alt=""
            width={1440}
            height={959}
          />

          <div className="col-[1/2] row-[1/2] flex flex-col justify-end bg-turquoise/80">
            <div className="mb-[2.8125rem] ml-[5.625rem]">
              <h1>FIND YOUR FAMILIA</h1>
              <p className="text-[2rem]">
                Join our community of innovation excellence.
              </p>
            </div>
          </div>

          <section className="col-[1/2] row-[2/3] flex flex-col items-center bg-cyan py-8 text-[1.75rem]">
            <h2 className="mb-[1.125rem] font-medium">
              Stay Up To Date With Your Comunidad!
            </h2>
            <p className="text-3xl">Sign Up for The Monthly Hack</p>

            <form
              className="my-11 flex h-[3.125rem] gap-8"
              onSubmit={handleSubmit}
            >
              <input
                className=" w-[25rem] rounded-[10px] pl-4 text-black placeholder:text-[1.75rem] placeholder:font-medium"
                type="email"
                name="email"
                value={email}
                onChange={onchange}
                placeholder="hacker@gmail.com"
              />
              <button
                className="m-0 rounded-[10px] border-none bg-turquoise p-0 px-6 text-[1.75rem] font-medium leading-[2.125rem] text-black hover:border-none"
                type="submit"
              >
                Join Us
              </button>
            </form>

            <p className="mb-7 max-w-[62rem] text-center  leading-[2.125rem]">
              We send out monthly newsletters with innovator resources and
              events happening in Austin and beyond.
            </p>

            <p className="mb-4 font-semibold">Ways to Follow the Community</p>

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

      {/* CardsWithLink  */}

      {/* Leadership */}
    </Layout>
  );
}
