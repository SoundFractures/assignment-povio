'use client'

import React, { useEffect } from 'react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import useStore from '~/services/useStore'

import { Pages } from '~/enums'

const Navigation = ({ mobile }: { mobile: boolean }) => {
  const t = useTranslations('navigation')

  const { actions, useStoreDispatch, useStoreSelector } = useStore()
  // TODO | MobileNav composable
  const dispatch = useStoreDispatch()
  const isMobileNavOpen = useStoreSelector(
    (state) => state.layout.isMobileNavOpen,
  )
  // Note | This could be done with on route change
  const handleCloseMobileNav = () => {
    if (isMobileNavOpen) dispatch(actions.layout.setMobileNavOpen(false))
    if (mobile) window.scrollTo(0, 0)
  }

  const handleSetLoginModalOpen = () => {
    handleCloseMobileNav()
    dispatch(actions.layout.setLoginModalOpen(true))
  }

  const handleSetRegisterModalOpen = () => {
    handleCloseMobileNav()
    dispatch(actions.layout.setRegisterModalOpen(true))
  }

  // useEffect(() => {
  //   document.body.style.overflow = 'hidden'

  //   return (): void => {
  //     console.log(123)
  //     document.body.style.overflow = 'unset'
  //   }
  // lEFT OF HERE
  // }, [isMobileNavOpen])

  return (
    <ul className={mobile ? 'mobile-navigation' : 'desktop-navigation'}>
      <li>
        <Link href={Pages.Flowers} onClick={handleCloseMobileNav}>
          {t('links.flowers')}
        </Link>
      </li>
      <li>
        <Link href={Pages.LatestSightings} onClick={handleCloseMobileNav}>
          {t('links.latestSightings')}
        </Link>
      </li>
      <li>
        <Link href={Pages.Favorites} onClick={handleCloseMobileNav}>
          {t('links.favorites')}
        </Link>
      </li>
      <li>
        <button
          type="button"
          className="text-primary navigation-button"
          onClick={handleSetLoginModalOpen}
        >
          {t('links.login')}
        </button>
      </li>
      <li>
        <button
          type="button"
          className="navigation-button navigation-button-filled"
          onClick={handleSetRegisterModalOpen}
        >
          {t('links.register')}
        </button>
      </li>
    </ul>
  )
}

export default Navigation
