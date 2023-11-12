import React, { useState } from 'react';

interface LoginProps {
  onLogin: (username: string, password: string) => void;
  onClose: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin, onClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(username, password);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Login</h2>
      <p>"user1" + "password"</p>
      <form onSubmit={handleSubmit}>
        <label style={{ marginBottom: '8px' }}>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label style={{ marginBottom: '16px' }}>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="submit">Login</button>
        <button type="button" onClick={onClose}>
          Close
        </button>
      </form>
    </div>
  );
};

export default Login;
