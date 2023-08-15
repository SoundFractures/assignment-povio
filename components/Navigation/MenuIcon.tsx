'use client'

import React from 'react'
import Image from 'next/image'

import useStore from '~/services/useStore'

const MenuIcon = () => {
  const { useStoreDispatch, useStoreSelector, actions } = useStore()

  const dispatch = useStoreDispatch()
  const isMobileNavOpen = useStoreSelector(
    (state) => state.layout.isMobileNavOpen,
  )
  const handleSetMobileNavOpen = () => {
    dispatch(actions.layoutSlice.setMobileNavOpen(!isMobileNavOpen))
  }

  return (
    <button className="navigation-hamburger" type="button">
      <Image
        src={`/assets/icons/${isMobileNavOpen ? 'close' : 'hamburger'}.svg`}
        alt="Menu"
        width={24}
        height={24}
        onClick={handleSetMobileNavOpen}
      />
    </button>
  )
}

export default MenuIcon
