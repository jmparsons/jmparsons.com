import React from 'react';
import styled from 'styled-components';
import Icon, { IconProps } from './Icon';
import { ThxProps } from '../../constants/Theme';
import { media } from '../../utils/mq';

const StyledLink = styled.a`
  text-decoration: none;
  align-self: center;
  justify-self: center;
  color: ${({ theme }: ThxProps) => theme.botBar.link};
  ${media.tablet`
    padding: 0 20px;
  `};
`;

type IconLinkProps = Partial<HTMLAnchorElement> & IconProps;

const IconLink: React.FC<IconLinkProps> = ({ href, icon }) => (
  <StyledLink href={href}>
    <Icon icon={icon} />
  </StyledLink>
);

export default IconLink;
