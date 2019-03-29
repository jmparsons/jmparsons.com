import React from 'react';
import IconLink from './IconLink';
import { SocialBar } from './UI/BotBarUI';

const SocialNav: React.FC = () => (
  <SocialBar>
    <IconLink href="http://linkedin.com/in/jmparsons" icon="linkedin" />
    <IconLink href="http://github.com/jmparsons" icon="github" />
    <IconLink href="http://stackoverflow.com/users/535810/jmparsons" icon="stackoverflow" />
    <IconLink href="http://twitter.com/jmparsons" icon="twitter" />
  </SocialBar>
);

export default SocialNav;
