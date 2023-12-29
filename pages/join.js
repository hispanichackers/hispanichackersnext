import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from 'next/router';
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
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [signup_id, setSignup_id] = useState();
  const [signupStatus, setSignupStatus] = useState("Sign Up for The Monthly Hack");
  const [submitButtonContent, setSubmitButtonContent] = useState("Join Us");
  const router = useRouter();

  const onchange = (e) => {
    if (e.target.name == "firstname") setFname(e.target.value);
    if (e.target.name == "lastname") setLname(e.target.value);
    if (e.target.name == "email") setEmail(e.target.value);
  };

  const handleUnsubscribe = async (e) => {
    e.preventDefault();
    var unsubscribe = e.target.dataset.email;
    
    if (unsubscribe) {
      setSubmitButtonContent(<img src="/static/images/loading.gif" className="h-6 w-auto"/>);
      try {
        const response = await fetch('/api/unsubscribe', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        });
  
        if (response.ok) {
          const data = await response.json();
          console.log('Unsubscribe successful');
            router.replace('/unsubscribed');
        } else {
          const data = await response.json();
          if (error.code == 111) setSignupStatus(<p>The email you've attempted to unsubscribe does not exist.</p>);
          else setSignupStatus(<>Failed to unsubscribe. <form data-email={data.email} onSubmit={handleUnsubscribe}><button className="text-cyan hover:text-turquoise underline hover:no-underline" type="submit">Try Again</button>.</form></>);
          document.querySelector('button').classList.add("bg-gradient-to-br");
          setSubmitButtonContent("Join Us");
          // Handle failure, e.g., show an error message
        }
      } catch (error) {
        console.error('Error submitting subscription:', error);
        document.querySelector('button').classList.add("bg-gradient-to-br");
        setSignupStatus(<p>Failed to unsubscribe.</p>);
        // Handle unexpected errors
      }
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (fname && lname && email) {
      setSubmitButtonContent(<img src="/static/images/loading.gif" className="h-6 w-auto"/>);
      try {
        const response = await fetch('/api/subscribe', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, fname, lname }),
        });
  
        if (response.ok) {
          const data = await response.json();
          console.log('Subscription successful');
          setSignupStatus(<>You have signed up for our monthly newsletters. Welcome to our community! <form data-email={data.email} onSubmit={handleUnsubscribe}><button className="text-cyan hover:text-turquoise underline hover:no-underline" type="submit">Undo</button>.</form></>);
          setFname("");
          setLname("");
          setEmail("");
          setSubmitButtonContent("Join Us");
          // Handle success, e.g., show a success message or redirect
        } else {
          const data = await response.json();
          console.error('Subscription failed:', data.error);
          if (data.code == 111) setSignupStatus(<>The provided email is already subscribed. <form data-email={data.email} onSubmit={handleUnsubscribe}><button className="text-cyan hover:text-turquoise underline hover:no-underline" type="submit">Unsubscribe</button>.</form></>);
          else setSignupStatus("There was an error registering you for our monthly newsletter. Please try again.");
          document.querySelector('button').classList.add("bg-gradient-to-br");
          setSubmitButtonContent("Join Us");
          // Handle failure, e.g., show an error message
        }
      } catch (error) {
        console.error('Error submitting subscription:', error);
        setSignupStatus("There was an error registering you for our monthly newsletter. Please try again.");
        document.querySelector('button').classList.add("bg-gradient-to-br");
        setSubmitButtonContent("Join Us");
        // Handle unexpected errors
      }
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
          <h1 className="text-6xl md:text-7xl">FIND YOUR FAMILIA</h1>
          <p className="text-2xl lg:text-3xl font-medium">Join our community of innovation excellence.</p>
        </div>
        <img src="/static/images/joinus_meeting.webp" className="h-full w-full object-cover"/>
      </section>

      <section id="signupform" className="flex flex-col items-center bg-white px-2 py-8 text-center font-inter text-black h-fit">
        <div className="px-4 py-8 max-w-[800px] flex flex-col items-center gap-y-2">
          <h2 className="text-2xl md:text-3xl">Stay Up To Date With Your Comunidad!</h2>
          <div className="text-xl md:text-2xl font-light">{signupStatus}</div>
          <form className="my-6 flex-col flex md:flex-row gap-3 h-fit" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-3 h-fit">
              <div className="flex flex-row gap-2">
                <label htmlFor="firstname" className="w-[120px] md:w-[135px] text-base md:text-lg text-cyan text-end">Your First Name:</label>
                <input className="w-fit max-w-52 rounded-[10px] pl-3 border-turquoise border-2 text-black text-base placeholder:text-sm placeholder:font-medium md:w-64 md:text-lg md:placeholder:text-lg" type="text" name="firstname" value={fname} onChange={onchange} placeholder="Juan"/>
              </div>
              <div className="flex flex-row gap-2">
                <label htmlFor="lastname" className="w-[120px] md:w-[135px] text-base md:text-lg text-cyan text-end">Your Last Name:</label>
                <input className="w-fit max-w-52 rounded-[10px] pl-3 border-turquoise border-2 text-black text-base placeholder:text-sm placeholder:font-medium md:w-64 md:text-lg md:placeholder:text-lg" type="text" name="lastname" value={lname} onChange={onchange} placeholder="Herrera"/>
              </div>
              <div className="flex flex-row gap-2">
                <label htmlFor="email" className="w-[120px] md:w-[135px] text-base md:text-lg text-cyan text-end">Your Email:</label>
                <input className="w-fit max-w-52 rounded-[10px] pl-3 border-turquoise border-2 text-black text-base placeholder:text-sm placeholder:font-medium md:w-64 md:text-lg md:placeholder:text-lg" type="email" name="email" value={email} onChange={onchange} placeholder="juanherrera@gmail.com"/>
              </div>
            </div>
            <button className={`m-0 rounded-lg bg-gradient-to-br from-turquoise to-[#2BFEFF] h-fit py-1 md:py-2 px-3 font-medium text-black text-md w-fit border-white border-3 hover:from-white hover:to-white hover:border-turquoise self-end`} type="submit">{submitButtonContent}</button>
          </form>
          <p className="mb-7 text-xl md:text-2xl font-light">We send out monthly newsletters with innovator resources and events happening in Austin and beyond.</p>
          <p className="mb-4 text-xl font-medium md:text-2xl"> Ways to Follow the Community</p>
          <ul className="flex gap-6 md:gap-8">
            {
              socials.map((s) => {
                return (
                  <Link key={s.alt} href={s.url} target="_blank" className="hover:scale-125">
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
            <div key={name} className={"md:flex " + data.flex}>
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
