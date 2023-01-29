import Link from 'next/link';
import styles from '@/styles/layouts/Header/Header.module.scss';

const Header: React.FC  = () => (
    <>
        <div className={styles.wrapper}>
            <ul className={styles.left}>
                <li><Link href="/">home</Link></li>
                <li><Link href="/">profile</Link></li>
                <li><Link href="/">works</Link></li>
                <li><Link href="/">blog</Link></li>
            </ul>
        </div>
    </>
)

export default Header;