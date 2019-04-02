import styled from 'styled-components';
import { ThxProps } from '../Theme';

type SvcColProps = ThxProps & {
  col?: number;
};

const SvcStyles = styled.div`
  display: grid;
  grid-gap: 15px;
  hr {
    border-color: #434854;
  }
  ul {
    margin: 0;
    padding: 5px 0 0 0;
  }
  li {
    margin: 0;
    padding: 0;
    line-height: 36px;
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
  grid-template-columns: ${({ col = 3 }: SvcColProps) => '1fr '.repeat(col)};
`;

const SvcBlock = styled.div`
  border: 1px solid #434854;
  padding: 20px;
  h2,
  h3 {
    font-weight: 400;
    margin: 0;
    padding: 0 0 15px 0;
    border-bottom: 1px solid #434854;
  }
`;

const SvcCol = styled.div`
  ul {
    column-count: ${({ col = 3 }: SvcColProps) => col};
  }
`;

export { SvcStyles, SvcGrid, SvcBlock, SvcCol };
