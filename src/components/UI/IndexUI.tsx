import styled from 'styled-components';
import { media } from '../../utils/mq';
import { FixedContent } from '../Content';
import { ThxProps } from '../Theme';

const IndexSplash = styled.div`
  display: grid;
  position: relative;
  background: ${({ theme }: ThxProps) => theme.index.bg};
`;

const IndexImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  * {
    width: 100%;
    height: 300px;
    ${media.tablet`
      height: 400px;
    `};
    ${media.desktop`
      height: 500px;
    `};
    object-fit: cover;
    object-position: center center;
  }
`;

const IndexInfo = styled(FixedContent)`
  height: 300px;
  h2,
  h3 {
    font-weight: 400;
  }
  ${media.tablet`
    height: 400px;
  `};
  ${media.desktop`
    height: 500px;
  `};
`;

const IndexIntro = styled.div`
  position: absolute;
  right: 20px;
  bottom: 20px;
  ${media.tablet`
    right: 50px;
    bottom: 50px;
  `};
  width: 320px;
`;

export { IndexSplash, IndexImage, IndexInfo, IndexIntro };
