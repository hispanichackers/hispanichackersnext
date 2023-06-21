import styled from 'styled-components';

const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  margin: 0 auto;
  gap: 1rem;
  div {
    margin: 0 1rem;
  }
  @media (min-width: 768px) {
    flex-wrap: nowrap;
    grid-template-columns: repeat(3, 1fr);
  }
`;

export default function Mission() {
  return (
    <Section>
      <div>
        <h4>Help🧭</h4>
        <p>
          Hispanic Hackers helps cultivate diversity in the Tech Community
          through our informative and thought-provoking monthly meetups
          surrounding the topics in the Latino Community. Our three core values
          Help, Hack and Hire provide support and connect Latinos across the
          Tech Industry in Austin, TX.
        </p>
      </div>
      <div>
        <h4>Hack 🔭</h4>
        <p>
          Hispanic Hackers use technology as a conduit to empower our community.
          During our Hack series, we present topics relevant to Hispanics in
          Tech with a goal to learn from each other and provide an environment
          to share opinions and different points of view.
        </p>
      </div>
      <div>
        <h4>Hire ⚖️</h4>
        <p>
          Hispanic Hackers serve as a liaison between companies hoping to hire a
          more diverse workforce and technology professionals searching for the
          next step in their career. Coding Interview Practices and other
          workforce development programs represent some of our leadership in
          promoting diversity.
        </p>
      </div>
    </Section>
  );
}
