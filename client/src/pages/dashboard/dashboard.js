import React, { useState, useEffect } from 'react';
import styles from './dashboard.module.css';
import Header from '../../components/header/header';
import Barchart from '../../components/barchart/barchart';

function Dashboard(props) {
  return (
    <>
      <Header />

      <div className={styles.banner} />
      <div className={styles.overlay} />
      <Barchart
        dataForGraph={['billedTotal', 'cashBilledTotal', 'nonCashBilledTotal']}
      />
    </>
  );
}

export default Dashboard;
