import React from 'react';
import { NavLink } from 'react-router-dom';
import Routes from '../../constants/Routes';
import { withTheme } from 'styled-components';
import { NavBar, Logo, ThemeControls, TopBarGrid, ThemeBtn } from '../../components/UI/TopBarUI';

type Props = {
  theme: any;
  setTheme: (value: string) => void;
};

const TopBar: React.SFC<Props> = ({ theme, setTheme }) => (
  <TopBarGrid>
    <Logo>Logo</Logo>
    <NavBar>
      <NavLink to={Routes.main}>Home</NavLink>
      <NavLink to={Routes.services}>Services</NavLink>
      <NavLink to={Routes.clients}>Clients</NavLink>
      <NavLink to={Routes.about}>About</NavLink>
      <NavLink to={Routes.contact}>Contact</NavLink>
      <ThemeControls>
        <ThemeBtn onClick={() => setTheme('light')}>Light</ThemeBtn>
        <ThemeBtn onClick={() => setTheme('dark')}>Dark</ThemeBtn>
      </ThemeControls>
    </NavBar>
  </TopBarGrid>
);

export default withTheme(TopBar);
