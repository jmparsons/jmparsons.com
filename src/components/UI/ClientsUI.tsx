import styled from 'styled-components';
import { media } from '../../utils/mq';
import { ThxProps } from '../Theme';

const ClientGrid = styled.div`
  display: grid;
  width: 100%;
  grid-gap: 15px;
  grid-template-columns: 1fr 1fr;
  ${media.tablet`
    grid-template-columns: 1fr 1fr 1fr 1fr;
  `};
  ${media.desktop`
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  `};
`;

const ClientItem = styled.div`
  outline: 1px solid ${({ theme }: ThxProps) => theme.main.border};
  background: #fff;
`;

export { ClientGrid, ClientItem };
