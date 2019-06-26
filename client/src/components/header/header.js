import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCar,
  faUser,
  faClipboardList,
} from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <nav>
      <ul>
        <a href="#">
          <FontAwesomeIcon icon={faClipboardList} />
          <li>Dashboard</li>
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faUser} />
          <li>Drivers</li>
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faCar} />
          <li>Trips</li>
        </a>
      </ul>
    </nav>
  );
}

export default Header;
