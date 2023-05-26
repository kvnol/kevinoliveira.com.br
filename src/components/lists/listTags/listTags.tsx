import styles from './listTags.module.scss';

type Props = {
  title?: string,
  list: Array<string>
};

export default function ListTags(props: Props) {
  return(
    <div className={styles.wrapper}>
      {props.title ? <h2 className={styles.title}>{props.title}</h2> : ''}
      <ul className={styles.list}>
        {props.list.map((tag, index) => (
          <li key={index} className={styles.tag}>{tag}</li>
        ))}
      </ul>
    </div>
  )
}