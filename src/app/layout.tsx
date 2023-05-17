import { IBM_Plex_Sans_JP } from 'next/font/google'
import { CkProvider, SessionProvider } from "./Provider"
import Main from './Main'
import Header from './Header'

const IBMPlexSansJP = IBM_Plex_Sans_JP({
  subsets: ['latin'],
  weight: ["400", "700"],
  display: "swap"
})

export const metadata = {
  title: 'charahome',
  description: '自創作キャラまとめサイト',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SessionProvider>
      <html lang="ja">
        <body className={IBMPlexSansJP.className}>
          <CkProvider>
            <Header />
            <Main>{children}</Main>
          </CkProvider>
        </body>
      </html>
    </SessionProvider>
  )
}
