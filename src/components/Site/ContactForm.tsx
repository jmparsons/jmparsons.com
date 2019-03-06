import React from 'react';
import * as Yup from 'yup';
import { Formik, ErrorMessage } from 'formik';
import API from '@aws-amplify/api';
import { Input, TextArea, FormGrid, SubmitBtn, Form } from '../UI/FormUI';

const schema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string()
    .email('email is invalid')
    .required(),
  subject: Yup.string().required(),
  message: Yup.string().required(),
});

interface FormProps {
  setSent: (value: boolean) => void;
}

const ContactForm: React.FC<FormProps> = ({ setSent }) => (
  <FormGrid>
    <Formik
      initialValues={{ name: '', email: '', subject: '', message: '' }}
      validationSchema={schema}
      onSubmit={async (values, actions) => {
        try {
          await API.post('JMPAPI', '/contact', { body: values });
          setSent(true);
        } catch (error) {
          actions.setSubmitting(false);
        }
      }}
      render={({ status, isSubmitting }) => (
        <Form>
          <Input name="name" placeholder="Name" />
          <ErrorMessage name="name" />
          <Input type="email" name="email" placeholder="E-mail" />
          <ErrorMessage name="email" />
          <Input name="subject" placeholder="Subject" />
          <ErrorMessage name="subject" />
          <TextArea name="message" placeholder="Message" />
          <ErrorMessage name="message" />
          {status && status.msg && <div>{status.msg}</div>}
          <SubmitBtn disabled={isSubmitting}>Submit</SubmitBtn>
        </Form>
      )}
    />
  </FormGrid>
);

export default ContactForm;
