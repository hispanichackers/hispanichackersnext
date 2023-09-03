import SocialsHH from './SocialsHH';
import Menus from './Menus';
import { FcLike } from 'react-icons/fc';


export default function Footer(props) {
  return (
    <footer className="p-8 bg-black text-white">
      <div className="wrapper flex flex-row justify-between items-center">
      <Menus {...props} textColor="#ffffff" font="normal"/>
      <p className="flex whitespace-pre-wrap p-7">
        Made with coffee, cumbia, and cariño. With <FcLike /> in {new Date().getFullYear()}.
      </p>
      <SocialsHH />
      </div>
    </footer>
  );
}
