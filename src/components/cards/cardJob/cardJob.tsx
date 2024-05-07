import ListTags from '@/components/lists/listTags/listTags';
import Image from 'next/image';
import styles from './cardJob.module.scss';

type Props = {
  title: string,
  description: string,
  tags: Array<string>,
  image?: string
}

export default function CardJob(props: Props) {
  return(
    <div className={styles.card}>
      <h3 className={styles.title}>{props.title}</h3>
      <p className={styles.description}>{props.description}</p>
      {props.image && (
        <Image className={styles.image} src={props.image} loading="lazy" width="720" height="560" alt={`Conceito do projeto ${props.title}`} />
      )}
      <div className={styles.infos}>
        <ListTags list={props.tags}/>
      </div>
    </div>
  )
}
