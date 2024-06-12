// src/components/Sidebar.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
  };

  return (
    <div style={styles.sidebar}>
      <button style={styles.button} onClick={() => navigateTo('/my-diary')}>MyDiary</button>
      <button style={styles.button} onClick={() => navigateTo('/my-todo')}>MyTodo</button>
      <button style={styles.button} onClick={() => navigateTo('/my-notes')}>MyNotes</button>
    </div>
  );
};

const styles = {
  sidebar: {
    width: '200px',
    backgroundColor: '#f0f0f0',
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    
  },
  button: {
    margin: '10px 0',
    padding: '15px',
    fontSize: '16px',
    cursor: 'pointer',
  },

};

export default Sidebar;
