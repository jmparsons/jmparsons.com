import styled from 'styled-components';
import { ThxProps } from '../Theme';

export const Main = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  width: 100%;
  height: 100%;
  background: ${({ theme }: ThxProps) => theme.main.bg};
  color: ${({ theme }: ThxProps) => theme.main.text};
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${({ theme }: ThxProps) => theme.main.title};
  }
`;

export const MainGrid = styled.main`
  display: grid;
  width: 100%;
  height: 100%;
`;
