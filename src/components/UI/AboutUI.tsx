import styled from 'styled-components';

const aboutBg = require('../../assets/images/train.gif');

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
  background: url(${aboutBg});
  background-repeat: no-repeat;
  background-size: contain;
  height: 500px;
`;

export { AboutCon, AboutGrid, AboutImage };
