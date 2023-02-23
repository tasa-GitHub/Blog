import styles from '@/styles/layouts/AppFooter/AppFooter.module.scss'

const Footer = () => {
    return(
        <>
            <div className={styles.footer}>
                <div className={styles.copyright}>
                    <p>©polskaa</p>
                </div>
            </div>
        </>
    )
}

export default Footer;