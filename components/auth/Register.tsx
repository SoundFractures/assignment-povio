'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import useStore from '~/services/useStore'
import Modal from '~/components/shared/Modal'
import TextField from '~/components/base/TextField'
import Button from '~/components/base/Button'
import AuthCancel from '~/components/auth/AuthCancel'

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
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [dateOfBirth, setDateOfBirth] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const isFormValid = () =>
    firstName.length > 0 &&
    lastName.length > 0 &&
    dateOfBirth.length > 0 &&
    email.length > 0 &&
    password.length > 0

  // Register
  const [loading, setLoading] = useState(false)
  const handleRegister = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }
  return (
    <Modal
      isOpen={isRegisterModalOpen}
      handleClose={handleSetRegisterModalClose}
      title={t('register.title')}
    >
      <div className="form-row">
        <TextField
          value={firstName}
          onChange={setFirstName}
          label={t('form.firstName')}
          id="firstName"
          className="flex-grow"
        />
        <TextField
          value={lastName}
          onChange={setLastName}
          label={t('form.lastName')}
          id="lastName"
          className="flex-grow"
        />
      </div>
      <TextField
        value={dateOfBirth}
        onChange={setDateOfBirth}
        label={t('form.dateOfBirth')}
        id="dateOfBirth"
      />
      <TextField
        value={email}
        onChange={setEmail}
        label={t('form.emailAddress')}
        id="emailAddress"
      />
      <TextField
        value={password}
        onChange={setPassword}
        label={t('form.password')}
        id="password"
        type="password"
      />
      <Button
        text={t('register.submit')}
        className="w-100 mt-5"
        loading={loading}
        disabled={!isFormValid()}
        onClick={handleRegister}
      />

      <AuthCancel onClick={handleSetRegisterModalClose}>
        {t('register.cancel')}
      </AuthCancel>
    </Modal>
  )
}

export default AuthRegister
