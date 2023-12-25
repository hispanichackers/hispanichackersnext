
import Image from 'next/image';
import globals from '../../assets/GlobalData';


export default function GatherTown() {
  return (
    <>
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
    </>
  );
}
