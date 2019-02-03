import React, { useContext } from 'react';
import Routes from '../../constants/Routes';
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
import { ThemerContext } from '../../Contexts/ThemerContext';

const TopBar: React.FC = () => {
  const { toggleTheme } = useContext(ThemerContext);
  return (
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
          <ThemeBtn onClick={() => toggleTheme('light')}>Light</ThemeBtn>
          <ThemeBtn dark onClick={() => toggleTheme('dark')}>
            Dark
          </ThemeBtn>
        </ThemeControls>
      </TopBarGrid>
    </TopBarCon>
  );
};

export default TopBar;
