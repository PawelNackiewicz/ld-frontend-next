import Head from 'next/head';
import dynamic from 'next/dynamic';
import Layout from '../components/Layouts/Layouts';
import SearchBar from '../components/SearchBar/SearchBar';

const LeafletMap = dynamic(() => import('../components/LeafletMap/LeafletMap'), {
  ssr: false,
});

export default function Home() {
  return (
    <Layout>
      <Head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
          integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
          crossOrigin=""
        />
      </Head>
      <SearchBar />
      <LeafletMap />
    </Layout>
  );
}
