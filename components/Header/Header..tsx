import React from 'react';
import styles from './Header.module.scss';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.logoContainer}>
            <Link href="/">
              {/* https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md#case-i-use-nextjs-and-im-getting-this-error-inside-of-links */}
              <a href="replace">
                <Image
                  width={80}
                  height={80}
                  alt="location"
                  src="/logo.svg"
                  className={styles.logo}
                />
              </a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/o_projekcie" passHref>
              <a href="replace" className={styles.navItemLink}>
                O Projekcie
              </a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/dolacz_do_projektu" passHref>
              <a href="replace" className={styles.navItemLink}>
                Dołącz do projektu
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
