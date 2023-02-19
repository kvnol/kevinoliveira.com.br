import './globals.scss';
import 'normalize.css'
import { Poppins } from '@next/font/google'

import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';
import { AppProps } from 'next/app';

const poppins = Poppins({
  weight: ['300', '500', '600'],
  style: ['normal'],
  subsets: ['latin']
})

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={poppins.className}>
      <Header />
      <Component {...pageProps} />
      <Footer/>
    </div>
  )
}
