import React from 'react';
import ThemeToggle from './ThemeToggle';
import Logo from './Logo';
import TopNav from './TopNav';
import { TopBarCon, TopBarGrid } from '../UI/TopBarUI';

const TopBar: React.FC = () => (
  <TopBarCon>
    <TopBarGrid>
      <Logo />
      <TopNav />
      <ThemeToggle />
    </TopBarGrid>
  </TopBarCon>
);

export default TopBar;
