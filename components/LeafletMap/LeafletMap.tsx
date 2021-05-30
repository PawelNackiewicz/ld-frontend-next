import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { LatLngTuple } from 'leaflet';
import { Facility } from '../../types/facility';

const defaultLatLng: LatLngTuple = [50.675106, 17.921297];
const zoom = 12;

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
      <div>
        <img alt={name} src="/shop_image.jpg" />
        <p>{name}</p>
        <div>
          <img alt="location" src="/location.svg" />
          <p>
            {streetName} {houseNumber}, {city} {postCode}
          </p>
          )
        </div>
        <p>{description}</p>
      </div>
    </Popup>
  </Marker>
);

type LeafletMapProps = {
  facilities: Facility[];
};

const LeafletMap = ({ facilities }: LeafletMapProps) => {
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
