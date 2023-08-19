'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { signIn } from 'next-auth/react'
import { useFormik } from 'formik'
import useStore from '~/services/useStore'
import Modal from '~/components/shared/Modal'
import TextField from '~/components/base/TextField'
import Button from '~/components/base/Button'
import AuthCancel from '~/components/auth/AuthCancel'
import { loginSchema } from '~/utils/validation'

const AuthLogin = () => {
  const t = useTranslations('auth')

  // Modal config
  const { useStoreSelector, actions, useStoreDispatch } = useStore()

  // TODO | MobileNav composable
  const dispatch = useStoreDispatch()
  const isLoginModalOpen = useStoreSelector(
    (state) => state.layout.isLoginModalOpen,
  )

  const handleSetLoginModalClose = () => {
    dispatch(actions.layout.setLoginModalOpen(false))
  }

  // Form state and validation
  const [loading, setLoading] = useState(false)
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema(useTranslations('validation')),
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2))
    },
  })

  // Login
  // const handleLogin = async (e) => {
  // e.preventDefault()
  // setLoading(true)
  // await signIn('credentials', { email, password, redirect: false })
  //   .then((res) => {
  //     console.log(res)
  //   })
  //   .catch((err) => {
  //     console.log(err)
  //   })
  //   .finally(() => {
  //     setLoading(false)
  //   })
  // await fetch('https://flowrspot-api.herokuapp.com/api/v1/users/login', {
  //   method: 'POST',
  //   body: JSON.stringify({ email, password }),
  // }).finally(() => {
  //   setLoading(false)
  // })
  // }

  return (
    <Modal
      isOpen={isLoginModalOpen}
      handleClose={handleSetLoginModalClose}
      title={t('login.title')}
    >
      <form onSubmit={formik.handleSubmit}>
        <TextField
          value={formik.values.email}
          onChange={(value) => formik.setFieldValue('email', value)}
          onBlur={formik.handleBlur}
          label={t('form.emailAddress')}
          id="email"
          error={formik.errors.email}
        />

        <TextField
          value={formik.values.password}
          onChange={(value) => formik.setFieldValue('password', value)}
          onBlur={formik.handleBlur}
          label={t('form.password')}
          id="password"
          type="password"
          error={formik.errors.password}
        />
        <Button
          text={t('login.submit')}
          submit
          loading={loading}
          className="w-100 mt-5"
        />
      </form>
      <AuthCancel onClick={handleSetLoginModalClose}>
        {t('login.cancel')}
      </AuthCancel>
    </Modal>
  )
}

export default AuthLogin
