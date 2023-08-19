import * as yup from 'yup'

export const loginSchema = (t: (value: string) => string) =>
  yup.object().shape({
    email: yup.string().email(t('email')).required(t('required')),
    password: yup.string().min(8, t('password')).required(t('required')),
  })
