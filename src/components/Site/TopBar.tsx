import React, { useContext } from 'react';
import Routes from '../../constants/Routes';
import { TopBarCon, NavBar, Logo, LogoLink, TopBarGrid, NxLink, HomeLink } from '../UI/TopBarUI';

const TopBar: React.FC = () => (
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
    </TopBarGrid>
  </TopBarCon>
);

export default TopBar;
