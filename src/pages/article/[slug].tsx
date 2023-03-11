import { useRouter } from 'next/router'
import ErrorPage from 'next/error'

import type { ArticleType } from 'types/article'
import { getArticleBySlug, getAllArticles } from 'libs/api/api'
import markdownToHtml from 'zenn-markdown-html'
import NextHeadSeo from 'next-head-seo'
import styles from '@/styles/article.module.scss'
import DateFormatter from '@/components/date-formatter'

type Props = {
  article: ArticleType
};

export default function Article({ article }: Props) {
  const router = useRouter()
  const title = `${article.title} | Polskaa's BLOG`
  if (!router.isFallback && !article?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
  <>
      <NextHeadSeo
        title={title}
        canonical={"https://tapolskasa.com/article/" + article.slug}
        og={{
          title: title,
        }}
      />
    <article className={styles.container}>
      <div>
        <header>
          <h1 className={styles.title}>
          {article.title}
          </h1>
          <div className={styles.date}>
          <DateFormatter dateString={article.date}/>
          </div>
        </header>
        <div className='znc'>
          <div className={styles.content}>
            <div className={styles.md}>
              <div
                dangerouslySetInnerHTML={{
                __html: `${article.content}`,
                }}
                />
            </div>
          </div>
        </div>
      </div>
    </article>
  </>
  );
}


type Params = {
  params: {
      slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const article = getArticleBySlug(params.slug, [
    'title',
    'date',
    'update',
    'slug',
    'ogImage',
    'content',
  ])
  const content = await markdownToHtml(article.content, {
    embedOrigin: 'https://embed.zenn.studio',
  })

  return {
    props: {
      article: {
        ...article,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const articles = getAllArticles(['slug'])

  return {
    paths: articles.map((article) => {
      return {
        params: {
          slug: article.slug,
        },
      }
    }),
    fallback: false,
    }
}