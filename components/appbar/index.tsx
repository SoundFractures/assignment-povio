'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

import { Pages } from '~/enums'
import Navigation from '~/components/navigation'
import MenuIcon from '~/components/navigation/MenuIcon'
import useStore from '~/services/useStore'

export default function Appbar() {
  const t = useTranslations('navigation')

  const { actions, useStoreDispatch, useStoreSelector } = useStore()
  // TODO | MobileNav composable

  const dispatch = useStoreDispatch()
  const isMobileNavOpen = useStoreSelector(
    (state) => state.layout.isMobileNavOpen,
  )
  // Note | This could be done with on route change
  const handleSetMobileNavOpen = () => {
    if (isMobileNavOpen) dispatch(actions.layout.setMobileNavOpen(false))
  }
  return (
    <nav className="appbar">
      <Link
        href={Pages.Home}
        className="navigation-logo"
        onClick={handleSetMobileNavOpen}
      >
        <Image
          src="/assets/images/flowrspot_logo.svg"
          alt="FlowrSpot Logo"
          width={30}
          height={30}
        />
        <span className="navigation-logo-title">{t('title')}</span>
      </Link>
      <Navigation className="desktop-navigation" />
      <MenuIcon />
    </nav>
  )
}
