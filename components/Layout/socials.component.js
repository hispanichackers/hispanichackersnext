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
      <div className="flex flex-row gap-4 [&>a>svg]:w-8 [&>a>svg]:h-8 [&>a>svg:hover]:scale-125">
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
          <FaMeetup title={socialsHH.meetup.alt} />
        </a>
        <a href={socialsHH.slack.url} alt={socialsHH.slack.alt} target="_blank">
          <FaSlackHash title={socialsHH.slack.alt} />
        </a>
        <a
          href={socialsHH.youtube.url}
          alt={socialsHH.youtube.alt}
          target="_blank"
        >
          <FaYoutube title={socialsHH.youtube.alt} />
        </a>
        <a
          href={socialsHH.instagram.url}
          alt={socialsHH.instagram.alt}
          target="_blank"
        >
          <FaInstagram title={socialsHH.instagram.alt} />
        </a>
        <a
          href={socialsHH.facebook.url}
          alt={socialsHH.facebook.alt}
          target="_blank"
        >
          <FaFacebookSquare title={socialsHH.facebook.alt} />
        </a>
        <a
          href={socialsHH.linkedin.url}
          alt={socialsHH.linkedin.alt}
          target="_blank"
        >
          <FaLinkedin title={socialsHH.linkedin.alt} />
        </a>
      </div>
    </>
  );
}
