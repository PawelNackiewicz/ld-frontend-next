import { useEffect, useState } from 'react';
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
  content: { name, description, streetName, houseNumber, city, postCode },
  position,
}: MarkerProps) => (
  <Marker position={position}>
    <Popup>
      <div className={styles.facilityItem}>
        <img className={styles.facilityImage} alt={name} src="/shop.jpg" />
        <p className={styles.facilityTitle}>{name}</p>
        <div className={styles.locationContainer}>
          <img alt="location" src="/location.svg" className={styles.locationIcon} />
          <p>
            {streetName} {houseNumber}, {city} {postCode}
          </p>
        </div>
        <p>{description}</p>
      </div>
    </Popup>
  </Marker>
);

const LeafletMap = () => {
  const [facilities, setFacilities] = useState<Facility[]>([]);

  useEffect(() => {
    fetchedFacilities().then((res: Facility[]) => {
      setFacilities(res);
    });
  }, []);

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
    <MapContainer id="mapId" center={defaultLatLng} zoom={zoom}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <MyMarkersList markers={markers} />
    </MapContainer>
  );
};

export default LeafletMap;
