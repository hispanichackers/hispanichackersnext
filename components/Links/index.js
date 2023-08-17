import styled from "styled-components";
import CapitalFactory from "./CapitalFactory";

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
      <div className="py-8 text-center">
        <h1 className="font-bold">Our Sponsors & Partners</h1>
        <CapitalFactory />
      </div>
    </Section>
  );
}
