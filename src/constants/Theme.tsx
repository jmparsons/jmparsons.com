import Colors from './Colors';

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
  main: {
    bg: string;
  };
}

const light: ThemexBase = {
  topBar: {
    logo: Colors.darkSteel,
    bg: Colors.offWhite,
    link: Colors.darkBlueGray,
  },
  main: {
    bg: Colors.statOrange,
  },
};

const dark: ThemexBase = {
  topBar: {
    logo: Colors.offWhite,
    bg: Colors.darkBlueGray,
    link: Colors.offWhite,
  },
  main: {
    bg: Colors.statOrange,
  },
};

const Theme: ThemexProps = { light, dark };

export default Theme;
