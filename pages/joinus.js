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
      <div className="items-center font-inter text-white sm:flex sm:flex-col">
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
                className="m-0 rounded-lg border-none bg-turquoise p-0 px-3 text-xl font-medium text-black hover:border-none sm:px-6 sm:text-3xl"
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

      <div className="mx-auto max-w-[720px] font-inter lg:max-w-[1440px]">
        <div className="lg:flex">
          <div className="relative lg:basis-1/2">
            <Image
              src="/static/images/attend-an-event.png"
              alt="whiteboarding"
              width={720}
              height={435}
            />

            <div className="absolute inset-0 flex items-end justify-end bg-orange/80 p-5 text-white lg:px-10">
              <h2 className="font-bebas text-5xl lg:text-7xl">
                ATTEND AN EVENT
              </h2>
            </div>
          </div>

          <div className="flex flex-col justify-center p-4 text-xl lg:basis-1/2 lg:px-8 xl:text-3xl">
            <p className="mb-5">
              Hispanic Hackers hosts social events, career preparation, and
              innovative collaboration events throughout the year. Join us for a
              cafecito, a chat, and community growth!
            </p>

            <a
              className="flex items-center justify-center gap-3"
              href="https://www.meetup.com/austin-hispanic-hackers-meetup/"
              target="_blank"
            >
              <Image
                className="h-16 w-16 lg:h-32 lg:w-32"
                src="/static/images/meetup-logo.png"
                alt="meetup-logo"
                width={64}
                height={64}
              />

              <span className="font-medium">Find an Event</span>

              <Image
                className="h-6 w-16"
                src="/static/images/Arrow2.png"
                alt="arrow black"
                width={60}
                height={23}
              />
            </a>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row-reverse">
          <div className="relative lg:basis-1/2">
            <Image
              src="/static/images/get-plugged-in.png"
              alt="community selfie"
              width={720}
              height={435}
            />

            <div className="absolute inset-0 flex items-end justify-end bg-cyan/80 p-5 text-white lg:justify-start lg:px-10">
              <h2 className="font-bebas text-5xl lg:text-7xl">
                GET PLUGGED IN
              </h2>
            </div>
          </div>

          <div className="flex flex-col justify-center p-4 text-xl lg:basis-1/2 lg:px-8 xl:text-3xl">
            <p className="mb-5">
              We host an active Discord server for community discussion and
              online meetings. Join our online community!
            </p>

            <a
              className="flex items-center justify-center gap-3"
              href="https://discord.gg/67nEABfYcn"
              target="_blank"
            >
              <Image
                className="lg:w-32"
                src="/static/images/discord-logo.png"
                alt="meetup-logo"
                width={64}
                height={49}
              />

              <span className="font-medium">Join Our Discord</span>

              <Image
                className="h-6 w-16"
                src="/static/images/Arrow2.png"
                alt="arrow black"
                width={60}
                height={23}
              />
            </a>
          </div>
        </div>

        <div className="lg:flex">
          <div className="relative lg:basis-1/2">
            <Image
              src="/static/images/next-big-thing.png"
              alt="city view"
              width={720}
              height={435}
            />

            <div className="absolute inset-0 flex items-end justify-end bg-yellow/80 p-5 text-white lg:px-10">
              <h2 className="font-bebas text-5xl lg:text-7xl">
                FIND YOUR NEXT BIG THING
              </h2>
            </div>
          </div>

          <div className="flex flex-col justify-center p-4 text-xl lg:basis-1/2 lg:px-8 xl:text-3xl">
            <p className="mb-5">
              Find your next project, job, or career goal through our network of
              innovation excellence. Sign up as a member and reach out to our
              leaders below!
            </p>

            <a
              className="flex items-center justify-center gap-3"
              href="https://www.meetup.com/austin-hispanic-hackers-meetup/"
              target="_blank"
            >
              <Image
                className="lg:w-32"
                src="/static/images/HH-logo-only.png"
                alt="meetup-logo"
                width={64}
                height={60}
              />

              <span className="font-medium">Become a Member</span>

              <Image
                className="h-6 w-16"
                src="/static/images/Arrow2.png"
                alt="arrow black"
                width={60}
                height={23}
              />
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
