'use client'

import React from 'react'
// import { useTranslations } from 'next-intl'
import { useTranslations } from 'next-intl'
import useStore from '~/services/useStore'
import Modal from '~/components/shared/Modal'
import TextField from '~/components/base/TextField'
import Button from '~/components/base/Button'

const AuthLogin = () => {
  const [email, setEmail] = React.useState('')
  const t = useTranslations('auth')
  const { useStoreSelector, actions, useStoreDispatch } = useStore()

  // TODO | MobileNav composable
  const dispatch = useStoreDispatch()
  const isLoginModalOpen = useStoreSelector(
    (state) => state.layout.isLoginModalOpen,
  )

  const handleSetLoginModalClose = () => {
    dispatch(actions.layout.setLoginModalOpen(false))
  }
  return (
    <Modal
      isOpen={isLoginModalOpen}
      handleClose={handleSetLoginModalClose}
      title={t('register.title')}
    >
      <div className="form-row">
        <TextField
          value={email}
          onChange={setEmail}
          label={t('register.form.firstName')}
          htmlFor="firstName"
          className="flex-grow"
        />
        <TextField
          value={email}
          onChange={setEmail}
          label={t('register.form.lastName')}
          htmlFor="lastName"
          className="flex-grow"
        />
      </div>
      <TextField
        value={email}
        onChange={setEmail}
        label={t('register.form.dateOfBirth')}
        htmlFor="email"
      />
      <TextField
        value={email}
        onChange={setEmail}
        label={t('register.form.emailAddress')}
        htmlFor="email"
      />
      <TextField
        value={email}
        onChange={setEmail}
        label={t('register.form.password')}
        htmlFor="email"
      />
      <Button
        text={t('register.form.submit')}
        onClick={() => {}}
        className="w-100 mt-5"
      />
      <span className="auth-caption">I dont wan't to register</span>
    </Modal>
  )
}

export default AuthLogin
