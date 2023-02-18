import './globals.scss'
import 'normalize.css'
import { Poppins } from '@next/font/google'
import Header from '@/app/components/header/header';

const poppins = Poppins({ weight: ['300', '600'], subsets: [] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={poppins.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
