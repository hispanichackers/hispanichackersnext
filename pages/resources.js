import Layout from "../components/Layout";
import Image from "next/image";

export default function Resources(props) {
  return (
    <Layout {...props}>
      <header className="grid isolate">
        <Image
          src="/static/images/Austin-skyline-daytime.jpg"
          alt="Techqueria Logo"
          width={2560}
          height={250}
          className="col-span-full row-span-full max-h-[600px] object-cover"
        />
        <div className="col-span-full row-span-full bg-[#277E7E] bg-opacity-60 flex justify-between flex-col">
          <div className="container mx-auto pt-36">
            <h1>Get Connected</h1>
            <h2>Resources for growth in Austin & beyond.</h2>
          </div>
          <ul className="grid grid-cols-4">
            <li className="text-3xl font-medium border-white border-l-4 border-r-2 border-y-4 p-8 text-center hover:bg-white hover:text-cyan">
              For Developers / Engineers
            </li>
            <li className="text-3xl font-medium border-white border-x-2 border-y-4 p-8 text-center hover:bg-white hover:text-cyan hover:cursor-pointer focus:bg-white focus:text-cyan">
              For Entrepreneurs
            </li>
            <li className="text-3xl font-medium border-white border-x-2 border-y-4 p-8 text-center hover:bg-white hover:text-cyan hover:cursor-pointer focus:bg-white focus:text-cyan">
              For Nonprofits / Volunteers
            </li>
            <li className="text-3xl font-medium border-white border-l-2 border-r-4 border-y-4 p-8 text-center hover:bg-white hover:text-cyan hover:cursor-pointer focus:bg-white focus:text-cyan">
              For Students
            </li>
          </ul>
        </div>
      </header>
      <section className="bg-white">
        <header className="bg-orange text-white py-4">
          <div className="container mx-auto">
            <h2>Resources for Students</h2>
          </div>
        </header>
        <article className="py-8 container mx-auto">
          <div className="border-2 border-dotted border-[#9747FF] p-4 rounded-[5px] max-w-[840px] mx-auto">
            <div className="bg-[#F4EBDC] p-12 rounded-[25px] text-black">
              <h3 className="">Free Udemy Courses through GALE</h3>
              <article className="grid grid-cols-2">
                <div></div>
                <div className="text-3xl">
                  <p className="mb-8">
                    GALE Presents provides a free version of the Udemy platform
                    through public libraries and institutions.
                  </p>
                  <a href="#" className="flex flex-row text-black items-center gap-4">
                    Find a Free Udemy Course{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="61"
                      height="23"
                      fill="none"
                      viewBox="0 0 61 23"
                    >
                      <path
                        fill="#000"
                        d="M60.079 12.542a1.5 1.5 0 0 0-.037-2.12l-9.709-9.38a1.5 1.5 0 1 0-2.084 2.157l8.63 8.338-8.338 8.63A1.5 1.5 0 1 0 50.7 22.25l9.38-9.709ZM1.026 14l58-1-.052-3-58 1 .052 3Z"
                      />
                    </svg>
                  </a>
                </div>
              </article>
            </div>
          </div>
        </article>
      </section>
    </Layout>
  );
}
