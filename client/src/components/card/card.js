import React from 'react';
import styles from './card.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Card(props) {
  return (
    <>
      <span className={styles.title}>
        <FontAwesomeIcon icon={props.icon} className={styles.titleIcon} />
        <h2>{props.category.toUpperCase()}</h2>
      </span>

      {[...props.data].map((data, index) => {
        const dataKey = Object.keys(data)[0];
        return (
          <h4 key={index}>
            {`${dataKey}:  `}
            {data[dataKey]}
          </h4>
        );
      })}
    </>
  );
}

export default Card;
