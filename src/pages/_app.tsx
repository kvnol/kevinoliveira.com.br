import 'normalize.css';
import './globals.scss';

import { Poppins } from '@next/font/google'

import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';
import { AppProps } from 'next/app';
import React, { useEffect } from 'react';

const poppins = Poppins({
  weight: ['300', '500', '600'],
  style: ['normal'],
  subsets: ['latin']
})


export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (!document.body.classList.length) {
      document.body.classList.add('dark');
    }
  })

  return (
    <div className={`${poppins.className} app`}>
      <Header />
      <main role="main">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  )
}
