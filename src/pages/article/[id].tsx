import { GetServerSideProps } from 'next';
import type { Article } from 'types/article';
import { client } from 'libs/client';
import styles from '@/styles/article.module.scss'

type Props = {
    article: Article;
};


export default function BlogId({ article }: Props) {
    return (
    <main className={styles.wrapper}>
        <div className={styles.articleHeader}>
            <h1 className={styles.title}>
            {article.title}
            </h1>
            {article.tag && (
            <div className={styles.tag}>
                {article.tag}
            </div>
            )}
        </div>
        <div className={styles.articleBodyWrapper}>
            <div className={styles.articleBody}>
                <div
                    dangerouslySetInnerHTML={{
                    __html: `${article.body}`,
                    }}
                />
            </div>
        </div>
    </main>
);
}


export const getStaticPaths = async () => {
    const data = await client.get({ endpoint: "articles" });

    const paths = data.contents.map((content: any) => `/article/${content.id}`);
    return { paths, fallback: false };
};

export const getStaticProps = async (ctx: any) => {
    const id = ctx.params?.id;
    const idExceptArray = id instanceof Array ? id[0] : id;
    const data = await client.get({
    endpoint: 'articles',
    contentId: idExceptArray,
    });

return {
    props: {
        article: data,
    },
};
};