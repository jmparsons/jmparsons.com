import styled from 'styled-components';
import { media } from '../../utils/mq';
import { FixedContent } from '../Content';

const IndexSplash = styled.div`
  display: grid;
  position: relative;
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

export { IndexSplash, IndexInfo, IndexIntro };
