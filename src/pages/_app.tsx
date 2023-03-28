import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { Inter, Raleway } from 'next/font/google'
import { useEffect } from 'react'
import Layout from '../layouts/layout'
import 'zenn-content-css'
import NextHeadSeo from 'next-head-seo'

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
      <NextHeadSeo
        description='iroiro kakuyo'
        og={{
          image: "https://polskaa-blog.vercel.app/og-image.jpg",
          type: 'website',
          siteName: 'tapolskasa BLOG',
          description: 'iroiro kakuyo'
        }}
        twitter={{
          card: "summary"
        }}
      />
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
