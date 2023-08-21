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
import ErrorText from '~/components/base/ErrorText'
import { loginSchema } from '~/utils/validation'

const AuthLoginModal = () => {
  const tAuth = useTranslations('auth')
  const tProfile = useTranslations('profile')
  const tActions = useTranslations('actions')

  // Modal config
  const { useStoreSelector, actions, useStoreDispatch } = useStore()

  const dispatch = useStoreDispatch()
  const isLoginModalOpen = useStoreSelector(
    (state) => state.layout.isLoginModalOpen,
  )

  const handleSetLoginModalClose = () => {
    dispatch(actions.layout.setLoginModalOpen(false))
  }

  const handleSetProfileModalOpen = () => {
    handleSetLoginModalClose()
    dispatch(actions.layout.setProfileModalOpen(true))
  }

  // Form state and validation
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema(useTranslations('validation')),
    onSubmit: async (values) => {
      setLoading(true)
      setError('')

      await signIn('credentials', {
        email: values.email,
        password: values.password,
        redirect: false,
      }).then((res: any) => {
        if (res.error) {
          setError(tAuth('login.on.error').toString())
        } else {
          setSuccess(true)
        }
      })
      setLoading(false)
    },
  })

  return (
    <Modal
      isOpen={isLoginModalOpen}
      handleClose={handleSetLoginModalClose}
      title={tAuth('login.title')}
      disabled={loading}
    >
      {!success && (
        <>
          {error && <ErrorText text={error} />}
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

          <AuthCancel onClick={handleSetLoginModalClose} disabled={loading}>
            {tAuth('login.cancel')}
          </AuthCancel>
        </>
      )}

      {success && (
        <div className="">
          <span>{tAuth('login.on.success')}</span>
          <Button
            text={tActions('ok')}
            submit
            className="w-100 mt-5"
            onClick={handleSetLoginModalClose}
          />
          <Button
            text={tActions('goToProfile')}
            submit
            className="w-100 mt-5"
            onClick={handleSetProfileModalOpen}
          />
        </div>
      )}
    </Modal>
  )
}

export default AuthLoginModal
