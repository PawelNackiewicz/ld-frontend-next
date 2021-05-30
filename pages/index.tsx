import Head from 'next/head';
import dynamic from 'next/dynamic';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header.';

const LeafletMap = dynamic(() => import('../components/LeafletMap/LeafletMap'), {
  ssr: false,
});

export default function Home() {
  return (
    <div>
      <Head>
        <title>Lokalne Dobrodziejstwa</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
          integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
          crossOrigin=""
        />
      </Head>
      <Header />
      <LeafletMap />
      <Footer />
    </div>
  );
}
