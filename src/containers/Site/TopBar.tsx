import React from 'react';
import Routes from '../../constants/Routes';
import { withTheme } from 'styled-components';
import {
  TopBarCon,
  NavBar,
  Logo,
  LogoLink,
  ThemeControls,
  TopBarGrid,
  ThemeBtn,
  NxLink,
} from '../../components/UI/TopBarUI';

type Props = {
  theme: any;
  setTheme: (value: string) => void;
};

const TopBar: React.SFC<Props> = ({ theme, setTheme }) => (
  <TopBarCon>
    <TopBarGrid>
      <Logo>
        <LogoLink to={Routes.main}>JMParsons</LogoLink>
      </Logo>
      <NavBar>
        <NxLink to={Routes.main} exact>
          Home
        </NxLink>
        <NxLink to={Routes.services}>Services</NxLink>
        <NxLink to={Routes.clients}>Clients</NxLink>
        <NxLink to={Routes.about}>About</NxLink>
        <NxLink to={Routes.contact}>Contact</NxLink>
      </NavBar>
      <ThemeControls>
        <ThemeBtn onClick={() => setTheme('light')}>Light</ThemeBtn>
        <ThemeBtn dark onClick={() => setTheme('dark')}>
          Dark
        </ThemeBtn>
      </ThemeControls>
    </TopBarGrid>
  </TopBarCon>
);

export default withTheme(TopBar);
