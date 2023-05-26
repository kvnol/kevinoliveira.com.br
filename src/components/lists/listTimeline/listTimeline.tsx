import styles from './listTimeline.module.scss';

type Props = {
  title: string,
  children: React.ReactNode
}

export default function ListTimeline(props: Props) {
  return(
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{props.title}</h2>
      <ol className={styles.list}>
        {props.children}
      </ol>
    </div>
  )
}