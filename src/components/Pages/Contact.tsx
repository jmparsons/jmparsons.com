import React from 'react';
import LayoutsMain from '../Layouts/Main';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

const FormSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
});

const Contact: React.FC = () => (
  <LayoutsMain title="Contact · JMParsons">
    <h2>Contact</h2>
    <Formik
      initialValues={{ name: '', email: '' }}
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
          <Field type="text" name="name" />
          {errors.name && touched.name && <div>{errors.name}</div>}
          <Field type="email" name="email" />
          {errors.email && touched.email && <div>{errors.email}</div>}
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
