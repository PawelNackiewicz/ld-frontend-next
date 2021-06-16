import { useEffect, useState, createContext } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import { LatLngTuple } from 'leaflet';
import { MyMarkersList, MarkerProps } from './Markers/Markers';
import { Facility } from '../../types/facility';
import styles from './LeafletMap.module.scss';
import axiosConfig from '../../config/axiosConfig';
import { SelectedFacility } from './Mobile/SelectedFacility';

const defaultLatLng: LatLngTuple = [50.675106, 17.921297];
const zoom = 12;

const fetchedFacilities = async (): Promise<Facility[]> =>
  await (
    await axiosConfig.get('/api/facilities')
  ).data;

type FacilityData = {
  readonly selectedFacility: Facility | null;
  setSelectedFacility(facility: Facility): void;
};

export const FacilityContext = createContext<FacilityData>({
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
