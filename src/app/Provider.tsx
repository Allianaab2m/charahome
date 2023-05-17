"use client"

import { ChakraProvider } from "@chakra-ui/react"
import { SessionProvider as NextAuthSessionProvider } from "next-auth/react"

export function CkProvider({ children }: { children: React.ReactNode }) {
  return <ChakraProvider>{children}</ChakraProvider>
}

export interface SessionProviderProps {
  children: React.ReactNode
}

export const SessionProvider = ({ children }: SessionProviderProps) => {
  return <NextAuthSessionProvider>{children}</NextAuthSessionProvider>
}
