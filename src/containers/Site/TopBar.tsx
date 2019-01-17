import React from 'react';
import { NavLink } from 'react-router-dom';
import Routes from '../../constants/Routes';
import { withTheme } from 'styled-components';
import { NavBar } from '../../components/UI/TopBarUI';

type Props = {
  theme: any;
};

const TopBar: React.SFC<Props> = ({ theme }) => {
  console.log('​theme', theme);

  return (
    <div>
      <div>Logo</div>
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
