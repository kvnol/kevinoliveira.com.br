import styles from './header.module.scss';
import Logo from './logo/logo';
import ToggleTheme from './toggleTheme/toggleTheme';

export default function Header() {
  return(
    <header role="banner" className={styles.header}>
      <Logo />
      <ToggleTheme />
    </header>
  )
}