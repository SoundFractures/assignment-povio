'use client'

import React from 'react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import useStore from '~/services/useStore'

import { Pages } from '~/enums'

export default function Navigation({ className }: { className: string }) {
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
    <ul className={className}>
      <li>
        <Link href={Pages.Flowers} onClick={handleSetMobileNavOpen}>
          {t('links.flowers')}
        </Link>
      </li>
      <li>
        <Link href={Pages.LatestSightings} onClick={handleSetMobileNavOpen}>
          {t('links.latestSightings')}
        </Link>
      </li>
      <li>
        <Link href={Pages.Favorites} onClick={handleSetMobileNavOpen}>
          {t('links.favorites')}
        </Link>
      </li>
      <li>
        <button
          type="button"
          className="text-primary navigation-button"
          onClick={handleSetMobileNavOpen}
        >
          {t('links.login')}
        </button>
      </li>
      <li>
        <button
          type="button"
          className="navigation-button navigation-button-filled"
          onClick={handleSetMobileNavOpen}
        >
          {t('links.newAccount')}
        </button>
      </li>
    </ul>
  )
}
