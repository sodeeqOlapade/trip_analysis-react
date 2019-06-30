import React from 'react';
import styles from './header.module.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faCar,
  faUser,
  faClipboardList,
} from '@fortawesome/free-solid-svg-icons';

function Header(props) {
  return (
    <header className={styles.header}>
      <Link to="/">
        <h4 className={styles.brand}>Analytics</h4>
      </Link>
      <nav className={styles.mainNavigation}>
        <ul className={styles.listItems}>
          <li className={styles.listItem}>
            <Link to="/" className={styles.headerLink}>
              <FontAwesomeIcon icon={faClipboardList} className={styles.icon} />
              <span>Dashboard</span>
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link to="/drivers" className={styles.headerLink}>
              <FontAwesomeIcon icon={faUser} className={styles.icon} />
              <span>Drivers</span>
            </Link>
          </li>
          {/* <li className={styles.listItem}>
            <Link to="/trips">
              <a href="#" className={styles.headerLink}>
                <FontAwesomeIcon icon={faCar} className={styles.icon} />
                <span>Trips</span>
              </a>
            </Link>
          </li> */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
