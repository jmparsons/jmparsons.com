import React from 'react';
import { SocialNav } from './SocialNav';
import { BotBarCon, BotBarGrid, CopyRight } from './UI/BotBarUI';

export const BotBar = () => (
  <BotBarCon>
    <BotBarGrid>
      <SocialNav />
      <CopyRight>&copy; 2013-2020 JMParsons</CopyRight>
    </BotBarGrid>
  </BotBarCon>
);
