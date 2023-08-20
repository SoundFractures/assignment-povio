'use client'

import React from 'react'
// import { useTranslations } from 'next-intl'
import useStore from '~/services/useStore'

import ProfileModal from '~/components/profile/Modal'

const Auth = () => {
  const { useStoreSelector } = useStore()
  // TODO | MobileNav composable
  const isProfileModalOpen = useStoreSelector(
    (state) => state.layout.isProfileModalOpen,
  )

  return <div>{isProfileModalOpen && <ProfileModal />}</div>
}
export default Auth
