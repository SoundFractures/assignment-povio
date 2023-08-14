import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

export default function TheNav() {
  const t = useTranslations('navigation')

  return (
    <nav className="navigation">
      <Link href="/" className="navigation-logo">
        <Image
          src="/assets/images/flowrspot_logo.svg"
          alt="FlowrSpot Logo"
          width={30}
          height={30}
        />
        <span className="navigation-logo-title">{t('title')}</span>
      </Link>

      {/* TODO Make a hamburger for mobile/tablet */}

      <ul className="navigation-links">
        <li>
          <Link href="/flowers">{t('links.flowers')}</Link>
        </li>
        <li>
          <Link href="/latest-sightings">{t('links.latestSightings')}</Link>
        </li>
        <li>
          <Link href="/favorites">{t('links.favorites')}</Link>
        </li>
        <li>
          <Link href="/" className="text-primary">
            {t('links.login')}
          </Link>
        </li>
        <li className="navigation-links-button">
          <Link href="/">{t('links.newAccount')}</Link>
        </li>
      </ul>
      <button className="navigation-hamburger" type="button">
        <Image
          src="/assets/icons/hamburger.svg"
          alt="Menu"
          width={24}
          height={16}
        />
      </button>
    </nav>
  )
}
