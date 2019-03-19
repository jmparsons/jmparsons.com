import styled from 'styled-components';
import { Form } from 'formik';
import { media } from '../../utils/mq';
import { ThxProps } from '../Theme';

const FormGrid = styled.div`
  display: grid;
  ${media.tablet`
    justify-content: center;
  `};
`;

const StyledForm = styled(Form)`
  display: grid;
  grid-auto-flow: row;
  grid-gap: 10px;
  width: 100%;
  ${media.tablet`
    width: 500px;
  `};
`;

const SubmitBtn = styled.button.attrs({ type: 'submit' })`
  width: 120px;
  height: 42px;
  line-height: 42px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  border: 0;
  color: #ffffff;
  background: ${({ theme }: ThxProps) => theme.form.outline};
`;

export { StyledForm as Form, FormGrid, SubmitBtn };
