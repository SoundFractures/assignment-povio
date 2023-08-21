'use client'

import React, { useEffect } from 'react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import useStore from '~/services/useStore'
import { Pages } from '~/enums'

const Navigation = ({ mobile }: { mobile: boolean }) => {
  const t = useTranslations('navigation')

  const { actions, useStoreDispatch, useStoreSelector } = useStore()

  const dispatch = useStoreDispatch()
  const isMobileNavOpen = useStoreSelector(
    (state) => state.layout.isMobileNavOpen,
  )
  const handleCloseMobileNav = () => {
    if (isMobileNavOpen) dispatch(actions.layout.setMobileNavOpen(false))
    if (mobile) window.scrollTo(0, 0)
  }

  // Login modal
  const handleSetLoginModalOpen = () => {
    handleCloseMobileNav()
    dispatch(actions.layout.setLoginModalOpen(true))
  }

  // Register modal
  const handleSetRegisterModalOpen = () => {
    handleCloseMobileNav()
    dispatch(actions.layout.setRegisterModalOpen(true))
  }

  // Profile modal
  const handleSetProfileModalOpen = () => {
    handleCloseMobileNav()
    dispatch(actions.layout.setProfileModalOpen(true))
  }

  // Disable scroll when mobile nav is open
  useEffect(() => {
    if (isMobileNavOpen) document.body.style.overflow = 'hidden'
    return (): void => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileNavOpen])

  // Session
  const { data: session, status } = useSession()

  return (
    <ul className={mobile ? 'mobile-navigation' : 'desktop-navigation'}>
      <li className="text-1">
        <Link href={Pages.Flowers} onClick={handleCloseMobileNav}>
          {t('links.flowers')}
        </Link>
      </li>
      <li className="text-1">
        <Link href={Pages.LatestSightings} onClick={handleCloseMobileNav}>
          {t('links.latestSightings')}
        </Link>
      </li>
      <li className="text-1">
        <Link href={Pages.Favorites} onClick={handleCloseMobileNav}>
          {t('links.favorites')}
        </Link>
      </li>

      {/* If unauthenticated, show buttons for login and register */}
      {status === 'unauthenticated' && (
        <>
          <li className="text-1">
            <button
              type="button"
              className="text-primary navigation-button"
              onClick={handleSetLoginModalOpen}
            >
              {t('links.login')}
            </button>
          </li>
          <li className="text-1">
            <button
              type="button"
              className="navigation-button navigation-button-filled"
              onClick={handleSetRegisterModalOpen}
            >
              {t('links.register')}
            </button>
          </li>
        </>
      )}
      {/* if authenticated, show profile  */}
      {status === 'authenticated' && session && (
        <button
          type="button"
          className="navigation-profile text-1"
          onClick={handleSetProfileModalOpen}
        >
          {session.user?.name || ''}

          <Image
            src="/assets/images/profile-picture-menu.png"
            alt="Profile Logo"
            width={40}
            height={40}
          />
        </button>
      )}
    </ul>
  )
}

export default Navigation
