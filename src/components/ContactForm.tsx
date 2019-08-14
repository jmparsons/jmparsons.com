import React from 'react';
import axios from 'axios';
import { Formik, yupToFormErrors } from 'formik';
import { FormGrid, SubmitBtn, StyledForm as Form } from './UI/FormUI';
import { contactSchema } from '../utils/schemas';
import { Input, TextArea } from './FormItems';

interface FormProps {
  setSent: (value: boolean) => void;
}

export const ContactForm = ({ setSent }: FormProps) => (
  <FormGrid>
    <Formik
      initialValues={{ name: '', email: '', subject: '', message: '' }}
      validationSchema={contactSchema}
      onSubmit={async (values, actions) => {
        try {
          await axios.post('//api.jmparsons.com/contact', values);
          setSent(true);
        } catch (error) {
          actions.setErrors(yupToFormErrors(error.response.data));
          actions.setSubmitting(false);
        }
      }}
      render={({ isSubmitting }) => (
        <Form>
          <Input placeholder="Name" name="name" />
          <Input placeholder="E-mail" type="email" name="email" />
          <Input placeholder="Subject" name="subject" />
          <TextArea placeholder="Message" name="message" />
          <SubmitBtn disabled={isSubmitting}>Submit</SubmitBtn>
        </Form>
      )}
    />
  </FormGrid>
);
