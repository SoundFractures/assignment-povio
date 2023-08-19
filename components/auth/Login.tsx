'use client'

import React from 'react'
// import { useTranslations } from 'next-intl'
import useStore from '~/services/useStore'
import Modal from '~/components/shared/Modal'
import TextField from '~/components/base/TextField'
import Button from '~/components/base/Button'

const AuthLogin = () => {
  const [email, setEmail] = React.useState('')
  // const t = useTranslations('navigation')

  // const t = useTranslations('navigation')
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
      title="Create an Account"
    >
      <div className="form-row">
        <TextField
          value={email}
          onChange={setEmail}
          label="First Name"
          htmlFor="email"
          className="flex-grow"
        />
        <TextField
          value={email}
          onChange={setEmail}
          label="Last Name"
          htmlFor="email"
          className="flex-grow"
        />
      </div>
      <TextField
        value={email}
        onChange={setEmail}
        label="Email Address"
        htmlFor="email"
      />
      <TextField
        value={email}
        onChange={setEmail}
        label="Password"
        htmlFor="email"
      />
      <Button text="Create account" onClick={() => {}} className="w-100 mt-5" />
      <span className="login-caption">I dont wan't to register</span>
    </Modal>
  )
}

export default AuthLogin
