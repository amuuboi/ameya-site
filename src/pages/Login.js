import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Save the "Passport" (token) in the browser
        localStorage.setItem('adminToken', data.token);
        navigate('/admin-portal'); // Send you to the deploy button
      } else {
        setError(data.message || 'Login failed');
      }
    } catch (err) {
      setError('Server error. Is the backend running?');
    }
  };

  return (
    <main className="container" style={{ maxWidth: '400px', marginTop: '100px' }}>
      <div className="feature-card">
        <h2>Admin Login</h2>
        <form onSubmit={handleLogin}>
          <input 
            type="password" 
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: '100%', padding: '10px', margin: '10px 0' }}
          />
          <button type="submit" className="btn-primary" style={{ width: '100%' }}>
            Login
          </button>
        </form>
        {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
      </div>
    </main>
  );
};

export default Login;
