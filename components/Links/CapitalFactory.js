
import Image from "next/image";
import Link from "next/link";


export default function CapitalFactory() {
  return (
    <>
        <div className="py-8 flex justify-center">
          <Image
            src="/static/images/capital_factory.png"
            alt="Capital Factory Logo"
            width={250}
            height={250}
            className="mx-2"
          />
          <Image
            src={"/static/images/techqueria.png"}
            alt="Capital Factory Logo"
            width={250}
            height={250}
            className="mx-2"
          />
        </div>
        <h3 className="text-[#267E7E]">Interested in Partnering with Us?</h3>
        <Link
          href="/contact"
          className="flex justify-center mt-5 ml-auto mr-[3%] font-medium text-black hover:underline hover:underline-offset-1 sm:ml-10 md:ml-24 sm:text-3xl xl:text-3xl"
          passHref
        >
          Contact Us
          <img
            className="ml-5 h-6 mt-2 md:h-6 opacity-100 filter brightness-0"
            src="/static/images/Arrow1.png"
            alt="arrow"
          />
        </Link>
    </>
  );
}
