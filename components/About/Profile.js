import React from 'react';
import Image from 'next/image';
import { FaLinkedin } from 'react-icons/fa';


export default function Profile(props) {
  return (
    <div className="text-left max-w-[65ch] ">
      <Image className="my-0 mx-auto rounded-[50%] block" src={props.image} alt='Eddy' width={200} height={200} />
      <h2>{props.name}</h2>
      <div className="my-0 mx-auto text-left">
        <a href={props.linkedin} target='_blank'>
          <FaLinkedin className="text-[#0073b1] hover:scale-125" size={30} />
        </a>
      </div>
      <p className="text-[1.8rem] leading-[1.6]">{props.bio}</p>
    </div>
  );
}
