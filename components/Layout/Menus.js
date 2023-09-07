import Link from 'next/link';
import styled from 'styled-components';
// import { FaExternalLinkAlt } from 'react-icons/fa';

export default function Nav({ fontColor, font }) {
  return (

    <nav className={`flex flex-row gap-8 ${fontColor} font-${font} [&>a:hover]:underline px-4 md:px-0`}>
      <Link href='/'>
        <span>
          Home
        </span>
      </Link>
      <Link href="/joinus">
        <span>Join Us</span>
      </Link>
      <Link href='https://www.meetup.com/austin-hispanic-hackers-meetup/' target="_blank">
        <span>
          Events
        </span>
      </Link>
      <Link href="/resources">
        <span>Resources</span>
      </Link>
      <Link href="/contact">
        <span>Contact Us</span>
      </Link>
    </nav>
  );
}
