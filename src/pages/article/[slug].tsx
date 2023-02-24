import { useRouter } from 'next/router'
import ErrorPage from 'next/error'

import type { PostType } from 'types/post'
import { getPostBySlug, getAllPosts } from 'libs/api/api'
import markdownToHtml from 'zenn-markdown-html'
import NextHeadSeo from 'next-head-seo'
import styles from '@/styles/article.module.scss'

type Props = {
  post: PostType
};

export default function Post({ post }: Props) {
  const router = useRouter()
  const title = `${post.title} | Polskaa's BLOG`
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
  <>
    <article className="${styles.container} znc">
      <NextHeadSeo
        title={title}
        description='iroiro kakuyo'
        canonical={"https://tapolskasa.com/article/" + post.slug}
        og={{
          title: title,
          type: "article"
        }}
      />
      <div className={styles.contents}>
        <div>
          <div className={styles.articleHeader}>
            <h1 className={styles.title}>
            {post.title}
            </h1>
          </div>
          <div className={styles.articleBodyWrapper}>
            <div className={styles.articleBody}>
              <div
                dangerouslySetInnerHTML={{
                __html: `${post.content}`,
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
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'update',
    'slug',
    'ogImage',
    'content',
  ])
  const content = await markdownToHtml(post.content, {
    embedOrigin: 'https://embed.zenn.studio',
  })

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
    }
}