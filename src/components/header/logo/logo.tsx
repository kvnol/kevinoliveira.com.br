import styles from './logo.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
  return(
    <Link href="/" aria-label="Kevin Oliveira" title="Kevin Oliveira" className={styles.logo}>
      <div className={styles.flipper}>
        <div className={`${styles.circle} ${styles.front}`}>
        <Image className={styles.symbol} src="/img/logo.svg" width="36" height="20" aria-hidden="true" alt="" />
        </div>
        <div className={`${styles.circle} ${styles.back}`}>
          <Image className={styles.avatar} src="/img/avatar-sm.png"  aria-hidden="true" width="34" height="60" alt="" />
        </div>
      </div>
    </Link>
  )
}