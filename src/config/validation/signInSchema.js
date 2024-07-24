import * as Yup from 'yup';

export const signInSchema = Yup.object().shape({
  email: Yup.string()
    .required('Email is required')
    .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, 'Enter a valid Email*'),
  password: Yup.string()
    .required('Password is required')
    .min(7, 'Must be 7 or more')
});
