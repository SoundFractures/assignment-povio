'use client'

import React from 'react'
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
  const [email, setEmail] = React.useState('')

  return (
    <Modal
      isOpen={isRegisterModalOpen}
      handleClose={handleSetRegisterModalClose}
      title={t('register.title')}
    >
      <div className="form-row">
        <TextField
          value={email}
          onChange={setEmail}
          label={t('form.firstName')}
          htmlFor="firstName"
          className="flex-grow"
        />
        <TextField
          value={email}
          onChange={setEmail}
          label={t('form.lastName')}
          htmlFor="lastName"
          className="flex-grow"
        />
      </div>
      <TextField
        value={email}
        onChange={setEmail}
        label={t('form.dateOfBirth')}
        htmlFor="email"
      />
      <TextField
        value={email}
        onChange={setEmail}
        label={t('form.emailAddress')}
        htmlFor="email"
      />
      <TextField
        value={email}
        onChange={setEmail}
        label={t('form.password')}
        htmlFor="email"
      />
      <Button
        text={t('register.submit')}
        onClick={() => {}}
        className="w-100 mt-5"
      />

      <AuthCancel onClick={handleSetRegisterModalClose}>
        {t('register.cancel')}
      </AuthCancel>
    </Modal>
  )
}

export default AuthRegister
