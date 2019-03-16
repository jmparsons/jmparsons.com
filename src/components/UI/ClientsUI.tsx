import styled from 'styled-components';

const ClientGrid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 15px;
`;

const ClientItem = styled.div`
  img {
    margin: 0;
    padding: 0;
    vertical-align: middle;
  }
`;

export { ClientGrid, ClientItem };
