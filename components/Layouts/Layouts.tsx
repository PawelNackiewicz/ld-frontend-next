import Head from 'next/head';
import { DefaultSeo } from 'next-seo';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import * as gtag from '../../lib/gtag';
import Header from '../Header/Header.';
import Footer from '../Footer/Footer';
import { CookiesPopup } from '../cookiesPopup/CookiesPopup';
import styles from './Layouts.module.scss';

const isProduction = process.env.NODE_ENV === 'production';

const meta = {
  title: 'Lokalne Dobrodziejstwa',
  description: 'Lokalne produkty od polskich dostawców.',
};

export default function Layout({ children, title = 'Lokalne Dobrodziejstwa' }: any) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      /* invoke analytics function only for production */
      if (isProduction) gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <div className={styles.pageContainer}>
      <DefaultSeo
        title={meta.title}
        description={meta.description}
        openGraph={{
          type: 'website',
          title: meta.title,
          locale: 'pl_PL',
          url: 'https://lokalne-dobrodziejstwa.pl/',
          description: meta.description,
          site_name: meta.title,
        }}
      />
      <Head>
        <title>{title}</title>
        <link rel="apple-touch-icon" sizes="57x57" href="/favicon/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/favicon/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/favicon/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/favicon/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/favicon/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/favicon/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/favicon/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/favicon/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-icon-180x180.png" />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/favicon/android-icon-192x192.png"
        />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/favicon/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>
      <Header />
      {children}
      <CookiesPopup />
      <Footer />
    </div>
  );
}
