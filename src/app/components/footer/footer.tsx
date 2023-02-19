'use client'

import styles from './footer.module.scss';
import LinkExternal from '@/app/components/buttons/external/external';

export default function Footer() {
  return(
    <footer role="contentinfo" className={styles.footer}>
      <nav className={styles.links}>
        <LinkExternal title="CV" href="/files/cv.pdf" />
        <LinkExternal title="LinkedIn" href="https://linkedin.com/in/kvnol/" />
        <LinkExternal title="GitHub" href="https://github.com/kvnol" />
      </nav>
      <p className={styles.copy}>2023 &copy; Kevin Oliveira</p>
    </footer>
  )
}