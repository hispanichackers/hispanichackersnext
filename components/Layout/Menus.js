import styled from 'styled-components';
import Link from 'next/link';

const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  span {
    flex: 1 1 100%;
    padding: 1rem;
    @media (min-width: 1024px) {
      flex: 1 1 90%;
    }
    border: 2px solid ${({ theme }) => theme.backgroundContrast};
    :hover {
      cursor: pointer;
      border-bottom: 2px solid ${({ theme }) => theme.linkUnderline};
    }
  }
  svg {
    width: 30px;
    height: 30px;
    @media (min-width: 425px) {
      display: block;
      margin: 0 auto;
    }
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
          Events
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
