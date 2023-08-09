import styled from 'styled-components';
import Link from 'next/link';
import { FaExternalLinkAlt } from 'react-icons/fa';


export default function Nav({ theme, toggleTheme }) {
  return (
    <nav class="flex flex-row gap-12 [&>a]:text-[#277e7e] font-bold [&>a:hover]:underline">
      <Link href='/'>
        <span>
          Home
        </span>
      </Link>
      <Link href='https://www.meetup.com/austin-hispanic-hackers-meetup/' target="_blank">
        <span>
          Events <FaExternalLinkAlt className="ml-1 inline"/>
        </span>
      </Link>
      <Link href='/about'>
        <span>
          About
        </span>
      </Link>
      <Link href='/sponsors'>
        <span>
          Sponsors
        </span>
      </Link>
      <Link href='/contact'>
        <span>
          Contact
        </span>
      </Link>
    </nav>
  );
}
