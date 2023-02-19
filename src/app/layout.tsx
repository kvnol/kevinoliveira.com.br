import './globals.scss'

import Header from '@/app/components/header/header';
import Footer from '@/app/components/footer/footer';
import { Poppins } from '@next/font/google'

const poppins = Poppins({
  weight: ['300', '500', '600'],
  style: ['normal'],
  subsets: ['latin-ext']
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={poppins.className}>
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  )
}
