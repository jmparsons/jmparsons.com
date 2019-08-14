import React from 'react';
import { Routes } from './Routes';
import { LogoCon, LogoLink } from './UI/TopBarUI';

export const Logo = () => (
  <LogoCon>
    <LogoLink to={Routes.home}>JMParsons</LogoLink>
  </LogoCon>
);
