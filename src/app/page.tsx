import styles from './page.module.scss';

export default function Home() {
  return (
    <main role="main">
      <article className={styles.presentation}>
        <img src="/img/avatar-lg.png" alt="" />
        <h1>Olá, eu sou <strong>Kevin Oliveira</strong></h1>
        <h2>Front-end e designer</h2>
      </article>
    </main>
  )
}
