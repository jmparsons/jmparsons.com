import React from 'react';
import styled from 'styled-components';
import { media, Breakpoints } from '../utils/mq';

const FixedContent = styled.div`
  position: relative;
  padding: 0 20px 20px 20px;
  box-sizing: border-box;
  ${media.desktop`
    width: ${Breakpoints.desktop / 16}em;
    justify-self: center;
  `};
  ${media.desktopXL`
    width: ${Breakpoints.desktopXL / 16}em;
    justify-self: center;
  `};
`;

const FullContent = styled.div`
  padding: 0 20px 20px 20px;
  box-sizing: border-box;
`;

interface ContentProps {
  type?: 'fixed' | 'full';
  children: React.ReactNode;
}

const Content: React.FC<ContentProps> = ({ type = 'fixed', children }) => {
  const Con = type === 'fixed' ? FixedContent : FullContent;
  return <Con>{children}</Con>;
};

export default Content;
export { FixedContent, FullContent };
