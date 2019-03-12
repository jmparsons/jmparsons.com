import React from 'react';
import Routes from '../../constants/Routes';
import { LogoCon, LogoLink } from '../UI/TopBarUI';

const Logo: React.FC = () => (
  <LogoCon>
    <LogoLink to={Routes.home}>JMParsons</LogoLink>
  </LogoCon>
);

export default Logo;
