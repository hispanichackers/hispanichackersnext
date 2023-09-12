import SocialsHH from './socials.component';
import Menus from './Menus';
import { FcLike } from 'react-icons/fc';




export default function Footer(props) {
  return (
    <footer className="p-4 bg-black text-white">
      <div className="wrapper flex flex-col gap-8 xl:flex-row justify-between items-center">
      <Menus {...props} fontColor="text-white" font="bold" />
      <p className="flex whitespace-pre-wrap items-center">
        Made with coffee, cumbia, and cariño. With <FcLike /> in {new Date().getFullYear()}.
      </p>
      <SocialsHH />
      </div>
    </footer>
  );
}
