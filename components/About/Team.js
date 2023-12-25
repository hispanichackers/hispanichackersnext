import React from 'react';

import Profile from './Profile';
import globals from '../../assets/GlobalData';


export default function Team() {
  return (
    <>
      <h1>Meet the Executive Team</h1>
      <hr />
      <div>
        <Profile
          image='/static/images/eddy.webp'
          name={globals().profilesHH.eddy.name}
          linkedin={globals().profilesHH.eddy.linkedin}
          bio={globals().profilesHH.eddy.bio}
        />
        <Profile
          image='/static/images/andres.webp'
          name={globals().profilesHH.andres.name}
          linkedin={globals().profilesHH.andres.linkedin}
          bio={globals().profilesHH.andres.bio}
        />
        <Profile
          image='/static/images/leroy.webp'
          name={globals().profilesHH.leroy.name}
          linkedin={globals().profilesHH.leroy.linkedin}
          bio={globals().profilesHH.leroy.bio}
        />
        <Profile
          image='/static/images/james.webp'
          name={globals().profilesHH.james.name}
          linkedin={globals().profilesHH.james.linkedin}
          bio={globals().profilesHH.james.bio}
        />
      </div>
      <h3>Former Members</h3>
      <hr/>
      <div>
        <Profile
          image='/static/images/lauraE.webp'
          name={globals().profilesHH.lauraE.name}
          linkedin={globals().profilesHH.lauraE.linkedin}
          bio={globals().profilesHH.lauraE.bio}
        />
        <Profile
          image='/static/images/lauraH.webp'
          name={globals().profilesHH.lauraH.name}
          linkedin={globals().profilesHH.lauraH.linkedin}
          bio={globals().profilesHH.lauraH.bio}
        />
        <Profile
          image='/static/images/tim.webp'
          name={globals().profilesHH.tim.name}
          linkedin={globals().profilesHH.tim.linkedin}
          bio={globals().profilesHH.tim.bio}
        />
      </div>
    </>
  );
}
