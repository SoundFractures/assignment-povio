'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { useFormik } from 'formik'
import useStore from '~/services/useStore'
import Modal from '~/components/shared/Modal'
import TextField from '~/components/base/TextField'
import Button from '~/components/base/Button'
import AuthCancel from '~/components/auth/AuthCancel'
import { registerSchema } from '~/utils/validation'

const AuthRegister = () => {
  const t = useTranslations('auth')
  // Modal config
  const { useStoreSelector, actions, useStoreDispatch } = useStore()

  // TODO | MobileNav composable
  const dispatch = useStoreDispatch()
  const isRegisterModalOpen = useStoreSelector(
    (state) => state.layout.isRegisterModalOpen,
  )

  const handleSetRegisterModalClose = () => {
    dispatch(actions.layout.setRegisterModalOpen(false))
  }
  // Form state
  // Form state and validation
  const [loading, setLoading] = useState(false)
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
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2))
    },
  })

  return (
    <Modal
      isOpen={isRegisterModalOpen}
      handleClose={handleSetRegisterModalClose}
      title={t('register.title')}
    >
      <div className="form-row">
        <TextField
          value={formik.values.firstName}
          label={t('form.firstName')}
          id="firstName"
          error={!!formik.errors.firstName && formik.touched.firstName}
          errorText={formik.errors.firstName}
          onChange={(value) => formik.setFieldValue('firstName', value)}
          onBlur={formik.handleBlur}
        />
        <TextField
          value={formik.values.lastName}
          label={t('form.lastName')}
          id="lastName"
          error={!!formik.errors.lastName && formik.touched.lastName}
          errorText={formik.errors.lastName}
          onChange={(value) => formik.setFieldValue('lastName', value)}
          onBlur={formik.handleBlur}
        />
      </div>
      <TextField
        value={formik.values.dateOfBirth}
        label={t('form.dateOfBirth')}
        id="dateOfBirth"
        error={!!formik.errors.dateOfBirth && formik.touched.dateOfBirth}
        errorText={formik.errors.dateOfBirth}
        onChange={(value) => formik.setFieldValue('dateOfBirth', value)}
        onBlur={formik.handleBlur}
      />
      <TextField
        value={formik.values.email}
        label={t('form.email')}
        id="email"
        error={!!formik.errors.email && formik.touched.email}
        errorText={formik.errors.email}
        onChange={(value) => formik.setFieldValue('email', value)}
        onBlur={formik.handleBlur}
      />
      <TextField
        value={formik.values.password}
        label={t('form.password')}
        id="password"
        type="password"
        error={!!formik.errors.password && formik.touched.password}
        errorText={formik.errors.password}
        onChange={(value) => formik.setFieldValue('password', value)}
        onBlur={formik.handleBlur}
      />
      <Button
        text={t('register.submit')}
        className="w-100 mt-5"
        loading={loading}
      />

      <AuthCancel onClick={handleSetRegisterModalClose}>
        {t('register.cancel')}
      </AuthCancel>
    </Modal>
  )
}

export default AuthRegister
