import NextHeadSeo from 'next-head-seo'
import PostLink from '@/components/post-link';
import styles from '@/styles/Home.module.scss'
import type { PostType } from "types/post";
import { getAllPosts } from "libs/api/api";

type Props = {
  allPosts: Array<PostType>;
};

export default function Home({ allPosts }: Props) {
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
          {allPosts.map((post, idx) => (
            <div key={idx}>
            <PostLink
            title={post.title}
            date={post.date}
            slug={post.slug}
            excerpt={post.excerpt}
            />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'ogImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}