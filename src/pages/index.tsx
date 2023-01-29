import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import styles from '@/styles/Home.module.scss'
import type { Article } from "types/article";
import { client } from "libs/client";

type Props = {
  articles: Array<Article>;
};

export default function Home({ articles }: Props) {
  return (
    <>
      <Head>
        <title>Polskaa&apos;s BLOG</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.listWrapper}>
      <h1 className={styles.listTitle}>Articles</h1>
      <div className={styles.list}>
      {articles.map(article => (
          <div key={article.id} className={styles.Article}>
            <Link href={`/article/${article.id}`} passHref>
              <h1>{article.title}</h1>
            </Link>
            <p>{article.createdAt}</p>
          </div>
      ))}
      </div>
      </main>
    </>
  )
}

export const getServerSideProps = async () => {
  const data = await client.get({ endpoint: 'articles' });

  return {
    props: {
      articles: data.contents,
    },
  };
};
