import styled from 'styled-components';
import { media } from '../../utils/mq';

const ThemeNav = styled.div`
  display: grid;
  grid-auto-flow: row;
  position: absolute;
  top: 15px;
  right: 15px;
  ${media.tablet`
    position: relative;
    top: 0;
    right: 0;
    align-self: center;
    padding: 0 0 0 10px;
  `};
`;

const ThemeBtn = styled.button`
  border: none;
  outline: 0;
  margin: 0;
  padding: 0;
  height: 30px;
  width: 30px;
  background: transparent;
`;

export { ThemeNav, ThemeBtn };
