import styled from 'styled-components';
import SocialsHH from './SocialsHH';
import Menus from './Menus';
import { FcLike } from 'react-icons/fc';

const Section = styled.footer`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  position: relative;
  bottom: 0;
  width: 100%;
  background: ${({ theme }) => theme.backgroundContrast};
  -webkit-box-shadow: 0 8px 6px -6px black;
  -moz-box-shadow: 0 8px 6px -6px black;
  box-shadow: 0 -8px 6px -6px black;
  p {
    text-align: center;
    @media (min-width: 1440px) {
      width: 70%;
      margin: 0 auto;
    }
  }
`;

export default function Footer(props) {
  return (
    <Section>
      <Menus {...props} />
      <SocialsHH />
      <div>
        <p>
          Made with coffee, cumbia, and care. With <FcLike /> in&nbsp;
          {new Date().getFullYear()}.
        </p>
      </div>
    </Section>
  );
}
