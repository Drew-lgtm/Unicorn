// src/components/Header.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBell, FaUser, FaHome } from 'react-icons/fa';

const Header = () => {
  const navigate = useNavigate();

  const handleBellClick = () => {
    alert('No reminders');
  };

  const handleHomeClick = () => {
    navigate('/');
  };

  const handleProfileClick = () => {
    navigate('/profile');
  };

  return (
    <header style={styles.header}>
      <h1 style={styles.title}>MyMind</h1>
      <div style={styles.iconContainer}>
        <FaHome style={styles.icon} onClick={handleHomeClick} />
        <FaBell style={styles.icon} onClick={handleBellClick} />
        <FaUser style={styles.icon} onClick={handleProfileClick} />
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
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  title: {
    flex: 1,
    textAlign: 'center',
  },
  iconContainer: {
    position: 'absolute',
    right: '20px',
    display: 'flex',
    gap: '20px',
  },
  icon: {
    cursor: 'pointer',
    fontSize: '20px',
  },
};

export default Header;
