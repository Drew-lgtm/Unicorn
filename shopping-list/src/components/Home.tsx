import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Login from './Login';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components'; // Add this line

const GlobalStyle = createGlobalStyle`
  body {
    --color-background: #e6f7ff;
    --color-foreground: #333;
    background-color: var(--color-background);
    color: var(--color-foreground);
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  body.dark {
    --color-background: #1f2023;
    --color-foreground: #efefef;
  }
`;

const ToggleButton = styled.button`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 25px;
  background-color: #007bff;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:before {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    width: 21px;
    height: 21px;
    background-color: #fff;
    border-radius: 50%;
    transition: transform 0.3s ease;
  }

  &.dark {
    background-color: #333;

    &:before {
      transform: translateX(25px);
    }
  }
`;

const Home: React.FC = () => {
  const [user, setUser] = useState<string | null>(null);
  const [loginOpen, setLoginOpen] = useState(false);
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);

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

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
    document.body.classList.toggle('dark');
  };

  return (
    <>
      <GlobalStyle />
      <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px', maxWidth: '400px', margin: 'auto' }}>
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
                Go to Guest Shopping List (without login)
              </Link>
            </p>
          </div>
        )}

        {loginOpen && <Login onLogin={handleLogin} onClose={() => setLoginOpen(false)} />}
        <p style={{ textAlign: 'center' }}>
          <ToggleButton className={darkMode ? 'dark' : ''} onClick={toggleDarkMode} />
        </p>
      </div>
    </>
  );
};

export default Home;
