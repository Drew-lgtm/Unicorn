// src/components/Header.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faUser } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleBellClick = () => {
    alert('No reminders');
  };

  const handleUserClick = () => {
    navigate('/profile');
  };

  return (
    <header style={styles.header}>
      <h1 style={styles.title}>Welcome to MyMind APP</h1>
      <div style={styles.icons}>
        <FontAwesomeIcon icon={faBell} style={styles.icon} onClick={handleBellClick} />
        <FontAwesomeIcon icon={faUser} style={styles.icon} onClick={handleUserClick} />
      </div>
    </header>
  );
};

const styles = {
  header: {
    width: '100%',
    padding: '20px',
    backgroundColor: '#282c34',
    color: 'white',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    margin: 0,
  },
  icons: {
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    marginLeft: '20px',
    cursor: 'pointer',
  },
};

export default Header;
