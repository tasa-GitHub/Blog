import Header from '@/components/layouts/Header/Header'
import Footer from '@/components/layouts/Footer/Footer'
import Top from '@/components/layouts/Top/Top'
import { ReactNode } from 'react'
import styles from '@/styles/Layouts.module.scss'


export default function Layout ({ children }:{
    children?: ReactNode;
}) {
    return (
        <>
            <div className={styles.wrapper}>
            <Header />
            <Top/>
            <main>{children}</main>
            <Footer/>
            </div>
        </>
    )
}