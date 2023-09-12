import globals from "../../assets/GlobalData";

import {
  FaMeetup,
  FaYoutubeSquare,
  FaGithub,
  FaFolder,
} from "react-icons/fa";
import Image from "next/image";


export default function Events({ year }) {
  const events = Object.values(globals().eventsHH[year]);

  return (
    <>
      {events.length > 0
        ? events.map((event, index) => (
            <EventCard key={index}>
              <h3>{event.month}</h3>
              <Image
                src={
                  event.titleSlide
                    ? `/static/images/${event.titleSlide}`
                    : "/static/images/hhatx.png"
                }
                alt={event.name + event.date}
                width={480}
                height={270}
              />
              <EventCardLinks>
                {event.meetup ? (
                  <a href={event.meetup} target="_blank">
                    <Meetup size={40} title="Meetup Event Page" />
                  </a>
                ) : (
                  ""
                )}
                {event.youtube ? (
                  <a href={event.youtube} target="_blank">
                    <Youtube size={40} title="Youtube Replay" />
                  </a>
                ) : (
                  ""
                )}
                {event.files ? (
                  <a href={event.files} target="_blank">
                    <FaFolder1 size={40} title="Associated Files" />
                  </a>
                ) : (
                  ""
                )}
                {event.github ? (
                  <a href={event.github} target="_blank">
                    <FaGithub size={40} title="Github Repository" />
                  </a>
                ) : (
                  ""
                )}
              </EventCardLinks>
              <EventCardText>
                <h3>
                  <u>{event.name}</u>
                </h3>
                <em>Date</em>: {event.date}
                <br />
                <em>Time</em>: {event.time}
              </EventCardText>
            </EventCard>
          ))
        : <p style={{'text-align': 'center', 'font-weight': 'bold', 'margin': '0 auto', 'padding':'5rem 0', 'font-size': '4rem'}}>No events scheduled at this time.</p> }
    </>
  );
}
