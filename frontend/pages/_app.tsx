import '../styles/globals.css'
import Head from 'next/head'
import styles from '../styles/Home.module.css'


import type { AppProps } from 'next/app'
import Link from 'next/link'

function MyApp({ Component, pageProps }: AppProps) {
  return <div className={styles.container}>
    <Head>
      <title>🔥eLLeLL🔥</title>
      <meta name="description" content="🔥" />
      <link rel="icon" href="/vercel.svg" />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;400;700&display=swap" rel="stylesheet" />

    </Head>
    <header className={styles.header}>
      <Link href="/">
        <a>
          <svg className={styles.icon} width="186" height="132" viewBox="0 0 186 132" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 81.5611C24.7134 81.5611 34.1548 82.7193 42.1398 78.5367C48.2598 75.331 49.6045 61.7848 44.7322 56.7175C27.3399 38.6296 23.7771 85.2138 23.7771 92.1467C23.7771 107.307 49.4644 109.094 56.8299 98.6276C62.6947 90.2934 70.4399 79.4779 70.4399 68.9233C70.4399 52.0659 73.0525 32.8427 66.6593 16.8598C64.8796 12.4104 66.4205 26.4432 66.1193 31.2258C65.2817 44.5218 64.607 57.6504 64.607 70.9756C64.607 81.3397 60.2497 102.479 68.4956 110.725C87.4661 129.696 99.1209 47.4497 99.4961 39.7591C99.5382 38.8953 101.17 16.0924 95.7155 22.1525C85.3355 33.6859 87.9384 57.4499 87.9384 71.4077C87.9384 79.0504 85.2778 91.7885 93.7712 96.0352C99.7187 99.0089 103.54 95.6508 106.301 90.4184C107.843 87.4971 121.423 56.7295 114.186 58.3378C107.146 59.9023 107.475 82.1529 107.381 87.394C107.215 96.6807 105.906 107.734 117.103 110.293C144.943 116.657 148.211 62.3706 148.211 45.5919C148.211 39.6652 150.056 24.0918 143.891 19.7762C140.1 17.123 132.334 54.4263 131.901 57.3656C129.848 71.2817 126.261 97.563 134.601 110.293C143.857 124.421 153.465 104.901 155.772 97.9795C163.273 75.4783 167.654 53.8841 167.654 30.3617C167.654 13.2253 159.699 45.946 159.121 49.4805C156.919 62.9358 146.745 102.948 169.598 102.948" stroke="black" strokeWidth="3" strokeLinecap="round" />
            <rect x="0.5" y="0.5" width="184.598" height="130.304" rx="47.5" stroke="black" />
          </svg>
        </a>
      </Link>

      <div className={styles.menu}>
        <Link href="/near"><a>Hva skjer i nærheten</a></Link>
        <Link href="/table"><a>Oppslagstavlen</a></Link>
      </div>
    </header >
    <main className={styles.main}>
      <Component {...pageProps} />
    </main>
    <footer className={styles.footer}>
      Powered by Ester, Even, Odeta Marcin
    </footer>
  </div >
}

export default MyApp
