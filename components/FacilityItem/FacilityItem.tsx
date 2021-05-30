import React from 'react';
import './FacilityItem.scss';
import StoreIcon from '../../assets/icons/store.svg';

type ItemProps = {
  readonly facility: {
    id: string;
    name: string;
    address: string;
  };
};

export const FacilityItem = ({ facility }: ItemProps) => {
  const { id, name, address } = facility;

  return (
    <li className="facilityItem" key={id}>
      <div className="facilityItem-container">
        <img src={StoreIcon} alt="Store Logo" className="facilityIcon" />
        <div className="facilityItem-details">
          <p>{name}</p>
          <span>{address}</span>
        </div>
      </div>
    </li>
  );
};
