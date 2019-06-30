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

import Card from '../../components/card/card';

function Trips({ match }) {
  const [trip, setTrip] = useState({
    tripObj: [
      { tripID: 'b4075407-b1ac-42f6-a915-fe3e96e67e06' },
      { driverID: '9e14d22c-8f4f-4df8-83c1-91578fcde29a' },
      { time: '2019-04-20T03:13:58+01:00' },
      { date: '2019-04-20T03:13:58+01:00' },
      { pickup: '767 Furman Avenue, Dunnavant, Delaware, 5683' },
      { destination: '28 Georgia Avenue, Rose, Tennessee, 7467' },
    ],
    paymentObj: [{ Means: false }, { Amount: '3405.03' }],
    userObj: [
      {
        name: 'Sargent Clemons',
      },
      { gender: 'male' },
      { company: 'VIAGRAND' },
      { email: 'sargentclemons@viagrand.com' },
      { phone: '+234 809-484-1334' },
    ],
  });

  useEffect(() => {
    fetch(`/api/trip/${match.params.tripID}`)
      .then(response => {
        return response.json();
      })
      .then(({ data }) => {
        const trip = { ...data[0] };

        const { isCash, billedAmount } = trip;
        const paymentObj = [];
        paymentObj.push({ Means: isCash ? 'Cash' : 'Non-Cash' });
        paymentObj.push({ Amount: billedAmount });

        const {
          tripID,
          driverID,
          created,
          pickup: { address },
          destination: { address: address1 },
        } = trip;
        const tripObj = [];
        tripObj.push({ TripID: tripID });
        tripObj.push({ DriverID: driverID });
        tripObj.push({ Time: new Date(created).toLocaleTimeString() });
        tripObj.push({ Date: new Date(created).toLocaleDateString() });
        tripObj.push({ Pickup: address });
        tripObj.push({ Destination: address1 });

        const { name, gender, company, email, phone } = trip.user;
        const userObj = [];
        userObj.push({ Name: name });
        userObj.push({ Gender: gender });
        userObj.push({ Company: company });
        userObj.push({ Email: email });
        userObj.push({ Phone: phone });

        setTrip({ tripObj, userObj, paymentObj });
      })
      .catch(err => {
        console.log(`Error: ${err}`);
      });
  }, []);

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
            <Card icon={faCar} category={'trip'} data={trip.tripObj} />
          </div>

          <div className={styles.card}>
            <Card icon={faUser} category={'user'} data={trip.userObj} />
          </div>

          <div className={styles.card}>
            <Card
              icon={faMoneyCheck}
              category={'payment'}
              data={trip.paymentObj}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Trips;
