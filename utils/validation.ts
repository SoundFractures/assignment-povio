import * as yup from 'yup'

export const loginSchema = (t: (value: string) => string) =>
  yup.object().shape({
    email: yup.string().email(t('email')).required(t('required')),
    password: yup.string().min(8, t('password')).required(t('required')),
  })

export const registerSchema = (t: (value: string) => string) =>
  yup.object().shape({
    firstName: yup.string().required(t('required')),
    lastName: yup.string().required(t('required')),
    email: yup.string().email(t('email')).required(t('required')),
    dateOfBirth: yup
      .string()
      .matches(/^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.\d{4}$/, t('date'))
      .required(t('required')),
    password: yup.string().min(8, t('password')).required(t('required')),
  })
