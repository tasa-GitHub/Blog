import DateFormatter from './date-formatter'
import Link from 'next/link'

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
    <section className='container'>
      <div className='container'>
        <h2>
          <Link
            as={`/article/${slug}`}
            href="/article/[slug]"
            className="hover:underline"
          >
            {title}
          </Link>
        </h2>
        <div>
          <DateFormatter dateString={date} />
        </div>
      </div>
      <div>
        <p>{excerpt}</p>
      </div>
    </section>
  )
}

export default articleLink