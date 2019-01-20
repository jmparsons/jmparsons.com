export interface ThemerProps {
  theme: string;
  updateTheme: () => void;
}

interface ThemexBase {
  topBar: {
    bg: string;
    link: string;
  };
}

export interface ThxProps {
  theme: ThemexBase;
}

export interface ThemexProps {
  [key: string]: ThemexBase;
}
