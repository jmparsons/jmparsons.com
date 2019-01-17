import React from 'react';
import { NavLink } from 'react-router-dom';
import Routes from '../../constants/Routes';
import { withTheme } from 'styled-components';
import { NavBar } from '../../components/UI/TopBarUI';

type Props = {
  theme: any;
  setTheme: (value: string) => void;
};

const TopBar: React.SFC<Props> = ({ theme, setTheme }) => {
  console.log('​theme', theme);

  return (
    <div>
      <div>Logo</div>
      <button onClick={() => setTheme('light')}>Light</button>
      <button onClick={() => setTheme('dark')}>Dark</button>
      <NavBar>
        <NavLink to={Routes.main}>Home</NavLink>
        <NavLink to={Routes.services}>Services</NavLink>
        <NavLink to={Routes.clients}>Clients</NavLink>
        <NavLink to={Routes.about}>About</NavLink>
        <NavLink to={Routes.contact}>Contact</NavLink>
      </NavBar>
    </div>
  );
};

export default withTheme(TopBar);
