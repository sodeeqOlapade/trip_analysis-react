import React, { useState, useEffect } from 'react';
import styles from './masterslist.module.css';
import Master from '../../components/master/master';

function Masterlist() {
  const [mastersList, setMastersList] = useState([]);

  useEffect(() => {
    fetch('/api/drivers')
      .then(response => {
        return response.json();
      })
      .then(drivers => {
        setMastersList(drivers.data);
      })
      .catch(err => {
        console.log(`Error: ${err}`);
      });
  }, []);

  return (
    <section className={styles.mastersContainer}>
      {mastersList.map(driver => {
        return <Master driver={driver} />;
      })}
    </section>
  );
}

export default Masterlist;
