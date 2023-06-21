import styled from 'styled-components';
import CapitalFactory from './CapitalFactory';

const Section = styled.section`
  text-align: center;
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
      <h2>Sponsors</h2>
      <hr />
      <CapitalFactory />
    </Section>
  );
}
