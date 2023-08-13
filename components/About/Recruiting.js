import styled from 'styled-components';
import Image from 'next/image';
import ContactButton from '../lib/ContactButton';

const Section = styled.h1`
  text-align: center;
  a {
    text-decoration: none;
  }
  @media (min-width: 2560px) {
    margin: 0 auto;
  }
`;
const Recruit = styled.section`
  text-align: left;
  img {
    max-width: 100%;
    height: auto;
  }
  ul {
    padding: 0;
  }
  li {
    width: 90%;
    margin: 0 auto;
  }
  @media (min-width: 768px) {
    li {
      width: 50%;
    }
  }
  @media (min-width: 1024px) {
    display: flex;
    li {
      width: 80%;
    }
    * {
      flex: 1 1 50%;
      margin: 1rem;
    }
  }
`;

export default function Recruiting() {
  return (
    <div class="text-center [2560px]:my-0 [2560px]:mx-auto">
      <h2>Join the Team or Get Involved</h2>
      <hr />
      <section class="text-left">
        <ul class="p-0">
          <Image
            src='/static/images/zoom2.jpg'
            alt='Zoom meetup'
            width={846.5}
            height={481.5}
            objectFit='contain'
            class="max-w-[100%] h-auto"
          />
          <li class="w-[90%] my-0 mx-auto [768px]:w-[50%] [1024px]:w-[80%]">Become part of the executive team</li>
          <li class="w-[90%] my-0 mx-auto [768px]:w-[50%] [1024px]:w-[80%]">Speakers always welcome for tech/culture topics</li>
          <li class="w-[90%] my-0 mx-auto [768px]:w-[50%] [1024px]:w-[80%]">Improve our events and organization</li>
          <li class="w-[90%] my-0 mx-auto [768px]:w-[50%] [1024px]:w-[80%]">Bring your unique skills</li>
        </ul>
        <ul class="p-0">
          <Image
            src='/static/images/zoom.png'
            alt='Zoom meetup'
            width={846.5}
            height={481.5}
            class="max-w-[100%] h-auto"
          />
          <li class="w-[90%] my-0 mx-auto [768px]:w-[50%] [1024px]:w-[80%]">Gain recognition for future job role</li>
          <li class="w-[90%] my-0 mx-auto [768px]:w-[50%] [1024px]:w-[80%]">Great chance to develop leadership skills</li>
          <li class="w-[90%] my-0 mx-auto [768px]:w-[50%] [1024px]:w-[80%]">Use coding skills for building the organization</li>
        </ul>
      </section>
      <ContactButton />
    </div>
  );
}
