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
  themeBtn: {
    bg: string;
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
    bg: Colors.white,
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
    bg: Colors.deepBlack,
  },
  main: {
    bg: Colors.darkSteel,
    text: Colors.offWhite,
  },
};

const Theme: ThemexProps = { light, dark };

export default Theme;
