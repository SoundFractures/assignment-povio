import { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { config } from 'dotenv'
import NextAuth from 'next-auth/next'

config()
export const authOptions: NextAuthOptions = {
  providers: [
    // Credential provider
    CredentialsProvider({
      name: 'Custom',
      credentials: {},
      async authorize(credentials) {
        // ...
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXT_AUTH_SECRET,
  callbacks: {
    async signIn(params) {
      await console.log(params)
    },
  },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }

// await fetch('https://flowrspot-api.herokuapp.com/api/v1/users/login', {
//           method: 'POST',
//           body: JSON.stringify({
//             email: credentials.email,
//             password: credentials.password,
//           }),
//         })
//           .then((res) => {
//             console.log(res)
//             console.log(res.json())
//             return res
//           })
//           .catch(() => null),
