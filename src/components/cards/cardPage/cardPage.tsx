'use client'

import { Icon } from "@iconify/react";
import Link from "next/link";
import styles from './cardPage.module.scss';

interface Props {
  href: string,
  title: string,
  icon: string,
  target?: '_self' | '_blank',
}

export default function CardPage(props: Props) {
  return(
    <Link className={styles.card} href={props.href} target={props.target}>
      <Icon className={styles.icon} icon={`eva:${props.icon}`} />

      <div className={styles.content}>
        <h3 className={styles.title}>
          {props.title}
        </h3>

        <span className={styles.button}>
          <Icon icon="eva:arrow-ios-forward-fill" />
        </span>
      </div>
    </Link>
  )
}