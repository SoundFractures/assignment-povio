'use client'

import React from 'react'
// import { useTranslations } from 'next-intl'
import useStore from '~/services/useStore'

import AuthLoginModal from '~/components/auth/Login'
import AuthRegisterModal from '~/components/auth/Register'

const Auth = () => {
  const { useStoreSelector } = useStore()

  const isLoginModalOpen = useStoreSelector(
    (state) => state.layout.isLoginModalOpen,
  )

  const isRegisterModalOpen = useStoreSelector(
    (state) => state.layout.isRegisterModalOpen,
  )

  return (
    <div>
      {isLoginModalOpen && <AuthLoginModal />}
      {isRegisterModalOpen && <AuthRegisterModal />}
    </div>
  )
}
export default Auth
