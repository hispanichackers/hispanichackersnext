import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { FaLinkedin } from 'react-icons/fa';

const LinkedIn = styled(FaLinkedin)`
  color: #0073b1;
  :hover {
    transform: scale(1.2);
  }
`;

export default function Profile(props) {
  return (
    <div class="text-left max-w-[65ch] ">
      <Image class="my-0 mx-auto rounded-[50%] block" src={props.image} alt='Eddy' width={200} height={200} />
      <h2>{props.name}</h2>
      <div class="my-0 mx-auto text-left">
        <a href={props.linkedin} target='_blank'>
          <FaLinkedin class="text-[#0073b1] hover:scale-125" size={30} />
        </a>
      </div>
      <p class="text-[1.8rem] leading-[1.6]">{props.bio}</p>
    </div>
  );
}
