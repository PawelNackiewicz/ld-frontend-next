import { useEffect, useState, createContext } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import { LatLngTuple } from 'leaflet';
import { MyMarkersList, MarkerProps } from './Markers/Markers';
import { Facility } from '../../types/facility';
import styles from './LeafletMap.module.scss';
import axiosConfig from '../../config/axiosConfig';
import { SelectedFacility } from './Mobile/SelectedFacility';

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

type MapDriverProps = {
  position: LatLngTuple;
};

const MapDriver = ({ position }: MapDriverProps) => {
  const map = useMap();
  map.setView(position);
  return null;
};

const LeafletMap = () => {
  const [facilities, setFacilities] = useState<Facility[]>([]);
  const [selectedFacility, setSelectedFacility] = useState<Facility | null>(null);
  const [position, setPosition] = useState<LatLngTuple>([50.668417899999994, 17.8791764]);
  const zoom = 12;

  useEffect(() => {
    if (!facilities.length) {
      fetchedFacilities().then((res: Facility[]) => {
        setFacilities(res);
      });
    }
  }, [selectedFacility, facilities]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        setPosition([position.coords.latitude, position.coords.longitude]);
      },
      (error) => {
        setPosition([50.668417899999994, 17.8791764]);
      },
    );
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
    <FacilityContext.Provider value={{ selectedFacility, setSelectedFacility }}>
      <div className={selectedFacility ? styles.mapForSelectedFacility : styles.map}>
        <MapContainer id="mapId" center={position} zoom={zoom}>
          <MapDriver position={position} />
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
