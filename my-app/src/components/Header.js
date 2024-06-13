import React, { useState } from 'react';
import { FaBell } from 'react-icons/fa'; // Import bell icon from react-icons
import './Header.css'; // Optionally, import CSS for styling

const Header = () => {
  const [showReminders, setShowReminders] = useState(false);

  const toggleReminders = () => {
    setShowReminders(!showReminders);
  };

  return (
    <header style={styles.header}>
      <div className="header-content">
        <h1>Welcome to MY APP</h1>
        <div className="header-icons">
          <div onClick={toggleReminders} className="icon-container">
            <FaBell className="icon" />
          </div>
          {showReminders && <p className="reminder-text">Don't forget to create diary entry today!</p>}
        </div>
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
    justifyContent: 'center', // Center items horizontally
    alignItems: 'center', // Center items vertically
  },
};

export default Header;
