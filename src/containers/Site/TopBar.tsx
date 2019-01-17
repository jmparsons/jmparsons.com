import React from 'react';
import { NavLink } from 'react-router-dom';

const TopBar = () => (
  <div>
    <div>Logo</div>
    <nav>
      <NavLink to="/" title="Home" />
    </nav>
  </div>
);

export default TopBar;
