import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './NavBar.css';

function NavBar() {
  return (
    <div className="navbar">
      <div className="navbar-center">
      <button className="navbar-item">Visão Geral</button>
        <button className="navbar-item">Relatórios</button>
        <button className="navbar-item">Metas</button>
      </div>
      <div className="navbar-right">
        <button className="profile-icon">
          <FontAwesomeIcon icon={faUser} size="lg" />
        </button>
      </div>
    </div>
  );
}

export default NavBar;
