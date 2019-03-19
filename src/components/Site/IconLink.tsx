import React from 'react';
import styled from 'styled-components';
import Icon, { IconProps } from './Icon';
import { media } from '../../utils/mq';

const StyledLink = styled.a`
  text-decoration: none;
  align-self: center;
  justify-self: center;
  padding: 0 20px;
  ${media.tablet`
    padding: 0 10px;
  `};
`;

type IconLinkProps = Partial<HTMLLinkElement> & IconProps;

const IconLink: React.FC<IconLinkProps> = ({ href, icon }) => (
  <StyledLink href={href} title={icon} target="_blank">
    <Icon icon={icon} />
  </StyledLink>
);

export default IconLink;
