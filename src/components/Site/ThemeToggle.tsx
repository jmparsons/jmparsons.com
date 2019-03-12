import React, { useContext } from 'react';
import Icon from './Icon';
import { ThemerContext } from '../../utils/contexts';
import { ThemeBtn, ThemeNav } from '../UI/ThemeUI';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemerContext);
  const themeIcon = theme === 'light' ? 'sun' : 'moon';
  return (
    <ThemeNav>
      <ThemeBtn onClick={toggleTheme}>
        <Icon icon={themeIcon} />
      </ThemeBtn>
    </ThemeNav>
  );
};

export default ThemeToggle;
