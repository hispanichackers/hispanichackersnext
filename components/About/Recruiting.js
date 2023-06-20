import styled from 'styled-components';
import Image from 'next/image';
import ContactButton from '../lib/ContactButton';

const Section = styled.h1`
  text-align: left;
  a {
    text-decoration: none;
  }
  @media (min-width: 2560px) {
    margin: 0 auto;
  }
`;
const Recruit = styled.section`
  text-align: left;
  img {
    max-width: 100%;
    height: auto;
  }
  ul {
    padding: 0;
  }
  li {
    width: 90%;
    margin: 0 auto;
  }
  @media (min-width: 768px) {
    li {
      width: 50%;
    }
  }
  @media (min-width: 1024px) {
    display: flex;
    li {
      width: 80%;
    }
    * {
      flex: 1 1 50%;
      margin: 1rem;
    }
  }
`;

export default function Recruiting() {
  return (
    <Section>
      <h2>Join the Team or Get Involved</h2>
      <hr />
      <Recruit>
        <ul>
          <Image
            src='/static/images/zoom2.jpg'
            alt='Zoom meetup'
            width={846.5}
            height={481.5}
            objectFit='contain'
          />
          <li>Become part of the executive team</li>
          <li>Speakers always welcome for tech/culture topics</li>
          <li>Improve our events and organization</li>
          <li>Bring your unique skills</li>
        </ul>
        <ul>
          <Image
            src='/static/images/zoom.png'
            alt='Zoom meetup'
            width={846.5}
            height={481.5}
          />
          <li>Gain recognition for future job role</li>
          <li>Great chance to develop leadership skills</li>
          <li>Use coding skills for building the organization</li>
          <li>Access to the world-class Capital Factory facility</li>
        </ul>
      </Recruit>
      <ContactButton />
    </Section>
  );
}
