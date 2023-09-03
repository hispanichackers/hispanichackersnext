import Link from 'next/link';
import styled from 'styled-components';
// import { FaExternalLinkAlt } from 'react-icons/fa';

export default function Nav({ textColor, font }) {
  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <nav
      className={`flex flex-row gap-12 [&>a]:text-[${textColor}] font-${font} [&>a:hover]:underline`}
    >
      <Link href="/">
        <span>Home</span>
=======
    <nav className={`flex flex-row gap-12 [&>a]:text-[${textColor}] font-${font} [&>a:hover]:underline [&>a]:text-cyan`}>
=======
    <nav className={`flex flex-row gap-12 [&>a]:text-[${textColor}] font-${font} [&>a:hover]:underline [&>a]:text-cyan px-4 md:px-0`}>
>>>>>>> bf4b511 (Adds padding for mobile)

      <Link href='/'>
        <span>
          Home
        </span>
>>>>>>> 072fbac (Updates nav style in menus.js)
      </Link>
      <Link href="/joinus">
        <span>Join Us</span>
      </Link>

      <Link
        href="https://www.meetup.com/austin-hispanic-hackers-meetup/"
        target="_blank"
      >
        <span>
          Events
          {/* <FaExternalLinkAlt className="ml-1 inline"/> */}
        </span>
      </Link>
      <Link href="/resources">
        <span>Resources</span>
      </Link>
      {/* <Link href='/sponsors'>


        <span>
          Sponsors
        </span>
      </Link> */}

      <Link href="/contact">
        <span>Contact Us</span>
      </Link>
    </nav>
  );
}
