import React from 'react';
import Routes from '../../constants/Routes';
import { BotNavBar, BotLink } from '../UI/BotBarUI';

const BotNav: React.FC = () => (
  <BotNavBar>
    <BotLink to={Routes.tech}>Tech</BotLink>
    <BotLink to={Routes.sitemap}>Sitemap</BotLink>
  </BotNavBar>
);

export default BotNav;
