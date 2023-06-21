import React from 'react';
import styled from 'styled-components';
import Profile from './Profile';
import globals from '../../assets/GlobalData';

const Section = styled.section`
  text-align: left;
  h1 {
    text-align: center;
  }
  h3 {
    text-align: center;
  }
  hr {
    margin: 1rem 0 4rem;
  }
`;
const ExecutiveTeam = styled.section`
  line-height: 1.6;
  display: grid;
  gap: 4rem;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 2rem auto;
  grid-template-columns: repeat(1, 1fr);
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1536px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export default function Team() {
  return (
    <Section>
      <h1>Meet the Executive Team</h1>
      <hr />
      <ExecutiveTeam>
        <Profile
          image='/static/images/eddy.jpg'
          name={globals().profilesHH.eddy.name}
          linkedin={globals().profilesHH.eddy.linkedin}
          bio={globals().profilesHH.eddy.bio}
        />
        <Profile
          image='/static/images/andres.jpg'
          name={globals().profilesHH.andres.name}
          linkedin={globals().profilesHH.andres.linkedin}
          bio={globals().profilesHH.andres.bio}
        />
        <Profile
          image='/static/images/leroy.jpg'
          name={globals().profilesHH.leroy.name}
          linkedin={globals().profilesHH.leroy.linkedin}
          bio={globals().profilesHH.leroy.bio}
        />
        <Profile
          image='/static/images/james.png'
          name={globals().profilesHH.james.name}
          linkedin={globals().profilesHH.james.linkedin}
          bio={globals().profilesHH.james.bio}
        />
      </ExecutiveTeam>
      <h3>Former Members</h3>
      <hr/>
      <ExecutiveTeam>
        <Profile
          image='/static/images/lauraE.jpg'
          name={globals().profilesHH.lauraE.name}
          linkedin={globals().profilesHH.lauraE.linkedin}
          bio={globals().profilesHH.lauraE.bio}
        />
        <Profile
          image='/static/images/lauraH.jpg'
          name={globals().profilesHH.lauraH.name}
          linkedin={globals().profilesHH.lauraH.linkedin}
          bio={globals().profilesHH.lauraH.bio}
        />
        <Profile
          image='/static/images/tim.jpg'
          name={globals().profilesHH.tim.name}
          linkedin={globals().profilesHH.tim.linkedin}
          bio={globals().profilesHH.tim.bio}
        />
      </ExecutiveTeam>
    </Section>
  );
}
