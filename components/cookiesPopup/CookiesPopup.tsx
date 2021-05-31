import styles from './CookiesPopup.module.scss';
import { useLocalStorage } from '../../utils/utils';

type CookiesPreferences = 'not-accepted' | 'accepted';

export const CookiesPopup = () => {
  const [accepted, setAccepted] = useLocalStorage<CookiesPreferences>(
    'cookies-accepted',
    'not-accepted',
  );

  if (accepted === 'not-accepted') {
    return (
      <div className={styles.cookiesContainer}>
        <p>Strona wykorzystuje ciasteczka aby podnieść jakość świadczonych usług.</p>
        <button onClick={() => setAccepted('accepted')}>Rozumiem</button>
      </div>
    );
  }

  return null;
};
