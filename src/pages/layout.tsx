import Header from '@/components/layouts/Header/Header'
import Footer from '@/components/layouts/Footer/Footer'
import Top from '@/components/layouts/Top/Top'
import { ReactNode } from 'react'


export default function Layout ({ children }:{
    children?: ReactNode;
}) {
    return (
        <>
            <Header />
            <Top/>
            <main>{children}</main>
            <Footer />
        </>
    )
}