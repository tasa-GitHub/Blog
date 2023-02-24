import NextHeadSeo from 'next-head-seo'
import ArticleLink from '@/components/article-link';
import styles from '@/styles/Home.module.scss'
import type { ArticleType } from "types/article";
import { getAllArticles } from "libs/api/api";

type Props = {
  allArticles: Array<ArticleType>;
};

export default function Home({ allArticles }: Props) {
  return (
    <>
      <NextHeadSeo
        title="Polskaa's BLOG"
        description='iroiro kakuyo'
        canonical="https://tapolskasa.com"
        og={{
          title: "Polskaa's Blog"
        }}
      />
      <div className={styles.container}>
        <div className={styles.contents}>
          {allArticles.map((article, idx) => (
            <div key={idx}>
            <ArticleLink
            title={article.title}
            date={article.date}
            slug={article.slug}
            excerpt={article.excerpt}
            />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export const getStaticProps = async () => {
  const allArticles = getAllArticles([
    'title',
    'date',
    'slug',
    'ogImage',
    'excerpt',
  ])

  return {
    props: { allArticles },
  }
}