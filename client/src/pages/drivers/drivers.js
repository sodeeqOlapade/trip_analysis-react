import React, { useState, useEffect } from 'react';
import styles from './drivers.module.css';
import Header from '../../components/header/header';
import Masterlist from '../../components/masterslist/masterslist';
import Driverdetails from '../../components/driverdetails/driverdetails';

const driversPromise = fetch('/api/trips');

function Drivers() {
  const [driverData, setDriverData] = useState({
    driverID: '',
    vehicleID: [],
    name: '',
    gender: '',
    agent: '',
    email: '',
    phone: '',
    DOB: '',
    address: '',
  });

  useEffect(() => {
    fetch('/api/drivers')
      .then(response => {
        return response.json();
      })
      .then(drivers => {
        setDriverData(drivers.data[0]);
      })
      .catch(err => {
        console.log(`Error: ${err}`);
      });
  }, []);

  const getClickedDriver = driverID => {
    console.log('erwijjklDriver', driverID);
    fetch(`/api/driver/${driverID}`)
      .then(response => {
        return response.json();
      })
      .then(driver => {
        console.log('gotten from request: ', driver);
        setDriverData(driver.data);
      })
      .catch(err => {
        console.log(`Error: ${err}`);
      });
  };

  return (
    <>
      <Header />
      <div className={styles.driversPage}>
        <Masterlist
          className={styles.masterslist}
          processClick={getClickedDriver}
        />
        <div className={styles.details}>
          <div className={styles.display}>
            <div className={styles.detailsHeader}>Driver Details</div>
            <div className={styles.detailsBanner} />
            <div className={styles.detailsFooter} />
          </div>
          <Driverdetails driver={driverData} />
        </div>
      </div>
    </>
  );
}

export default Drivers;
