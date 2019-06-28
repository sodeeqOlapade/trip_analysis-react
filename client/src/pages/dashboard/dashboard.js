import React, { useState, useEffect } from 'react';
import styles from './dashboard.module.css';
import Header from '../../components/header/header';

function Dashboard(props) {
  return (
    <>
      <Header />

      <div className={styles.banner} />
      <div className={styles.overlay} />
    </>
  );
}

export default Dashboard;
