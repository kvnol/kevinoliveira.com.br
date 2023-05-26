import ContentImage from '@/components/content/contentImage/contentImage';
import ListTags from '@/components/lists/listTags/listTags';
import Image from 'next/image';
import { SyntheticEvent } from 'react';
import styles from './cardJob.module.scss';

type Props = {
  title: string,
  description: string,
  tags: Array<string>
}

export default function CardJob(props: Props) {
  return(
    <div className={styles.card}>
      <h3 className={styles.title}>{props.title}</h3>
      <p className={styles.description}>{props.description}</p>
      <div className={styles.infos}>
        <ListTags list={props.tags}/>
      </div>
    </div>
  )
}