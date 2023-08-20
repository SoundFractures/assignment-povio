'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { signOut } from 'next-auth/react'
import useStore from '~/services/useStore'
import Modal from '~/components/shared/Modal'

const ProfileModal = () => {
  const t = useTranslations('profile')

  // Modal config
  const { useStoreSelector, actions, useStoreDispatch } = useStore()

  // TODO | MobileNav composable
  const dispatch = useStoreDispatch()
  const isProfileModalOpen = useStoreSelector(
    (state) => state.layout.isProfileModalOpen,
  )

  const handleSetProfileModalClose = () => {
    dispatch(actions.layout.setProfileModalOpen(false))
  }

  // Session
  const handleSignOut = () => {
    signOut()
    handleSetProfileModalClose()
  }

  return (
    <Modal isOpen={isProfileModalOpen} handleClose={handleSetProfileModalClose}>
      PROFILE
      <button type="button" onClick={handleSignOut}>
        signout
      </button>
    </Modal>
  )
}

export default ProfileModal
