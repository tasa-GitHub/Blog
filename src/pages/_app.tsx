import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import Layout from '../layouts/layout'
import 'zenn-content-css'
import NextHeadSeo from 'next-head-seo'

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    import("zenn-embed-elements")
  },[])
  return (
    <>
      <NextHeadSeo
          og={{
            image: "https://tapolskasa.com/og-image.jpg",
            type: 'website',
            siteName: "Polskaa's BLOG",
          }}
          twitter={{
            card: "summary"
          }}
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
