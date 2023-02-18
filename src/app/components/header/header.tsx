import styles from './header.module.scss';
import Logo from './logo/logo';

export default function header() {
  return(
    <header role="banner" className={styles.header}>
      <Logo />
    </header>
  )
}