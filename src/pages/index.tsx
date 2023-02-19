import styles from './index.module.scss';

import Head from 'next/head';
import Image from 'next/image';

import Layout from '@/components/layout';
import CardPage from '@/components/cards/cardPage/cardPage';

export default function Index() {
  return (
    <>
      <Head>
        <title>Kevin Oliveira</title>
      </Head>
      
      <main className={styles.main} role="main">
        <article className={styles.presentation}>
          <Image src="/img/avatar-lg.png" width="280" height="480" alt="" />
          <h1>Olá, eu sou <strong>Kevin Oliveira</strong></h1>
          <h2>Front-end e designer</h2>
        </article>

        <nav className={styles.menu}>
          <CardPage href="/sobre/" title="Sobre mim" icon="person-add-fill" />
          <CardPage href="/portfolio/" title="Portfólio" icon="folder-add-outline" />
          <CardPage href="/servicos/" title="Serviços" icon="brush-outline" />
          <CardPage href="/blog/" title="Blog" icon="edit-2-outline" />
        </nav>
      </main>
    </>
  )
}
