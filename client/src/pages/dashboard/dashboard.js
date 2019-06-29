import React, { useState, useEffect } from 'react';
import styles from './dashboard.module.css';
import Header from '../../components/header/header';
import Barchart from '../../components/barchart/barchart';
import Piechart from '../../components/piechart/piechart';
import Table from '../../components/table/table';

function Dashboard(props) {
  return (
    <>
      <Header />

      <div className={styles.banner} />
      <div className={styles.overlay} />

      <div className={styles.graphs}>
        <div className={styles.gender}>
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
        <div className={styles.trips}>
          <Piechart dataForGraph={['noOfCashTrips', 'noOfNonCashTrips']} />
        </div>
      </div>

      <div className={styles.border} />

      <div className={styles.summary}>
        <h1>Trips Summary</h1>
      </div>

      <div className={styles.analysis}>
        <Table />
      </div>
    </>
  );
}

export default Dashboard;
