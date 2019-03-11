import * as Yup from 'yup';

const contactSchema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string()
    .email('email is invalid')
    .required(),
  subject: Yup.string().required(),
  message: Yup.string().required(),
});

export { contactSchema };
