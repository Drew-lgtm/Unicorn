// src/components/Profile.js
import React from 'react';

const Profile = () => {
  return (
    <div style={styles.profileContainer}>
      <img
        src="https://www.kindpng.com/picc/m/150-1503969_user-woman-female-silhouette-head-png-transparent-png.png"
        alt="User Profile"
        style={styles.profileImage}
      />
      <h2>Olivia</h2>
      <div style={styles.infoContainer}>
        <p><strong>Email:</strong> olivia@example.com</p>
        <p><strong>Mobile:</strong> 7774567890</p>
      </div>
    </div>
  );
};

const styles = {
  profileContainer: {
    textAlign: 'center',
    padding: '20px',
  },
  profileImage: {
    borderRadius: '50%',
    width: '150px',
    height: '150px',
    marginBottom: '20px',
  },
  infoContainer: {
    display: 'inline-block',
    textAlign: 'left',
  },
};

export default Profile;
