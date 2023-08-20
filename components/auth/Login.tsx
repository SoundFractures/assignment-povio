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

const AuthLoginModal = () => {
  const tAuth = useTranslations('auth')
  const tProfile = useTranslations('profile')

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
      email: 'krnekdo@gmail.com',
      password: 'admin123',
    },
    validationSchema: loginSchema(useTranslations('validation')),
    onSubmit: async (values) => {
      setLoading(true)
      // TODO | move to service and register
      await signIn('credentials', {
        email: values.email,
        password: values.password,
        redirect: false,
      })
        .then((res) => {
          console.log(res)
          handleSetLoginModalClose()
        })
        .catch((err) => {
          console.log('err')
          console.log(err)
        })

      setLoading(false)
    },
  })

  return (
    <Modal
      isOpen={isLoginModalOpen}
      handleClose={handleSetLoginModalClose}
      title={tAuth('login.title')}
    >
      <form onSubmit={formik.handleSubmit}>
        <TextField
          value={formik.values.email}
          label={tProfile('email')}
          id="email"
          error={!!formik.errors.email && formik.touched.email}
          errorText={formik.errors.email}
          onChange={(value) => formik.setFieldValue('email', value)}
          onBlur={formik.handleBlur}
        />

        <TextField
          value={formik.values.password}
          label={tProfile('password')}
          id="password"
          type="password"
          error={!!formik.errors.password && formik.touched.password}
          errorText={formik.errors.password}
          onChange={(value) => formik.setFieldValue('password', value)}
          onBlur={formik.handleBlur}
        />
        <Button
          text={tAuth('login.submit')}
          submit
          loading={loading}
          className="w-100 mt-5"
        />
      </form>
      <AuthCancel onClick={handleSetLoginModalClose}>
        {tAuth('login.cancel')}
      </AuthCancel>
    </Modal>
  )
}

export default AuthLoginModal
