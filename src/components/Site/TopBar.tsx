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
  HomeLink,
} from '../../components/UI/TopBarUI';
import { ThemerContext } from '../../utils/contexts';
import Images from '../../constants/Images';

const TopBar: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemerContext);
  const themeIcon = theme === 'light' ? Images.moon : Images.sun;
  return (
    <TopBarCon>
      <TopBarGrid>
        <Logo>
          <LogoLink to={Routes.main}>JMParsons</LogoLink>
        </Logo>
        <NavBar>
          <HomeLink to={Routes.main} exact>
            Home
          </HomeLink>
          <NxLink to={Routes.services}>Services</NxLink>
          <NxLink to={Routes.clients}>Clients</NxLink>
          <NxLink to={Routes.about}>About</NxLink>
          <NxLink to={Routes.contact}>Contact</NxLink>
        </NavBar>
        <ThemeControls>
          <ThemeBtn onClick={toggleTheme}>
            <img src={themeIcon} />
          </ThemeBtn>
        </ThemeControls>
      </TopBarGrid>
    </TopBarCon>
  );
};

export default TopBar;
