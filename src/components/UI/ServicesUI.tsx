import styled from 'styled-components';
import { ThxProps } from '../Theme';

type SvcColProps = ThxProps & {
  col?: number;
};

const SvcStyles = styled.div`
  hr {
    border-color: #434854;
  }
  ul {
    margin: 0;
    padding: 0;
  }
`;

const SvcGrid = styled.div`
  display: grid;
  width: 100%;
  grid-gap: 15px;
  grid-template-columns: ${({ col = 3 }: SvcColProps) => '1fr '.repeat(col)};
  margin-bottom: 15px;
`;

const SvcBlock = styled.div`
  border: 1px solid #434854;
  padding: 20px;
  h2,
  h3 {
    font-weight: 400;
    margin: 0;
  }
`;

const SvcCol = styled.div`
  column-count: ${({ col = 3 }: SvcColProps) => col};
`;

export { SvcStyles, SvcGrid, SvcBlock, SvcCol };
