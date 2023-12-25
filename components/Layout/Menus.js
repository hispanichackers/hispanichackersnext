import Link from 'next/link';
// import { FaExternalLinkAlt } from 'react-icons/fa';

export default function Nav({ fontColor, font }) {
  const links = [
    { title: "Join Us", url: "/join", target: "" }, 
    { title: "Events", url: "https://www.meetup.com/austin-hispanic-hackers-meetup/", target: "_blank" },
    { title: "Resources", url: "/resources", target: "" },
    { title: "Contact Us", url: "/contact", target: "" }
  ];

  return (
    <nav className={`flex flex-row gap-x-7 gap-y-0 justify-center flex-wrap ${fontColor} font-${font} [&>a:hover]:underline px-4 lg:px-0`}>
      {
        links.map((link) => {
          return (
            <Link href={link.url} target={link.target}>
              <span className="w-fit block">{link.title}</span>
            </Link>
          );
        })
      }
    </nav>
  );
}
