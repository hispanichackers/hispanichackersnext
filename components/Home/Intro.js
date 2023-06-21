import styled from 'styled-components';
import Image from 'next/image';

const Section = styled.section`
  text-align: center;
  margin: 0 auto;
  img {
    border-radius: 3px;
    width: 100%;
    object-fit: cover;
  }
  @media (min-width: 1024px) {
    h4 {
      width: 60%;
      margin: 0 auto;
    }
  }
`;

export default function Intro() {
  return (
    <Section>
      <Image
        src='/static/images/meetup.jpg'
        alt='Hispanic Hacker Meetup'
        width={800}
        height={533}
      />
      <h1>Welcome to Hispanic Hackers!</h1>
      <h4>
        Hispanic Hackers is an Austin-based community that empowers the Latinx
        tech community. We host events that involve helping, hacking, and
        getting hired. Feel free to browse our website to learn more!
      </h4>
    </Section>
  );
}
