import React from 'react';
import styles from './master.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faGreaterThan } from '@fortawesome/free-solid-svg-icons';

function Master(props) {
  return (
    <div className={styles.masterContainer}>
      <div className={styles.avatartContainer}>
        <FontAwesomeIcon icon={faUser} className={styles.icon} />
      </div>
      <a href="#">
        <div className={styles.driverDetails}>
          <h4>drivernamefromprops</h4>
          <h5>drivergenderfromprops</h5>
        </div>
      </a>
      <FontAwesomeIcon icon={faGreaterThan} className={styles.spanIcon} />
    </div>
  );
}

export default Master;
