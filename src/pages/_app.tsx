import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import Layout from '../layouts/layout'
import 'zenn-content-css'

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    import("zenn-embed-elements")
  },[])
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
