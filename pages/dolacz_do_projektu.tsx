import Head from 'next/head';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header.';
import styles from './styles/pages.module.scss';
import Image from 'next/image';

export default function AboutProject() {
  return (
    <div>
      <Head>
        <title>Dołącz do projektu</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
          integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
          crossOrigin=""
        />
      </Head>
      <Header />
      <div className={styles.pageContainer}>
        <h1>Hello dolacz do projektu</h1>
        <Image alt="apple" src="/animations/apple.svg" width={160} height={160} />
      </div>
      <Footer />
    </div>
  );
}
