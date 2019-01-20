import Colors from './Colors';
import { ThemexProps } from '../interfaces';

const Theme: ThemexProps = {
  light: {
    topBar: {
      bg: Colors.offWhite,
      link: Colors.lightGray,
    },
  },
  dark: {
    topBar: {
      bg: Colors.darkBlueGray,
      link: Colors.darkBlueGray,
    },
  },
};

export default Theme;
