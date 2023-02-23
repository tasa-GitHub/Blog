import Header from '@/layouts/app-header'
import Footer from '@/layouts/app-footer'
import Top from '@/layouts/top-image'
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