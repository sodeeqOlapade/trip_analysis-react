import React, { useState, useEffect } from 'react';
import styles from './drivers.module.css';
import Header from '../../components/header/header';
import Masterlist from '../../components/masterslist/masterslist';
import Driverdetails from '../../components/driverdetails/driverdetails';

const driversPromise = fetch('/api/trips');

function Drivers() {
  return (
    <>
      <Header />
      <div className={styles.driversPage}>
        <Masterlist className={styles.masterslist} />
        <div className={styles.details}>
          <div className={styles.display}>
            <div className={styles.detailsHeader}>Driver Details</div>
            <div className={styles.detailsBanner} />
            <div className={styles.detailsFooter} />

            <div className={styles.driverData}>
              <Driverdetails />
              <Driverdetails />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Drivers;
