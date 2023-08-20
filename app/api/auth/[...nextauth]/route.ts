import { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import NextAuth from 'next-auth/next'
import axios from 'axios'

export const authOptions: NextAuthOptions = {
  providers: [
    // Credential provider
    CredentialsProvider({
      name: 'Custom',
      credentials: {},
      async authorize(credentials: any): Promise<any> {
        const payload = {
          email: credentials.email,
          password: credentials.password,
        }

        return axios({
          method: 'POST',
          url: `${process.env.NEXT_PUBLIC_API_URL}/users/login`,
          data: payload,
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then(async (res) =>
            axios({
              method: 'GET',
              url: `${process.env.NEXT_PUBLIC_API_URL}/users/me`,
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${res.data.auth_token}`,
              },
            }).then((response) => ({
              _id: response.data.user.id,
              name: `${response.data.user.first_name} ${response.data.user.last_name}`,
              accessToken: res.data.auth_token,
            })),
          )
          .catch(() => null)
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXT_AUTH_SECRET,
  callbacks: {
    async signIn() {
      return true
    },
    async jwt({ token, user, account }) {
      if (account && user) {
        return {
          ...token,
          accessToken: user.accessToken,
        }
      }

      return token
    },
    async session({ session, token }) {
      // eslint-disable-next-line no-param-reassign
      session.user.accessToken = token.accessToken
      return session
    },
  },
  debug: true,
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
