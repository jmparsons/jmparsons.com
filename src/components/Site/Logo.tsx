import React from 'react';
import Routes from '../Routes';
import { LogoCon, LogoLink } from '../UI/TopBarUI';

const Logo: React.FC = () => (
  <LogoCon>
    <LogoLink to={Routes.home}>JMParsons</LogoLink>
  </LogoCon>
);

export default Logo;
