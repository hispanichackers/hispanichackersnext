import styled from 'styled-components';
import Image from 'next/image';
import globals from '../../assets/GlobalData';

const Section = styled.section`
  h2 {
    text-align: left;
  }
  a {
    text-decoration: underline;
    color: ${({ theme }) => theme.linkUnderline};
  }
`;
export default function GatherTown() {
  return (
    <Section>
      <h2>Google Calendar</h2>
      <hr />
      <p>Join the Hispanic Hackers Google Calender to follow our events!</p>
      <a
        href={globals().socialsHH.googleCalender.url}
        alt={globals().socialsHH.googleCalender.alt}
      >
        <p>Join our calendar here</p>
      </a>
      <Image
        src='/static/images/calendar.png'
        alt='GatherTown Hub'
        width={800}
        height={430}
      />
    </Section>
  );
}
