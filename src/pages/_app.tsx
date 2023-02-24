import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter, Raleway } from 'next/font/google'
import { useEffect } from 'react'
import Layout from '../layouts/layout'
import 'zenn-content-css'

const inter = Inter({
  weight: '400',
  subsets: ['latin'],
})

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    import("zenn-embed-elements")
  },[])
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
