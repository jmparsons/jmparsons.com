import React from 'react';
import styled from 'styled-components';
import { media, Breakpoints } from '../utils/mq';

export const FixedContent = styled.div`
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

export const FullContent = styled.div`
  padding: 0 20px 20px 20px;
  box-sizing: border-box;
`;

interface ContentProps {
  type?: 'fixed' | 'full';
  children: React.ReactNode;
}

export const Content: React.FC<ContentProps> = ({
  type = 'fixed',
  children,
}) => {
  const Con = type === 'fixed' ? FixedContent : FullContent;
  return <Con>{children}</Con>;
};
