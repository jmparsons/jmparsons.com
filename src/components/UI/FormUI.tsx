import styled from 'styled-components';
import { Field, Form } from 'formik';
import { media, Breakpoints } from '../../utils/mq';

const FormGrid = styled.div`
  display: grid;
  ${media.tablet`
    justify-content: center;
  `};
`;

const StyledForm = styled(Form)`
  display: grid;
  grid-auto-flow: row;
  grid-gap: 5px;
  width: 100%;
  ${media.tablet`
    width: 500px;
  `};
`;

const Input = styled(Field)`
  height: 30px;
  margin: 0;
  padding: 5px;
  font-size: 16px;
`;

const TextArea = styled(Field).attrs({ component: 'textarea', rows: 5 })`
  font-size: 16px;
  margin: 0;
  padding: 5px;
  font-family: Arial, Helvetica, sans-serif;
`;

const SubmitBtn = styled.button.attrs({ type: 'submit' })`
  border: 1px solid #000;
  width: 100px;
  height: 30px;
`;

export { StyledForm as Form, FormGrid, Input, TextArea, SubmitBtn };
