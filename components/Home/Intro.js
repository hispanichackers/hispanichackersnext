import styled from "styled-components";
import Image from "next/image";

// const Section = styled.section`
//   margin: 0 auto;

//   @media (min-width: 1024px) {
//     h4 {
//       width: 60%;
//       margin: 0 auto;
//     }
//   }

// `;

export default function Intro() {
  return (
    <section>
      <div className="w-full h-full bg-[url('https://i.imgur.com/Brwm73m.jpg')] bg-cover bg-center flex justify-center items-center grid grid-cols-1 sm:grid-cols-2">
        <div className="bg-orange-500/75 h-full">
          <h1 className=" font-sans text-4xl text-white text-center my-10  font-light sm:mt-48 mx-12 ">
            Join our Comunidad<br></br>of
            <span className=" font-serif  text-white text-7xl ">
              {" "}
              Developers, Engineers,<br></br> & Entrepreneurs
            </span>
          </h1>
        </div>
        <div className="bg-teal-700/75">
          <p className=" my-10 mx-10 text-white text-3xl">
            Hispanic Hackers' goal is to showcase Hispanic innovator talent in
            the world of tech and share the growth of our expanding network of
            engineering and entrepreneurship excellence. We offer resources to
            get you connected and host tech socials, presentations from Latino
            industry leaders, and networking opportunities.
          </p>
          <div className="grid grid-cols-2 bg-yellow-600/50  text-center">
            <div className="bg-yellow-500/50 p-14 border-4 border-yellow-500 h-44 text-white font-bold">
              Join Us
            </div>
            <div className="bg-yellow-500/50 p-14 border-4 border-yellow-500 h-44 text-white font-bold text-2xl sm:text-3xl">
              Upcoming Events
            </div>
            <div className="bg-yellow-500/50 p-14 border-4 border-yellow-500 h-44 text-white font-bold">
              Resources
            </div>
            <div className="bg-yellow-500/50 p-14 border-4 border-yellow-500 h-44 text-white font-bold">
              Contact Us
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
