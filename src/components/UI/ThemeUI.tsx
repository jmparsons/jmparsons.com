import styled from 'styled-components';
import { ThxProps } from '../../constants/Theme';
import { media } from '../../utils/mq';

const ThemeNav = styled.div`
  display: grid;
  grid-auto-flow: row;
  position: absolute;
  top: 10px;
  right: 10px;
  ${media.tablet`
    position: relative;
    top: 0;
    right: 0;
    align-self: center;
  `};
`;

type ThemeBtnProp = ThxProps & { dark?: boolean };

const ThemeBtn = styled.button`
  border: none;
  outline: 0;
  margin: 0;
  padding: 0;
  height: 30px;
  width: 30px;
  background: ${({ theme }: ThemeBtnProp) => theme.themeBtn.bg};
`;

export { ThemeNav, ThemeBtn };
