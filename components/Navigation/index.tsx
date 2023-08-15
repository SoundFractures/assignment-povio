import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Pages } from '~/enums'
import MenuIcon from './MenuIcon'

export default function TheNav() {
  const t = useTranslations('navigation')

  return (
    <nav className="navigation">
      <Link href={Pages.Home} className="navigation-logo">
        <Image
          src="/assets/images/flowrspot_logo.svg"
          alt="FlowrSpot Logo"
          width={30}
          height={30}
        />
        <span className="navigation-logo-title">{t('title')}</span>
      </Link>

      <ul className="navigation-links">
        <li>
          <Link href={Pages.Flowers}>{t('links.flowers')}</Link>
        </li>
        <li>
          <Link href={Pages.LatestSightings}>{t('links.latestSightings')}</Link>
        </li>
        <li>
          <Link href={Pages.Favorites}>{t('links.favorites')}</Link>
        </li>
        <li>
          <Link href={Pages.Home} className="text-primary">
            {t('links.login')}
          </Link>
        </li>
        <li className="navigation-links-button">
          <Link href={Pages.Home}>{t('links.newAccount')}</Link>
        </li>
      </ul>
      <MenuIcon />
    </nav>
  )
}
