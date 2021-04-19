import Head from "next/head";
import styles from "../styles/Home.module.css";
import dynamic from "next/dynamic";
import { Facility } from "../types/facility";
import { QueryClient, useQuery } from "react-query";
import { dehydrate } from "react-query/hydration";

const LeafletMap = dynamic(
  () => import("../components/LeafletMap/LeafletMap"),
  {
    ssr: false,
  }
);

export default function Home() {
  const { data } = useQuery("facilities", fetcher);

  return (
    <div className={styles.container}>
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

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <LeafletMap facilities={data} />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}

const toJSON = (r: Response) => r.json();
const fetcher = () => fetch('http://localhost:3000/api/facilities').then(toJSON)

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery("facilities", fetcher);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
