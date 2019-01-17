import React from 'react';
import { Logo } from './Logo';
import { TopNav } from './TopNav';
import { ThemeToggle } from './ThemeToggle';
import { TopBarCon, TopBarGrid } from './UI/TopBarUI';

export const TopBar = () => (
  <TopBarCon>
    <TopBarGrid>
      <Logo />
      <TopNav />
      <ThemeToggle />
    </TopBarGrid>
  </TopBarCon>
);
