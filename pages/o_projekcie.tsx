import Image from 'next/image';
import Layout from '../components/Layouts/Layouts';
import styles from './styles/pages.module.scss';

export default function AboutProject() {
  return (
    <Layout>
      <div className={styles.pageContainer}>
        <h1>Projekt Lokalne Dobrodziejstwa</h1>
        <div className={styles.logoContainer}>
          <Image width={200} height={200} alt="location" src="/logo.svg" />
        </div>
        <div className={styles.articleContainer}>
          <article>
            Projekt powstał aby pomóc <strong>lokalnym producentom żywności</strong>.<br /> To
            właśnie oni wykonują wiele trudu aby uzyskać{' '}
            <strong>najlepszej jakości produkty</strong>. <br /> Niestety obecnie większość Polaków
            wybiera szybkie zakupy w zagranicznych sieciach sklepów.
          </article>
          <Image alt="apple" src="/fruits/grape.svg" width={160} height={160} />
        </div>
        <div className={styles.articleContainer}>
          <Image alt="apple" src="/fruits/apple.svg" width={160} height={160} />
          <article>
            Celem tego projektu jest pomoc regionalnym przedsiębiorcom i rolnikom w dostarczeniu
            lepszego jakościowo jedzenia do domów lokalnych społeczności.
            <br /> Dzięki tej stronie każdy zainteresowany będzie mógł znaleźć najbliższą
            mleczarnie, pobliski sad czy miejscową piekarnie.
          </article>
        </div>
        <article>
          Powinniśmy <strong>dbać o nasze zdrowie</strong> i to co jemy - dzięki produktom lokalnym
          możemy to osiągnąć.
        </article>
        <article>
          <strong>Dbajmy o naszą polską gospodarkę</strong> - zamiast finansować zagraniczne
          koncerny spożywcze,
          <br /> pomagajmy miejscowej społeczności.
        </article>
      </div>
    </Layout>
  );
}
