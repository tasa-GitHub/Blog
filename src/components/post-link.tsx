import DateFormatter from './date-formatter'
import Link from 'next/link'

type Props = {
  title: string
  date: string
  excerpt: string
  slug: string
}

const PostLink = ({
  title,
  date,
  excerpt,
  slug,
}: Props) => {
  return (
    <section>
      <div>
        <div>
          <h3>
            <Link
              as={`/article/${slug}`}
              href="/article/[slug]"
              className="hover:underline"
            >
              {title}
            </Link>
          </h3>
          <div>
            <DateFormatter dateString={date} />
          </div>
        </div>
        <div>
          <p>{excerpt}</p>
        </div>
      </div>
    </section>
  )
}

export default PostLink