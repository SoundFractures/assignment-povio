'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

import { Pages } from '~/enums'
import Navigation from '~/components/navigation'
import IconButton from '~/components/shared/IconButton'
import useStore from '~/services/useStore'

const Appbar = () => {
  const t = useTranslations('navigation')

  const { actions, useStoreDispatch, useStoreSelector } = useStore()

  const dispatch = useStoreDispatch()
  const isMobileNavOpen = useStoreSelector(
    (state) => state.layout.isMobileNavOpen,
  )
  const handleSetMobileNavOpen = (value: boolean) => {
    dispatch(actions.layout.setMobileNavOpen(value))
  }
  return (
    <nav className="appbar">
      <Link
        href={Pages.Home}
        className="navigation-logo"
        onClick={() => handleSetMobileNavOpen(false)}
      >
        <Image
          src="/assets/images/flowrspot_logo.svg"
          alt="FlowrSpot Logo"
          width={30}
          height={30}
        />
        <span className="navigation-logo-title">{t('title')}</span>
      </Link>
      <Navigation mobile={false} />
      <div className="navigation-hamburger">
        <IconButton
          icon={isMobileNavOpen ? 'close' : 'menu'}
          onClick={() => handleSetMobileNavOpen(!isMobileNavOpen)}
        />
      </div>
    </nav>
  )
}

export default Appbar
