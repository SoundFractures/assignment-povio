'use client'

import React from 'react'
// import { useTranslations } from 'next-intl'
import useStore from '~/services/useStore'

import AuthLogin from '~/components/auth/Login'

const Auth = () => {
  const { useStoreSelector } = useStore()
  // TODO | MobileNav composable
  const isLoginModalOpen = useStoreSelector(
    (state) => state.layout.isLoginModalOpen,
  )

  return <div>{isLoginModalOpen && <AuthLogin />}</div>
}
export default Auth
