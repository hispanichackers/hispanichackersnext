import styled from 'styled-components';
import GatherTown from './GatherTown';
import GoogleCalendar from './GoogleCalendar';
import Contact from './Contact';
import CapitalFactory from './CapitalFactory';

const Section = styled.section`
  text-align: center;
  h1 {
    text-align: left;
  }
  @media (min-width: 768px) {
    span {
      text-align: left;
    }
  }
  @media (min-width: 2560px) {
    width: 70%;
    margin: 0 auto;
  }
`;

export default function Links() {
  return (
    <Section>
      <GatherTown />
      <GoogleCalendar />
      <Contact />
      <CapitalFactory />
    </Section>
  );
}
