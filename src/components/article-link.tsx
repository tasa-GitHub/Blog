import DateFormatter from './date-formatter'
import Link from 'next/link'
import styles from '@/styles/components/article-link.module.scss'

type Props = {
  title: string
  date: string
  excerpt: string
  slug: string
}

const articleLink = ({
  title,
  date,
  excerpt,
  slug,
}: Props) => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className='title'>
          <h2>
            <Link
              as={`/article/${slug}`}
              href="/article/[slug]"
              className="hover:underline"
            >
              {title}
            </Link>
          </h2>
        </div>
        <div className={styles.datetime}>
          <DateFormatter dateString={date} />
        </div>
        <div>
          <p>{excerpt}</p>
        </div>
      </div>
    </section>
  )
}

export default articleLink