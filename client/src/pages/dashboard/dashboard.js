import React, { useState, useEffect } from 'react';
import styles from './dashboard.module.css';
import Header from '../../components/header/header';
import Barchart from '../../components/barchart/barchart';
import Piechart from '../../components/piechart/piechart';

function Dashboard(props) {
  return (
    <>
      <Header />

      <div className={styles.banner} />
      <div className={styles.overlay} />

      <div className={styles.graphs}>
        <div className={styles.card}>
          <Piechart className={styles.pie} dataForGraph={['male', 'female']} />
        </div>
        <div className={styles.card}>
          <Barchart
            dataForGraph={[
              'billedTotal',
              'cashBilledTotal',
              'nonCashBilledTotal',
            ]}
          />
        </div>
        <div className={styles.card}>
          <Piechart dataForGraph={['noOfCashTrips', 'noOfNonCashTrips']} />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
