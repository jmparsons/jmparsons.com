import Colors from './Colors';
import { useLocalStorage } from '../utils/hooks';

export interface ThxProps {
  theme: ThemexBase;
}

interface ThemexProps {
  [key: string]: ThemexBase;
}

interface ThemexBase {
  topBar: {
    logo: string;
    bg: string;
    link: string;
  };
  themeBtn: {
    light: {
      bg: string;
      text: string;
    };
    dark: {
      bg: string;
      text: string;
    };
  };
  main: {
    bg: string;
    text: string;
  };
}

const light: ThemexBase = {
  topBar: {
    logo: Colors.darkSteel,
    bg: Colors.offWhite,
    link: Colors.darkBlueGray,
  },
  themeBtn: {
    light: {
      bg: Colors.white,
      text: Colors.black,
    },
    dark: {
      bg: Colors.darkBlueGray,
      text: Colors.white,
    },
  },
  main: {
    bg: Colors.white,
    text: Colors.black,
  },
};

const dark: ThemexBase = {
  topBar: {
    logo: Colors.offWhite,
    bg: Colors.darkBlueGray,
    link: Colors.offWhite,
  },
  themeBtn: {
    light: {
      bg: Colors.white,
      text: Colors.black,
    },
    dark: {
      bg: Colors.darkBlueGray,
      text: Colors.white,
    },
  },
  main: {
    bg: Colors.darkSteel,
    text: Colors.offWhite,
  },
};

const Theme: ThemexProps = { light, dark };

export const Themer = () => {
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  return {
    getTheme: () => theme,
    setTheme,
  };
};

export default Theme;
