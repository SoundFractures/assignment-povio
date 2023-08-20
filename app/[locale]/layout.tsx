import React from 'react'
import '~/styles/main.scss'
import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { notFound } from 'next/navigation'
import Appbar from '~/components/appbar'
import NavigationMobile from '~/components/navigation/Mobile'
import Auth from '~/components/auth'
import Profile from '~/components/profile'
import Providers from '~/components/Providers'

export const metadata: Metadata = {
  title: 'Povio - Assignment',
  description: 'Vetting assignment for Povio',
}

export function generateStaticParams() {
  return [{ locale: 'en' }]
}

// TODO | Loading state for auth loading
const RootLayout = async ({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: {
    locale: string
  }
}) => {
  let messages
  try {
    messages = (await import(`~/locale/${locale}.json`)).default
  } catch (error) {
    notFound()
  }
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <main>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <Providers>
              <Appbar />

              <NavigationMobile />
              {children}

              {/* DIALOGS */}
              <Auth />
              <Profile />
            </Providers>
          </NextIntlClientProvider>
        </main>
      </body>
    </html>
  )
}

export default RootLayout
