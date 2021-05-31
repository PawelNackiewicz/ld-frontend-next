import Image from 'next/image';
import Layout from '../components/Layouts/Layouts';
import styles from './styles/pages.module.scss';

export default function AboutProject() {
  return (
    <Layout>
      <div className={styles.pageContainer}>
        <h1>Jak dołączyć do projektu?</h1>
        <article>
          Projekt jest skierowany do osób które posiadają <strong>własne produkty</strong>.<br />{' '}
          Dołaczenie do projektu jest <strong>całkowicie darmowe</strong>.<br /> Aby dołączyć do
          projektu wystarczy wysłać maila na adres{' '}
          <a href="mailto:lokalne.dobrodziejstwa@gmail.com">lokalne.dobrodziejstwa@gmail.com</a>{' '}
          <br />z niezbędnymi informacjami.{' '}
        </article>
        <div>
          <p>Do tych informacji należą:</p>
          <ul>
            <li>Dane osoby kontaktowej - Imie nazwisko oraz email</li>
            <li>Nazwa firmy (jeśli istnieje)</li>
            <li>Informacje o ofercie</li>
            <li>Zdjęcie produktów oraz (ewentualnie) logo firmy</li>
            <li>Informacje adresowe o placówkach gdzie można zakupić produkty </li>
            <li>Adres strony internetowe/lub innych social mediów (jeśli istnieją)</li>
          </ul>
          <p>
            Pamiętaj, że wysyłając maila z takimi informacjami{' '}
            <strong>zgadzasz się na przetwarzanie ww danych</strong>.{' '}
          </p>
        </div>
        <Image alt="apple" src="/fruits/apple.svg" width={160} height={160} />
      </div>
    </Layout>
  );
}
