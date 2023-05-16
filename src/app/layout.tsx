import { IBM_Plex_Sans_JP, Inter } from 'next/font/google'
import Provider from "./Provider"
import Main from './Main'
import Header from './Header'

const IBMPlexSansJP = IBM_Plex_Sans_JP({
  subsets: ['latin'],
  weight: ["400", "700"],
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
    <html lang="ja">
      <body className={IBMPlexSansJP.className}>
        <Provider>
          <Header />
          <Main>{children}</Main>
        </Provider>
      </body>
    </html>
  )
}
