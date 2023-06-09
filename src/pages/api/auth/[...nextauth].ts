import NextAuth from "next-auth"
import type { NextAuthOptions } from "next-auth"

import CredentialsProvider from "next-auth/providers/credentials"

import { auth } from "../../../firebase/admin"

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      credentials: {},
      /* @ts-ignore */
      authorize: async ({ idToken }: any, _req) => {
        if (idToken) {
          try {
            const decoded = await auth.verifyIdToken(idToken)

            return { ...decoded }
          } catch (e) {
            console.error(e)
          }
        }
        return null
      }
    })
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    /* @ts-ignore */
    async jwt({ token, user }) {
      return { ...token, ...user }
    },
    async session({ session, token }) {
      session.user.emailVerified = token.emailVerified
      session.user.uid = token.uid
      return session
    }
  }
}

export default NextAuth(authOptions)
