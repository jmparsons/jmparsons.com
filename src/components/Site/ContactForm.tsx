import React from 'react';
import API from '@aws-amplify/api';
import { Formik } from 'formik';
import { Input, TextArea, FormGrid, SubmitBtn, ErrorMessage, Form } from '../UI/FormUI';
import { contactSchema } from '../../utils/schemas';

interface FormProps {
  setSent: (value: boolean) => void;
}

const ContactForm: React.FC<FormProps> = ({ setSent }) => (
  <FormGrid>
    <Formik
      initialValues={{ name: '', email: '', subject: '', message: '' }}
      validationSchema={contactSchema}
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
          <ErrorMessage name="name" component="span" />
          <Input type="email" name="email" placeholder="E-mail" />
          <ErrorMessage name="email" component="span" />
          <Input name="subject" placeholder="Subject" />
          <ErrorMessage name="subject" component="span" />
          <TextArea name="message" placeholder="Message" />
          <ErrorMessage name="message" component="span" />
          {status && status.msg && <div>{status.msg}</div>}
          <SubmitBtn disabled={isSubmitting}>Submit</SubmitBtn>
        </Form>
      )}
    />
  </FormGrid>
);

export default ContactForm;
