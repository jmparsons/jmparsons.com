import styled from 'styled-components';
import Colors from '../../constants/Colors';

const MainGrid = styled.div`
  display: grid;
  grid-auto-rows: auto;
  background: ${Colors.offWhite};
  height: 100%;
`;

const MainContent = styled.div``;

export { MainGrid, MainContent };
