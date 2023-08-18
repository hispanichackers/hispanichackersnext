import styled from 'styled-components';
import SocialsHH from './SocialsHH';
import Menus from './Menus';
import { FcLike } from 'react-icons/fc';

const Section = styled.footer`
  position: fixed;
  bottom: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  background: ${({ theme }) => theme.backgroundContrast};
  -webkit-box-shadow: 0 8px 6px -6px black;
  -moz-box-shadow: 0 8px 6px -6px black;
  box-shadow: 0 -8px 6px -6px black;
  p {
    text-align: center;
    @media (min-width: 1440px) {
      margin: 0 auto;
    }
  }
`;


export default function Footer(props) {
  return (
    <Section className="p-7">
      <Menus {...props} textColor="#EEEEEE" font="normal"/>
      <p className="flex whitespace-pre-wrap p-7">
        Made with coffee, cumbia, and cariño. With <FcLike /> in {new Date().getFullYear()}.
      </p>
      <SocialsHH />
    </Section>
  );
}
