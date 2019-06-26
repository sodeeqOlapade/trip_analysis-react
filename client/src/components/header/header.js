import React from 'react';
import styles from './header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCar,
  faUser,
  faClipboardList,
} from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <header className={styles.header}>
      <a href="#">
        <h4 className={styles.brand}>Analytics</h4>
      </a>
      <nav className={styles.mainNavigation}>
        <ul className={styles.listItems}>
          <li className={styles.listItem}>
            <a href="#" className={styles.headerLink}>
              <FontAwesomeIcon icon={faClipboardList} className={styles.icon} />
              <span>Dashboard</span>
            </a>
          </li>
          <li className={styles.listItem}>
            <a href="#" className={styles.headerLink}>
              <FontAwesomeIcon icon={faUser} className={styles.icon} />
              <span>Drivers</span>
            </a>
          </li>
          <li className={styles.listItem}>
            <a href="#" className={styles.headerLink}>
              <FontAwesomeIcon icon={faCar} className={styles.icon} />
              <span>Trips</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
