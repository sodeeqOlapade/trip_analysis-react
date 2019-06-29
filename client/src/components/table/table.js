import React, { useState, useEffect } from 'react';
import styles from './table.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

function Table() {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetch('/api/drivers')
      .then(response => {
        return response.json();
      })
      .then(({ data }) => {
        const drivers = data;
        //make a fetch request to fetch trips

        fetch('/api/trips')
          .then(response => {
            return response.json();
          })
          .then(({ data }) => {
            const dataForTable = [...data].map(trip => {
              const tableData = {};
              tableData['username'] = trip.user.name;
              tableData['billedAmount'] = trip.billedAmount;
              const driver = [...drivers].find(
                driver => driver.driverID === trip.driverID,
              );

              if (driver === undefined) {
                tableData['driver'] = 'Not Available';
                return tableData;
              }
              const driverName = driver.name;
              tableData['driver'] = driverName;
              return tableData;
            });

            setTableData(dataForTable);
          })
          .catch(err => {
            console.log(`Error: ${err}`);
          });
      })
      .catch(err => {
        console.log(`Error: ${err}`);
      });
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>INFO</th>
          <th>DRIVER</th>
          <th>USER</th>
          <th>TRIP</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map(data => {
          return (
            <tr>
              <td>
                <div className={styles.icon}>
                  <FontAwesomeIcon icon={faInfoCircle} />
                  <span>-Info</span>
                </div>
              </td>
              <td>{data.driver}</td>
              <td>{data.username}</td>
              <td>{data.billedAmount}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;