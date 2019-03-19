import React from 'react';
import axios from 'axios';
import { Formik, yupToFormErrors } from 'formik';
import { FormGrid, SubmitBtn, Form } from '../UI/FormUI';
import { contactSchema } from '../../utils/schemas';
import { api } from '../../utils';
import { Input, TextArea } from './FormItems';

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
          await axios.post(api('contact'), values);
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

export default ContactForm;
