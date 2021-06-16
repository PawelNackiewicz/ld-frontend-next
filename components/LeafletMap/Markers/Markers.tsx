import { LatLngTuple } from 'leaflet';
import { useContext } from 'react';
import { Marker, Popup } from 'react-leaflet';
import { Facility } from '../../../types/facility';
import { FacilityContext } from '../LeafletMap';
import styles from './Markers.module.scss';

export const MyMarkersList = ({ markers }: { markers: Array<MarkerProps> }) => {
  const items = markers.map(({ key, ...props }) => <MyPopupMarker key={key} {...props} />);
  return <>{items}</>;
};

export type MarkerProps = {
  readonly key: string;
  readonly content: Partial<Facility>;
  readonly position: LatLngTuple;
};

export const MyPopupMarker = ({
  content: {
    name,
    description,
    streetName,
    houseNumber,
    city,
    postCode,
    backgroundImage,
    logoPath,
    facebook,
    website,
  },
  position,
}: MarkerProps) => {
  const isMobileView = window.innerWidth < 800;
  const { setSelectedFacility } = useContext(FacilityContext);
  const facility = {
    name,
    description,
    streetName,
    houseNumber,
    city,
    postCode,
    backgroundImage,
    logoPath,
    website,
    facebook,
  };

  if (isMobileView) {
    return (
      <Marker position={position}>
        <Popup onOpen={() => setSelectedFacility(facility as Facility)}></Popup>
      </Marker>
    );
  }

  return (
    <Marker position={position}>
      <Popup className={styles.popupContainer}>
        <div className={styles.facilityItemWeb}>
          <img className={styles.facilityImage} alt={name} src={backgroundImage} />
          <img className={styles.logo} alt={name} src={logoPath} />
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
      </Popup>
    </Marker>
  );
};
