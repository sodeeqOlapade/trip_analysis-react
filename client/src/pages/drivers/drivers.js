import React, { useState, useEffect } from 'react';
import styles from './drivers.module.css';
import Header from '../../components/header/header';
import Master from '../../components/master/master';
import Masterlist from '../../components/masterslist/masterslist';

const driversPromise = fetch('/api/trips');

function Drivers() {
  return (
    <>
      <Header />
      <Masterlist />
    </>
  );
}

export default Drivers;
