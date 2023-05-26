import { Icon } from "@iconify/react";
import Link from "next/link";
import styles from './external.module.scss';

type Props = {
  href: string,
  title: string
}

export default function LinkExternal(props: Props) {
  return(
    <Link className={styles.button} href={props.href} target="_blank">
      <span>{props.title}</span>
      <Icon className={styles.icon} icon="eva:external-link-outline" />
    </Link>
  )
}