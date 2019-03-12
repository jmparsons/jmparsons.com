import React from 'react';
import { BotBarCon, BotBarGrid, CopyRight } from '../UI/BotBarUI';
import SocialNav from './SocialNav';
import BotNav from './BotNav';

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
