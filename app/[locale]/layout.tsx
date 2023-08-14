import React from 'react'
import '~/styles/main.scss'
import type { Metadata } from 'next'
import TheNavigation from '~/components/TheNav'

export const metadata: Metadata = {
  title: 'Povio - Assignment',
  description: 'Vetting assignment for Povio',
}

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main>
          <TheNavigation />

          {children}
        </main>
      </body>
    </html>
  )
}

export default RootLayout
