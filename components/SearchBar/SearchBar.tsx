import styles from './SearchBar.module.scss';

export default function SearchBar() {
  return (
    <div className={styles.inputContainer}>
      <input
        className={styles.inputField}
        type="text"
        placeholder="Wpisz nazwę, adres lub rodzaj usług"
      />
      <img alt="search" src="/loupe.svg" className={styles.icon} />
    </div>
  );
}
