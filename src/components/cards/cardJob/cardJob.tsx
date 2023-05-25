import ContentImage from '@/components/content/contentImage/contentImage';
import Image from 'next/image';
import { SyntheticEvent } from 'react';
import styles from './cardJob.module.scss';

type Props = {
  slug: string,
  title: string,
  description: string,
  tags: Array<string>
}

export default function CardJob(props: Props) {
  return(
    <div className={styles.card}>
      <details className={styles.content}>
        <summary className={styles.header}>
          {props.slug ? <Image className={styles.logo} src={`/img/portfolio/icon-${props.slug}.png`} width="24" height="24" alt="" loading="lazy" /> : ''}

          <h3 className={styles.title}>{props.title}</h3>
        </summary>
        <figure className={styles.figure}>
          {props.slug ? <Image src={`/img/portfolio/thumb-${props.slug}.png`} width="296" height="186" loading="lazy" alt="" /> : ''}
        </figure>
        <p className={styles.description}>{props.description}</p>
      </details>
      <div className={styles.infos}>
        <ul className={styles.tags}>
          {props.tags.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>  
    </div>
  )
}