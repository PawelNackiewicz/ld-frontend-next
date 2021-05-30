import React from 'react';
import styles from './Header.module.scss';
import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href="/" passHref>
              {/* https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md#case-i-use-nextjs-and-im-getting-this-error-inside-of-links */}
              <a href="replace" className={styles.navItemLink}>
                Strona Główna
              </a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/" passHref>
              <a href="replace" className={styles.navItemLink}>
                O Projekcie
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
