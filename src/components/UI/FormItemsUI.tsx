import styled, { css } from 'styled-components';
import { Field, ErrorMessage as ErrorField } from 'formik';
import { ThxProps } from '../Theme';

export const inputStyles = css`
  margin: 0;
  padding: 10px;
  font-size: 16px;
  border: 1px solid ${({ theme }: ThxProps) => theme.form.border};
  font-family: Arial, Helvetica, sans-serif;
  border-radius: 0;
  appearance: none;
  box-sizing: border-box;
  &:focus {
    border: 1px solid ${({ theme }: ThxProps) => theme.form.outline};
    outline: 0;
  }
`;

export const FormItem = styled.div`
  display: grid;
  position: relative;
`;

export const InputField = styled(Field)`
  ${inputStyles};
`;

export const TextAreaField = styled(Field).attrs({ component: 'textarea', rows: 6 })`
  line-height: 30px;
  ${inputStyles};
`;

export const ErrorMessage: any = styled(ErrorField)`
  position: absolute;
  top: 5px;
  right: 5px;
  color: ${({ theme }: ThxProps) => theme.form.errorText};
  background: ${({ theme }: ThxProps) => theme.form.errorBg};
  padding: 5px;
  opacity: 0.5;
  height: 20px;
`;
