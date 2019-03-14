import styled, { css } from 'styled-components';
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
  border-radius: 0;
  appearance: none;
  &:focus {
    border: 1px solid ${({ theme }: ThxProps) => theme.form.outline};
    outline: 0;
  }
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

const Input = styled(Field)`
  height: 30px;
  ${inputStyles};
`;

const TextArea = styled(Field).attrs({ component: 'textarea', rows: 5 })`
  ${inputStyles};
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

const ErrorMessage: any = styled(ErrorField)`
  color: #ffffff;
  background: #333333;
  padding: 5px;
`;

export { StyledForm as Form, FormGrid, Input, TextArea, SubmitBtn, ErrorMessage };
