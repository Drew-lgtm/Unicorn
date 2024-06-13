import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MyDiary from './components/MyDiary';
import MyTodo from './components/MyTodo';
import MyNotes from './components/MyNotes';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

const App = () => {
  return (
    <Router>
      <div style={styles.container}>
        <Header />
        <div style={styles.content}>
          <Sidebar />
          <div style={styles.main}>
            <Routes>
              <Route path="/my-diary" element={<MyDiary />} />
              <Route path="/my-todo" element={<MyTodo />} />
              <Route path="/my-notes" element={<MyNotes />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
  },
  content: {
    display: 'flex',
    flex: 1,
  },
  main: {
    flex: 1,
    padding: '10px',
  },
};

export default App;
