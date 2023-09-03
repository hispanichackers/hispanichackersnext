
import {
  FaHome,
  FaMeetup,
  FaYoutubeSquare,
  FaAngellist,
  FaFacebookSquare,
  FaLinkedin,
  FaTwitterSquare,
} from 'react-icons/fa';
import globals from '../../assets/GlobalData';


export default function CapitalFactorySocials() {
  return (
    <>
      <a
        href={globals().socialsCF.home.url}
        alt={globals().socialsCF.home.alt}
        target='_blank'
      >
        <FaHome size={40} />
      </a>
      <a
        href={globals().socialsCF.home.url}
        alt={globals().socialsCF.home.alt}
        target='_blank'
      >
        <FaMeetup size={40} />
      </a>
      <a
        href={globals().socialsCF.twitter.url}
        alt={globals().socialsCF.twitter.alt}
        target='_blank'
      >
        <FaTwitterSquare size={40} />
      </a>
      <a
        href={globals().socialsCF.facebook.url}
        alt={globals().socialsCF.facebook.alt}
        target='_blank'
      >
        <FaFacebookSquare size={40} />
      </a>
      <a
        href={globals().socialsCF.linkedin.url}
        alt={globals().socialsCF.linkedin.alt}
        target='_blank'
      >
        <FaLinkedin size={40} />
      </a>
      <a
        href={globals().socialsCF.angellist.url}
        alt={globals().socialsCF.angellist.alt}
        target='_blank'
      >
        <FaAngellist size={40} />
      </a>
      <a
        href={globals().socialsCF.youtube.url}
        alt={globals().socialsCF.youtube.alt}
        target='_blank'
      >
        <FaYoutubeSquare size={40} />
      </a>
    </>
  );
}
