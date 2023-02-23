import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Head from 'next/head'

import type { PostType } from 'types/post'
import { getPostBySlug, getAllPosts } from 'libs/api/api'
import markdownToHtml from 'zenn-markdown-html'
import styles from '@/styles/article.module.scss'

type Props = {
    article: PostType
};


export default function Article({ article }: Props) {
    const router = useRouter()
    const title = `${article.title} | Polskaa&apos;s BLOG`
    if (!router.isFallback && !article?.slug) {
    return <ErrorPage statusCode={404} />
    }

    return (
    <>
        <article className="znc">
            <Head>
                <title>{title}</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <main className={styles.container}>
                <div className={styles.articleHeader}>
                    <h1 className={styles.title}>
                    {article.title}
                    </h1>
                </div>
                <div className={styles.articleBodyWrapper}>
                    <div className={styles.articleBody}>
                        <div
                            dangerouslySetInnerHTML={{
                            __html: `${article.content}`,
                            }}
                        />
                    </div>
                </div>
            </main>
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
        'slug',
        'author',
        'content',
        'ogImage',
        'coverImage',
    ])
    const content = await markdownToHtml(post.content || '')

    return {
        props: {
            article: {
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