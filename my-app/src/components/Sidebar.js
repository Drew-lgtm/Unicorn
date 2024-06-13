// src/components/Sidebar.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles.css';

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="sidebar">
      <button onClick={() => navigate('/my-diary')}>MyDiary</button>
      <button onClick={() => navigate('/my-todo')}>MyTodo</button>
      <button onClick={() => navigate('/my-notes')}>MyNotes</button>
    </div>
  );
};

export default Sidebar;
