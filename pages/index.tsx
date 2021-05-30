import Head from 'next/head';
import dynamic from 'next/dynamic';
import { QueryClient, useQuery } from 'react-query';
import { dehydrate } from 'react-query/hydration';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header.';

const LeafletMap = dynamic(() => import('../components/LeafletMap/LeafletMap'), {
  ssr: false,
});

export default function Home() {
  const { data } = useQuery('facilities', fetcher);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
          integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
          crossOrigin=""
        />
      </Head>

      <Header />

      <main>
        <LeafletMap facilities={data} />
      </main>

      <Footer />
    </div>
  );
}

const toJSON = (r: Response) => r.json();
const fetcher = () => fetch('http://localhost:3000/api/facilities').then(toJSON);

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery('facilities', fetcher);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
