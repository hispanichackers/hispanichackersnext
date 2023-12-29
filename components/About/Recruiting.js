
import Image from 'next/image';
import ContactButton from '../lib/ContactButton';

export default function Recruiting() {
  return (
    <div className="text-center [2560px]:my-0 [2560px]:mx-auto">
      <h2>Join the Team or Get Involved</h2>
      <hr />
      <section className="text-left">
        <ul className="p-0">
          <Image
            src='/static/images/zoom2.jpg'
            alt='Zoom meetup'
            width={846.5}
            height={481.5}
            objectFit='contain'
            className="max-w-[100%] h-auto"
          />
          <li className="w-[90%] my-0 mx-auto [768px]:w-[50%] [1024px]:w-[80%]">Become part of the executive team</li>
          <li className="w-[90%] my-0 mx-auto [768px]:w-[50%] [1024px]:w-[80%]">Speakers always welcome for tech/culture topics</li>
          <li className="w-[90%] my-0 mx-auto [768px]:w-[50%] [1024px]:w-[80%]">Improve our events and organization</li>
          <li className="w-[90%] my-0 mx-auto [768px]:w-[50%] [1024px]:w-[80%]">Bring your unique skills</li>
        </ul>
        <ul className="p-0">
          <Image
            src='/static/images/zoom.webp'
            alt='Zoom meetup'
            width={846.5}
            height={481.5}
            className="max-w-[100%] h-auto"
          />
          <li className="w-[90%] my-0 mx-auto [768px]:w-[50%] [1024px]:w-[80%]">Gain recognition for future job role</li>
          <li className="w-[90%] my-0 mx-auto [768px]:w-[50%] [1024px]:w-[80%]">Great chance to develop leadership skills</li>
          <li className="w-[90%] my-0 mx-auto [768px]:w-[50%] [1024px]:w-[80%]">Use coding skills for building the organization</li>
        </ul>
      </section>
      <ContactButton />
    </div>
  );
}
