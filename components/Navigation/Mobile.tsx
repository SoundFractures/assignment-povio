'use client'

import React from 'react'

import useStore from '~/services/useStore'
import Navigation from '~/components/navigation'

const NavigationMobile = () => {
  const { useStoreSelector } = useStore()

  const isMobileNavOpen = useStoreSelector(
    (state) => state.layout.isMobileNavOpen,
  )

  return <div>{isMobileNavOpen && <Navigation mobile />}</div>
}
export default NavigationMobile
