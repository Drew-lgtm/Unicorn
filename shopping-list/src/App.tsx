import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ListOverview from './components/ListOverview';
import PrivateRoute from './components/PrivateRoute';
import { DarkModeProvider } from './components/DarkModeContext';
import './styles.css';

const App: React.FC = () => {
  return (
    <Router>
      <DarkModeProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<ListOverview />} />
        </Routes>
      </DarkModeProvider>
    </Router>
  );
};

export default App;
