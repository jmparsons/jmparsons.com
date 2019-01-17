import React from 'react';
import styled from 'styled-components';
import { Icon, IconProps } from './Icon';
import { media } from '../utils/mq';

const StyledLink = styled.a`
  align-self: center;
  justify-self: center;
  padding: 0 20px;
  ${media.tablet`
    padding: 0 10px;
  `};
`;

type IconLinkProps = Partial<HTMLLinkElement> & IconProps;

export const IconLink = ({ href, icon }: IconLinkProps) => (
  <StyledLink href={href} title={icon} target="_blank">
    <Icon icon={icon} />
  </StyledLink>
);
