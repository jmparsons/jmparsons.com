import styled from 'styled-components';
import { media } from '../../utils/mq';

export const ThemeNav = styled.div`
  display: grid;
  grid-auto-flow: row;
  position: absolute;
  top: 15px;
  right: 15px;
  height: 30px;
  ${media.tablet`
    position: relative;
    top: 15px;
    right: 0;
    margin-left: 10px;
  `};
`;

export const ThemeBtn = styled.button`
  border: none;
  outline: 0;
  margin: 0;
  padding: 0;
  height: 30px;
  width: 30px;
  background: transparent;
  cursor: pointer;
`;
