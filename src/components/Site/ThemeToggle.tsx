import React, { useContext } from 'react';
import Icon, { icons } from './Icon';
import { ThemerContext, ThemerContextProps } from '../../utils/contexts';
import { ThemeBtn, ThemeNav } from '../UI/ThemeUI';

type ThemeIconProps = { [key in ThemerContextProps['theme']]: keyof typeof icons };

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemerContext);
  const themeIcons: ThemeIconProps = { light: 'sun', dark: 'moon' };
  return (
    <ThemeNav>
      <ThemeBtn onClick={toggleTheme}>
        <Icon icon={themeIcons[theme]} />
      </ThemeBtn>
    </ThemeNav>
  );
};

export default ThemeToggle;
