import globals from "../../assets/GlobalData";
import styled from "styled-components";
import {
  FaMeetup,
  FaYoutubeSquare,
  FaGithub,
  FaFolder,
} from "react-icons/fa";
import Image from "next/image";

const EventsWrapper = styled.aside`
  display: flex;
  flex-wrap: wrap;
`;
const EventCard = styled.div`
  border-radius: 10px;
  flex: 1 1 100%;
  justify-content: center;
  width: 30%;
  margin: 0 auto;
  padding-bottom: 2rem;
  text-align: center;
  background: ${({ theme }) => theme.backgroundContrast};
  -webkit-box-shadow: 0 8px 6px -6px black;
  -moz-box-shadow: 0 8px 6px -6px black;
  box-shadow: 0 8px 6px -6px black;
  a {
    display: block;
    border-bottom: 2px solid ${({ theme }) => theme.backgroundContrast};
    :hover {
      border-bottom: 2px solid ${({ theme }) => theme.linkUnderline};
    }
  }
  h3 {
    width: 90%;
    margin: 0 auto;
  }
  @media (min-width: 425px) {
    flex: 1 1 30%;
    margin: 2rem;
  }
`;
const EventCardLinks = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 1rem 0;
`;
const Meetup = styled(FaMeetup)`
  color: #e61b3e;
`;
const Youtube = styled(FaYoutubeSquare)`
  color: #f70000;
`;
const FaFolder1 = styled(FaFolder)`
  color: #f8d775;
`;
const EventCardText = styled.div``;

export default function Events({ year }) {
  const events = Object.values(globals().eventsHH[year]);

  return (
    <EventsWrapper>
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
    </EventsWrapper>
  );
}
