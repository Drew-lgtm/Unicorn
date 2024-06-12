// src/components/Header.js
import React from 'react';

const Header = () => {
  return (
    <header style={styles.header}>
      <h1>Welcome to MY APP</h1>
    </header>
  );
};

const styles = {
  header: {
    width: '100%',
    padding: '20px',
    backgroundColor: '#282c34',
    color: 'white',
    textAlign: 'center',
  },
};

export default Header;
