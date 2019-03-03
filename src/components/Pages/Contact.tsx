import React from 'react';
import LayoutsMain from '../Layouts/Main';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Input, TextArea, FormGrid, SubmitBtn, Form } from '../UI/FormUI';
import API from '@aws-amplify/api';

const schema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string()
    .email('Invalid email')
    .required(),
  subject: Yup.string().required(),
  message: Yup.string().required(),
});

const Contact: React.FC = () => (
  <LayoutsMain title="Contact · JMParsons">
    <h2>Contact</h2>
    <FormGrid>
      <Formik
        initialValues={{ name: '', email: '', subject: '', message: '' }}
        validationSchema={schema}
        onSubmit={async (values, actions) => {
          console.log(values);
          try {
            const response = await API.post('JMPAPI', '/prod/email', { body: values });
            console.log('response', response);
          } catch (error) {
            console.log('error', error);
            actions.setSubmitting(false);
          }
        }}
        render={({ errors, status, touched, isSubmitting }) => (
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
  </LayoutsMain>
);

export default Contact;
