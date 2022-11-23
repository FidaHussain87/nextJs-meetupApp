import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout/Layout'
import Head from 'next/head'
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>MeetUp App</title>
        <meta
          name="description"
          content="A list of all meetups all around the germany"
        ></meta>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
