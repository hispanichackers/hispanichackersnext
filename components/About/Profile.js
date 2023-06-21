import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { FaLinkedin } from 'react-icons/fa';

const Aside = styled.aside`
  text-align: left;
  max-width: 65ch;
  p {
    font-size: 1.8rem;
    line-height: 1.6;
  }
`;
const ProfileLinks = styled.div`
  margin: 0 auto;
  text-align: left;
`;
const Image1 = styled(Image)`
  margin: 0 auto;
  border-radius: 50%;
  display: block;
`;
const LinkedIn = styled(FaLinkedin)`
  color: #0073b1;
  :hover {
    transform: scale(1.2);
  }
`;

export default function Profile(props) {
  return (
    <Aside>
      <Image1 src={props.image} alt='Eddy' width={200} height={200} />
      <h2>{props.name}</h2>
      <ProfileLinks>
        <a href={props.linkedin} target='_blank'>
          <LinkedIn size={30} />
        </a>
      </ProfileLinks>
      <p>{props.bio}</p>
    </Aside>
  );
}
