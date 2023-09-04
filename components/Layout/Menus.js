import Link from 'next/link';
import styled from 'styled-components';
// import { FaExternalLinkAlt } from 'react-icons/fa';

export default function Nav({ fontColor, font }) {
  return (
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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

=======
    <nav className={`flex flex-row gap-12 [&>a]:text-[${textColor}] font-${font} [&>a:hover]:underline px-4 md:px-0`}>
>>>>>>> afc2ed6 (Adjusts to layout in footer)
=======
    <nav className={`flex flex-row gap-12 ${fontColor} font-${font} [&>a:hover]:underline px-4 md:px-0`}>
>>>>>>> 8d831a3 (Updates arbitrary color handler in menus)
=======
    <nav className={`flex flex-row gap-8 ${fontColor} font-${font} [&>a:hover]:underline px-4 md:px-0`}>
>>>>>>> cee4597 (Fixes footer social icons, adjusts flexbox)
      <Link href='/'>
        <span>
          Home
        </span>
>>>>>>> 072fbac (Updates nav style in menus.js)
      </Link>
      <Link href="/joinus">
        <span>Join Us</span>
      </Link>
<<<<<<< HEAD

      <Link
        href="https://www.meetup.com/austin-hispanic-hackers-meetup/"
        target="_blank"
      >
        <span>
          Events
          {/* <FaExternalLinkAlt className="ml-1 inline"/> */}
=======
      <Link href='https://www.meetup.com/austin-hispanic-hackers-meetup/' target="_blank">
        <span>
          Events
>>>>>>> cee4597 (Fixes footer social icons, adjusts flexbox)
        </span>
      </Link>
      <Link href="/resources">
        <span>Resources</span>
      </Link>
<<<<<<< HEAD
      {/* <Link href='/sponsors'>


        <span>
          Sponsors
        </span>
      </Link> */}

      <Link href="/contact">
        <span>Contact Us</span>
=======
      <Link href='/contact'>
        <span>
          Contact Us
        </span>
>>>>>>> cee4597 (Fixes footer social icons, adjusts flexbox)
      </Link>
    </nav>
  );
}
