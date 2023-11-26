import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Login from './Login';

const Home: React.FC = () => {
  const [user, setUser] = useState<string | null>(null);
  const [loginOpen, setLoginOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (username: string, password: string) => {
    if (username === 'user1' && password === 'password') {
      setUser(username);
      setLoginOpen(false);
      navigate('/list'); // Redirect to the shopping list overview
    } else {
      alert('Invalid credentials');
    }
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px', maxWidth: '400px', margin: 'auto', backgroundColor: '#e6f7ff' }}>
      {user ? (
        <div>
          <h1 style={{ textAlign: 'center', color: '#333' }}>Welcome, {user}!</h1>
          <p style={{ textAlign: 'center' }}>
            <button onClick={handleLogout}>Logout</button>
          </p>
          <p style={{ textAlign: 'center' }}>
            <Link to="/list" style={{ textDecoration: 'none', color: '#007bff', fontWeight: 'bold' }}>
              Go to Shopping List
            </Link>
          </p>
        </div>
      ) : (
        <div>
          <h1 style={{ textAlign: 'center', color: '#333' }}>Welcome to the shopping list application</h1>
          <p style={{ textAlign: 'center' }}>
            Start managing your shopping list{' '}
            <span role="img" aria-label="shopping-cart">
              🛒
            </span>
          </p>
          <p style={{ textAlign: 'center' }}>
            <button onClick={() => setLoginOpen(true)}>Login</button>
          </p>
          <p style={{ textAlign: 'center' }}>
            <Link to="/list" style={{ textDecoration: 'none', color: '#007bff', fontWeight: 'bold' }}>
              Go to  guest Shopping List (without login)
            </Link>
          </p>
        </div>
      )}

      {loginOpen && <Login onLogin={handleLogin} onClose={() => setLoginOpen(false)} />}
    </div>
  );
};

export default Home;