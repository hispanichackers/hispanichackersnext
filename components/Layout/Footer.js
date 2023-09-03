import SocialsHH from './SocialsHH';
import Menus from './Menus';
import { FcLike } from 'react-icons/fc';


export default function Footer(props) {
  return (
    <div className="p-8">
      <Menus {...props} textColor="#EEEEEE" font="normal"/>
      <p className="flex whitespace-pre-wrap p-7">

        Made with coffee, cumbia, and cariño. With <FcLike /> in {new Date().getFullYear()}.
      </p>
      <SocialsHH />
    </div>
  );
}
