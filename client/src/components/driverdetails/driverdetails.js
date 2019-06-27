import React from 'react';
import styles from './driverdetails.module.css';

function Driverdetails(props) {
  return (
    <div className={styles.driverDetails}>
      <div className={styles.driverBio}>
        <h3>DRIVER'S BIO</h3>
        <h4>
          <span>Driver's Name: </span>
          {props.driver.name}
        </h4>
        <h4>
          <span>Identifiation Number: </span>
          {props.driverID}
        </h4>
        <h4>
          <span>D.O.B : </span>
          {props.driver.DOB}
        </h4>
        <h4>
          <span>Phone Number : </span>
          {props.driver.phone}
        </h4>
        <h4>
          <span>Home Address : </span>
          {props.driver.address}
        </h4>
      </div>

      <div className={styles.driverWork}>
        <h3>WORK-INFO</h3>
        <h4>
          <span>{props.driver.agent} : Agent</span>
        </h4>
        <h4>
          <span>{props.driver.vehicleID.length} : Number of Vehicles</span>
        </h4>
        <h4>
          <span> {props.driver.vehicleID} : Vehicle ID</span>
        </h4>
      </div>
    </div>
  );
}

export default Driverdetails;
