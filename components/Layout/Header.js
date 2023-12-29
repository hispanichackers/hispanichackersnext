import Image from 'next/image';
import Menus from './Menus';
import Link from 'next/link';

export default function Header(props) {

  return (
    <header
      className="bg-white flex flex-row py-3 w-full sticky top-0 z-50 text-xl"
    >
      <section className="container mx-auto flex flex-col gap-y-2 md:flex-row items-center md:gap-20">
        <Link href={"/"}>
          <Image
            src='/static/images/logo.webp'
            alt='Hispanic Hacker Logo'
            width={175}
            height={100}
          />
        </Link>
        <Menus {...props} fontColor="text-cyan" font="bold"/>
      </section>
    </header>
  );
}
