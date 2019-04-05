import styled from 'styled-components';
import { media } from '../../utils/mq';
import { FixedContent } from '../Content';
import { ThxProps } from '../Theme';

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
  h2,
  h3 {
    font-weight: 400;
  }
  & > div:nth-child(1) {
    order: -1;
  }
  ${media.tablet`
    grid-template-columns: 1fr 1fr;
    & > div:nth-child(1) {
      order: 1;
    }
  `};
`;

const IndexList = styled.div`
  display: grid;
  grid-gap: 0px;
  ${media.tablet`
    grid-gap: 20px;
  `};
`;

const IndexItem = styled.div`
  display: grid;
  font-family: 'Open Sans';
  font-weight: 400;
  background: ${({
    theme: {
      main: { bg, blockBg },
    },
  }: ThxProps) => `linear-gradient(90deg, ${bg}, ${blockBg}, ${bg})`};
  color: ${({ theme }: ThxProps) => theme.main.text};
  box-sizing: border-box;
  font-size: 18px;
  padding: 5px;
  justify-content: center;
  align-content: center;
  ${media.tablet`
    font-size: 24px;
    padding: 10px;
    background: ${({
      theme: {
        main: { bg, blockBg },
      },
    }: ThxProps) => `linear-gradient(90deg, ${bg}, ${blockBg})`};
    justify-content: flex-end;
    align-content: flex-end;
  `};
`;

const IndexIntro = styled.div`
  justify-self: center;
  align-self: center;
  width: 100%;
  ${media.tablet`
    justify-self: flex-end;
    width: 320px;
  `};
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

export {
  IndexSplash,
  IndexInfo,
  IndexIntro,
  IndexBgCon,
  IndexBgFixed,
  IndexBg,
  IndexList,
  IndexItem,
};
