import styled from 'styled-components';
import Images from '../../constants/Images';

const AboutCon = styled.div`
  display: grid;
`;

const AboutGrid = styled.div`
  display: grid;
  align-self: center;
  justify-self: center;
  grid-template-columns: 1fr 1fr;
`;

const AboutImage = styled.div`
  background: url(${Images.aboutBg});
  background-repeat: no-repeat;
  background-size: contain;
  height: 500px;
`;

export { AboutCon, AboutGrid, AboutImage };
