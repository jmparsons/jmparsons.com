import styled from 'styled-components';
import { media } from '../../utils/mq';

const AboutCon = styled.div`
  display: grid;
`;

const AboutContent = styled.div`
  padding-right: 30px;
`;

const AboutGrid = styled.div`
  display: grid;
  align-self: center;
  justify-self: center;
  ${media.tablet`
    grid-template-columns: 70% 30%;
  `};
`;

const AboutImage = styled.div`
  display: grid;
  padding-top: 30px;
  justify-content: center;
  img {
    max-width: 100%;
    height: auto;
  }
`;

export { AboutCon, AboutContent, AboutGrid, AboutImage };
