'use client'

import React from 'react'

import useStore from '~/services/useStore'
import Navigation from '~/components/navigation'

export default function NavigationMobile() {
  const { useStoreSelector } = useStore()

  const isMobileNavOpen = useStoreSelector(
    (state) => state.layout.isMobileNavOpen,
  )

  if (!isMobileNavOpen) return null

  return (
    <div>
      <Navigation className="mobile-navigation" />
    </div>
  )
}
