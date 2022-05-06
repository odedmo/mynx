import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import Layout from '@mynx/mynext/layout'

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to mynext!</title>
      </Head>
      <main className="app">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </main>
    </>
  );
}

export default CustomApp;
