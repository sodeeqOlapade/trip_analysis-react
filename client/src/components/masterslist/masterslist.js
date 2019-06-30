import React, { useState, useEffect } from 'react';
import styles from './masterslist.module.css';
import Master from '../../components/master/master';

function Masterlist(props) {
  const [mastersList, setMastersList] = useState([]);

  const handleClick = driverID => {
    console.log('driver clicked has id: ', driverID);
    props.processClick(driverID);
  };

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
      {mastersList.map((driver, index) => {
        return <Master key={index} driver={driver} onClick={handleClick} />;
      })}
    </section>
  );
}

export default Masterlist;
