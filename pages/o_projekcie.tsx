import Head from 'next/head';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header.';

export default function AboutProject() {
  return (
    <div>
      <Head>
        <title>O Projekcie</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
          integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
          crossOrigin=""
        />
      </Head>
      <Header />
      <h1>Hello About Project</h1>
      <Footer />
    </div>
  );
}
