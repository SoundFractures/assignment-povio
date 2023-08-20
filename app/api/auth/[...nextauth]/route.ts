import { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { config } from 'dotenv'
import NextAuth from 'next-auth/next'
import axios from 'axios'

config()
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
          url: 'https://flowrspot-api.herokuapp.com/api/v1/users/login',
          data: payload,
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then(async (res) =>
            axios({
              method: 'GET',
              url: 'https://flowrspot-api.herokuapp.com/api/v1/users/me',
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${res.data.auth_token}`,
              },
            }).then((response) => {
              console.log(response.data.user)
              return {
                _id: response.data.user.id,
                name: `${response.data.user.first_name} ${response.data.user.last_name}`,
                accessToken: res.data.auth_token,
              }
            }),
          )
          .catch((err) => {
            console.log(err.response.data)
            return null
          })
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXT_AUTH_SECRET,
  callbacks: {},
  debug: true,
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
