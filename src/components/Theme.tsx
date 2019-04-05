const Colors = {
  white: '#ffffff',
  black: '#000000',
  offWhite: '#eeeeee',
  offBlack: '#202021',
  midGray: '#434854',
  lightCobaltGray: '#f3f4f7',
  lightGray: '#999999',
  deepLightGray: '#fcfcfd',
  lightBlueGray: '#cdd2db',
  midLightBlueGray: '#bfc3ca',
  darkBlueGray: '#202329',
  darkCobaltGray: '#171a1e',
  deepBlueGray: '#111315',
  deepBlack: '#0e0f10',
  electricBlue: '#17abf0',
  steel: '#989a9c',
  darkSteel: '#3e4044',
  statGreen: '#25d65b',
  statRed: '#d62525',
  statOrange: '#f55532',
  statYellow: '#fdfb41',
  transparent: 'transparent',
  red: '#ff0000',
};

export interface ThxProps {
  theme: ThemexBase;
}

interface ThemexProps {
  [key: string]: ThemexBase;
}

interface ThemexBase {
  name: string;
  topBar: {
    logo: string;
    bg: string;
    link: string;
    activeLink: string;
    activeBorder: string;
  };
  botBar: {
    bg: string;
    link: string;
    activeLink: string;
  };
  themeBtn: {
    bg: string;
  };
  main: {
    bg: string;
    blockBg: string;
    text: string;
    title: string;
    link: string;
    activeLink: string;
    icon: string;
    activeIcon: string;
    border: string;
  };
  form: {
    border: string;
    outline: string;
    errorText: string;
    errorBg: string;
    btnBg: string;
    btnText: string;
  };
}

const light: ThemexBase = {
  name: 'light',
  topBar: {
    logo: Colors.black,
    bg: Colors.lightCobaltGray,
    link: Colors.midGray,
    activeLink: Colors.black,
    activeBorder: Colors.electricBlue,
  },
  botBar: {
    bg: Colors.lightCobaltGray,
    link: Colors.midGray,
    activeLink: Colors.black,
  },
  themeBtn: {
    bg: Colors.white,
  },
  main: {
    bg: Colors.lightCobaltGray,
    blockBg: Colors.deepLightGray,
    text: Colors.offBlack,
    title: Colors.black,
    link: Colors.midGray,
    activeLink: Colors.black,
    icon: Colors.midGray,
    activeIcon: Colors.black,
    border: Colors.lightBlueGray,
  },
  form: {
    border: Colors.lightBlueGray,
    outline: Colors.electricBlue,
    errorText: Colors.white,
    errorBg: Colors.darkSteel,
    btnBg: Colors.electricBlue,
    btnText: Colors.white,
  },
};

const dark: ThemexBase = {
  name: 'dark',
  topBar: {
    logo: Colors.white,
    bg: Colors.darkCobaltGray,
    link: Colors.lightGray,
    activeLink: Colors.white,
    activeBorder: Colors.electricBlue,
  },
  botBar: {
    bg: Colors.darkCobaltGray,
    link: Colors.lightGray,
    activeLink: Colors.white,
  },
  themeBtn: {
    bg: Colors.deepBlack,
  },
  main: {
    bg: Colors.darkCobaltGray,
    blockBg: Colors.deepBlueGray,
    text: Colors.offWhite,
    title: Colors.white,
    link: Colors.electricBlue,
    activeLink: Colors.white,
    icon: Colors.lightGray,
    activeIcon: Colors.white,
    border: Colors.darkBlueGray,
  },
  form: {
    border: Colors.transparent,
    outline: Colors.electricBlue,
    errorText: Colors.white,
    errorBg: Colors.darkSteel,
    btnBg: Colors.electricBlue,
    btnText: Colors.white,
  },
};

const Theme: ThemexProps = { light, dark };

export default Theme;
