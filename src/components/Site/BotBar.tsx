import React, { useContext } from 'react';
import Routes from '../../constants/Routes';
import Images from '../../constants/Images';
import { BotBarCon, NavBar, BotBarGrid, NxLink, CopyRight } from '../UI/BotBarUI';
import { ThemerContext } from '../../utils/contexts';
import { ThemeBtn, ThemeControls } from '../UI/ThemeUI';
import Icon from '../Icon';

const BotBar: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemerContext);
  const themeIcon = theme === 'light' ? Images.moon : Images.sun;
  return (
    <BotBarCon>
      <BotBarGrid>
        <NavBar>
          <NxLink to={Routes.blog}>Blog</NxLink>
          <NxLink to={Routes.tech}>Tech</NxLink>
          <NxLink to={Routes.sitemap}>Sitemap</NxLink>
          <a href="http://github.com/jmparsons">
            <Icon icon="github" />
          </a>
        </NavBar>
        <ThemeControls>
          <ThemeBtn onClick={toggleTheme}>
            <img src={themeIcon} />
          </ThemeBtn>
        </ThemeControls>
        <CopyRight>&copy; 2013-2019 JMParsons</CopyRight>
      </BotBarGrid>
    </BotBarCon>
  );
};

export default BotBar;
