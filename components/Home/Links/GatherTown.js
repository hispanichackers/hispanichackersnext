
import Image from 'next/image';
import globals from '../../assets/GlobalData';


export default function GatherTown() {
  return (
    <>
      <h2>GatherTown</h2>
      <hr />
      <p>Visit our virtual gathering hub for events!</p>
      <a
        href={globals().socialsHH.gatherTown.url}
        alt={globals().socialsHH.gatherTown.alt}
      >
        <p>Click to visit our town</p>
      </a>
      <Image
        src='/static/images/gatherTown.webp'
        alt='GatherTown Hub'
        width={1280}
        height={713}
      />
    </>
  );
}
