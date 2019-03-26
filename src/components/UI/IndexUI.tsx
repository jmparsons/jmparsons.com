import styled from 'styled-components';
import { media } from '../../utils/mq';

const IndexSplash = styled.div`
  position: relative;
  height: 300px;
  ${media.tablet`
    height: 500px;
  `};
  ${media.tablet`
    height: 600px;
  `};
`;

const IndexImage = styled.div`
  picture * {
    width: 100%;
    height: 300px;
    ${media.tablet`
      height: 500px;
    `};
    ${media.tablet`
      height: 600px;
    `};
    object-fit: cover;
    object-position: center center;
  }
`;

const IndexInfo = styled.div`
  position: absolute;
  bottom: 50px;
  right: 100px;
`;

export { IndexSplash, IndexImage, IndexInfo };
