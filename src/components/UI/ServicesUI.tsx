import styled from 'styled-components';
import { ThxProps } from '../Theme';
import { media } from '../../utils/mq';

type SvcColProps = ThxProps & {
  col?: number;
};

const SvcStyles = styled.div`
  display: grid;
  grid-gap: 15px;
  ul {
    margin: 0;
    padding: 5px 0 0 0;
  }
  li {
    margin: 0;
    padding: 0;
    line-height: 30px;
  }
  h1,
  h2,
  h3 {
    margin: 0;
  }
`;

const SvcGrid = styled.div`
  display: grid;
  width: 100%;
  grid-gap: 15px;
  ${media.tablet`
    grid-template-columns: ${({ col = 3 }: SvcColProps) => '1fr '.repeat(col)};
  `};
`;

const SvcBlock = styled.div`
  background: ${({ theme }: SvcColProps) => theme.main.blockBg};
  padding: 20px;
  h2,
  h3 {
    font-weight: 400;
    margin: 0;
    padding: 0 0 15px 0;
  }
  ${media.tablet`
    grid-column: ${({ col = 0 }: SvcColProps) => (col > 0 ? `${3 - col} / 3` : col)};
    ul {
      column-count: ${({ col = 0 }: SvcColProps) => col};
    }
  `};
`;

const SvcCol = styled.div`
  ${media.tablet`
    ul {
      column-count: ${({ col = 3 }: SvcColProps) => col};
    }
  `};
`;

export { SvcStyles, SvcGrid, SvcBlock, SvcCol };
