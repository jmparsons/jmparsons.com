import React, { useContext } from 'react';
import { Icon, icons } from './Icon';
import { ThemerContext, ThemerContextProps } from '../utils/contexts';
import { ThemeBtn, ThemeNav } from './UI/ThemeUI';
import { getAltTheme } from '../utils/themer';

type ThemeIconProps = { [key in ThemerContextProps['theme']]: keyof typeof icons };

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemerContext);
  const themeIcons: ThemeIconProps = { light: 'sun', dark: 'moon' };
  const altTheme = getAltTheme(theme);
  return (
    <ThemeNav>
      <ThemeBtn onClick={toggleTheme} title={`${altTheme} mode`}>
        <Icon icon={themeIcons[altTheme]} />
      </ThemeBtn>
    </ThemeNav>
  );
};
