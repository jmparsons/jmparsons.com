import React from 'react';
import { FormItem, InputField, ErrorMessage, TextAreaField } from './UI/FormItemsUI';

interface FormItemProps {
  placeholder: string;
  name: string;
  type?: string;
}

export const Input = ({ placeholder, name, type = 'text' }: FormItemProps) => (
  <FormItem>
    <InputField name={name} placeholder={placeholder} type={type} />
    <ErrorMessage name={name} component="span" />
  </FormItem>
);

export const TextArea = ({ placeholder, name }: FormItemProps) => (
  <FormItem>
    <TextAreaField name={name} placeholder={placeholder} />
    <ErrorMessage name={name} component="span" />
  </FormItem>
);
