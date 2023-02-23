import Header from '@/layouts/AppHeader/AppHeader'
import Footer from '@/layouts/AppFooter/AppFooter'
import Top from '@/layouts/Top/Top'
import { ReactNode } from 'react'
import styles from '@/styles/layouts/Layouts.module.scss'


export default function Layout ({ children }:{
    children?: ReactNode;
}) {
    return (
        <>
            <div className={styles.container}>
                <Header />
                <Top/>
                <main>{children}</main>
                <Footer/>
            </div>
        </>
    )
}