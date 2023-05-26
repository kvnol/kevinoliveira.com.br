import styles from './index.module.scss';

import Head from 'next/head';
import Image from 'next/image';

import CardPage from '@/components/cards/cardPage/cardPage';

export default function Index() {
  return (
    <>
      <Head>
        <title>Kevin Oliveira</title>
        <meta name="description" content="Front-end Developer at Din Digital, previously at Agência Murilhas. Frontend & Design."/>

        <meta property="og:url" content="https://kevinoliveira.com.br/"/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="Kevin Oliveira"/>
        <meta property="og:description" content="Front-end Developer at Din Digital, previously at Agência Murilhas. Frontend & Design."/>
        <meta property="og:image" content="https://kevinoliveira.com.br/img/code-in-the-dark.png"/>

        <meta name="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://kevinoliveira.com.br/"/>
        <meta name="twitter:title" content="Kevin Oliveira"/>
        <meta name="twitter:description" content="Front-end Developer at Din Digital, previously at Agência Murilhas. Frontend & Design."/>
        <meta name="twitter:image" content="https://kevinoliveira.com.br/img/code-in-the-dark.png"/>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="google-site-verification"
          content="e8tKK8_XjvMNTjaAiBPkX3bu_03VuuQzNjcHFTMS8mI"
        />
      </Head>

      <div className="wrapper">
        <article className={styles.presentation}>
          <Image priority src="/img/avatar-lg.png" width="280" height="480" alt="" />
          <h1>Olá, eu sou <strong>Kevin Oliveira</strong></h1>
          <h2>Front-end e designer</h2>
        </article>

        <nav className={styles.menu}>
          <CardPage href="/sobre/" title="Sobre mim" icon="person-add-fill" />
          <CardPage href="/portfolio/" title="Portfólio" icon="folder-add-outline" />
          <CardPage href="/servicos/" title="Serviços" icon="brush-outline" />
          <CardPage href="https://dev.to/kvnol" title="Blog" icon="edit-2-outline" target="_blank" />
        </nav>  
      </div>
    </>
  )
}
