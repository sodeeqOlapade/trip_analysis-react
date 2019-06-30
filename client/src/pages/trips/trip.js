import React, { useState, useEffect } from 'react';
import styles from './trip.module.css';
import Header from '../../components/header/header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDotCircle,
  faCar,
  faMoneyCheck,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

function Trips({ match }) {
  const [trip, setTrip] = useState({
    tripID: 'b4075407-b1ac-42f6-a915-fe3e96e67e06',
    driverID: '9e14d22c-8f4f-4df8-83c1-91578fcde29a',
    isCash: false,
    billedAmount: '3,405.03',
    user: {
      name: 'Sargent Clemons',
      gender: 'male',
      company: 'VIAGRAND',
      email: 'sargentclemons@viagrand.com',
      phone: '+234 809-484-1334',
    },
    created: '2019-04-20T03:13:58+01:00',
    pickup: {
      address: '767 Furman Avenue, Dunnavant, Delaware, 5683',
      latitude: 0.627179,
      longitude: 41.869778,
    },
    destination: {
      address: '28 Georgia Avenue, Rose, Tennessee, 7467',
      latitude: -85.156963,
      longitude: 179.578198,
    },
  });

  useEffect(() => {
    fetch(`/api/trip/${match.params.tripID}`)
      .then(response => {
        return response.json();
      })
      .then(({ data }) => {
        const trip = { ...data[0] };
        setTrip(trip);
      })
      .catch(err => {
        console.log(`Error: ${err}`);
      });
  }, []);

  console.log('trip', trip);

  return (
    <>
      <Header />
      <div className={styles.tripsBanner}>
        <h1>Trip Details</h1>
      </div>
      <div className={styles.details}>
        <div className={styles.heading}>
          <FontAwesomeIcon icon={faDotCircle} className={styles.icon} />
          <h4>{match.params.tripID}</h4>
          <FontAwesomeIcon icon={faDotCircle} className={styles.icon} />
        </div>
        <div className={styles.cards}>
          <div className={styles.card}>
            <span className={styles.title}>
              <FontAwesomeIcon icon={faCar} className={styles.titleIcon} />
              <h2>TRIP</h2>
            </span>

            <h4>Trip-ID: {trip.tripID}</h4>
            <h4>Driver-ID: {trip.driverID}</h4>
            <h4>Time: {trip.created}</h4>
            <h4>Date: {trip.created}</h4>
            <h4>Pickup Address: {trip.pickup.address}</h4>
            <h4>Destination Address: {trip.destination.address}</h4>
          </div>

          <div className={styles.card}>
            <span className={styles.title}>
              <FontAwesomeIcon icon={faUser} className={styles.titleIcon} />
              <h2>USER</h2>
            </span>

            <h4>Name: {trip.user.name}</h4>
            <h4>Gender: {trip.user.gender}</h4>
            <h4>Phone Number: {trip.user.phone}</h4>
            <h4>Email: {trip.user.email}</h4>
            <h4>Company: {trip.user.company}</h4>
          </div>

          <div className={styles.card}>
            <span className={styles.title}>
              <FontAwesomeIcon
                icon={faMoneyCheck}
                className={styles.titleIcon}
              />
              <h2>PAYMENT</h2>
            </span>

            <h4>Means of Payment: {trip.isCash ? 'Cash' : 'Non-Cash'}</h4>
            <h4>Amount: {trip.billedAmount}</h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default Trips;
