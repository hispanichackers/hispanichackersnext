
import Image from "next/image";
import CapitalFactorySocials from "./CapitalFactorySocials";
import ContactButton from "../lib/ContactButton";
import CommunityResourcesButton from "../lib/CommunityResourcesButton";


export default function CapitalFactory() {
  return (
    <>
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
    </>
  );
}
