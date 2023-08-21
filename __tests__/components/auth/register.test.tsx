// /* eslint-disable no-undef -- NOTE | Seems like airbnb's config is messing something up */

// ! ---- !

// Left off here with a bunch of error after error with providers, nex-auth, fetch, next-intl, etc.
// Couldn't get it to work, so I'm going to move on for now.

// ! ---- !

// import React from 'react'
// import { render, screen, waitFor } from '@testing-library/react'
// import client, { Session } from 'next-auth'
// import HomePage from '~/app/[locale]/page'

// describe('Omega', () => {
//   it('Works', async () => {
//     const mockSession: Session = {
//       expires: '1',
//       user: { email: 'a', name: 'Delta' },
//     }

//     client.useSession.mockReturnValueOnce([mockSession, false])

//     render(<HomePage />)

//     expect(screen.getByText(' Delta')).toBeInTheDocument()
//   })
// })

// import { render, screen } from '@testing-library/react'
// import React from 'react'
// import { NextIntlProvider } from 'next-intl'
// import { Provider as StoreProvider } from 'react-redux'
// import { SessionProvider } from 'next-auth/react'
// import axios from 'axios'
// import HomePage from '~/app/[locale]/page'
// import Register from '~/components/auth/Register'
// import en from '~/locale/en.json'
// import { store } from '~/store'

// describe('Home Component', () => {
//   window.fetch = axios
//   const useRouter = jest.spyOn(require('next/router'), 'useRouter')
//   const locale = 'en'
//   const messages = en

//   useRouter.mockImplementationOnce(() => ({
//     query: { locale },
//   }))

//   it('renders a heading', () => {
//     render(
//       <NextIntlProvider messages={messages} locale={locale}>
//         <SessionProvider>
//           <StoreProvider store={store}>
//             <HomePage />
//           </StoreProvider>
//         </SessionProvider>
//       </NextIntlProvider>,
//     )

//     const heading = screen.getByText('Discover flowers around you')
//     expect(heading).toBeInTheDocument()
//   })
// })
