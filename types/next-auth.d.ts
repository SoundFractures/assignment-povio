/* eslint-disable @typescript-eslint/no-unused-vars */
import NextAuth, { DefaultSession, DefaultUser } from 'next-auth'

declare module 'next-auth' {
  interface Session {
    user: {
      accessToken: string
    }
  }

  interface User {
    accessToken: string
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    accessToken: string
  }
}
