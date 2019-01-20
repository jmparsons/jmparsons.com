import Colors from './Colors';
import { ThemexProps } from '../interfaces';

const light = {
  topBar: {
    logo: Colors.darkSteel,
    bg: Colors.offWhite,
    link: Colors.darkBlueGray,
  },
};

const dark = {
  topBar: {
    logo: Colors.offWhite,
    bg: Colors.darkBlueGray,
    link: Colors.lightGray,
  },
};

const Theme: ThemexProps = { light, dark };

export default Theme;
