import ButtonCTA from '@/components/buttons/cta/cta';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import styles from './listAccordion.module.scss';

type Props = {
  list: Array<ItemProps>
}

type ItemProps = {
  title: string,
  content: string,
  thumb: string,
  thumbAlt: string
}

export default function ListAccordion(props: Props) {
 return(
    <ol className={styles.list}>
      {props.list.map((item, index) => (
        <li key={index} className={styles.item}>
          <details>
            <summary className={styles.title}>
              <h2>{item.title}</h2>
              <Icon icon="eva:diagonal-arrow-right-up-outline" />
            </summary>
            <div className={styles.content}>
              <p>{item.content}</p>
              <ButtonCTA title="Entre em contato" href="mailto:me@kevinoliveira.com.br" />

              {item.thumb ?
                <Image className={styles.image} src={item.thumb} width="648" height="486" loading="lazy" alt={item.thumbAlt} />
                : ''
              }

            </div>
          </details>
        </li>
      ))}
    </ol>
 )
}