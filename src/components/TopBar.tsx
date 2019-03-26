import React from 'react';
import Logo from './Logo';
import TopNav from './TopNav';
import { TopBarCon, TopBarGrid } from './UI/TopBarUI';

const TopBar: React.FC = () => (
  <TopBarCon>
    <TopBarGrid>
      <Logo />
      <TopNav />
    </TopBarGrid>
  </TopBarCon>
);

export default TopBar;
