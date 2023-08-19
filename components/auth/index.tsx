'use client'

import React from 'react'
// import { useTranslations } from 'next-intl'
import useStore from '~/services/useStore'

import AuthLogin from '~/components/auth/Login'
import AuthRegister from '~/components/auth/Register'

const Auth = () => {
  const { useStoreSelector } = useStore()
  // TODO | MobileNav composable
  const isLoginModalOpen = useStoreSelector(
    (state) => state.layout.isLoginModalOpen,
  )

  const isRegisterModalOpen = useStoreSelector(
    (state) => state.layout.isRegisterModalOpen,
  )

  return (
    <div>
      {isLoginModalOpen && <AuthLogin />}
      {isRegisterModalOpen && <AuthRegister />}
    </div>
  )
}
export default Auth
