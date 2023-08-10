import styled from 'styled-components';
import Image from 'next/image';
import Menus from './Menus';
import Link from 'next/link';

export default function Header(props) {
  return (
    <header className="bg-white flex flex-row border-b-2 border-cyan py-4">
      <section className="container mx-auto flex flex-col md:flex-row items-center md:gap-24">
        <Link href={"/"}>
          <Image
            src='/static/images/logo.png'
            alt='Hispanic Hacker Logo'
            width={100}
            height={100}
          />
        </Link>
        <Menus {...props} textColor="#277e7e" font="bold"/>
      </section>
    </header>
  );
}
