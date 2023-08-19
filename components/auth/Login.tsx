'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { signIn } from 'next-auth/react'
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
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const isFormValid = () => email.length > 0 && password.length > 0

  // Login
  const [loading, setLoading] = useState(false)
  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)
    await signIn('credentials', { email, password, redirect: false })
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        setLoading(false)
      })
    // await fetch('https://flowrspot-api.herokuapp.com/api/v1/users/login', {
    //   method: 'POST',
    //   body: JSON.stringify({ email, password }),
    // }).finally(() => {
    //   setLoading(false)
    // })
  }

  return (
    <Modal
      isOpen={isLoginModalOpen}
      handleClose={handleSetLoginModalClose}
      title={t('login.title')}
    >
      <form onSubmit={handleLogin}>
        <TextField
          value={email}
          onChange={setEmail}
          label={t('form.emailAddress')}
          htmlFor="email"
        />

        <TextField
          value={password}
          onChange={setPassword}
          label={t('form.password')}
          htmlFor="password"
          type="password"
        />
        <Button
          text={t('login.submit')}
          disabled={!isFormValid()}
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
