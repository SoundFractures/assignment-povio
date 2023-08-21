'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { useFormik } from 'formik'
import axios from 'axios'
import useStore from '~/services/useStore'
import Modal from '~/components/shared/Modal'
import TextField from '~/components/base/TextField'
import Button from '~/components/base/Button'
import AuthCancel from '~/components/auth/AuthCancel'
import ErrorText from '~/components/base/ErrorText'
import { registerSchema } from '~/utils/validation'

const AuthRegisterModal = () => {
  const tAuth = useTranslations('auth')
  const tProfile = useTranslations('profile')
  const tActions = useTranslations('actions')

  // Modal config
  const { useStoreSelector, actions, useStoreDispatch } = useStore()

  const dispatch = useStoreDispatch()
  const isRegisterModalOpen = useStoreSelector(
    (state) => state.layout.isRegisterModalOpen,
  )

  const handleSetRegisterModalClose = () => {
    dispatch(actions.layout.setRegisterModalOpen(false))
  }

  const handleOpenLoginModal = () => {
    dispatch(actions.layout.setRegisterModalOpen(false))
    dispatch(actions.layout.setLoginModalOpen(true))
  }

  // Form state and validation
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      email: '',
      password: '',
    },
    validateOnBlur: true,
    validationSchema: registerSchema(useTranslations('validation')),
    onSubmit: async (values) => {
      setLoading(true)
      setError('')
      await axios({
        method: 'POST',
        url: 'https://flowrspot-api.herokuapp.com/api/v1/users/register',
        data: {
          first_name: values.firstName,
          last_name: values.lastName,
          date_of_birth: values.dateOfBirth,
          email: values.email,
          password: values.password,
        },
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(() => {
          setSuccess(true)
        })
        .catch((_error) => {
          // Note | this can be an array, more appropriate would be
          // to show the first error or make a bullet list of all errors
          setError(_error.response.data.error)
        })
        .finally(() => {
          setLoading(false)
        })
    },
  })

  return (
    <Modal
      isOpen={isRegisterModalOpen}
      handleClose={handleSetRegisterModalClose}
      title={tAuth('register.title')}
    >
      {!success && (
        <>
          <form onSubmit={formik.handleSubmit}>
            {error && <ErrorText text={error} />}
            <div className="form-row">
              <TextField
                value={formik.values.firstName}
                label={tProfile('firstName')}
                id="firstName"
                error={!!formik.errors.firstName && formik.touched.firstName}
                errorText={formik.errors.firstName}
                onChange={(value) => formik.setFieldValue('firstName', value)}
                onBlur={formik.handleBlur}
              />
              <TextField
                value={formik.values.lastName}
                label={tProfile('lastName')}
                id="lastName"
                error={!!formik.errors.lastName && formik.touched.lastName}
                errorText={formik.errors.lastName}
                onChange={(value) => formik.setFieldValue('lastName', value)}
                onBlur={formik.handleBlur}
              />
            </div>
            <TextField
              value={formik.values.dateOfBirth}
              label={tProfile('dateOfBirth')}
              id="dateOfBirth"
              error={!!formik.errors.dateOfBirth && formik.touched.dateOfBirth}
              errorText={formik.errors.dateOfBirth}
              onChange={(value) => formik.setFieldValue('dateOfBirth', value)}
              onBlur={formik.handleBlur}
            />
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
              text={tAuth('register.submit')}
              className="w-100 mt-5"
              submit
              loading={loading}
            />
          </form>

          <AuthCancel onClick={handleSetRegisterModalClose}>
            {tAuth('register.cancel')}
          </AuthCancel>
        </>
      )}

      {success && (
        <div className="">
          <span>{tAuth('register.on.success')}</span>
          <Button
            text={tActions('ok')}
            submit
            className="w-100 mt-5"
            onClick={handleOpenLoginModal}
          />
        </div>
      )}
    </Modal>
  )
}

export default AuthRegisterModal
