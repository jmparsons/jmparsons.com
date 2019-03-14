import styled, { css, StyledComponent } from 'styled-components';
import { Field, Form, ErrorMessage as ErrorField } from 'formik';
import { media } from '../../utils/mq';
import { ThxProps } from '../../constants/Theme';

const FormGrid = styled.div`
  display: grid;
  ${media.tablet`
    justify-content: center;
  `};
`;

const inputStyles = css`
  margin: 0;
  padding: 5px;
  font-size: 16px;
  border: 1px solid #ccc;
  font-family: Arial, Helvetica, sans-serif;
  &:focus {
    border: 1px solid ${({ theme }: ThxProps) => theme.form.outline};
    outline: 0;
  }
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
  ${inputStyles};
`;

const TextArea = styled(Field).attrs({ component: 'textarea', rows: 5 })`
  ${inputStyles};
`;

const SubmitBtn = styled.button.attrs({ type: 'submit' })`
  border: 1px solid #000;
  width: 100px;
  height: 30px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  border: 1px solid #ccc;
`;

const ErrorMessage: any = styled(ErrorField)`
  color: #ffffff;
  background: red;
  padding: 5px;
`;

export { StyledForm as Form, FormGrid, Input, TextArea, SubmitBtn, ErrorMessage };
