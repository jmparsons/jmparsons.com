import React from 'react';
import LayoutsMain from '../Layouts/Main';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const FormSchema = Yup.object().shape({
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
    <Formik
      initialValues={{ name: '', email: '', subject: '', message: '' }}
      validationSchema={FormSchema}
      onSubmit={(values, actions) => {
        console.log(values);
        try {
          setTimeout(() => {
            console.log('fake call');
          }, 1000);
        } catch (error) {
          console.log('error', error);
          actions.setSubmitting(false);
        }
      }}
      render={({ errors, status, touched, isSubmitting }) => (
        <Form>
          <Field name="name" placeholder="Name" />
          <ErrorMessage name="name" />
          <Field type="email" name="email" placeholder="E-mail" />
          <ErrorMessage name="email" />
          <Field name="subject" placeholder="Subject" />
          <ErrorMessage name="subject" />
          <Field component="textarea" name="message" placeholder="Message" />
          <ErrorMessage name="message" />
          {status && status.msg && <div>{status.msg}</div>}
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    />
  </LayoutsMain>
);

export default Contact;
