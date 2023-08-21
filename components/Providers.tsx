'use client'

import React from 'react'
import { Provider as StoreProvider } from 'react-redux'
import { SessionProvider } from 'next-auth/react'
import { store } from '~/store'

const Providers = ({ children }: { children: React.ReactNode }) => (
  <SessionProvider>
    <StoreProvider store={store}>{children}</StoreProvider>
  </SessionProvider>
)

export default Providers
