'use client'

import { Icon } from "@iconify/react";
import styles from './footer.module.scss';
import LinkExternal from '@/components/buttons/external/external';
import Link from 'next/link';

export default function Footer() {
  return(
    <footer role="contentinfo" className={styles.footer}>
      <nav className={styles.links}>
        <LinkExternal title="CV" href="/files/cv.pdf" />
        <LinkExternal title="LinkedIn" href="https://linkedin.com/in/kvnol/" />
        <LinkExternal title="GitHub" href="https://github.com/kvnol" />
      </nav>
      <p className={styles.copy}>2023 &copy; Kevin Oliveira</p>
      <p className={styles.copy}><a href="https://nubank.com.br/pagar/4tc3b/eSpPDeBif2" target="_blank" rel="noopener noreferrer"><small><Icon icon="eva:heart-fill" /> Buy me a coffee</small></a></p>
    </footer>
  )
}
