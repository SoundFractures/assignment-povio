'use client'

import React from 'react'
// import { useTranslations } from 'next-intl'
import useStore from '~/services/useStore'
import Modal from '~/components/shared/Modal'

const Auth = () => {
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

  //   const handleSetRegisterModalOpen = () => {
  //     handleCloseMobileNav()
  //     dispatch(actions.layout.setRegisterModalOpen(true))
  //   }
  return (
    <div>
      {isLoginModalOpen && (
        <Modal isOpen={isLoginModalOpen} handleClose={handleSetLoginModalClose}>
          Hello there
        </Modal>
      )}
    </div>
  )
}
export default Auth
