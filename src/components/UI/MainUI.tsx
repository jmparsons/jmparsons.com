import styled from 'styled-components';
import Colors from '../../constants/Colors';

const MainGrid = styled.div`
  display: grid;
  background: ${Colors.offWhite};
  grid-template-rows: 60px 1fr;
  min-height: 100%;
`;

const MainContent = styled.div``;

export { MainGrid, MainContent };
