import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './components/Header';
import MyDiary from './components/MyDiary';
import MyTodo from './components/MyTodo';
import MyNotes from './components/MyNotes';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <h1>Welcome to MY APP</h1>
          <div className="button-group">
            <Link to="/mydiary"><button>MyDiary</button></Link>
            <Link to="/mytodo"><button>MyTodo</button></Link>
            <Link to="/mynotes"><button>MyNotes</button></Link>
          </div>
          <Routes>
            <Route path="/mydiary" element={<MyDiary />} />
            <Route path="/mytodo" element={<MyTodo />} />
            <Route path="/mynotes" element={<MyNotes />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
