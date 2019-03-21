import React from 'react';
import { FormItem, InputField, ErrorMessage, TextAreaField } from './UI/FormItemsUI';

interface FormItemProps {
  placeholder: string;
  name: string;
  type?: string;
}

const Input: React.FC<FormItemProps> = ({ placeholder, name, type = 'text' }) => (
  <FormItem>
    <InputField name={name} placeholder={placeholder} type={type} />
    <ErrorMessage name={name} component="span" />
  </FormItem>
);

const TextArea: React.FC<FormItemProps> = ({ placeholder, name }) => (
  <FormItem>
    <TextAreaField name={name} placeholder={placeholder} />
    <ErrorMessage name={name} component="span" />
  </FormItem>
);

export { Input, TextArea };
