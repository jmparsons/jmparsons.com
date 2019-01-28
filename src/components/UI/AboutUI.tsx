import styled from 'styled-components';
import Images from '../../constants/Images';

const AboutCon = styled.div`
  display: grid;
  height: 100%;
`;

const AboutGrid = styled.div`
  display: grid;
  align-self: center;
  justify-self: center;
  width: 1200px;
  grid-template-columns: 1fr 1fr;
  height: 100%;
`;

const AboutImage = styled.div`
  background: url(${Images.aboutBg});
  background-repeat: no-repeat;
  background-size: contain;
  height: 500px;
`;

export { AboutCon, AboutGrid, AboutImage };
