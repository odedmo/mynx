import { AppProps } from 'next/app';
import './styles.css';
import Layout from '@mynx/mynext/layout'

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <main className="app">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}

export default CustomApp;
