import React from 'react'
import '~/styles/main.scss'
import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { notFound } from 'next/navigation'
import Appbar from '~/components/appbar'
import NavigationMobile from '~/components/navigation/Mobile'
import Auth from '~/components/auth'
import Providers from '~/components/Providers'

export const metadata: Metadata = {
  title: 'Povio - Assignment',
  description: 'Vetting assignment for Povio',
}

export function generateStaticParams() {
  return [{ locale: 'en' }]
}

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
              <Auth />
            </Providers>
          </NextIntlClientProvider>
        </main>
      </body>
    </html>
  )
}

export default RootLayout
