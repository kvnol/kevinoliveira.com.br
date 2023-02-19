import styles from './page.module.scss';
import CardPage from './components/cards/cardPage/cardPage';

export default function Home() {
  return (
    <main className={styles.main} role="main">
      <article className={styles.presentation}>
        <img src="/img/avatar-lg.png" alt="" />
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
  )
}
