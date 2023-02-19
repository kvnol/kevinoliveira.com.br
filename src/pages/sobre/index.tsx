
import Head from 'next/head';
import styles from './about.module.scss';

export default function Sobre() {
  return (
    <>
      <Head>
        <title>Sobre mim | Kevin Oliveira</title>
      </Head>
      <main className={styles.main} role="main">
        <h1>Sobre mim</h1>
      </main>
    </>
  )
}