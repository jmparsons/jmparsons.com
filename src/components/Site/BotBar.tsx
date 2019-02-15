import React, { useContext } from 'react';
import Routes from '../../constants/Routes';
import { BotBarCon, NavBar, BotBarGrid, NxLink, HomeLink } from '../UI/BotBarUI';
import { ThemerContext } from '../../utils/contexts';
import Images from '../../constants/Images';
import { ThemeBtn, ThemeControls } from '../UI/ThemeUI';

const BotBar: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemerContext);
  const themeIcon = theme === 'light' ? Images.moon : Images.sun;
  return (
    <BotBarCon>
      <BotBarGrid>
        <NavBar>
          <HomeLink to={Routes.blog}>Blog</HomeLink>
          <NxLink to={Routes.tech}>Tech</NxLink>
          <NxLink to={Routes.sitemap}>Sitemap</NxLink>
        </NavBar>
        <ThemeControls>
          <ThemeBtn onClick={toggleTheme}>
            <img src={themeIcon} />
          </ThemeBtn>
        </ThemeControls>
      </BotBarGrid>
    </BotBarCon>
  );
};

export default BotBar;
