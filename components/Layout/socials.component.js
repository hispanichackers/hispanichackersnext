import {
  FaMeetup,
  FaYoutube,
  FaSlackHash,
  FaInstagram,
  FaFacebookSquare,
  FaLinkedin,
  FaDiscord,
} from "react-icons/fa";
import globals from "../../assets/GlobalData";

export default function Socials() {
  const { socialsHH } = globals();
  return (
    <>
      <div className="flex flex-row gap-8 [&>a>svg]:w-12 [&>a>svg]:h-12 [&>a>svg:hover]:scale-125 text-center">
        <a
          href={socialsHH.discord.url}
          alt={socialsHH.discord.alt}
          target="_blank"
        >
          <FaDiscord title={socialsHH.discord.alt} />
        </a>
        <a
          href={socialsHH.meetup.url}
          alt={socialsHH.meetup.alt}
          target="_blank"
        >
          <FaMeetup title={socialsHH.meetup.alt} className="fill-red" />
        </a>
        <a
          href={socialsHH.youtube.url}
          alt={socialsHH.youtube.alt}
          target="_blank"
        >
          <FaYoutube title={socialsHH.youtube.alt} className="fill-red" />
        </a>
        <a
          href={socialsHH.instagram.url}
          alt={socialsHH.instagram.alt}
          target="_blank"
        >
          <FaInstagram title={socialsHH.instagram.alt} className="instagram-icon" />
        </a>
        <a
          href={socialsHH.facebook.url}
          alt={socialsHH.facebook.alt}
          target="_blank"
        >
          <FaFacebookSquare title={socialsHH.facebook.alt} className="fill-blue-500" />
        </a>
        <a
          href={socialsHH.linkedin.url}
          alt={socialsHH.linkedin.alt}
          target="_blank"
        >
          <FaLinkedin title={socialsHH.linkedin.alt} className="fill-cyan"  />
        </a>
      </div>
    </>
  );
}
