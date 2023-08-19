import { NextAuthOptions } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'

export const authOptions: NextAuthOptions = {
  providers: [
    // Credential provider
    Credentials({
      name: 'Credentials',
      credentials: {},
      authorize: async (credentials) => {
        await console.log(credentials)

        return null
      },
    }),
  ],
}
