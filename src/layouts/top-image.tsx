import styles from '@/styles/layouts/Top/Top.module.scss'

const Top: React.FC = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.blurFilter}>
                    <h1>hello,world.<br/>hello,polskaa.</h1>
                </div>
            </div>
        </>
    )
}

export default Top;