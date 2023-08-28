import styled from "styled-components";
import Image from "next/image";
import CapitalFactorySocials from "./CapitalFactorySocials";
import ContactButton from "../lib/ContactButton";
import CommunityResourcesButton from "../lib/CommunityResourcesButton";

const Section = styled.section``;
const Div = styled.div`
  margin: 0 auto;
  @media (min-width: 1024px) {
    width: 70%;
  }
  @media (min-width: 1440px) {
    width: 60%;
  }
`;

export default function CapitalFactory() {
  return (
    <Section>
      <Div>
        <div className="py-8 flex justify-center">
          <Image
            src="/static/images/capital_factory.png"
            alt="Capital Factory Logo"
            width={250}
            height={250}
            className="mx-auto"
          />
          <Image
            src="/static/images/techqueria_logo.png"
            alt="Techqueria Logo"
            width={250}
            height={250}
            className="mx-auto"
          />
        </div>
        <div className="py-8 flex justify-center">
          <ContactButton/>
          <CommunityResourcesButton />
        </div>
        <h3>Capital Factory</h3>
        <p>701 Brazos St, Austin, TX 78701</p>
        {/* <CapitalFactorySocials /> */}
      </Div>
    </Section>
  );
}
