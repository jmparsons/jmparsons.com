import styled from 'styled-components';
import { media } from '../../utils/mq';

export const AboutCon = styled.div`
  display: grid;
`;

export const AboutContent = styled.div`
  ${media.tablet`
    padding-right: 30px;
  `};
`;

export const AboutGrid = styled.div`
  display: grid;
  align-self: center;
  justify-self: center;
  ${media.tablet`
    grid-template-columns: 70% 30%;
  `};
`;

export const AboutImage = styled.div`
  display: grid;
  padding-top: 30px;
  justify-content: center;
  img {
    max-width: 100%;
    height: auto;
  }
`;
