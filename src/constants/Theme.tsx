const Colors = {
  white: '#ffffff',
  black: '#000000',
  offWhite: '#eeeeee',
  midGray: '#434854',
  lightGray: '#999999',
  lightBlueGray: '#cdd2db',
  midLightBlueGray: '#bfc3ca',
  darkBlueGray: '#202329',
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
    icon: string;
  };
  form: {
    outline: string;
  };
}

const light: ThemexBase = {
  topBar: {
    logo: Colors.darkSteel,
    bg: Colors.offWhite,
    link: Colors.midGray,
    activeLink: Colors.darkBlueGray,
    activeBorder: Colors.electricBlue,
  },
  botBar: {
    bg: Colors.offWhite,
    link: Colors.darkBlueGray,
    activeLink: Colors.darkBlueGray,
  },
  themeBtn: {
    bg: Colors.white,
  },
  main: {
    bg: Colors.white,
    text: Colors.black,
    icon: Colors.black,
  },
  form: {
    outline: Colors.electricBlue,
  },
};

const dark: ThemexBase = {
  topBar: {
    logo: Colors.offWhite,
    bg: Colors.darkBlueGray,
    link: Colors.lightGray,
    activeLink: Colors.offWhite,
    activeBorder: Colors.electricBlue,
  },
  botBar: {
    bg: Colors.darkBlueGray,
    link: Colors.offWhite,
    activeLink: Colors.offWhite,
  },
  themeBtn: {
    bg: Colors.deepBlack,
  },
  main: {
    bg: Colors.darkSteel,
    text: Colors.offWhite,
    icon: Colors.white,
  },
  form: {
    outline: Colors.electricBlue,
  },
};

const Theme: ThemexProps = { light, dark };

export default Theme;
