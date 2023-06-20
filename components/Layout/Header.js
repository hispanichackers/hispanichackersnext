import styled from 'styled-components';
import Image from 'next/image';
import Menus from './Menus';
import Link from 'next/link';

const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.backgroundContrast};
  -webkit-box-shadow: 0 8px 6px -6px black;
  -moz-box-shadow: 0 8px 6px -6px black;
  box-shadow: 0 8px 6px -6px black;
  padding: 1rem 6rem;
  @media (min-width: 1024px) {
    padding-bottom: 0;
  }
`;

export default function Header(props) {
  return (
    <Section>
      <Link href={"/"}>
        <Image
          src='/static/images/logo.png'
          alt='Hispanic Hacker Logo'
          width={100}
          height={100}
        />
      </Link>
      <Menus {...props} />
    </Section>
  );
}
