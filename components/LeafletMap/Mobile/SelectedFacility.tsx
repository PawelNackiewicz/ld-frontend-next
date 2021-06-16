import { Facility } from '../../../types/facility';
import styles from './SelectedFacility.module.scss';

type SelectedFacilityProps = {
  readonly facility: Facility;
};

export const SelectedFacility = ({ facility }: SelectedFacilityProps) => {
  const { name, logoPath, streetName, houseNumber, city, postCode, facebook, website } = facility;

  return (
    <div className={styles.facilityItemMobile}>
      <img className={styles.logo} alt={name} src={logoPath} />
      <div>
        <p className={styles.facilityTitle}>{name}</p>
        <div className={styles.locationContainer}>
          <img alt="location" src="/location.svg" className={styles.icon} />
          <p>
            {streetName} {houseNumber}, {city} {postCode}
          </p>
        </div>
        <div className={styles.mediaContainer}>
          {website && (
            <div className={styles.mediaItem}>
              <img alt="Strona www" src="/www.svg" className={styles.icon} />
              <a href={website}>strona internetowa</a>
            </div>
          )}
          {facebook && (
            <div className={styles.mediaItem}>
              <img alt="Strona www" src="/facebook.svg" className={styles.icon} />
              <a href={facebook}>Znajdź nas na Facebooku</a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
