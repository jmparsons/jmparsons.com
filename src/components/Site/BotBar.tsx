import React from 'react';
import SocialNav from './SocialNav';
import BotNav from './BotNav';
import { BotBarCon, BotBarGrid, CopyRight } from '../UI/BotBarUI';

const BotBar: React.FC = () => (
  <BotBarCon>
    <BotBarGrid>
      <BotNav />
      <SocialNav />
      <CopyRight>&copy; 2013-2019 JMParsons</CopyRight>
    </BotBarGrid>
  </BotBarCon>
);

export default BotBar;
