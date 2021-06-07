import { useContext, useEffect, useState, createContext } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { LatLngTuple } from 'leaflet';
import { Facility } from '../../types/facility';
import styles from './LeafletMap.module.scss';
import axiosConfig from '../../config/axiosConfig';

const defaultLatLng: LatLngTuple = [50.675106, 17.921297];
const zoom = 12;

const fetchedFacilities = async (): Promise<Facility[]> =>
  await (
    await axiosConfig.get('/api/facilities')
  ).data;

const MyMarkersList = ({ markers }: { markers: Array<MarkerProps> }) => {
  const items = markers.map(({ key, ...props }) => <MyPopupMarker key={key} {...props} />);
  return <>{items}</>;
};

type MarkerProps = {
  readonly key: string;
  readonly content: Partial<Facility>;
  readonly position: LatLngTuple;
};

const MyPopupMarker = ({
  content: {
    name,
    description,
    streetName,
    houseNumber,
    city,
    postCode,
    backgroundImage,
    logoPath,
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
        <div className={styles.facilityItem}>
          <img className={styles.facilityImage} alt={name} src={backgroundImage} />
          <img className={styles.logo} alt={name} src={logoPath} />
          <p className={styles.facilityTitle}>{name}</p>
          <div className={styles.locationContainer}>
            <img alt="location" src="/location.svg" className={styles.locationIcon} />
            <p>
              {streetName} {houseNumber}, {city} {postCode}
            </p>
          </div>
        </div>
      </Popup>
    </Marker>
  );
};

type SelectedFacilityProps = {
  readonly facility: Facility;
};

const SelectedFacility = ({ facility }: SelectedFacilityProps) => {
  const { name, logoPath, streetName, houseNumber, city, postCode } = facility;

  return (
    <div className={styles.mobileFacilityItem}>
      <img className={styles.mobileLogo} alt={name} src={logoPath} />
      <p className={styles.facilityTitle}>{name}</p>
      <div className={styles.locationContainer}>
        <img alt="location" src="/location.svg" className={styles.locationIcon} />
        <p>
          {streetName} {houseNumber}, {city} {postCode}
        </p>
      </div>
    </div>
  );
};

type FacilityData = {
  readonly selectedFacility: Facility | null;
  setSelectedFacility(facility: Facility): void;
};

const FacilityContext = createContext<FacilityData>({
  selectedFacility: null,
  setSelectedFacility: () => {},
});
FacilityContext.displayName = 'FacilityContext';

const LeafletMap = () => {
  const [facilities, setFacilities] = useState<Facility[]>([]);
  const [selectedFacility, setSelectedFacility] = useState<Facility | null>(null);

  useEffect(() => {
    if (!facilities.length) {
      fetchedFacilities().then((res: Facility[]) => {
        setFacilities(res);
      });
    }
    console.log(selectedFacility);
  }, [selectedFacility, facilities]);

  const markers: MarkerProps[] =
    facilities?.map((facility) => {
      const { id, longitude, latitude, ...facilityDeteails } = facility;
      return {
        key: id,
        content: {
          ...facilityDeteails,
        },
        position: [longitude ?? 0, latitude ?? 0] as LatLngTuple,
      };
    }) ?? [];

  return (
    <FacilityContext.Provider value={{ selectedFacility, setSelectedFacility }}>
      <div className={selectedFacility ? styles.mapForSelectedFacility : styles.map}>
        <MapContainer id="mapId" center={defaultLatLng} zoom={zoom}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <MyMarkersList markers={markers} />
        </MapContainer>
      </div>
      {selectedFacility && <SelectedFacility facility={selectedFacility} />}
    </FacilityContext.Provider>
  );
};

export default LeafletMap;
