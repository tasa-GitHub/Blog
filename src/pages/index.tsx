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
        canonical="https://tapolskasa.com"
        og={{
          title: "Polskaa's Blog"
        }}
      />
      <div className={styles.container}>
        {allArticles.map((article, idx) => (
          <div className={styles.articlelink} key={idx}>
          <ArticleLink
          title={article.title}
          date={article.date}
          slug={article.slug}
          excerpt={article.excerpt}
          />
          </div>
        ))}
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