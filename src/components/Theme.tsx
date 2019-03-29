const Colors = {
  white: '#ffffff',
  black: '#000000',
  offWhite: '#eeeeee',
  midGray: '#434854',
  lightGray: '#999999',
  lightBlueGray: '#cdd2db',
  midLightBlueGray: '#bfc3ca',
  darkBlueGray: '#202329',
  darkBlueGray2: '#171a1e',
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
  theme: ThemeBase;
}

interface ThemeBase {
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
    text: string;
    link: string;
    activeLink: string;
    icon: string;
    activeIcon: string;
  };
  form: {
    outline: string;
  };
  index: {
    bg: string;
  };
}

const Theme: ThemeBase = {
  topBar: {
    logo: Colors.offWhite,
    bg: Colors.darkBlueGray,
    link: Colors.lightGray,
    activeLink: Colors.white,
    activeBorder: Colors.electricBlue,
  },
  botBar: {
    bg: Colors.darkBlueGray,
    link: Colors.lightGray,
    activeLink: Colors.white,
  },
  themeBtn: {
    bg: Colors.deepBlack,
  },
  main: {
    bg: Colors.darkBlueGray2,
    text: Colors.offWhite,
    link: Colors.lightGray,
    activeLink: Colors.white,
    icon: Colors.lightGray,
    activeIcon: Colors.white,
  },
  form: {
    outline: Colors.electricBlue,
  },
  index: {
    bg: Colors.darkBlueGray2,
  },
};

export default Theme;
