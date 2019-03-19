import styled, { css } from 'styled-components';
import { Field, ErrorMessage as ErrorField } from 'formik';
import { ThxProps } from '../Theme';

const inputStyles = css`
  margin: 0;
  padding: 5px;
  font-size: 16px;
  border: 1px solid #ccc;
  font-family: Arial, Helvetica, sans-serif;
  border-radius: 0;
  appearance: none;
  box-sizing: border-box;
  &:focus {
    border: 1px solid ${({ theme }: ThxProps) => theme.form.outline};
    outline: 0;
  }
`;

const FormItem = styled.div`
  display: grid;
  position: relative;
`;

const InputField = styled(Field)`
  height: 40px;
  ${inputStyles};
`;

const TextAreaField = styled(Field).attrs({ component: 'textarea', rows: 7 })`
  ${inputStyles};
`;

const ErrorMessage: any = styled(ErrorField)`
  position: absolute;
  top: 5px;
  right: 5px;
  color: #ffffff;
  background: #333333;
  padding: 5px;
  opacity: 0.5;
  height: 20px;
`;

export { FormItem, InputField, TextAreaField, ErrorMessage };
