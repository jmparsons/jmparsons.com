import styled from 'styled-components';
import { media } from '../../utils/mq';
import { FixedContent } from '../Content';

const IndexSplash = styled.div`
  display: grid;
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const IndexInfo = styled(FixedContent)`
  display: grid;
  align-content: center;
  justify-content: flex-end;
  h2,
  h3 {
    font-weight: 400;
  }
`;

const IndexIntro = styled.div`
  width: 320px;
`;

const IndexBgCon = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: grid;
`;

const IndexBgFixed = styled(FixedContent)`
  padding: 0;
  height: 100%;
`;

const IndexBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  div {
    height: 100%;
  }
`;

export { IndexSplash, IndexInfo, IndexIntro, IndexBgCon, IndexBgFixed, IndexBg };
