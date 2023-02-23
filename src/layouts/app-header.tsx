import Link from 'next/link';
import styles from '@/styles/layouts/app-header.module.scss';

const Header: React.FC  = () => (
    <>
        <div className={styles.container}>
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