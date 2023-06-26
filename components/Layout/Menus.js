import styled from 'styled-components';
import Link from 'next/link';
import { FaExternalLinkAlt } from 'react-icons/fa';

const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  gap: 1rem;
  span {
    display: flex;
    gap: 8px;
    align-items: center;
    border: 2px solid ${({ theme }) => theme.backgroundContrast};
    &:hover {
      cursor: pointer;
      color: ${({ theme }) => theme.linkUnderline};
      border-bottom: 2px solid ${({ theme }) => theme.linkUnderline};
      transition: all 500ms;
    }
  }
  svg {
    width: 16px;
  }
  button {
    font-size: 20px;
    background: none;
    padding: 0;
    margin: 0;
    text-decoration: none;
    color: ${({ theme }) => theme.backgroundContrast};
    border: 2px solid ${({ theme }) => theme.backgroundContrast};
  }
  @media (min-width: 425px) {
    flex-wrap: nowrap;
  }
  @media (min-width: 1440px) {
    width: 30%;
  }
`;

export default function Nav({ theme, toggleTheme }) {
  return (
    <Section>
      <Link href='/'>
        <span>
          Home
        </span>
      </Link>
      <Link href='https://www.meetup.com/austin-hispanic-hackers-meetup/' target="_blank">
        <span>
          Events <FaExternalLinkAlt/>
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
    </Section>
  );
}
