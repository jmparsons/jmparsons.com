import Colors from './Colors';
import { ThemexProps } from '../interfaces';

const Theme: ThemexProps = {
  light: {
    topBar: {
      logo: Colors.darkSteel,
      bg: Colors.offWhite,
      link: Colors.darkBlueGray,
    },
  },
  dark: {
    topBar: {
      logo: Colors.offWhite,
      bg: Colors.darkBlueGray,
      link: Colors.lightGray,
    },
  },
};

export default Theme;
