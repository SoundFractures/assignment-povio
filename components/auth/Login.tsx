'use client'

import React from 'react'
import { useTranslations } from 'next-intl'
import useStore from '~/services/useStore'
import Modal from '~/components/shared/Modal'
import TextField from '~/components/base/TextField'
import Button from '~/components/base/Button'
import AuthCancel from '~/components/auth/AuthCancel'

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

  // Form state
  const [email, setEmail] = React.useState('')

  return (
    <Modal
      isOpen={isLoginModalOpen}
      handleClose={handleSetLoginModalClose}
      title={t('login.title')}
    >
      <form>
        <TextField
          value={email}
          onChange={setEmail}
          label={t('form.lastName')}
          htmlFor="lastName"
        />

        <TextField
          value={email}
          onChange={setEmail}
          label={t('form.password')}
          htmlFor="email"
        />
        <Button
          text={t('login.submit')}
          onClick={() => {}}
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
